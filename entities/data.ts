import { SALT_ROUNDS } from "../config";
import { UserEntity } from "./user";
import bcrypt from 'bcrypt';
import { v4 } from "uuid";

export const users: Array<UserEntity> = [
    {
        id: v4(),
        name: 'Roman',
        surname: 'Gromov',
        age: 20,
        weight: 65.5,
        email: 'rsgromov@edu.hse.ru',
        password: await bcrypt.hash('4nreAlPass_w00rd', SALT_ROUNDS)
    }
];