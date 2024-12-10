import React from 'react';
import { ShoppingBag, FileText, TrendingUp, Users } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import StatCard from './components/dashboard/StatCard';
import RecentQuotes from './components/dashboard/RecentQuotes';
import RequestsChart from './components/dashboard/RequestsChart';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo ao sistema de compras</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total de Solicitações"
            value="124"
            icon={ShoppingBag}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Cotações Pendentes"
            value="38"
            icon={FileText}
            trend={{ value: 5, isPositive: false }}
          />
          <StatCard
            title="Economia do Mês"
            value="R$ 45.000"
            icon={TrendingUp}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Fornecedores Ativos"
            value="57"
            icon={Users}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentQuotes />
          </div>
          <div>
            <RequestsChart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;