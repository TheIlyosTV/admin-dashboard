import { User, Order, Product, StatCardData } from './types';

export const API = {
  async fetchStats(): Promise<StatCardData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { 
            label: 'Total Revenue', 
            value: '$54,239', 
            change: '+12.5%', 
            positive: true,
            icon: 'DollarSign',
            color: 'bg-green-500'
          },
          { 
            label: 'Total Users', 
            value: '3,842', 
            change: '+8.2%', 
            positive: true,
            icon: 'Users',
            color: 'bg-blue-500'
          },
          { 
            label: 'Total Orders', 
            value: '1,547', 
            change: '-3.1%', 
            positive: false,
            icon: 'ShoppingCart',
            color: 'bg-purple-500'
          },
          { 
            label: 'Conversion Rate', 
            value: '3.24%', 
            change: '+5.4%', 
            positive: true,
            icon: 'TrendingUp',
            color: 'bg-orange-500'
          },
        ]);
      }, 500);
    });
  },

  async fetchUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', avatar: 'JD', joinDate: '2024-01-15' },
          { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', avatar: 'JS', joinDate: '2024-02-20' },
          { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'inactive', avatar: 'BJ', joinDate: '2024-03-10' },
          { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'active', avatar: 'AB', joinDate: '2024-04-05' },
        ]);
      }, 500);
    });
  },

  async fetchOrders(): Promise<Order[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '#12345', customer: 'John Doe', email: 'john@example.com', amount: 234.00, status: 'completed', date: '2025-01-15', items: 3 },
          { id: '#12346', customer: 'Jane Smith', email: 'jane@example.com', amount: 156.50, status: 'pending', date: '2025-01-15', items: 2 },
          { id: '#12347', customer: 'Bob Johnson', email: 'bob@example.com', amount: 89.99, status: 'processing', date: '2025-01-14', items: 1 },
          { id: '#12348', customer: 'Alice Brown', email: 'alice@example.com', amount: 445.00, status: 'completed', date: '2025-01-14', items: 5 },
          { id: '#12349', customer: 'Charlie Wilson', email: 'charlie@example.com', amount: 299.99, status: 'cancelled', date: '2025-01-13', items: 4 },
        ]);
      }, 500);
    });
  },

  async fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', name: 'Wireless Headphones', category: 'Electronics', price: 79.99, stock: 45, sales: 234, status: 'In Stock', image: '🎧' },
          { id: '2', name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 12, sales: 189, status: 'Low Stock', image: '⌚' },
          { id: '3', name: 'Laptop Stand', category: 'Accessories', price: 34.99, stock: 0, sales: 156, status: 'Out of Stock', image: '💻' },
          { id: '4', name: 'USB-C Cable', category: 'Accessories', price: 12.99, stock: 234, sales: 445, status: 'In Stock', image: '🔌' },
          { id: '5', name: 'Mechanical Keyboard', category: 'Electronics', price: 129.99, stock: 67, sales: 98, status: 'In Stock', image: '⌨️' },
        ]);
      }, 500);
    });
  }
};