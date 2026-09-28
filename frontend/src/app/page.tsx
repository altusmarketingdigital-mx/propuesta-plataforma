import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-brand-cream flex items-center justify-center">
        {/* Foto de fondo (Unsplash: mujer jugando tenis/padel) */}
        <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=2070&auto=format&fit=crop" alt="Hero Padel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-carbon/40"></div> 
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tighter mb-4 uppercase">
            Domina la Cancha <br/> con Estilo
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Descubre nuestra nueva colección diseñada para darte el máximo rendimiento y la mejor silueta.
          </p>
          <Link 
            href="/coleccion/nueva-coleccion" 
            className="inline-block bg-brand-accent text-white font-bold px-8 py-4 uppercase tracking-widest hover:bg-brand-accentHover transition-colors shadow-lg"
          >
            Ver Colección
          </Link>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-heading text-center mb-12 uppercase tracking-tight">Compra por Categoría</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Faldas */}
          <Link href="/coleccion/faldas" className="group block relative h-80 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Faldas" />
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Faldas</h3>
             </div>
          </Link>
          {/* Tops */}
          <Link href="/coleccion/playeras" className="group block relative h-80 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tops" />
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Tops & Playeras</h3>
             </div>
          </Link>
          {/* Vestidos */}
          <Link href="/coleccion/vestidos" className="group block relative h-80 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1622158872594-e0691ab1a129?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Vestidos" />
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Vestidos</h3>
             </div>
          </Link>
          {/* Accesorios */}
          <Link href="/coleccion/accesorios" className="group block relative h-80 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1593344686252-c07a3c306660?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Paleteros" />
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Accesorios</h3>
             </div>
          </Link>
        </div>
      </section>

      {/* Banner MSI */}
      <section className="bg-brand-carbon text-brand-white py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 uppercase">Hasta 6 Meses Sin Intereses</h2>
        <p className="text-gray-300">Pagando con tarjetas de crédito participantes a través de Mercado Pago.</p>
      </section>

      <Footer />
    </main>
  );
}
