import Link from 'next/link';

export default function Navbar() {
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
            <Link href="/nueva-coleccion" className="text-sm font-medium hover:text-brand-accent transition-colors">Nueva Colección</Link>
            <Link href="/mujer" className="text-sm font-medium hover:text-brand-accent transition-colors">Mujer</Link>
            <Link href="/accesorios" className="text-sm font-medium hover:text-brand-accent transition-colors">Accesorios</Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-brand-accent transition-colors">La Tribu</Link>
          </div>

          {/* Iconos (Usuario, Carrito) */}
          <div className="flex items-center space-x-4">
            <button className="text-brand-carbon hover:text-brand-accent hidden sm:block">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-brand-carbon hover:text-brand-accent relative">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
