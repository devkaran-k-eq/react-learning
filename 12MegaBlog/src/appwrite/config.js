import conf from "../conf/conf";
import { Client, Databases, Storage } from "appwrite";


class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteBucketId) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, featuredImage, content, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          slug,
          featuredImage,
          content,
          userId,
        }
      );
    } catch (error) {
      console.log("Error In :: CreatePost", error);
    }
  }

  async updatePost(slug, { title, featuredImage, content, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Error In :: updatePost", error);
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
      console.log("Error In :: deletePost", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("Error In :: getPost", error);
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
      console.log("Error In :: getPosts", error);
      return false;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      await this.bucket.createFile(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        file
      );

      return true;
    } catch (error) {
      console.log("Appwrite Service :: uploadFile", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.databases.deleteFile(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        fileId
      );
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

export const service = new Service();

export default service;
