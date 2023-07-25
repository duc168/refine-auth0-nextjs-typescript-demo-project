export default {
    AUTH0: {
        clientId: process.env.AUTH0_CLIENT_ID ?? "",
        clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
        domain: process.env.AUTH0_DOMAIN ?? "",
    },
    THIS_HOST: process.env.THIS_HOST ?? "",
}