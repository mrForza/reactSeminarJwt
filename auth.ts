import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";

import { users } from "./entities/data";
import { JWT_OPTIONS } from "./config";

passport.use(
    new LocalStrategy((email : string, password : string, done) => {
        const user = users.find((user) => user.email == email);

        if (!user) {
            return done(
                null,
                false,
                { message: `No user with that email: ${email}.` }
            );
        } 
    
        if (!bcrypt.compareSync(password, user.password)) {
            return done(
                null,
                false,
                { message: "Incorrect password." }
            );
        }
        
        return done(null, user);
    })
);

passport.use(
    new JwtStrategy(JWT_OPTIONS, (payload, done) => {
        const user = users.find((user) => user.id === payload.id);

        if (!user) {
            return done(null, false);
        } 

        return done(null, user);
    })
);
  