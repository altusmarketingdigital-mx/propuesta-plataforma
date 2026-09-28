'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

const POS_PRODUCTS = [
  { id: 1, name: 'Falda Padel Pro Blanca', price: 950, sku: 'FAL-WHT-S', img: 'https://picsum.photos/id/1011/150/150' },
  { id: 2, name: 'Falda Plisada Carbón', price: 1100, sku: 'FAL-CRB-M', img: 'https://picsum.photos/id/1050/150/150' },
  { id: 3, name: 'Top Deportivo Menta', price: 750, sku: 'TOP-MNT-S', img: 'https://picsum.photos/id/1012/150/150' },
  { id: 4, name: 'Falda Clásica Negra', price: 890, sku: 'FAL-BLK-L', img: 'https://picsum.photos/id/1059/150/150' },
  { id: 5, name: 'Visera Padel', price: 450, sku: 'VIS-WHT', img: 'https://picsum.photos/id/1020/150/150' },
  { id: 6, name: 'Muñequera Blanca', price: 250, sku: 'MUN-WHT', img: 'https://picsum.photos/id/1021/150/150' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export default function AdminPOS() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: typeof POS_PRODUCTS[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleCharge = () => {
    if (cart.length === 0) return;
    alert(`¡Venta física registrada con éxito!\nTotal cobrado: $${total.toFixed(2)} MXN\nSe descontará automáticamente del inventario.`);
    setCart([]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <AdminSidebar />
      
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Lado Izquierdo: Catálogo POS */}
        <section className="flex-1 flex flex-col p-6 overflow-y-auto">
          <header className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Terminal de Venta (POS)</h1>
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder="Escanear código de barras..." 
                className="w-full border-2 border-blue-500 rounded-md pl-4 pr-10 py-2 focus:outline-none"
                autoFocus
              />
            </div>
          </header>

          {/* Grid de Productos Rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {POS_PRODUCTS.map((prod) => (
              <button 
                key={prod.id} 
                onClick={() => addToCart(prod)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 flex flex-col items-center hover:border-blue-500 hover:shadow-md transition-all text-left"
              >
                <img src={prod.img} alt={prod.name} className="w-full h-32 object-cover rounded mb-3" />
                <span className="font-semibold text-gray-800 text-sm leading-tight mb-1 w-full">{prod.name}</span>
                <div className="flex justify-between w-full items-end mt-auto">
                  <span className="text-xs text-gray-400">{prod.sku}</span>
                  <span className="font-bold text-blue-600">${prod.price}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Lado Derecho: Ticket / Carrito */}
        <aside className="w-full md:w-96 bg-white border-l border-gray-200 flex flex-col shadow-xl z-10">
          
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛍️</span>
              <h2 className="text-lg font-bold text-gray-800">Ticket Actual</h2>
            </div>
            <button onClick={() => setCart([])} className="text-sm text-red-500 hover:underline">Vaciar</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <span className="text-4xl mb-2">🛒</span>
                <p>El ticket está vacío</p>
                <p className="text-xs text-center mt-2">Selecciona productos a la izquierda o escanea el código.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm leading-tight">{item.name}</p>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                      <span className="bg-gray-200 px-2 py-0.5 rounded text-gray-700 font-bold">{item.qty}x</span> 
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="font-bold text-gray-800">${(item.price * item.qty).toFixed(2)}</p>
                    <button onClick={() => removeItem(item.id)} className="text-xs text-red-500 mt-1 hover:underline">Quitar</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <span>Subtotal ({totalItems} artículos)</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <span>IVA (16%)</span>
              <span>Incluido</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-gray-800 mb-6 border-t border-gray-200 pt-4">
              <span>Total a cobrar</span>
              <span>${total.toFixed(2)} MXN</span>
            </div>
            
            <button 
              onClick={handleCharge}
              disabled={cart.length === 0}
              className={`w-full py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all shadow-lg ${cart.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              Cobrar
            </button>
          </div>
          
        </aside>

      </main>
    </div>
  );
}
