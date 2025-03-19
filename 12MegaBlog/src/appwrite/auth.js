import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

 class AuthService {
  client = new Client();
  account;
  // users = new Users(client);
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
      

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
        return await this.login(email, password);
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
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("Session created:", session); // Debug the session object
      return session;
    } catch (error) {
      console.log("Error In :: login -------+++++++++>", error);
    }
  }

  async getCurrentUser() {
    try {
      // const session = await this.account.getSession("current"); // Check for an active session
      // if (session) {
        return await this.account.get(); // Fetch the current user if a session exists
      // }
    } catch (error) {
      console.log("Error In :: getCurrentUser  ------------->", error);
    }
    return null; // Return null if no session exists or an error occurs
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Error In :: Logout -------------->", error);
    }
  }

  // async  listAllUsers() {
  //   try {
  //       const response = await users.list();
  //       console.log(response);
  //   } catch (error) {
  //       console.error(error);
  //   }

  // }
}

const authService = new AuthService();

export default authService;
