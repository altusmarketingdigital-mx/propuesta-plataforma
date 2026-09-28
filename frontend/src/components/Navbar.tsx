'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  
  // No mostrar navbar en el panel de admin
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="w-full bg-brand-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar Promocional */}
      <div className="w-full bg-brand-carbon text-brand-white text-xs text-center py-2 font-medium tracking-wide">
        ENVÍO GRATIS EN COMPRAS MAYORES A $2,500 MXN
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu Móvil (Hamburguesa placeholder) */}
          <div className="flex items-center md:hidden">
            <button className="text-brand-carbon hover:text-brand-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
            <Link href="/" className="font-heading font-extrabold text-2xl tracking-tighter">
              TRIBUSPORT
            </Link>
          </div>

          {/* Enlaces de Navegación (Desktop) */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link href="/coleccion/faldas" className="text-sm font-medium hover:text-brand-accent transition-colors">Faldas</Link>
            <Link href="/coleccion/tops" className="text-sm font-medium hover:text-brand-accent transition-colors">Tops</Link>
            <Link href="/coleccion/accesorios" className="text-sm font-medium hover:text-brand-accent transition-colors">Accesorios</Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-brand-accent transition-colors">La Tribu</Link>
          </div>

          {/* Iconos (Usuario, Carrito) */}
          <div className="flex items-center space-x-4">
            {/* Botón de Login (Flujo hacia el Admin) */}
            <Link href="/admin/login" className="text-brand-carbon hover:text-brand-accent hidden sm:block transition-colors" title="Acceso Administrador">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <Link href="/carrito" className="text-brand-carbon hover:text-brand-accent relative transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-brand-accent text-brand-carbon text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
