import { Client, Account, ID, Databases } from "appwrite";
import envVariable from "../configuration/envVariable";

class AppwriteDBStorage {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client = new Client()
      .setEndpoint(envVariable.aw_url) // Your API Endpoint
      .setProject(envVariable.aw_projectId); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId, slug }) {
    try {
      return await this.databases.createDocument(
        envVariable.aw_databaseId,
        envVariable.aw_collectionId,
        slug,
        {
          title,
          slug,
          featuredImage,
          userId,
          content,
        }
      );
    } catch (error) {
      console.log("Error In :: CreatePost ----------->", error);
    }
  }

  async updatePost(slug, { title, featuredImage, content, status }) {
    try {
      return await this.databases.updateDocument(
        envVariable.aw_databaseId,
        envVariable.aw_collectionId,
        slug,
        {
          title,
          featuredImage,
          content,
          status,
        }
      );
    } catch (error) {
      console.log("Error In :: updatePost ----------->", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        envVariable.aw_databaseId,
        envVariable.aw_collectionId,
        slug
      );
    } catch (error) {
      console.log("Error In :: deletePost ----------->", error);
    }
  }

  async getpost(slug) {
    try {
      return await this.databases.getDocument(
        envVariable.aw_databaseId,
        envVariable.aw_collectionId,
        slug
      );
    } catch (error) {
      console.log("Error In :: getpost ----------->", error);
    }
  }

  async getposts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.getDocument(
        envVariable.aw_databaseId,
        envVariable.aw_collectionId,
        queries
      );
    } catch (error) {
      console.log("Error In :: getpost ----------->", error);
    }
  }

  // here comes storage of appwrite bucket section
  async uploadFile(file) {
    try {
      await this.bucket.createFile(envVariable.aw_bucketId, ID.unique(), file);

      return true;
    } catch (error) {
      console.log("Error In :: uploadFile ----------->", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(envVariable.aw_bucketId, fileId);

      return true;
    } catch (error) {
      console.log("Error In :: deleteFile ----------->", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const appwrite_db_storage = new AppwriteDBStorage();
