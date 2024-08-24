import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('66c3949f003dfae4e50d'); // Your project ID

export const account = new Account(client);

// Export client if you need it elsewhere in your project
export default client;
