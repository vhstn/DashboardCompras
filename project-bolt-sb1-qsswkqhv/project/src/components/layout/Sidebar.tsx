import React from 'react';
import { Home, ShoppingCart, FileText, ClipboardList, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <ShoppingCart className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">ComprasPro</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <Home size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <FileText size={20} />
              <span>Cotações</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <ClipboardList size={20} />
              <span>Solicitações</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <Settings size={20} />
              <span>Configurações</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="absolute bottom-4">
        <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 text-gray-400">
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;