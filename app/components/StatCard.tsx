'use client';

import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from 'lucide-react';
import { StatCardData } from '@/lib/types';

interface StatCardProps {
  stat: StatCardData;
  loading: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, loading }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign':
        return <DollarSign size={24} />;
      case 'Users':
        return <Users size={24} />;
      case 'ShoppingCart':
        return <ShoppingCart size={24} />;
      case 'TrendingUp':
        return <TrendingUp size={24} />;
      default:
        return <DollarSign size={24} />;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          <div className="flex items-center mt-2">
            {stat.positive ? <TrendingUp size={16} className="text-green-600" /> : <TrendingDown size={16} className="text-red-600" />}
            <span className={`text-sm font-medium ml-1 ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
        <div className={`${stat.color} text-white p-4 rounded-lg`}>
          {getIcon(stat.icon)}
        </div>
      </div>
    </div>
  );
};

export default StatCard;