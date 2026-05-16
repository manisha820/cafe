import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import AnalyticsView from './views/Analytics';
import OrdersView from './views/Orders';
import MenuView from './views/MenuView';
import InventoryView from './views/InventoryView';
import { View } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState<View>('analytics');

  const renderView = () => {
    switch (activeView) {
      case 'analytics':
        return <AnalyticsView />;
      case 'orders':
        return <OrdersView />;
      case 'menu':
        return <MenuView />;
      case 'inventory':
        return <InventoryView />;
      default:
        return <AnalyticsView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background font-sans text-on-surface">
      <Sidebar 
        activeView={activeView} 
        onViewChange={(view) => setActiveView(view)} 
      />
      
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopBar />
        
        <main className="flex-1 w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

