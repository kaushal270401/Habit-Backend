import { expressjwt } from "express-jwt";
import jwkRsa from 'jwks-rsa';

const KEYCLOAK_URL = process.env.KEYCLOAK_URL || "https://habit-keycloak-1.onrender.com";

export const checkJwt = expressjwt({
    secret: jwkRsa.expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksUri:`${KEYCLOAK_URL}/realms/habit-app/protocol/openid-connect/certs`
    }),
    audience:"account",
    issuer:`${KEYCLOAK_URL}/realms/habit-app`,
    algorithms:["RS256"]
})