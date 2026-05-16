import { ShoppingBasket, CreditCard, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function AnalyticsView() {
  return (
    <div className="pt-24 px-10 pb-12 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-4xl text-on-surface font-semibold">Sales Performance</h2>
          <p className="text-on-surface-variant mt-1">Real-time overview of your cafeteria's revenue and operations.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface-variant text-xs font-semibold hover:bg-surface-container-low transition-colors">Last 7 Days</button>
          <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-primary text-xs font-bold border border-primary/20 hover:opacity-90 transition-opacity">Download Report</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* KPI Card 1 */}
        <div className="col-span-3 bg-surface-container-lowest p-6 rounded-[2rem] tonal-layer border border-outline-variant/10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary-container/30 rounded-2xl">
              <ShoppingBasket className="text-primary" size={24} />
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center gap-1">
              +12% <TrendingUp size={14} />
            </span>
          </div>
          <div className="mt-4">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Total Orders</p>
            <h3 className="font-display text-4xl text-on-surface mt-1">1,284</h3>
          </div>
        </div>

        {/* KPI Card 2 */}
        <div className="col-span-3 bg-surface-container-lowest p-6 rounded-[2rem] tonal-layer border border-outline-variant/10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary-container/30 rounded-2xl">
              <CreditCard className="text-primary" size={24} />
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center gap-1">
              +5.4% <TrendingUp size={14} />
            </span>
          </div>
          <div className="mt-4">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Avg. Order Value</p>
            <h3 className="font-display text-4xl text-on-surface mt-1">$24.50</h3>
          </div>
        </div>

        {/* Signature Item Feature (Double Row) */}
        <div className="col-span-6 row-span-2 bg-surface-container-lowest rounded-[2rem] tonal-layer border border-outline-variant/10 overflow-hidden group">
          <div className="h-1/2 relative overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g" 
              alt="The Classic Burger" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">TOP SELLER</div>
          </div>
          <div className="p-8">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Signature Item</p>
            <h3 className="font-display text-5xl text-on-surface mb-4">The Classic Burger</h3>
            <div className="flex justify-between items-center border-t border-outline-variant/20 pt-6">
              <div>
                <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Units Sold</p>
                <p className="text-lg font-bold text-on-surface mt-1">482 this week</p>
              </div>
              <div className="text-right">
                <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Revenue Generated</p>
                <p className="text-2xl font-display text-primary mt-1">$6,241.90</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="col-span-6 bg-surface-container-lowest p-8 rounded-[2rem] tonal-layer border border-outline-variant/10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-on-surface">Weekly Revenue</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="text-xs text-on-surface-variant font-medium">Current Week</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                <span className="text-xs text-on-surface-variant font-medium">Previous Week</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 w-full mt-4 flex items-end">
            {/* SVG Illustration of simple curves */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#994207" />
                  <stop offset="100%" stopColor="#ffb691" />
                </linearGradient>
              </defs>
              <path 
                d="M0,180 Q100,160 200,170 T400,140 T600,150 T800,120 T1000,130" 
                fill="none" 
                opacity="0.3" 
                stroke="#dcc1b5" 
                strokeDasharray="5" 
                strokeWidth="3" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,190 Q100,150 200,130 T400,100 T600,60 T800,40 T1000,20" 
                fill="none" 
                stroke="url(#chartGradient)" 
                strokeWidth="5" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-x-0 bottom--8 flex justify-between text-[10px] text-on-surface-variant/40 font-bold tracking-widest px-1">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>
          </div>
        </div>

        {/* Activity Table */}
        <div className="col-span-12 bg-surface-container-lowest p-8 rounded-[2rem] tonal-layer border border-outline-variant/10 mt-2">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-on-surface">Recent Activity</h3>
            <button className="text-primary text-xs font-bold hover:underline">View All Transactions</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="pb-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Transaction ID</th>
                  <th className="pb-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Item</th>
                  <th className="pb-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Customer</th>
                  <th className="pb-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Time</th>
                  <th className="pb-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Amount</th>
                  <th className="pb-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  { id: '#TX-82910', item: 'Signature Breakfast', customer: 'Sarah Jenkins', time: '10:45 AM', amount: '$18.50', status: 'COMPLETED', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEfTsyh--4HdmgfEFbPLMTK1bfp6lL9qyFSZRnA75cWejVDBw3aeCJPc9Hey_H6JZBcqCSRZBmRGc8AZ7Omb8PzGg3G3zYb8p8VlNTZUR5OO7ZdRAX-CUcKYIrHtcjBSAUtnFT4SXnr_UXFRg1qNuaNJy7GujPaqiAWbbIB-Tp7Z7YvnRZZboJ8ToGbn_IhUmwX5DOS1CF1vlfuFSzaRNxUyAbL3YxZ2peMGNiRiPjROy5oAuA9ALessV8HR9LsbIInU7IrG094QA' },
                  { id: '#TX-82909', item: 'The Classic Burger', customer: 'Michael Chen', time: '10:32 AM', amount: '$14.95', status: 'COMPLETED', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g' },
                  { id: '#TX-82908', item: 'Sunday Roast', customer: 'Alex Rivera', time: '10:15 AM', amount: '$22.00', status: 'PROCESSING', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxuXSPALY3AKn8nLV1rGskYBkUiaDnwZSiDqdc9wJp91t0sEms9NNuRKcu4Yw0AOV02aemyHWAgQ48hGLaUPoOyYW16wLMnsbfKZY9Ll-NR3_cgV0vKfDPJBwj9Wlwk6DXihZneifRNYrsofyQvtMK-UhcJorIfdA7Dgtc9oBiI0NGqx-XGtKLLLTecK0qBOQiEA4OqeTza50rejVqQMQolwHdBJTMu2ckGwPKvyy9ykqWWUV22LFGY7RarNXYc_nHD1g2Xv7n-9E' },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 text-sm font-semibold">{row.id}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <img src={row.img} alt={row.item} className="w-10 h-10 rounded-lg object-cover" />
                        <span className="text-sm font-medium">{row.item}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{row.customer}</td>
                    <td className="py-4 text-sm text-on-surface-variant font-medium">{row.time}</td>
                    <td className="py-4 text-sm text-right font-bold">{row.amount}</td>
                    <td className="py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        row.status === 'COMPLETED' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-primary-container text-on-primary-container'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
