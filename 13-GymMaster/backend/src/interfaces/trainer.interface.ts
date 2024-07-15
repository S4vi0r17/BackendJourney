interface TrainerInterface {
    name: string;
    password: string;
    email: string;
    phone?: string | null;
    web?: string | null;
    token?: string | null;
    confirmed: boolean;
}
