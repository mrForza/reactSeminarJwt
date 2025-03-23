import express from "express";
import { PORT } from "./config";
import passport from "passport";
import { loginRouter } from "./routes/loginRouter";
import { profileRouter } from "./routes/profileRouter";
import './auth'


const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use(
    '/auth',
    // passport.authenticate('local', { session: false }),
    loginRouter
);
app.use(
    '/profile',
    passport.authenticate('jwt', { session: false }),
    profileRouter
);

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});