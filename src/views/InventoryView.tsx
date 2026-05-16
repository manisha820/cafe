import { Search, Plus, Filter, ChevronLeft, ChevronRight, Truck, TriangleAlert, DollarSign, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function InventoryView() {
  const categories = ['All Items', 'Breakfast', 'Lunch', 'Drinks', 'Pastries'];
  const inventoryItems = [
    { name: 'Thick-Cut Smoked Bacon', sku: 'HHB-001', category: 'Breakfast', level: 12, total: '100 kg', supplier: 'Valley View Farms', status: 'Low', color: 'bg-error', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsvSkv8laGkdy8vCVYheIRQivfV_ijqlTZcAbCjSDYTO-d9TvT2tFcCY3q3ZOLEstuqqlYDSBjUEaqufTCOF_4kBCG5t1KuP781AEfKu-Dc1kPN_0bFeENq9SZxhf8KfC3cn651eutAXY0YaA7W0FmfX-wVcUQxY-5E__RmAfh-27WAz2D_EcafT1Q0H4q5cjeZacmYJACwIWCgc5t2D3Rew9zo0hhs4Jjw-0SkKnrP5SlHqhpMWn7yM6qsK-IqMGS2Dg7spuVasc' },
    { name: 'Signature Espresso Blend', sku: 'HHD-402', category: 'Drinks', level: 65, total: '50 kg', supplier: 'Artisan Roast Co.', status: 'Good', color: 'bg-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZhXY8W-djnQiKt1p1mbbtIQZruKuGP-Ovemxqp0VJFQsaNMY1bQsyZjPklqog5Ykmhe-zQwRRZKLhUUhKv4qbkSKxKyBzH8xQSE-O1Tf4VL4Tjga6iIng8YLdItSo1REmpixtE497bD8EShhQXZuQb7siIJT1Kjj9sSwDSmjHHBdXc8aenFoqOMEEFzcn9FMhp3QmqVb-VbTTO4rxILxJ5aJaeX-I78NGLWos162s68tABWatZU5tZ3Q5HrG7eeESd6Uyszd1Y7o' },
    { name: 'Hass Avocados (Cases)', sku: 'HHL-205', category: 'Lunch', level: 5, total: '20 Cases', supplier: 'Green Path Logistics', status: 'Low', color: 'bg-error', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALRW18ZMZA09tbR8zUkpPq6hurSM6Q3IGdPLoj3QSvc8u9h7xYSfemWfdSHApC4kstaxuIavaBFtqsuWnY0UMY1Ddu-pT3-rftPZ4Zt9D7FsnNfTsmi-PxuVA5pZMc_7cygsLRJpaH3OP5vBDyTgVM6M4pgDI9Gy9Ze0oLb7NkKaDUXQ1LlS42q1_sx8W7ATr8S0D7cBcketU3-TkqrHcnTxBDvj-1pXQno4FD6Rn_KnMT_faEZtX666SrsZcOVeE7fLyJKU7khVk' },
    { name: 'Artisan Sourdough Loaves', sku: 'HHB-088', category: 'Breakfast', level: 85, total: '50 Units', supplier: 'Hearth & Grain Bakery', status: 'Optimal', color: 'bg-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR95bsjgYLii0JdKlLJhdcYrO1LYZbyAkOzcNmYw8vV_FnfeeWYAtpia0Vy3hwTxn2wJYocjC0PL-WK1bOsLuxXXFJcbnrc-BuMMGYFEcy7THq4unzkbU7Maacb3wAgwg-tTpQND_bZ2ZAMfA6iYIiGF4Iam3iD5CrZ8I8r7JVepfIjJ6gPyJnEqrXkEeu5eo-D8_sqS84idMPHa8M45LZEc6-VibMOz_1wBpBj1HA6ipXDODx2ns-tsZ6X_6qioECXVjxbJZME1k' },
  ];

  return (
    <div className="pt-24 px-10 pb-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl text-on-surface font-semibold mb-2">Inventory Management</h2>
          <p className="text-on-surface-variant font-medium">Real-time tracking of pantry staples and artisanal supplies. Maintain the warmth of Harvest & Hearth through proactive restocking.</p>
        </div>
        <div className="flex gap-4 bg-surface-container rounded-[2rem] p-2 tonal-layer">
          <div className="px-8 py-4 border-r border-outline-variant/30 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1">Total SKU</p>
            <p className="text-3xl font-black text-primary">124</p>
          </div>
          <div className="px-8 py-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1">Low Stock Alerts</p>
            <p className="text-3xl font-black text-error">8 Items</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 items-center">
        <div className="md:col-span-3 flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button key={cat} className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all ${i === 0 ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-white border border-outline-variant text-on-surface-variant hover:border-primary/50'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
            <Filter size={16} />
            Sort by: Stock Level
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] tonal-layer border border-outline-variant/10 overflow-hidden mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container/30">
              <th className="px-10 py-8 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Item Name</th>
              <th className="px-6 py-8 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Category</th>
              <th className="px-6 py-8 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Stock Level</th>
              <th className="px-6 py-8 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Supplier</th>
              <th className="px-10 py-8 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {inventoryItems.map((item, i) => (
              <tr key={i} className="group hover:bg-surface-container-low transition-colors">
                <td className="px-10 py-6">
                  <div className="flex items-center gap-5">
                    <img src={item.img} alt={item.name} className="w-14 h-14 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                    <div>
                      <p className="font-bold text-on-surface">{item.name}</p>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">SKU: {item.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-black rounded-full uppercase tracking-widest">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-6">
                  <div className="flex flex-col gap-2.5 w-52">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                      <span className={item.status === 'Low' ? 'text-error' : 'text-on-surface-variant'}>
                        {item.status}: {item.level}%
                      </span>
                      <span className="text-on-surface-variant/60">{item.level === 12 ? '12 / 100 kg' : item.level === 5 ? '1 / 20 Cases' : '42 / 50 Units'}</span>
                    </div>
                    <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${item.color} shadow-[0_0_10px_rgba(153,66,7,0.2)]`}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6 text-sm font-medium text-on-surface-variant">{item.supplier}</td>
                <td className="px-10 py-6 text-right">
                  <button className={`px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${
                    item.status === 'Low' 
                      ? 'bg-primary text-on-primary tonal-layer' 
                      : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}>
                    {item.status === 'Low' ? 'Reorder' : 'Manage'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-10 py-8 bg-surface-container/10 border-t border-outline-variant/10 flex items-center justify-between">
          <p className="text-sm font-medium text-on-surface-variant">Showing <span className="font-black text-on-surface">1 - 4</span> of 124 items</p>
          <div className="flex gap-2">
            <button className="p-2 w-10 h-10 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30" disabled><ChevronLeft size={18} /></button>
            <button className="w-10 h-10 rounded-xl border border-outline-variant bg-primary text-on-primary font-black transition-colors">1</button>
            <button className="w-10 h-10 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">2</button>
            <button className="w-10 h-10 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">3</button>
            <button className="p-2 w-10 h-10 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container-low rounded-[2rem] p-8 tonal-layer border border-outline-variant/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black text-on-surface uppercase tracking-[0.2em]">Supplier Status</h3>
            <Truck className="text-primary" size={24} />
          </div>
          <ul className="space-y-5">
            {[
              { name: 'Valley View Farms', status: 'On-Time', color: 'bg-green-500' },
              { name: 'Artisan Roast Co.', status: 'In-Transit', color: 'bg-primary', statusColor: 'text-primary' },
              { name: 'Green Path Logistics', status: 'Delayed', color: 'bg-error', statusColor: 'text-error' },
            ].map(s => (
              <li key={s.name} className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full ${s.color}`}></div>
                <span className="flex-1 text-sm font-bold text-on-surface">{s.name}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${s.statusColor || 'text-on-surface-variant'}`}>{s.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary/5 rounded-[2rem] p-8 border-2 border-primary/20 tonal-layer relative overflow-hidden group">
          <TriangleAlert className="absolute -right-6 -bottom-6 opacity-5 transform group-hover:scale-110 transition-transform duration-700 w-48 h-48" />
          <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-3">URGENT: Stock Out Risk</h3>
          <p className="text-sm font-medium text-on-surface-variant mb-8 leading-relaxed">
            Weekly egg consumption has surged by 24% this Sunday. Projecting exhaustion by tomorrow morning.
          </p>
          <button className="bg-primary text-on-primary w-full py-4 rounded-full font-black text-xs uppercase tracking-widest tonal-layer hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-95">
            <Zap size={18} />
            Smart-Order Eggs
          </button>
        </div>

        <div className="bg-secondary-container/20 rounded-[2rem] p-8 tonal-layer border border-secondary-container/50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-black text-on-secondary-container uppercase tracking-[0.2em]">Stock Valuation</h3>
            <DollarSign className="text-secondary" size={24} />
          </div>
          <p className="font-display text-5xl font-black text-on-secondary-container mb-6">$12,482.00</p>
          <div className="flex items-center gap-2 text-xs font-bold text-on-secondary-container/70">
            <TrendingUp size={16} className="text-green-600" />
            <span className="uppercase tracking-widest">+4.2% from last week</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-12 right-12">
        <button className="w-20 h-20 bg-primary text-on-primary rounded-full shadow-[0_20px_40px_-5px_rgba(153,66,7,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative overflow-hidden">
          <Zap size={32} className="relative z-10" fill="currentColor" />
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>
    </div>
  );
}
