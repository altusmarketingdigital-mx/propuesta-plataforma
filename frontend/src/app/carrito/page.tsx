'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CarritoPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

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
              
              {cart.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                  <p className="mb-4">Tu carrito está vacío.</p>
                  <Link href="/coleccion/faldas" className="text-brand-carbon underline hover:text-brand-accent">
                    Continuar comprando
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="py-6 flex border-b border-gray-200">
                    <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-gray-200">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-brand-carbon">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">Color: {item.color} | Talla: {item.size}</p>
                        </div>
                        <p className="font-bold text-brand-carbon">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between items-end mt-auto">
                        <div className="flex items-center border border-gray-300">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                          <span className="px-4 py-1 text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-sm text-gray-400 hover:text-red-500 underline">Remover</button>
                      </div>
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>

          {/* Resumen de Compra */}
          <div className="w-full lg:w-96 bg-gray-50 p-6 border border-gray-200 h-fit">
            <h2 className="text-lg font-bold text-brand-carbon mb-6 uppercase tracking-wider">Resumen</h2>
            
            <div className="space-y-4 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-brand-carbon font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío estimado</span>
                <span className="text-gray-400">Calculado en el checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between font-bold text-lg text-brand-carbon mb-8">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)} MXN</span>
            </div>

            <Link href="/checkout" className={`block w-full text-center font-bold py-4 uppercase tracking-widest transition-colors shadow-lg ${cart.length === 0 ? 'bg-gray-300 text-gray-500 pointer-events-none' : 'bg-brand-carbon text-white hover:bg-black'}`}>
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
