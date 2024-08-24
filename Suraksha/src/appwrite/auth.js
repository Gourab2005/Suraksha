import { Account } from 'appwrite';
import AppwriteService from './appwriteConfig';

const account = new Account(AppwriteService.client);

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await account.createSession(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  },

  signup: async (email, password, name) => {
    try {
      const response = await account.create('unique()', email, password, name);
      return response;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      await account.deleteSession('current');
    } catch (error) {
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
