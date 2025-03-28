import conf from "../conf/conf.js";
import { Client, Databases, Storage, ID, Query } from "appwrite";

class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, featuredImage, content, status, name, email, userId}) {
    try {
      const uniqueId = ID.unique();
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        uniqueId,
        {
          title,
          status,
          featuredImage,
          content,
          name,
          email,
          userId, // Include userId here
        }
      );
      // console.log("Created Post ID:", uniqueId); // Log the unique ID
      return response;
    } catch (error) {
      console.log("Error In -----------------------> :: CreatePost", error);
      throw error;
    }
  }

  async updatePost({ id, title, featuredImage, content, status, name, email }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id, // Use the unique document ID here
        {
          title,
          content,
          status,
          featuredImage,
          name,
          email,
        }
      );
    } catch (error) {
      console.log("Error In ----------------->:: updatePost", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("Error In ---------------------------> :: deletePost", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      console.log("Fetching post with slug:", slug);
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
        
      );
    } catch (error) {
      console.log("Error In --------------------------> :: getPost", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error In -------------------> :: getPosts", error);
      return false;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      const uniqueId = ID.unique();
      return await this.bucket.createFile(
        // conf.appwriteDatabaseId,
        conf.appwriteBucketId,
        uniqueId,
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
