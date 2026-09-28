import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-carbon text-brand-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 tracking-tighter">TRIBUSPORT</h3>
            <p className="text-sm text-gray-400">
              Moda deportiva premium para mujeres. Diseñada para darte comodidad y estilo dentro y fuera de la cancha de pádel.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/nueva-coleccion" className="hover:text-brand-accent">Nueva Colección</Link></li>
              <li><Link href="/mujer/faldas" className="hover:text-brand-accent">Faldas y Shorts</Link></li>
              <li><Link href="/mujer/playeras" className="hover:text-brand-accent">Playeras y Tops</Link></li>
              <li><Link href="/accesorios" className="hover:text-brand-accent">Accesorios</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contacto" className="hover:text-brand-accent">Contacto</Link></li>
              <li><Link href="/faq" className="hover:text-brand-accent">Preguntas Frecuentes</Link></li>
              <li><Link href="/envios" className="hover:text-brand-accent">Política de Envíos</Link></li>
              <li><Link href="/devoluciones" className="hover:text-brand-accent">Cambios y Devoluciones</Link></li>
              <li><Link href="/guia-tallas" className="hover:text-brand-accent">Guía de Tallas</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Únete a la Tribu</h4>
            <p className="text-sm text-gray-400 mb-4">Suscríbete y recibe 10% de descuento en tu primera compra.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-brand-dark text-white px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent"
              />
              <button className="bg-brand-accent text-white px-4 py-2 text-sm font-bold hover:bg-brand-accentHover transition-colors">
                OK
              </button>
            </form>
          </div>
          
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} TribuSport MX. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs text-gray-500">
            <Link href="/privacidad" className="hover:text-brand-white">Aviso de Privacidad</Link>
            <Link href="/terminos" className="hover:text-brand-white">Términos del Servicio</Link>
            <span className="text-gray-700">|</span>
            <Link href="/admin/login" className="hover:text-brand-accent text-brand-accent transition-colors font-semibold">Acceso Backoffice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
