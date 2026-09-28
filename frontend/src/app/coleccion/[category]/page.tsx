import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Mock de productos para el diseño
const MOCK_PRODUCTS = [
  { id: 1, name: 'Falda Padel Pro Blanca', price: 950, slug: 'falda-pro-blanca', img: 'https://picsum.photos/id/1011/800/1000' },
  { id: 2, name: 'Falda Plisada Carbón', price: 1100, slug: 'falda-plisada-carbon', img: 'https://picsum.photos/id/1050/800/1000' },
  { id: 3, name: 'Top Deportivo Menta', price: 750, slug: 'top-menta', img: 'https://picsum.photos/id/1012/800/1000' },
  { id: 4, name: 'Falda Clásica Negra', price: 890, slug: 'falda-clasica-negra', img: 'https://picsum.photos/id/1059/800/1000' },
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.replace('-', ' ');

  return (
    <main className="min-h-screen flex flex-col bg-brand-white">
      <Navbar />
      
      {/* Cabecera de Categoría */}
      <div className="bg-brand-cream py-12 px-4 text-center border-b border-gray-200">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-brand-carbon uppercase tracking-tight">
          {categoryName}
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Descubre nuestra selección diseñada para tu mejor rendimiento en la cancha.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col md:flex-row gap-8">
        
        {/* Barra lateral de Filtros (Desktop) */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-bold uppercase tracking-wide mb-4 border-b pb-2">Filtros</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-3">Talla</h4>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="border border-gray-300 w-10 h-10 flex items-center justify-center text-sm hover:border-brand-carbon transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Color</h4>
              <div className="flex gap-2">
                <button className="w-6 h-6 rounded-full bg-black border border-gray-300"></button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-300"></button>
                <button className="w-6 h-6 rounded-full bg-brand-accent border border-gray-300"></button>
              </div>
            </div>
          </div>
        </aside>

        {/* Cuadrícula de Productos */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">{MOCK_PRODUCTS.length} productos</span>
            <select className="border border-gray-300 text-sm px-3 py-2 bg-white outline-none focus:border-brand-carbon">
              <option>Destacados</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Más nuevos</option>
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {MOCK_PRODUCTS.map((product) => (
              <Link href={`/producto/${product.slug}`} key={product.id} className="group flex flex-col">
                <div className="w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-brand-carbon/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="font-semibold text-brand-carbon text-sm md:text-base mb-1">{product.name}</h3>
                <p className="text-brand-carbon font-bold">${product.price.toFixed(2)} MXN</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
      
      <Footer />
    </main>
  );
}
