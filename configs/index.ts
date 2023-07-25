export default {
    AUTH0: {
        clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? "",
        clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET ?? "",
        domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? "",
    },
}