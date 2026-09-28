import AdminSidebar from '@/components/AdminSidebar';

// Mock Data para el Panel Admin
const ADMIN_PRODUCTS = [
  { id: 1, sku: 'FAL-WHT-S', name: 'Falda Padel Pro Blanca', price: 950, stock: 15, active: true, img: 'https://picsum.photos/id/1011/100/100' },
  { id: 2, sku: 'FAL-CRB-M', name: 'Falda Plisada Carbón', price: 1100, stock: 8, active: true, img: 'https://picsum.photos/id/1050/100/100' },
  { id: 3, sku: 'TOP-MNT-S', name: 'Top Deportivo Menta', price: 750, stock: 0, active: false, img: 'https://picsum.photos/id/1012/100/100' },
  { id: 4, sku: 'FAL-BLK-L', name: 'Falda Clásica Negra', price: 890, stock: 45, active: true, img: 'https://picsum.photos/id/1059/100/100' },
];

export default function AdminProductos() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">Lista de productos</h1>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-96">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors">
              Agregar producto
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <th className="p-4 font-medium w-12"><input type="checkbox" className="rounded" /></th>
                  <th className="p-4 font-medium">Producto</th>
                  <th className="p-4 font-medium">Precio</th>
                  <th className="p-4 font-medium">Stock</th>
                  <th className="p-4 font-medium text-center">Visibilidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ADMIN_PRODUCTS.map((prod) => (
                  <tr key={prod.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4"><input type="checkbox" className="rounded" /></td>
                    <td className="p-4 flex items-center gap-4">
                      <img src={prod.img} alt={prod.name} className="w-10 h-10 rounded object-cover border border-gray-200" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-blue-600 hover:underline cursor-pointer">{prod.name}</span>
                        <span className="text-gray-400 text-xs">SKU: {prod.sku}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">${prod.price.toFixed(2)}</td>
                    <td className="p-4 text-gray-700">{prod.stock} un.</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${prod.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {prod.active ? 'Activo' : 'Inactivo'}
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
