import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MD_URL);
const db = client.db('TalentTrade');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  // session: {
  //   cookieCache: {
  //     enabled: true,
  //     strategy: "jwt",
  //     maxAge: 60 * 24 * 30,
  //   },
  // },

  // plugins: [jwt()],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  user: {
    additionalFields: {
      role: {
        defaultValue: "client",
      },
      isBlocked: {
        defaultValue: false,
      },
    },
  }

});