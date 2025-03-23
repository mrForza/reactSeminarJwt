import { Request, Response } from "express";

export const profileMe = async (request: Request, response: Response) => {
    const user = request.user;
    await response.status(200).json({ user });
}