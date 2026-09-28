import AdminSidebar from '@/components/AdminSidebar';

const ADMIN_ORDERS = [
  { id: 1024, date: 'Hoy, 10:45 AM', customer: 'Mariana López', total: 1900, status: 'Pagado', delivery: 'Pendiente de envío' },
  { id: 1023, date: 'Hoy, 08:30 AM', customer: 'Silvia Castro', total: 950, status: 'Pagado', delivery: 'Pendiente de envío' },
  { id: 1022, date: 'Ayer, 18:20 PM', customer: 'Carla Ruiz', total: 2850, status: 'Pago pendiente', delivery: 'No empaquetado' },
  { id: 1021, date: 'Ayer, 14:15 PM', customer: 'Ana Sofía', total: 1100, status: 'Pagado', delivery: 'Enviado (FedEx)' },
];

export default function AdminVentas() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Ventas</h1>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          
          {/* Tarjetas de Resumen Rápido */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Ventas de hoy</h3>
              <p className="text-2xl font-bold text-gray-800">$2,850.00</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Órdenes a preparar</h3>
              <p className="text-2xl font-bold text-blue-600">26</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Ticket Promedio</h3>
              <p className="text-2xl font-bold text-gray-800">$1,700.00</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <th className="p-4 font-medium">Orden</th>
                  <th className="p-4 font-medium">Fecha</th>
                  <th className="p-4 font-medium">Cliente</th>
                  <th className="p-4 font-medium">Total</th>
                  <th className="p-4 font-medium">Estado del pago</th>
                  <th className="p-4 font-medium">Estado del envío</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ADMIN_ORDERS.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-blue-600 hover:underline cursor-pointer">#{order.id}</td>
                    <td className="p-4 text-gray-700">{order.date}</td>
                    <td className="p-4 text-gray-700">{order.customer}</td>
                    <td className="p-4 text-gray-700 font-medium">${order.total.toFixed(2)}</td>
                    <td className="p-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${order.status === 'Pagado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${order.delivery.includes('Enviado') ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                        {order.delivery}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
