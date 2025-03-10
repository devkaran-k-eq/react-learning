import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
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
        this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      // throw error
      console.log("Error in :: createAccount", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Error In :: login", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get(); // After logging in, you can check the authentication state of the user.

      // logged In
    } catch (error) {
      console.log("Error In :: getCurrentUser  ------------->", error);
    }

    return null; // This is for if there is any problem in tryCatch then it will return null or you can use if-else
  }

  async logout() {
    try {
      return await this.account.logout();
    } catch (error) {
      console.log("Error In :: Logout -------------->", error);
    }
  }
}

const authService = new AuthService();

export default authService;
