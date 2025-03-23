import { UUIDTypes } from "uuid"

export interface UserEntity {
    id: UUIDTypes,
    name: string,
    surname: string,
    age: number,
    weight: number,
    email: string,
    password: string
}