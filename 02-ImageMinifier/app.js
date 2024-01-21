import fse from 'fs-extra';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import imageminAvif from 'imagemin-avif';
import imageminGifsicle from 'imagemin-gifsicle';
import sharp from 'sharp';

let inputFolder = 'src';
let outputFolder = 'dist';
let targetWidth = 1920;

const processImage = async () => {

    console.log('Iniciando proceso... 🚀\n');

    try {
        
        const files = await fse.readdir(inputFolder);

        for (let file of files) {
            
            let inputFilePath = `${inputFolder}/${file}`;
            let outputFilePath = `${outputFolder}/${file}`;

            await sharp(inputFilePath)
                .resize(targetWidth)
                .toFile(outputFilePath)

            await imagemin([outputFilePath], {
                destination: outputFolder,
                plugins: [
                    imageminJpegtran({ quality: 80 }), // Comprimir imagen JPG con calidad del 80%
                    imageminPngquant({
                        // Comprimir imagen PNG con calidad entre 60 y 80
                        quality: [0.6, 0.8],
                    }),
                    imageminSvgo(), // Comprimir imagen SVG
                    imageminAvif(), // Comprimir imagen AVIF
                    imageminWebp({ quality: 80 }), // Comprimir imagen WebP con calidad del 80%
                    imageminGifsicle() // Comprimir imagen GIF
                ],
            })

            console.log(`Archivo ${file} ✅`);
        }

        console.log('\nProceso finalizado 🎉');

    } catch (err) {
        console.log(err)
    }
}

processImage();
