import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-brand-cream flex items-center justify-center">
        {/* Aquí iría la imagen de fondo con la modelo jugando pádel */}
        <div className="absolute inset-0 bg-brand-carbon/30"></div> 
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tighter mb-4 uppercase">
            Domina la Cancha <br/> con Estilo
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Descubre nuestra nueva colección de faldas y tops diseñados para darte el máximo rendimiento y la mejor silueta.
          </p>
          <Link 
            href="/nueva-coleccion" 
            className="inline-block bg-brand-accent text-white font-bold px-8 py-4 uppercase tracking-widest hover:bg-brand-accentHover transition-colors"
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
          <Link href="/mujer/faldas" className="group block relative h-80 bg-brand-cream overflow-hidden">
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Faldas</h3>
             </div>
          </Link>
          {/* Tops */}
          <Link href="/mujer/playeras" className="group block relative h-80 bg-brand-cream overflow-hidden">
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Tops & Playeras</h3>
             </div>
          </Link>
          {/* Vestidos */}
          <Link href="/mujer/vestidos" className="group block relative h-80 bg-brand-cream overflow-hidden">
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Vestidos</h3>
             </div>
          </Link>
          {/* Accesorios */}
          <Link href="/accesorios" className="group block relative h-80 bg-brand-cream overflow-hidden">
             <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
               <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors">Paleteros</h3>
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
