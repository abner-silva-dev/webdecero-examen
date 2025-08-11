import { create } from 'zustand';
import { getUser, login } from '../services/authApi';

export const useUserStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  token: null,
  checkingAuth: true,

  setUser: (newUser) => set(() => ({ user: { ...newUser } })),
  clearUser: () =>
    set(() => ({
      user: null,
    })),

  //  get current user data
  async getMe() {
    try {
      set({ isLoading: true });
      const data = await getUser(get().token);
      set({ user: data, isLoading: false });
    } catch (error) {
      set({
        error: error.message,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      });
    }
  },

  //  this function handles the login process
  login: async (user, password) => {
    try {
      const data = await login(user, password);
      localStorage.setItem('token', JSON.stringify(data.accessToken));
      set(() => ({
        isAuthenticated: true,
        token: data.accessToken,
      }));
    } catch (error) {
      set(() => ({ error: error.message, isAuthenticated: false }));
      throw new Error(`error: ${error.message}`);
    }
  },

  //  this function handles the logout process
  logout: () => {
    localStorage.removeItem('token');
    set(() => ({ user: null, error: null, isAuthenticated: false }));
  },

  // Check authentication status
  auth: async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      set({
        token: null,
        isAuthenticated: false,
        checkingAuth: false,
      });
      return;
    }

    set({ token, checkingAuth: true, error: null });

    // Verify token if is valid
    try {
      await get().getMe();
      set({ isAuthenticated: true, checkingAuth: false });
    } catch (error) {
      set({
        token: null,
        isAuthenticated: false,
        checkingAuth: false,
        error: 'Token inválido',
      });
    }
  },
}));
