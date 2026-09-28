import AdminSidebar from '@/components/AdminSidebar';

export default function AdminInicio() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Hola, Admin 👋</h1>
        </header>

        <div className="p-8 max-w-6xl mx-auto space-y-8">
          
          {/* Banner de Tareas */}
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold mb-1">Tienes 26 órdenes pendientes de envío</h2>
              <p className="text-blue-100 text-sm">Empaqueta tus productos y genera las guías desde la sección de Ventas.</p>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
              Gestionar envíos
            </button>
          </div>

          {/* Estadísticas Rápidas */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Resumen de los últimos 7 días</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Ventas totales</p>
                <p className="text-2xl font-bold text-gray-800">$18,450.00</p>
                <p className="text-green-600 text-xs font-semibold mt-2">↑ 12% vs semana pasada</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Pedidos</p>
                <p className="text-2xl font-bold text-gray-800">42</p>
                <p className="text-green-600 text-xs font-semibold mt-2">↑ 5% vs semana pasada</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Visitas</p>
                <p className="text-2xl font-bold text-gray-800">1,204</p>
                <p className="text-red-500 text-xs font-semibold mt-2">↓ 2% vs semana pasada</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Tasa de conversión</p>
                <p className="text-2xl font-bold text-gray-800">3.4%</p>
                <p className="text-green-600 text-xs font-semibold mt-2">↑ 0.5% vs semana pasada</p>
              </div>
            </div>
          </div>

          {/* Atajos */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Acciones rápidas</h3>
            <div className="flex gap-4">
               <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 font-medium flex items-center gap-2">
                 <span>🏷️</span> Agregar un producto
               </button>
               <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 font-medium flex items-center gap-2">
                 <span>📱</span> Ver mi tienda
               </button>
               <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 font-medium flex items-center gap-2">
                 <span>⚙️</span> Configurar medios de pago
               </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
