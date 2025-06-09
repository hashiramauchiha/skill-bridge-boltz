import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'freelancer' | 'client';
  phone?: string;
  location?: string;
  company?: string;
  avatar?: string;
  title?: string;
  skills?: string[];
  hourlyRate?: number;
  rating?: number;
  reviewCount?: number;
  completedProjects?: number;
  isVerified?: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isDemo: boolean;
  setDemoUser: (role: 'freelancer' | 'client') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:5000/api';

// Demo users for when backend is not available
const demoUsers = {
  freelancer: {
    id: 'demo-freelancer-1',
    firstName: 'Alex',
    lastName: 'Thompson',
    email: 'alex@demo.com',
    role: 'freelancer' as const,
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    hourlyRate: 85,
    rating: 4.9,
    reviewCount: 127,
    completedProjects: 89,
    isVerified: true
  },
  client: {
    id: 'demo-client-1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah@demo.com',
    role: 'client' as const,
    phone: '+1 (555) 987-6543',
    location: 'New York, NY',
    company: 'TechCorp Solutions',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.8,
    reviewCount: 45,
    completedProjects: 23,
    isVerified: true
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);

  // Set up axios interceptor for token
  useEffect(() => {
    if (token && !isDemo) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token, isDemo]);

  // Check for demo user in localStorage
  useEffect(() => {
    const demoUser = localStorage.getItem('demoUser');
    if (demoUser) {
      const userData = JSON.parse(demoUser);
      setUser(userData);
      setIsDemo(true);
      setLoading(false);
      return;
    }

    // Verify token on app load
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await axios.get('/auth/verify');
          setUser(response.data.user);
          setIsDemo(false);
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token');
          setToken(null);
          // Fall back to demo mode
          console.log('Backend not available, switching to demo mode');
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { token: newToken, user: userData } = response.data;
      
      localStorage.setItem('token', newToken);
      localStorage.removeItem('demoUser'); // Clear demo user if exists
      setToken(newToken);
      setUser(userData);
      setIsDemo(false);
    } catch (error: any) {
      // If backend is not available, check for demo credentials
      if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
        if (email === 'demo@freelancer.com' && password === 'demo123') {
          setDemoUser('freelancer');
          return;
        } else if (email === 'demo@client.com' && password === 'demo123') {
          setDemoUser('client');
          return;
        }
        throw new Error('Backend not available. Use demo@freelancer.com or demo@client.com with password: demo123');
      }
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const register = async (userData: any) => {
    try {
      const response = await axios.post('/auth/register', userData);
      const { token: newToken, user: newUser } = response.data;
      
      localStorage.setItem('token', newToken);
      localStorage.removeItem('demoUser'); // Clear demo user if exists
      setToken(newToken);
      setUser(newUser);
      setIsDemo(false);
    } catch (error: any) {
      if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
        throw new Error('Backend not available. Registration requires database connection.');
      }
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const setDemoUser = (role: 'freelancer' | 'client') => {
    const userData = demoUsers[role];
    localStorage.setItem('demoUser', JSON.stringify(userData));
    localStorage.removeItem('token'); // Clear real token if exists
    setUser(userData);
    setToken(null);
    setIsDemo(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('demoUser');
    setToken(null);
    setUser(null);
    setIsDemo(false);
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading, isDemo, setDemoUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};