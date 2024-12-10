import React from 'react';

const RecentQuotes = () => {
  const quotes = [
    {
      id: 1,
      item: 'Notebooks Dell Latitude',
      requester: 'Departamento TI',
      status: 'Pendente',
      value: 'R$ 45.000,00',
    },
    {
      id: 2,
      item: 'Material de Escritório',
      requester: 'Administrativo',
      status: 'Aprovado',
      value: 'R$ 2.500,00',
    },
    {
      id: 3,
      item: 'Móveis para Escritório',
      requester: 'RH',
      status: 'Em Análise',
      value: 'R$ 12.000,00',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Cotações Recentes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Item</th>
              <th className="text-left py-3 px-4">Solicitante</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Valor</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr key={quote.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{quote.item}</td>
                <td className="py-3 px-4">{quote.requester}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      quote.status === 'Aprovado'
                        ? 'bg-green-100 text-green-800'
                        : quote.status === 'Pendente'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {quote.status}
                  </span>
                </td>
                <td className="py-3 px-4">{quote.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentQuotes;