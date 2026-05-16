import { Search, ShoppingBag, Clock, User, Layout, Printer, MoreHorizontal, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function OrdersView() {
  return (
    <div className="pt-16 flex-1 flex h-[calc(100vh-0px)] overflow-hidden animate-in fade-in duration-500">
      {/* Left Panel: Live Orders List */}
      <section className="w-1/3 flex flex-col border-r border-outline-variant/20 bg-surface-container-lowest">
        <div className="p-6 border-b border-outline-variant/10">
          <h2 className="font-display text-3xl text-on-surface font-semibold mb-4">Live Orders</h2>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-[10px] uppercase tracking-widest">All (12)</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Preparing (4)</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Ready (3)</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Order Card Active */}
          <div className="bg-surface-container p-5 rounded-2xl border-2 border-primary/20 relative cursor-pointer tonal-layer transition-all hover:translate-y-[-2px]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-lg font-bold text-on-surface">Order #2408</span>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-0.5">Table 12 • 4 mins ago</p>
              </div>
              <span className="bg-primary text-on-primary text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Preparing</span>
            </div>
            <p className="text-sm text-on-surface-variant truncate font-medium">2x Signature Breakfast, 1x Latte...</p>
            <div className="flex justify-between items-center pt-4 mt-4 border-t border-outline-variant/30">
              <span className="font-black text-primary text-lg">$42.50</span>
              <div className="flex -space-x-2">
                <img className="w-6 h-6 rounded-full border border-white object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgjj7vFMMiYHlDur612JsPq11iCWR16TlorFlHYFMrbKnW29_1h8GRtAppItIfEFKo_Zv4OWyLPhjGDJQEBcrxYoKYP7UmCRJbGfSkHU2XX0fyTcZU50HYf6yeMVAgsomGuAYIJ5ZuHOAw983Cex1FoTLRmTZGnc3JTjlj2-ut-0iLYkDSkA_WbK_9NG1wdda_siXV_FrbF22xwriJDm2e32GnIqCDu6B8-kpKE2vkAny8DN1sHCoqXD4ZpH-6uYYFJzpe1yVd6Eg" alt="Host" />
                <img className="w-6 h-6 rounded-full border border-white object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFZfoHgroOrjQAdBqyMJ4_VqG7-DLLA2XLruIPKxcJb8xXPaHSFuEntEcLhcQ2OvdaR4UkBgR0FIiDkmLr0qyt38keGqmP8HWmofLWipedVqrBzprGGkB7flYUjADAHbV0muXWClbkYr6E3Rhvvhv7fzMao6q8g5joOOh_pWwZKDqlbZ9K_gTzkUGkbnzDOWbCbCx13ZXfH0IvQrlz6y1b2ituX8Bl8acIvu261eENco1SU9KwOJk7KW9NhSHLxgdYjcrnc27JB0" alt="Customer" />
              </div>
            </div>
          </div>

          {[
            { id: '#2409', type: 'Takeaway', time: 'Just now', items: '1x Classic Burger, 1x Chips', price: '$18.90', status: 'Incoming', color: 'bg-secondary-container text-on-secondary-container' },
            { id: '#2406', type: 'Table 4', time: '12 mins ago', items: '1x Sunday Roast, 1x Merlot', price: '$24.00', status: 'Ready', color: 'bg-green-100 text-green-700' },
          ].map((order) => (
            <div key={order.id} className="bg-white p-5 rounded-2xl border border-outline-variant/20 hover:border-primary/20 cursor-pointer transition-all hover:bg-surface-container-low/30">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-lg font-bold text-on-surface">Order {order.id}</span>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-0.5">{order.type} • {order.time}</p>
                </div>
                <span className={`${order.color} text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider`}>{order.status}</span>
              </div>
              <p className="text-sm text-on-surface-variant truncate font-medium">{order.items}</p>
              <div className="flex justify-between items-center pt-4 mt-4 border-t border-outline-variant/10">
                <span className="font-bold text-on-surface text-lg">{order.price}</span>
                <ShoppingBag size={16} className="text-on-surface-variant" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Panel: Order Detailed View */}
      <section className="flex-1 flex flex-col bg-surface p-10 overflow-hidden">
        <div className="flex-1 flex flex-col bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(67,44,37,0.12)] border border-outline-variant/10 overflow-hidden">
          {/* Detail Header */}
          <div className="p-10 border-b border-outline-variant/10 flex justify-between items-start bg-surface-container-lowest">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h2 className="font-display text-5xl text-on-surface font-black">Order #2408</h2>
                <span className="bg-primary-container text-on-primary-container px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">In Kitchen</span>
              </div>
              <div className="flex items-center gap-6 text-on-surface-variant font-medium text-xs uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Clock size={16} className="text-primary" /> Placed at 09:12 AM</span>
                <span className="flex items-center gap-1.5"><User size={16} className="text-primary" /> Host: Sarah J.</span>
                <span className="flex items-center gap-1.5"><Layout size={16} className="text-primary" /> Table 12 (Patio)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="p-4 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors shadow-sm">
                <Printer size={20} className="text-on-surface-variant" />
              </button>
              <button className="p-4 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors shadow-sm">
                <MoreHorizontal size={20} className="text-on-surface-variant" />
              </button>
            </div>
          </div>

          {/* Items Grid */}
          <div className="flex-1 p-10 grid grid-cols-12 gap-10 overflow-y-auto">
            <div className="col-span-8 space-y-8">
              <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em]">Ordered Items</h3>
              <div className="space-y-6">
                {[
                  { name: 'Signature Breakfast', price: '$29.00', desc: '2x Quantity • Crispy Bacon, Sourdough', tag: 'GLUTEN-FREE OPTION', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPjsdi_o-Qp1joyMMjnMH_Q8i_PdgCWpie4GS3Od6_ifJ4eSwtiE33Cnp66MLNRyIbTiEfKJ6as1DkGbCZgoVwjVPqAogBkKeDikx8iaxsyzwRP3Noa7rF4npYg-VDlSJfXNd9qmLww2L3fPSVvo24BjQ4R1t8ulO3GVRcp6Tbfb3qy0Nddt0xm38aMlwAgnnZE9aHGZxmM_khTI7ATkV4IJkQ7CdZHAPcm7ownmTXxtUrr408Pt2-W66hQ39gMq4uczVZF02VceQ' },
                  { name: 'Caffe Latte', price: '$6.50', desc: '1x Quantity • Oat Milk, Extra Hot', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMRcUZ-KBDCvAR3XEKaz-8FPFLjEgxdicZilP34N_M6xXo82AVburHL-lLcY6g0qOTYOtjEuPpz6NOiZl8l9xGCMUoM0ivJa0_9IjzKE5RxOzuxYmnqzLkpH3pEqBUiZD3oPwo5IJQgfXKkFetfQ1I3WvmuEwywpbbzNAvmmnB4xI_I_s_riMTQ5k0lOoLjZ7rGqxL2SHCZx3nnN1bqk89ZIYHeknKkfCx_HY6WWED8sxCXoLvnwC8ndxOtEGWV4gs6YHYK31A4aY' },
                  { name: 'Seasonal Green Salad', price: '$7.00', desc: '1x Quantity • House Vinaigrette', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuHi1C-w5-g_bl7T-yPMx0F-JqzclSW9mjjbzZ-iz3I4MVI0_FVJw9fYtEhwEeEzN3l5lVmaePXm7lUx1otplk30hxRdg8T56mLj-J0ujUkaO_WivrsErqP0zYwJ43EZcZsghx2y787IsjrSlBbcg7JPH56LlrFf512DvKqx0yCoPyA80mDk1rrUIzqr7yVtvEiALkvqGHmmshewoLcBONyxQjj826UWx4ptMRVqpoCZeTonAQ1fKVhJ_UDKwpw5eW_tsXfvP55YY' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-8 p-5 rounded-3xl bg-surface-container-low/30 border border-outline-variant/10 group hover:border-primary/20 transition-all">
                    <img className="w-24 h-24 rounded-2xl object-cover shadow-md transition-transform group-hover:scale-105" src={item.img} alt={item.name} />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-on-surface">{item.name}</span>
                        <span className="font-black text-on-surface-variant">{item.price}</span>
                      </div>
                      <p className="text-sm font-medium text-on-surface-variant mt-1.5">{item.desc}</p>
                      {item.tag && (
                        <div className="mt-3">
                          <span className="text-[9px] font-black px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed tracking-wider uppercase">
                            {item.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 space-y-10">
              <div>
                <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Customer Note</h3>
                <div className="p-6 bg-secondary-container/20 border-l-4 border-primary rounded-r-3xl italic text-on-surface leading-relaxed text-sm">
                  "Please make sure the bacon is extra crispy! Also, if the sourdough could be double-toasted that would be perfect. Celebrating a birthday!"
                </div>
              </div>

              <div className="p-8 bg-surface-container rounded-3xl space-y-5 border border-outline-variant/10">
                <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em]">Summary</h3>
                <div className="space-y-3 border-b border-outline-variant/30 pb-5">
                  <div className="flex justify-between text-sm font-medium text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>$38.50</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-on-surface-variant">
                    <span>Service Fee (10%)</span>
                    <span>$4.00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-on-surface">Total Amount</span>
                  <span className="font-display text-4xl font-black text-primary">$42.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer ACTIONS */}
          <div className="p-10 border-t border-outline-variant/10 bg-surface-container-lowest flex gap-6 justify-end">
            <button className="px-10 py-4 rounded-full border-2 border-secondary text-secondary font-black text-sm uppercase tracking-widest hover:bg-secondary/5 transition-all active:scale-95">
              Hold Order
            </button>
            <button className="px-14 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-widest tonal-layer hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <CheckCircle size={20} />
              Complete Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
