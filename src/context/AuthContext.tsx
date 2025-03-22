import React, { createContext, useContext, useReducer } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };

const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
} | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  const login = async (email: string, password: string) => {
    // Simulação de chamada à API
    try {
      // Aqui você faria a chamada real à API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'test@example.com' && password === 'password') {
        dispatch({
          type: 'LOGIN',
          payload: {
            id: '1',
            name: 'Test User',
            email: 'test@example.com',
          },
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulação de chamada à API
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch({
        type: 'LOGIN',
        payload: {
          id: Date.now().toString(),
          name,
          email,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};