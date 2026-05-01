import { expressjwt } from "express-jwt";
import jwkRsa from 'jwks-rsa';

export const checkJwt = expressjwt({
    secret: jwkRsa.expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksUri:"http://localhost:8080/realms/habit-app/protocol/openid-connect/certs"
    }),
    audience:"account",
    issuer:"http://localhost:8080/realms/habit-app",
    algorithms:["RS256"]
})