import { ExtractJwt } from "passport-jwt";

export const PORT = process.env.PORT!

export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS!);

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!;

export const JWT_OPTIONS = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET_KEY
};