import configs from "configs";
import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    Auth0Provider({
      clientId: configs.AUTH0.clientId,
      clientSecret: configs.AUTH0.clientSecret,
      issuer: configs.AUTH0.domain,
    }),
  ],
  secret: configs.AUTH0.clientSecret,
};
export default NextAuth(authOptions);
