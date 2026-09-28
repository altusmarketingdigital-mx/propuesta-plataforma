'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminPagos() {
  const [linkAmount, setLinkAmount] = useState('');
  const [concept, setConcept] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkAmount || !concept) return;
    
    // Simulamos la creación de una liga de pago (Ej. Mercado Pago)
    const mockId = Math.random().toString(36).substring(2, 10);
    setGeneratedLink(`https://pago.tribusport.mx/pay/${mockId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Finanzas y Pagos</h1>
        </header>

        <div className="p-8 max-w-6xl mx-auto space-y-8">
          
          {/* Configuración de Métodos de Pago */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Métodos de Pago Activos</h2>
                <p className="text-sm text-gray-500">Configura las pasarelas para procesar tarjetas en tu tienda.</p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Mercado Pago */}
              <div className="border border-gray-200 rounded-lg p-5 flex flex-col relative">
                <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Conectado</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">MP</div>
                  <h3 className="font-bold text-gray-800">Mercado Pago</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-1">Procesa tarjetas de crédito, débito y pagos en OXXO. Tasa: 3.49% + $4.00 MXN.</p>
                <button className="text-blue-600 text-sm font-semibold border border-blue-600 py-2 rounded hover:bg-blue-50 transition-colors">
                  Configurar Credenciales
                </button>
              </div>

              {/* PayPal */}
              <div className="border border-gray-200 rounded-lg p-5 flex flex-col relative">
                <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">Inactivo</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center text-white font-bold text-sm">PP</div>
                  <h3 className="font-bold text-gray-800">PayPal</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-1">Ofrece pago rápido y a meses sin intereses con PayPal. Tasa: 3.95% + $4.00 MXN.</p>
                <button className="bg-blue-600 text-white text-sm font-semibold py-2 rounded hover:bg-blue-700 transition-colors">
                  Vincular Cuenta
                </button>
              </div>

            </div>
          </section>

          {/* Generador de Ligas de Pago */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
             <div className="p-6 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Ligas de Pago Manuales (Links)</h2>
                <p className="text-sm text-gray-500">Cobra rápidamente por WhatsApp o Instagram generando un link seguro.</p>
              </div>
              <span className="text-3xl">🔗</span>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-8">
              
              <form onSubmit={handleGenerateLink} className="flex-1 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Concepto de la venta</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Conjunto Padel Menta (Pedido Instagram)"
                    value={concept}
                    onChange={(e) => setConcept(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monto a cobrar (MXN)</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    value={linkAmount}
                    onChange={(e) => setLinkAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <button type="submit" className="bg-brand-carbon text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors">
                  Generar Link de Cobro
                </button>
              </form>

              {/* Resultado del Link */}
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col justify-center items-center text-center">
                {generatedLink ? (
                  <>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                      ✓
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">¡Liga creada exitosamente!</h3>
                    <p className="text-sm text-gray-600 mb-4">Concepto: <strong>{concept}</strong><br/>Monto: <strong>${linkAmount} MXN</strong></p>
                    <div className="bg-white border border-gray-300 p-3 rounded w-full flex items-center justify-between">
                      <span className="text-xs text-blue-600 font-mono truncate mr-2">{generatedLink}</span>
                      <button 
                        onClick={() => {navigator.clipboard.writeText(generatedLink); alert('Enlace copiado');}}
                        className="text-xs font-bold uppercase text-gray-500 hover:text-gray-800"
                      >
                        Copiar
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Pega este enlace en tu chat de WhatsApp.</p>
                  </>
                ) : (
                  <>
                    <span className="text-4xl mb-4">📱</span>
                    <h3 className="font-bold text-gray-500 mb-2">El enlace aparecerá aquí</h3>
                    <p className="text-sm text-gray-400">Completa el formulario para generar una liga de pago única que puedes enviar a tus clientes.</p>
                  </>
                )}
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
