import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  Zap,
  FileText,
  MessageSquare,
  Calendar,
  Folder,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { MenuItem } from '@/lib/types';

interface SidebarProps {
  isOpen: boolean;
  activePage: string;
  onPageChange: (page: string) => void;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  activePage, 
  onPageChange, 
  onToggle 
}) => {
  const menuItems: MenuItem[] = [
    { 
      icon: <LayoutDashboard size={20} />, 
      label: 'Dashboard', 
      id: 'dashboard' 
    },
    { 
      icon: <Users size={20} />, 
      label: 'Users', 
      id: 'users' 
    },
    { 
      icon: <ShoppingCart size={20} />, 
      label: 'Orders', 
      id: 'orders' 
    },
    { 
      icon: <Package size={20} />, 
      label: 'Products', 
      id: 'products' 
    },
    { 
      icon: <BarChart3 size={20} />, 
      label: 'Analytics', 
      id: 'analytics' 
    },
    { 
      icon: <FileText size={20} />, 
      label: 'Reports', 
      id: 'reports' 
    },
    { 
      icon: <MessageSquare size={20} />, 
      label: 'Messages', 
      id: 'messages' 
    },
    { 
      icon: <Calendar size={20} />, 
      label: 'Calendar', 
      id: 'calendar' 
    },
    { 
      icon: <Folder size={20} />, 
      label: 'Files', 
      id: 'files' 
    },
    { 
      icon: <CreditCard size={20} />, 
      label: 'Billing', 
      id: 'billing' 
    },
    { 
      icon: <Settings size={20} />, 
      label: 'Settings', 
      id: 'settings' 
    },
    // ADD HELP & SUPPORT TO MENU ITEMS
    { 
      icon: <HelpCircle size={20} />, 
      label: 'Help & Support', 
      id: 'help-support' 
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 z-50 shadow-2xl ${
          isOpen ? 'w-64' : 'w-0 lg:w-20'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  AdminPro
                </h1>
                <p className="text-xs text-gray-400">Dashboard v2.0</p>
              </div>
            </div>
          )}
          <button 
            onClick={onToggle} 
            className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="mt-6 px-3 overflow-y-auto h-[calc(100vh-180px)] custom-scrollbar">
          {isOpen && (
            <div className="mb-4 px-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Main Menu
              </p>
            </div>
          )}
          
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all group relative ${
                activePage === item.id 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50 text-white' 
                  : 'hover:bg-gray-700/50 text-gray-300 hover:text-white'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <span className={`transition-transform ${activePage === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              {isOpen && (
                <>
                  <span className="font-medium text-sm flex-1 text-left">
                    {item.label}
                  </span>
                  {activePage === item.id && (
                    <ChevronRight size={16} className="animate-pulse" />
                  )}
                </>
              )}
              
              {/* Active Indicator */}
              {activePage === item.id && !isOpen && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-l-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer - Logout Button */}
        <div className="absolute bottom-0 w-full border-t border-gray-700/50 p-3 bg-gray-900/50 backdrop-blur-sm">
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-red-500/10 text-gray-300 hover:text-red-400 group`}
            title={!isOpen ? 'Logout' : ''}
          >
            <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
            {isOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.7);
        }
      `}</style>
    </>
  );
};

export default Sidebar;