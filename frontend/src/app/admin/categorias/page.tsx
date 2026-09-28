import AdminSidebar from '@/components/AdminSidebar';

const ADMIN_CATEGORIES = [
  { id: 1, name: 'Faldas y Shorts', productsCount: 12 },
  { id: 2, name: 'Tops y Playeras', productsCount: 8 },
  { id: 3, name: 'Vestidos', productsCount: 4 },
  { id: 4, name: 'Paleteros y Accesorios', productsCount: 2 },
];

export default function AdminCategorias() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Categorías</h1>
        </header>

        <div className="p-8 max-w-4xl mx-auto">
          <div className="flex justify-end mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors">
              Agregar categoría
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <th className="p-4 font-medium">Nombre de la categoría</th>
                  <th className="p-4 font-medium text-right">Productos asociados</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ADMIN_CATEGORIES.map((cat) => (
                  <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <span className="font-semibold text-blue-600 hover:underline cursor-pointer">{cat.name}</span>
                    </td>
                    <td className="p-4 text-right text-gray-700">{cat.productsCount} productos</td>
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
