import { Account, Client, Storage } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APP_WRITE_PROJECT_ID);

export const account = new Account(client);

export const storage = new Storage(client);
