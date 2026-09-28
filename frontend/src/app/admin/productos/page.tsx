import Link from 'next/link';

// Mock Data para el Panel Admin
const ADMIN_PRODUCTS = [
  { id: 1, sku: 'FAL-WHT-S', name: 'Falda Padel Pro Blanca', price: 950, stock: 15, active: true, img: 'https://picsum.photos/id/1011/100/100' },
  { id: 2, sku: 'FAL-CRB-M', name: 'Falda Plisada Carbón', price: 1100, stock: 8, active: true, img: 'https://picsum.photos/id/1050/100/100' },
  { id: 3, sku: 'TOP-MNT-S', name: 'Top Deportivo Menta', price: 750, stock: 0, active: false, img: 'https://picsum.photos/id/1012/100/100' },
  { id: 4, sku: 'FAL-BLK-L', name: 'Falda Clásica Negra', price: 890, stock: 45, active: true, img: 'https://picsum.photos/id/1059/100/100' },
];

export default function AdminProductos() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar de Navegación Lateral (Estilo Tiendanube/Shopify) */}
      <aside className="w-64 bg-brand-carbon text-white hidden md:flex md:flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-heading font-bold tracking-widest uppercase">TribuSport</h2>
          <span className="text-xs text-brand-accent">Backoffice</span>
        </div>
        <nav className="flex-1 py-4">
          <Link href="/admin/dashboard" className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Inicio</Link>
          <Link href="/admin/pedidos" className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Pedidos <span className="bg-brand-accent text-brand-carbon text-xs font-bold px-2 py-0.5 rounded-full ml-2">3</span></Link>
          <Link href="/admin/productos" className="block px-6 py-3 bg-gray-800 text-brand-accent font-medium border-l-4 border-brand-accent">Productos</Link>
          <Link href="/admin/clientes" className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Clientes</Link>
          <Link href="/admin/configuracion" className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Configuración</Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link href="/admin/login" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
            Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 overflow-y-auto">
        {/* Header superior */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">Mis Productos</h1>
          <a href="/" target="_blank" className="text-sm text-blue-600 hover:underline">Ver tienda &rarr;</a>
        </header>

        {/* Contenido del Dashboard */}
        <div className="p-8 max-w-7xl mx-auto">
          
          {/* Barra de Acciones */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-96">
              <input 
                type="text" 
                placeholder="Buscar por nombre, SKU..." 
                className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-brand-accent"
              />
            </div>
            <button className="w-full sm:w-auto bg-brand-accent text-white px-6 py-2 rounded-md font-bold hover:bg-brand-accentHover transition-colors shadow-sm">
              + Agregar producto
            </button>
          </div>

          {/* Tabla de Productos */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                    <th className="p-4 font-medium w-12">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="p-4 font-medium">Producto</th>
                    <th className="p-4 font-medium">SKU</th>
                    <th className="p-4 font-medium">Precio</th>
                    <th className="p-4 font-medium">Stock</th>
                    <th className="p-4 font-medium text-center">Estado</th>
                    <th className="p-4 font-medium text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ADMIN_PRODUCTS.map((prod) => (
                    <tr key={prod.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="p-4 flex items-center gap-4">
                        <img src={prod.img} alt={prod.name} className="w-12 h-12 rounded object-cover border border-gray-200" />
                        <span className="font-semibold text-gray-800">{prod.name}</span>
                      </td>
                      <td className="p-4 text-sm text-gray-500">{prod.sku}</td>
                      <td className="p-4 text-sm text-gray-800">${prod.price.toFixed(2)}</td>
                      <td className="p-4">
                        <span className={`text-sm font-bold ${prod.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {prod.stock} un.
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        {prod.active ? (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Activo</span>
                        ) : (
                          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Oculto</span>
                        )}
                      </td>
                      <td className="p-4 text-right text-sm">
                        <button className="text-blue-600 hover:underline mr-3">Editar</button>
                        <button className="text-red-600 hover:underline">Borrar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Paginación */}
            <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
              <span>Mostrando 1 a 4 de 4 productos</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed">Anterior</button>
                <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-100 text-gray-700">Siguiente</button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
