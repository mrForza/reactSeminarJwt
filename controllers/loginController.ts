import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import { Request, Response } from "express";

import { users } from "../entities/data";
import { JWT_OPTIONS } from '../config';

export const login = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const user = users.find((user) => user.email === email);

    console.log('!!!', user);

    if (!user) {
        await response.status(400).json({
            message: `No user with that email: ${email}.`
        });

        return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
        await response.status(400).json({
            message: `Incorrect password.`
        });

        return;
    }

    console.log('!!!');

    const token = jwt.sign(
        { id : user.id },
        JWT_OPTIONS.secretOrKey,
        { expiresIn : '1d' }
    );

    await response.status(201).json({
        token: token
    });
}