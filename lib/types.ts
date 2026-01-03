import { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
  joinDate: string;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: 'completed' | 'pending' | 'processing' | 'cancelled';
  date: string;
  items: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  status: string;
  image: string;
}

export interface StatCardData {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  color: string;
}

export interface MenuItem {
  icon: ReactNode;
  label: string;
  id: string;
}