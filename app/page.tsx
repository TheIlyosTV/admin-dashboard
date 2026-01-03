'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './components/pages/DashboardPage';
import UsersPage from './components/pages/UsersPage';
import OrdersPage from './components/pages/OrdersPage';
import ProductsPage from './components/pages/ProductsPage';
import { 
  AnalyticsPage, 
  ReportsPage, 
  MessagesPage, 
  CalendarPage, 
  FilesPage, 
  BillingPage, 
  SettingsPage, 
  SupportPage 
} from './components/pages/AllPages';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'users':
        return <UsersPage />;
      case 'orders':
        return <OrdersPage />;
      case 'products':
        return <ProductsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'reports':
        return <ReportsPage />;
      case 'messages':
        return <MessagesPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'files':
        return <FilesPage />;
      case 'billing':
        return <BillingPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <SupportPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen} 
        activePage={activePage} 
        onPageChange={setActivePage}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}