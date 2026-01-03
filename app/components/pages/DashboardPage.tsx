'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Eye, Edit, RefreshCw, Plus, TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';
import StatCard from '@/app/components/StatCard';
import { API } from '@/lib/api';
import { getStatusColor, formatCurrency } from '@/lib/utils';
import { StatCardData, Order, Product } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';

// Define types for API responses
interface ApiStatsResponse {
  totalRevenue?: number;
  revenueChange?: string;
  activeUsers?: number;
  userGrowth?: string;
  totalOrders?: number;
  orderGrowth?: string;
  conversionRate?: string;
  conversionChange?: string;
  data?: ApiStatsResponse;
}

interface ApiOrdersResponse {
  orders?: Order[];
  data?: Order[];
}

interface ApiProductsResponse {
  products?: Product[];
  data?: Product[];
}

// Skeleton loader component
const StatCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="h-6 w-20 bg-gray-200 rounded"></div>
      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
    </div>
    <div className="h-10 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 w-24 bg-gray-200 rounded"></div>
  </div>
);

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<StatCardData[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState({
    stats: true,
    orders: true,
    products: true
  });
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Memoized icon components - use string names that match StatCard expectations
  const statIcons = useMemo(() => [
    { icon: 'dollar-sign', color: 'bg-green-500' },
    { icon: 'users', color: 'bg-blue-500' },
    { icon: 'shopping-bag', color: 'bg-purple-500' },
    { icon: 'trending-up', color: 'bg-orange-500' }
  ], []);

  // Map icon names to actual components for StatCard if needed
  const iconMap = useMemo(() => ({
    'dollar-sign': DollarSign,
    'users': Users,
    'shopping-bag': ShoppingBag,
    'trending-up': TrendingUp
  }), []);

  // Fetch data with error handling
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      
      // Parallel requests with Promise.allSettled for better error handling
      const [statsResult, ordersResult, productsResult] = await Promise.allSettled([
        API.fetchStats(),
        API.fetchOrders(),
        API.fetchProducts()
      ]);

      // Handle stats
      if (statsResult.status === 'fulfilled') {
        const statsData = statsResult.value as ApiStatsResponse;
        
        // Get the actual data (handle both direct response and nested data property)
        const actualStatsData = Array.isArray(statsData) 
          ? statsData 
          : (statsData.data || statsData);
        
        // Map backend response to frontend format using correct StatCardData properties
        const mappedStats: StatCardData[] = [
          {
            label: 'Total Revenue',
            value: formatCurrency((actualStatsData as ApiStatsResponse).totalRevenue || 54231),
            change: (actualStatsData as ApiStatsResponse).revenueChange || '+12.5%',
            positive: true,
            icon: 'dollar-sign',
            color: 'bg-green-500'
          },
          {
            label: 'Active Users',
            value: ((actualStatsData as ApiStatsResponse).activeUsers || 1250).toString(),
            change: (actualStatsData as ApiStatsResponse).userGrowth || '+8.2%',
            positive: true,
            icon: 'users',
            color: 'bg-blue-500'
          },
          {
            label: 'Total Orders',
            value: ((actualStatsData as ApiStatsResponse).totalOrders || 856).toString(),
            change: (actualStatsData as ApiStatsResponse).orderGrowth || '+5.7%',
            positive: true,
            icon: 'shopping-bag',
            color: 'bg-purple-500'
          },
          {
            label: 'Conversion Rate',
            value: ((actualStatsData as ApiStatsResponse).conversionRate || '4.8%'),
            change: (actualStatsData as ApiStatsResponse).conversionChange || '+1.3%',
            positive: true,
            icon: 'trending-up',
            color: 'bg-orange-500'
          }
        ];
        
        setStats(mappedStats);
        setLoading(prev => ({ ...prev, stats: false }));
      }

      // Handle orders
      if (ordersResult.status === 'fulfilled') {
        const ordersData = ordersResult.value as ApiOrdersResponse;
        const actualOrdersData = Array.isArray(ordersData)
          ? ordersData.slice(0, 5)
          : (ordersData.orders || ordersData.data || []);
        setOrders(actualOrdersData as Order[]);
        setLoading(prev => ({ ...prev, orders: false }));
      }

      // Handle products
      if (productsResult.status === 'fulfilled') {
        const productsData = productsResult.value as ApiProductsResponse;
        const actualProductsData = Array.isArray(productsData)
          ? productsData.slice(0, 4)
          : (productsData.products || productsData.data || []);
        setProducts(actualProductsData as Product[]);
        setLoading(prev => ({ ...prev, products: false }));
      }

      // Check for errors
      const errors = [
        statsResult.status === 'rejected' && 'Failed to load statistics',
        ordersResult.status === 'rejected' && 'Failed to load orders',
        productsResult.status === 'rejected' && 'Failed to load products'
      ].filter(Boolean);

      if (errors.length > 0) {
        setError(errors.join(', '));
      } else {
        setLastUpdated(new Date());
      }

    } catch (error) {
      console.error('Error loading dashboard data:', error);
      setError('Failed to load dashboard data. Please try again.');
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading.stats && !loading.orders && !loading.products) {
        fetchData();
      }
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [fetchData, loading]);

  // Format last updated time
  const formattedTime = useMemo(() => {
    if (!lastUpdated) return '';
    return lastUpdated.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }, [lastUpdated]);

  // Refresh button handler
  const handleRefresh = () => {
    setLoading({ stats: true, orders: true, products: true });
    fetchData();
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100">
        <div className="text-red-500 mb-4">⚠️ {error}</div>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <RefreshCw size={16} />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with refresh */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back, {user?.name || 'Admin'}!
            {lastUpdated && ` • Last updated: ${formattedTime}`}
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={loading.stats || loading.orders || loading.products}
          className="flex items-center gap-2 px-4 py-2 text-black bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
        >
          <RefreshCw 
            size={16} 
            className={loading.stats || loading.orders || loading.products ? 'animate-spin' : ''} 
          />
          Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading.stats ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <StatCardSkeleton key={idx} />
          ))
        ) : (
          stats.map((stat, idx) => (
            <StatCard 
              key={stat.label}
              stat={stat}
              loading={false}
            />
          ))
        )}
      </div>

      {/* Orders and Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <p className="text-sm text-gray-500">Latest customer orders</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Plus size={16} />
                New Order
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-black bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Eye size={16} />
                View All
              </button>
            </div>
          </div>
          
          {loading.orders ? (
            <div className="p-6 space-y-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="flex items-center justify-between py-3">
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr 
                      key={order.id} 
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm font-medium text-gray-900">
                          #{order.id}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                          <p className="text-xs text-gray-500 truncate max-w-37.5">{order.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-gray-900">
                          {formatCurrency(order.amount)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View details"
                          >
                            <Eye size={16} className="text-blue-600" />
                          </button>
                          <button 
                            className="p-2 hover:bg-green-50 rounded-lg transition-colors"
                            title="Edit order"
                          >
                            <Edit size={16} className="text-green-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
                <p className="text-sm text-gray-500">Best selling items</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {loading.products ? (
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3">
                    <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="shrink-0">
                      <div className="h-10 w-10 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{product.image}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sales.toLocaleString()} sales</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(product.price * product.sales)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatCurrency(product.price)}/unit
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;