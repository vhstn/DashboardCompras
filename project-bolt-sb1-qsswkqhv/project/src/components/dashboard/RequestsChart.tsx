import React from 'react';

const RequestsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Solicitações por Departamento</h2>
      <div className="space-y-4">
        {[
          { dept: 'TI', value: 75 },
          { dept: 'RH', value: 45 },
          { dept: 'Administrativo', value: 60 },
          { dept: 'Financeiro', value: 30 },
        ].map((item) => (
          <div key={item.dept}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">{item.dept}</span>
              <span className="text-sm text-gray-600">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestsChart;