import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductPage({ params }: { params: { slug: string } }) {
  // En producción, buscaríamos el producto por "slug" en la base de datos
  const productName = params.slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen flex flex-col bg-brand-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
          Inicio / Mujer / Faldas / <span className="font-bold text-brand-carbon">{productName}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Galería de Imágenes (Lado Izquierdo) */}
          <div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden"><img src="https://picsum.photos/id/1011/800/1000" className="w-full h-full object-cover" alt="Detalle 1" /></div>
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden"><img src="https://picsum.photos/id/1050/800/1000" className="w-full h-full object-cover" alt="Detalle 2" /></div>
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden"><img src="https://picsum.photos/id/1012/800/1000" className="w-full h-full object-cover" alt="Detalle 3" /></div>
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden"><img src="https://picsum.photos/id/1059/800/1000" className="w-full h-full object-cover" alt="Detalle 4" /></div>
          </div>

          {/* Información y Selector (Lado Derecho) */}
          <div className="w-full md:w-2/5 md:sticky md:top-24 h-fit">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-carbon mb-2">
              {productName}
            </h1>
            <p className="text-xl font-bold text-brand-carbon mb-6">$950.00 MXN</p>

            {/* Selector de Color */}
            <div className="mb-6">
              <span className="text-sm font-semibold block mb-3">Color: <span className="font-normal text-gray-500">Blanco</span></span>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-white border-2 border-brand-carbon ring-2 ring-offset-1 ring-transparent"></button>
                <button className="w-8 h-8 rounded-full bg-black border border-gray-300"></button>
                <button className="w-8 h-8 rounded-full bg-brand-accent border border-gray-300"></button>
              </div>
            </div>

            {/* Selector de Talla */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold">Talla</span>
                <button className="text-xs text-gray-500 underline hover:text-brand-carbon">Guía de tallas</button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="border border-gray-300 py-3 flex items-center justify-center text-sm font-medium hover:border-brand-carbon transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de Compra */}
            <button className="w-full bg-brand-carbon text-white font-bold py-4 uppercase tracking-widest hover:bg-black transition-colors mb-4">
              Agregar al Carrito
            </button>
            <p className="text-xs text-center text-gray-500 mb-8">Envío y devoluciones gratis en pedidos sobre $2,500 MXN</p>

            {/* Acordeón de Detalles (Placeholder) */}
            <div className="border-t border-gray-200 pt-6">
              <details className="mb-4 group">
                <summary className="font-semibold text-sm cursor-pointer list-none flex justify-between uppercase tracking-wide">
                  Descripción
                  <span className="group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Falda pantalón diseñada con tecnología transpirable. Su pretina alta garantiza soporte y comodidad en cada movimiento. Incluye short interno con bolsillo para pelotas de pádel.
                </p>
              </details>
              <details className="border-t border-gray-200 pt-4 group">
                <summary className="font-semibold text-sm cursor-pointer list-none flex justify-between uppercase tracking-wide">
                  Material y Cuidados
                  <span className="group-open:rotate-45 transition-transform">+</span>
                </summary>
                <ul className="text-sm text-gray-600 mt-4 list-disc pl-4 space-y-1">
                  <li>85% Poliéster, 15% Elastano</li>
                  <li>Lavar a máquina en frío</li>
                  <li>No usar secadora</li>
                </ul>
              </details>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
