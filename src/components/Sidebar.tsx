import { Utensils, Receipt, BarChart3, Package, Settings, HelpCircle, Plus } from 'lucide-react';
import { View, NavItem } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

const navItems: NavItem[] = [
  { id: 'menu', label: 'Menu Management', icon: 'menu' },
  { id: 'orders', label: 'Orders', icon: 'orders' },
  { id: 'analytics', label: 'Analytics', icon: 'analytics' },
  { id: 'inventory', label: 'Inventory', icon: 'inventory' },
];

export default function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside id="sidebar" className="h-screen w-64 fixed left-0 top-0 bg-surface-container flex flex-col border-r border-outline-variant/30 tonal-layer z-50">
      <div className="p-6">
        <h1 className="font-display text-4xl text-primary font-bold tracking-tight">Harvest & Hearth</h1>
        <p className="text-xs font-sans text-on-surface-variant opacity-70 uppercase tracking-widest mt-1">Cafeteria Admin</p>
      </div>

      <nav className="flex-1 mt-4 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-primary-container text-on-primary-container font-semibold tonal-layer' 
                  : 'text-on-surface-variant hover:bg-surface-container-highest/50'
              }`}
            >
              {item.id === 'menu' && <Utensils size={20} />}
              {item.id === 'orders' && <Receipt size={20} />}
              {item.id === 'analytics' && <BarChart3 size={20} />}
              {item.id === 'inventory' && <Package size={20} />}
              <span className="font-sans text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pb-6 px-2 space-y-1 border-t border-outline-variant/20 pt-4">
        <button className="w-full bg-primary text-on-primary font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 mb-4 tonal-layer hover:opacity-90 transition-opacity">
          <Plus size={20} />
          Quick Order
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-highest/50 transition-colors">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-highest/50 transition-colors">
          <HelpCircle size={18} />
          <span className="text-sm">Support</span>
        </button>
      </div>
    </aside>
  );
}
