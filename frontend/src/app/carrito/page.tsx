import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CarritoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-white">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-heading font-bold text-brand-carbon mb-8 uppercase tracking-widest text-center md:text-left">
          Tu Carrito
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Lista de Productos */}
          <div className="flex-1">
            <div className="border-t border-gray-200">
              
              {/* Item 1 */}
              <div className="py-6 flex border-b border-gray-200">
                <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-gray-200">
                  <img src="https://picsum.photos/id/1011/200/300" alt="Falda" className="w-full h-full object-cover" />
                </div>
                <div className="ml-6 flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-brand-carbon">Falda Padel Pro Blanca</h3>
                      <p className="text-sm text-gray-500 mt-1">Color: Blanco | Talla: M</p>
                    </div>
                    <p className="font-bold text-brand-carbon">$950.00</p>
                  </div>
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center border border-gray-300">
                      <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                      <span className="px-4 py-1 text-sm font-medium">1</span>
                      <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button className="text-sm text-gray-400 hover:text-red-500 underline">Remover</button>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="py-6 flex border-b border-gray-200">
                <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-gray-200">
                  <img src="https://picsum.photos/id/1012/200/300" alt="Top" className="w-full h-full object-cover" />
                </div>
                <div className="ml-6 flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-brand-carbon">Top Deportivo Menta</h3>
                      <p className="text-sm text-gray-500 mt-1">Color: Menta | Talla: S</p>
                    </div>
                    <p className="font-bold text-brand-carbon">$750.00</p>
                  </div>
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center border border-gray-300">
                      <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                      <span className="px-4 py-1 text-sm font-medium">1</span>
                      <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button className="text-sm text-gray-400 hover:text-red-500 underline">Remover</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Resumen de Compra */}
          <div className="w-full lg:w-96 bg-gray-50 p-6 border border-gray-200 h-fit">
            <h2 className="text-lg font-bold text-brand-carbon mb-6 uppercase tracking-wider">Resumen</h2>
            
            <div className="space-y-4 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-brand-carbon font-medium">$1,700.00</span>
              </div>
              <div className="flex justify-between">
                <span>Envío estimado</span>
                <span className="text-gray-400">Calculado en el checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between font-bold text-lg text-brand-carbon mb-8">
              <span>Total</span>
              <span>$1,700.00 MXN</span>
            </div>

            <Link href="/checkout" className="block w-full bg-brand-carbon text-white text-center font-bold py-4 uppercase tracking-widest hover:bg-black transition-colors shadow-lg">
              Proceder al Pago
            </Link>
            
            <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-2">
              <span>🔒</span> Pago 100% Seguro
            </p>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
