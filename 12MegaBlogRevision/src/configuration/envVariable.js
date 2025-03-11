const envVariable = {
    aw_url: String(import.meta.env.VITE_APPWRITE_URL),
    aw_databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    aw_collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    aw_projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    aw_bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}


export default envVariable