'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="w-full bg-brand-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full bg-brand-carbon text-brand-white text-xs text-center py-2 font-medium tracking-wide">
        ENVÍO GRATIS EN COMPRAS MAYORES A $2,500 MXN
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Menu Móvil (Hamburguesa) */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-carbon hover:text-brand-accent focus:outline-none p-2 -ml-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
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
            <Link href="/admin/login" className="text-brand-carbon hover:text-brand-accent hidden sm:block transition-colors" title="Acceso Administrador">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <Link href="/carrito" className="text-brand-carbon hover:text-brand-accent relative transition-colors p-2 -mr-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-1 right-0 bg-brand-accent text-brand-carbon text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/coleccion/faldas" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-brand-carbon hover:bg-gray-50 border-b border-gray-50">Faldas</Link>
            <Link href="/coleccion/tops" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-brand-carbon hover:bg-gray-50 border-b border-gray-50">Tops</Link>
            <Link href="/coleccion/accesorios" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-brand-carbon hover:bg-gray-50 border-b border-gray-50">Accesorios</Link>
            <Link href="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-brand-carbon hover:bg-gray-50 border-b border-gray-50">La Tribu</Link>
            <Link href="/admin/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-bold text-brand-accent mt-4">Acceso Empleados &rarr;</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
