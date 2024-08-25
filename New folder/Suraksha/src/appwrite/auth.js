import { Account } from 'appwrite';
import {account} from './appwriteConfig';
import { ID } from 'appwrite';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await account.createSession(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  },

  signup: async (email, password, username) => {
    try {
      const response = await account.create(ID.unique(), email, password, username);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
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