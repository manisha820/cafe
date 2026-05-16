import { Search, Bell, History, Plus } from 'lucide-react';

export default function TopBar() {
  return (
    <header id="topbar" className="fixed top-0 right-0 w-[calc(100%-256px)] h-16 flex justify-between items-center px-10 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 z-40">
      <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full w-96 border border-outline-variant/20 shadow-sm">
        <Search className="text-on-surface-variant" size={18} />
        <input 
          type="text" 
          placeholder="Search analytics..." 
          className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full placeholder-on-surface-variant/60"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <History size={20} />
          </button>
        </div>
        
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-sans text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2">
          <Plus size={18} />
          New Item
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-on-surface leading-none">Alex Rivera</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Admin Manager</p>
          </div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASQwKY-fc1m4tpQ4W8ocqR6ddQLvEgyuA_sjkvpf0IprVSdJfMtj5LRebkzo9ObEb-pbrcFnw76Wh_oiK4T4Pj3zERH4CNo5NU0bKTfIYMwIooVQoK_N3EW5mjyQB3qAYrZicJW8dpfnYvZoSTGyYzLVcaC6qk735zmt9qwswh-BAHKPq9WZf9E7mKSpAITCBSn1fLlaGAJE6nvpwOuqbWG17_6KfgYc3E-XNSmAOmW6vtOoitfGECQv6ovd1rbEpT96MmJOOqCfM" 
            alt="Manager Profile" 
            className="w-10 h-10 rounded-full border-2 border-primary-container object-cover"
          />
        </div>
      </div>
    </header>
  );
}
