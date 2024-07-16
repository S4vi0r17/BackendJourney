export interface CreateClientDto {
    name: string
    email: string
    phone: number
    weight: number
    height: number
    exerciseLevel: string
    trainer: string
    note?: string
}
