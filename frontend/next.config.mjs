/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de compresión y minificación para Producción
  compress: true,
  poweredByHeader: false, // Ocultar tecnología por seguridad (evita ataques dirigidos)

  // Cabeceras de Seguridad HTTP (Protección contra XSS, Clickjacking, MIME-sniffing)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Protege contra Clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload' // Forzar HTTPS
          }
        ]
      }
    ];
  }
};

export default nextConfig;
