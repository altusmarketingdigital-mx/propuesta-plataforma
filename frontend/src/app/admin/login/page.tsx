'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // En producción aquí se haría el POST al backend (/api/auth/login)
    // Para la demo, redirigimos directamente al panel de inicio
    router.push('/admin/inicio');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        
        <div className="bg-brand-carbon py-6 text-center">
          <h1 className="text-2xl font-heading font-extrabold text-white tracking-widest uppercase">
            TribuSport
          </h1>
          <p className="text-brand-accent text-sm mt-1">Panel de Administración</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                defaultValue="admin@tribusport.mx"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input 
                type="password" 
                defaultValue="password123"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-brand-accent focus:ring-brand-accent" />
                <span className="ml-2 text-sm text-gray-600">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-brand-accent hover:underline">¿Olvidaste tu contraseña?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-carbon text-white font-bold py-3 uppercase tracking-widest rounded hover:bg-black transition-colors shadow-md"
            >
              Ingresar al Panel
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 py-4 text-center border-t border-gray-100">
          <Link href="/" className="text-sm text-gray-500 hover:text-brand-carbon flex items-center justify-center gap-2">
            <span>&larr;</span> Volver a la tienda pública
          </Link>
        </div>
      </div>
    </div>
  );
}
