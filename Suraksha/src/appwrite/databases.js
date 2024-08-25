import { Databases } from 'appwrite';
import client from './appwriteConfig'; // Import the client correctly

export const databases = new Databases(client);
export const databaseId = '66c3957e003ad6cb5a44'; // database id
export const collectionId = '66c395ac002c229eb709'; // user signup id
export const reportId = '66c49e670031a6eb40b9'; //report id