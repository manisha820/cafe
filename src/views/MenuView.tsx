import { Search, PlusCircle, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function MenuView() {
  const categories = ['All Items', 'Breakfast', 'Brunch Specials', 'Main Course', 'Beverages', 'Sides'];
  const menuItems = [
    { name: 'Signature Breakfast', price: '£6.79', desc: 'Our full English breakfast served with two eggs, sausage, bacon, baked beans, and buttery toast.', tags: ['Classic', 'Protein Rich'], badge: 'BOGO DEAL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g' },
    { name: 'Sunday Roast', price: '£13.50', desc: 'Traditional roasted chicken with seasonal vegetables, creamy mash, and rich homemade gravy.', tags: ["Chef's Choice"], badge: 'SUNDAY ONLY', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g' },
    { name: 'The Classic Burger', price: '£11.25', desc: 'Gourmet beef patty with melted cheese, fresh lettuce, tomatoes, and chunky hand-cut chips.', tags: ['Best Seller'], badge: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g' },
    { name: 'Coffee Workday', price: '£3.50', desc: 'Barista-crafted morning fuel. Smooth espresso topped with perfectly frothed artisanal milk.', tags: ['Essential'], badge: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g' },
    { name: 'NY Pancakes', price: '£5.90', desc: 'Stacks of fluffy pancakes with fresh berries and drizzled with organic maple syrup.', tags: ['Sweet', 'Brunch'], badge: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5fhbZawMYrBDKIRfj4d6HwvdirbUaFTXaYDT-eOdMdWB8_vXguwE6htk03FE4Jm9HeK7Wk1KO-jpLJvdTlplDzvbY2sSn8iGU0_BBtxEh3M8Kuu1amkPVeFJua0AIK-93WAXHl73qmnjfdrwMYlAx5AUR6BSBa4mTzCWGWkv1NRWZNXmn0XeA2DD5arykwi4S68kvYbmB4Nn353yuEb8XkriDg8e2uPJ1UhOE9UxDbyzsVU47wOzQPQx0n0VkJB0D1uA22etB4g' },
  ];

  return (
    <div className="pt-24 px-10 pb-12 animate-in fade-in duration-500">
      <section className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-display text-5xl text-on-surface font-black mb-2">Menu Management</h2>
          <p className="text-on-surface-variant max-w-xl font-medium leading-relaxed">
            Curate the seasonal flavors of Harvest & Hearth. Manage availability, pricing, and dietary highlights for your cafeteria patrons.
          </p>
        </div>
        <button className="bg-primary text-on-primary font-black py-4 px-8 rounded-full flex items-center gap-3 tonal-layer hover:scale-105 transition-all active:scale-95 text-sm uppercase tracking-widest">
          <PlusCircle size={20} />
          New Item
        </button>
      </section>

      <div className="flex gap-3 mb-10 overflow-x-auto pb-4 custom-scrollbar">
        {categories.map((cat, i) => (
          <button 
            key={cat} 
            className={`px-8 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
              i === 0 
                ? 'bg-primary text-on-primary tonal-layer' 
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menuItems.map((item, i) => (
          <div key={i} className="bg-surface-container-lowest rounded-[2.5rem] overflow-hidden tonal-layer border border-outline-variant/10 flex flex-col hover:border-primary/20 transition-all group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {item.badge && (
                <div className="absolute top-5 right-5 bg-primary-container text-on-primary-container rounded-full px-5 py-1.5 font-black text-[10px] tracking-widest tonal-layer uppercase">
                  {item.badge}
                </div>
              )}
            </div>
            <div className="p-10 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-2xl text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                <span className="font-display text-2xl text-primary font-black">{item.price}</span>
              </div>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed line-clamp-2 mb-8">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-surface-container-highest/50 text-secondary text-[9px] px-3 py-1.5 rounded-full uppercase tracking-[0.1em] font-black">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <button className="flex-1 bg-secondary text-white py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95">Edit Item</button>
                <button className="w-14 h-14 flex items-center justify-center border border-outline-variant rounded-full text-on-surface-variant hover:text-primary transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Item Ghost Card */}
        <div className="border-2 border-dashed border-outline-variant/50 rounded-[2.5rem] flex flex-col items-center justify-center p-10 text-center bg-surface-container-low/30 hover:bg-surface-container-low/60 transition-all cursor-pointer group min-h-[450px]">
          <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform tonal-layer">
            <PlusCircle size={36} className="text-primary" />
          </div>
          <h3 className="font-display text-2xl text-on-surface font-bold mb-3">Create New Item</h3>
          <p className="text-on-surface-variant text-sm font-medium leading-relaxed px-4">
            Add a fresh dish to your cafeteria's digital menu board.
          </p>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="mt-14 flex items-center justify-between bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 tonal-layer">
        <p className="text-on-surface-variant font-medium text-sm">
          Showing <span className="font-black text-on-surface">5</span> of <span className="font-black text-on-surface">24</span> menu items
        </p>
        <div className="flex gap-3">
          <button className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-full text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30" disabled>
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-full text-on-surface-variant hover:bg-surface-container transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
