import { Client, Account, ID } from "appwrite";
import envVariable from "../configuration/envVariable";

export class AppwriteAuthService {
  client = new Client();
  account = new Account();

  constructor() {
    client = new Client()
      .setEndpoint(envVariable.aw_url) // Your API Endpoint
      .setProject(envVariable.aw_projectId); // Your project ID

    account = new Account(client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        this.login(email, password)
      } else {
        return userAccount
      }
    } catch (error) {
      console.log("Error in createAccount ---------------->", error);
    }
  }

  async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Error in login ---------------->", error);
        }
  }

  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Error in getCurrentUser ---------------->", error);
    }
  }

  async logout(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Error in logout ---------------->", error);
    }
  }
}

const appwriteauthservice = new AppwriteAuthService();

export default appwriteauthservice;
