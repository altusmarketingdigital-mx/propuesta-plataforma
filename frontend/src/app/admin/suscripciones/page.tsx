import AdminSidebar from '@/components/AdminSidebar';

export default function AdminSuscripciones() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Suscripciones Recurrentes</h1>
        </header>
        <div className="p-8 max-w-6xl mx-auto flex flex-col items-center justify-center h-[70vh] text-gray-500">
          <span className="text-6xl mb-4">🔁</span>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Cobros Automáticos</h2>
          <p className="text-center max-w-lg">Configura modelos de negocio de suscripción (ej: cajas mensuales) conectando la API de Stripe o Mercado Pago. Módulo Proyectado.</p>
        </div>
      </main>
    </div>
  );
}
