import { Databases } from 'appwrite';
import client from './appwriteConfig'; // Ensure this is correct


const databases = new Databases(client);

const DatabaseService = {
    listDocuments: (databaseId, collectionId) => {
        return databases.listDocuments(databaseId, collectionId);
    },
    updateDocument: (databaseId, collectionId, documentId, data) => {
        return databases.updateDocument(databaseId, collectionId, documentId, data);
    },
    createDocument: (databaseId, collectionId, documentId, data) => {
        return databases.createDocument(databaseId, collectionId, documentId, data);
    },
};

export default DatabaseService;
