'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex md:flex-col min-h-screen text-gray-700">
      <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-brand-carbon text-white">
        <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-brand-carbon font-extrabold text-sm tracking-tighter">TS</div>
        <span className="font-bold text-lg tracking-widest uppercase">TribuSport</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 text-sm font-medium">
        <Link href="/admin/inicio" className={`flex items-center px-6 py-2.5 hover:bg-gray-50 ${isActive('/admin/inicio') ? 'bg-blue-50 text-blue-700' : ''}`}>
          <span className="mr-3">🏠</span> Inicio
        </Link>
        <Link href="/admin/estadisticas" className={`flex items-center px-6 py-2.5 hover:bg-gray-50 ${isActive('/admin/estadisticas') ? 'bg-blue-50 text-blue-700' : ''}`}>
          <span className="mr-3">📊</span> Estadísticas
        </Link>

        <div className="px-6 py-3 mt-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Gestión</div>
        
        <Link href="/admin/ventas" className={`flex items-center justify-between px-6 py-2.5 hover:bg-gray-50 ${isActive('/admin/ventas') ? 'bg-blue-50 text-blue-700' : ''}`}>
          <div className="flex items-center"><span className="mr-3">🛒</span> Ventas</div>
          <span className="bg-blue-900 text-white text-xs font-bold px-2 py-0.5 rounded-md">26</span>
        </Link>

        {/* Productos con Submenú abierto */}
        <div className="bg-blue-50 text-blue-700">
          <Link href="/admin/productos" className="flex items-center px-6 py-2.5 font-semibold">
             <span className="mr-3 text-blue-600">🏷️</span> Productos
          </Link>
          <div className="flex flex-col pl-14 py-1 space-y-3 text-sm">
            <Link href="/admin/productos" className={isActive('/admin/productos') && !isActive('/admin/categorias') ? 'font-bold' : 'hover:text-blue-800'}>Lista de productos</Link>
            <Link href="#" className="hover:text-blue-800">Inventario</Link>
            <Link href="#" className="hover:text-blue-800">Transferencias</Link>
            <Link href="/admin/categorias" className={isActive('/admin/categorias') ? 'font-bold' : 'hover:text-blue-800'}>Categorías</Link>
            <Link href="#" className="hover:text-blue-800 flex justify-between pr-4">Suscripciones <span className="border border-blue-300 text-blue-600 text-[10px] px-1.5 rounded-full">Nuevo</span></Link>
            <Link href="#" className="hover:text-blue-800 flex justify-between pr-4">Tablas de precios <span className="border border-blue-300 text-blue-600 text-[10px] px-1.5 rounded-full">Nuevo</span></Link>
          </div>
        </div>

        <Link href="#" className="flex items-center justify-between px-6 py-2.5 hover:bg-gray-50 mt-2">
          <div className="flex items-center"><span className="mr-3">🚚</span> Logística y Envíos</div>
          <span className="border border-blue-300 text-blue-600 text-[10px] px-1.5 rounded-full font-bold">Nuevo</span>
        </Link>

        <div className="px-6 py-3 mt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Canales de venta</div>
        <Link href="/" target="_blank" className="flex items-center justify-between px-6 py-2.5 hover:bg-gray-50">
          <div className="flex items-center"><span className="mr-3">🏪</span> Tienda en línea</div>
          <span className="text-gray-400">↗</span>
        </Link>
        <Link href="#" className="flex items-center justify-between px-6 py-2.5 hover:bg-gray-50">
          <div className="flex items-center"><span className="mr-3">🖥️</span> Punto de Venta</div>
          <span className="text-gray-400">↗</span>
        </Link>
      </nav>
    </aside>
  );
}
