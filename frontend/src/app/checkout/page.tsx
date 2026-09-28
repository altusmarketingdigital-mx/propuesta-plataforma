import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Columna Izquierda: Formulario de Datos */}
      <section className="flex-1 px-4 py-8 md:px-12 md:py-12 lg:px-24">
        
        <header className="mb-8">
          <Link href="/" className="text-2xl font-heading font-extrabold text-brand-carbon tracking-widest uppercase">
            TribuSport
          </Link>
          <nav className="text-xs text-gray-500 mt-4 flex items-center gap-2">
            <Link href="/carrito" className="hover:text-brand-accent transition-colors">Carrito</Link> 
            <span>&gt;</span> 
            <span className="font-bold text-brand-carbon">Información</span> 
            <span>&gt;</span> 
            <span>Envío</span> 
            <span>&gt;</span> 
            <span>Pago</span>
          </nav>
        </header>

        <form className="max-w-xl">
          {/* Contacto */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-brand-carbon mb-4">Información de contacto</h2>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon"
            />
            <label className="flex items-center gap-2 mt-3 text-sm text-gray-600">
              <input type="checkbox" className="rounded" defaultChecked />
              Quiero recibir ofertas y novedades exclusivas
            </label>
          </div>

          {/* Dirección de Envío */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-brand-carbon mb-4">Dirección de envío</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Nombre" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon" />
              <input type="text" placeholder="Apellidos" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon" />
            </div>

            <input type="text" placeholder="Dirección (Calle y número)" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon mb-4" />
            <input type="text" placeholder="Departamento, local, etc. (Opcional)" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon mb-4" />

            <div className="grid grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="Ciudad" className="col-span-1 w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon" />
              <select className="col-span-1 w-full border border-gray-300 rounded p-3 text-sm text-gray-500 focus:outline-none focus:border-brand-carbon bg-white">
                <option>Estado</option>
                <option>CDMX</option>
                <option>Jalisco</option>
                <option>Nuevo León</option>
              </select>
              <input type="text" placeholder="Código Postal" className="col-span-1 w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon" />
            </div>
            
            <input type="tel" placeholder="Teléfono" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon" />
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
            <Link href="/carrito" className="text-brand-accent hover:underline text-sm font-medium">&lt; Volver al carrito</Link>
            <button type="button" className="w-full sm:w-auto bg-brand-carbon text-white font-bold py-4 px-8 uppercase tracking-wider hover:bg-black transition-colors rounded shadow-md">
              Continuar con envíos
            </button>
          </div>
        </form>
        
        <footer className="mt-12 text-xs text-gray-400 flex gap-4">
          <Link href="#" className="hover:underline">Políticas de reembolso</Link>
          <Link href="#" className="hover:underline">Aviso de privacidad</Link>
          <Link href="#" className="hover:underline">Términos del servicio</Link>
        </footer>
      </section>

      {/* Columna Derecha: Resumen Flotante (Fondo gris) */}
      <aside className="w-full md:w-[45%] bg-gray-50 border-l border-gray-200 px-4 py-8 md:px-12 md:py-12 flex flex-col">
        <div className="max-w-md w-full">
          
          {/* Productos */}
          <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded overflow-hidden">
                  <img src="https://picsum.photos/id/1011/100/100" alt="Falda" className="w-full h-full object-cover" />
                </div>
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-brand-carbon">Falda Padel Pro Blanca</h4>
                <p className="text-xs text-gray-500">M / Blanco</p>
              </div>
              <span className="font-medium text-sm text-brand-carbon">$950.00</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded overflow-hidden">
                  <img src="https://picsum.photos/id/1012/100/100" alt="Top" className="w-full h-full object-cover" />
                </div>
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-brand-carbon">Top Deportivo Menta</h4>
                <p className="text-xs text-gray-500">S / Menta</p>
              </div>
              <span className="font-medium text-sm text-brand-carbon">$750.00</span>
            </div>
          </div>

          {/* Código de Descuento */}
          <div className="flex gap-2 mb-6 border-b border-gray-200 pb-6">
            <input type="text" placeholder="Código de descuento" className="flex-1 border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-brand-carbon" />
            <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded font-bold uppercase text-sm hover:bg-gray-300 transition-colors">Usar</button>
          </div>

          {/* Totales */}
          <div className="space-y-3 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-brand-carbon">$1,700.00</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span className="text-xs">Calculado en el siguiente paso</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-brand-carbon">
            <span className="text-lg">Total</span>
            <div className="flex items-end gap-2">
              <span className="text-xs text-gray-500 mb-1">MXN</span>
              <span className="text-2xl font-bold">$1,700.00</span>
            </div>
          </div>

        </div>
      </aside>
      
    </main>
  );
}
