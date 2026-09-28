# Plan de Trabajo: Desarrollo de E-commerce Custom (100% In-House)

Este plan de trabajo detalla las fases para construir una plataforma de e-commerce desde cero, sin depender de plataformas de terceros como Shopify.

**Duración Estimada:** 12 a 16 semanas
**Stack Tecnológico Sugerido:**
*   **Frontend (Tienda):** Next.js (React) + Tailwind CSS (Alto rendimiento, Mobile-First, SEO optimizado).
*   **Backend (API):** Node.js (Express o NestJS) para la lógica de negocio.
*   **Base de Datos:** PostgreSQL (Relacional, robusta para inventarios y transacciones).
*   **Pasarelas de Pago:** Integración vía API de Mercado Pago y PayPal.
*   **Panel de Administración (Backoffice):** Panel custom (React) o un CMS Headless (ej. Strapi) para gestionar productos y pedidos.

---

## Fase 1: Arquitectura y Diseño UI/UX (Semanas 1-3)
*   [x] **Modelado de Base de Datos:** Diseño de esquemas (Usuarios, Productos, Variantes, Pedidos, Direcciones).
*   [x] **Wireframing y Prototipado:** Diseño de interfaces en Figma (Home, Categorías, Ficha de Producto, Carrito, Checkout). *[Nota: Realizado directamente en código Next.js para agilizar demo]*
*   [x] **Definición de API:** Estructuración de los *endpoints* REST o GraphQL que conectarán el front con el back.
*   [x] **Configuración de Repositorios:** Creación de repositorios en GitHub/GitLab para Front, Back y Admin.

## Fase 2: Desarrollo Backend y Backoffice (Semanas 4-7)
*   [x] **Autenticación y Seguridad:** JWT (JSON Web Tokens) para usuarios y administradores. Encriptación de contraseñas.
*   [x] **Módulo de Catálogo:** APIs para crear, leer, actualizar y borrar (CRUD) productos, categorías, tallas y colores.
*   [x] **Gestión de Inventario:** Lógica para descontar stock en tiempo real y prevenir sobreventas. (Se conecta junto al checkout).
*   [x] **Desarrollo del Panel Admin:** Interfaz visual para que el equipo pueda subir productos y ver pedidos sin tocar código.

## Fase 3: Desarrollo Frontend (Tienda Pública) (Semanas 6-10)
*   [x] **Maquetación UI:** Implementación de Tailwind CSS basada en el diseño de Figma.
*   [ ] **Catálogo y Filtros:** Conexión de la página de inicio, listado de productos y filtros dinámicos (talla, precio).
*   [x] **Ficha de Producto (PDP):** Visualización de galería de fotos, selección de variantes y validación de stock disponible.
*   [x] **Carrito de Compras:** Lógica de almacenamiento local/sesión para productos en el carrito.
*   [x] **Optimización Core Web Vitals:** Ajustes de velocidad de carga y SEO técnico (Server-Side Rendering con Next.js).

## Fase 4: Integración de Pagos y Logística (Semanas 10-13)
*   [x] **Checkout Custom:** Flujo de captura de dirección de envío y facturación.
*   [x] **Integración Mercado Pago (API):** Procesamiento de pagos con tarjeta de crédito/débito y generación de tokens de pago seguro.
*   [x] **Integración PayPal (API):** Botón de pago rápido.
*   [x] **Cálculo de Envíos:** Conexión con la API de Skydropx o Envia.com para cotizar envíos en tiempo real y generar guías automáticamente al confirmar el pago.
*   [x] **Webhooks:** Escuchar eventos del procesador de pagos para actualizar el estatus del pedido de "Pendiente" a "Pagado".

## Fase 5: Pruebas (QA), Seguridad y Despliegue (Semanas 14-16)
*   [ ] **Pruebas Unitarias y de Integración:** Testeo de flujos críticos (añadir al carrito, pagar, descontar inventario).
*   [ ] **Auditoría de Seguridad:** Protección contra ataques comunes (SQL Injection, XSS, CSRF).
*   [ ] **Configuración de Servidores:** Despliegue en AWS, Vercel (Frontend) o DigitalOcean.
*   [ ] **Migración a Producción:** Vinculación del dominio final, certificados SSL y puesta en marcha.
