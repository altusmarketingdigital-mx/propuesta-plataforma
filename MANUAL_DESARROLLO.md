# Manual de Desarrollo: TribuSport E-commerce Custom

Este documento es tu guía maestra técnica. Contiene las instrucciones paso a paso para levantar el proyecto, entender la arquitectura y conocer el orden en que desarrollaremos las funcionalidades.

---

## 1. Arquitectura del Proyecto
El proyecto está dividido en tres pilares principales (Monorepo):
*   **/frontend:** La interfaz de la tienda (lo que ve el cliente). Creado con **Next.js 14**, **React** y **Tailwind CSS**.
*   **/backend:** El motor lógico y API. Creado con **Node.js (Express)**, **TypeScript** y **Prisma ORM**.
*   **/admin_panel:** (Futuro) El panel de control para gestionar ventas e inventario.
*   **Base de Datos:** PostgreSQL ejecutándose de forma aislada a través de Docker.

---

## 2. Requisitos Previos (Entorno de Trabajo)
Para que el código funcione en tu computadora, debes tener instaladas las siguientes herramientas:
1.  **Node.js** (Versión 18+ o superior)
2.  **Docker Desktop** (Para levantar la base de datos sin instalaciones complejas).
3.  **Git** (Para control de versiones).
4.  **VS Code** (Editor de código recomendado con las extensiones de *Prettier* y *Prisma*).

---

## 3. Comandos para Levantar el Entorno Local
Sigue estos pasos cada vez que te sientes a desarrollar para encender los "motores" del proyecto.

### Paso A: Levantar la Base de Datos
Abre una terminal en la raíz del proyecto (`d:\PROYECTO TRIBUSPORT SILVIA`) y ejecuta:
```bash
docker-compose up -d
```
*Esto encenderá el contenedor de PostgreSQL en segundo plano (puerto 5432).*

### Paso B: Iniciar el Backend (API)
Abre otra pestaña de terminal, entra a la carpeta del backend y córrelo en modo desarrollo:
```bash
cd backend
npm run dev
```
*Esto encenderá el servidor de Node.js (típicamente en http://localhost:3001) escuchando los cambios en tiempo real.*

### Paso C: Iniciar el Frontend (Tienda)
Abre una tercera pestaña de terminal para el frontend:
```bash
cd frontend
npm run dev
```
*Esto encenderá la interfaz gráfica en http://localhost:3000.*

---

## 4. Hoja de Ruta de Desarrollo (Paso a Paso)

Este es el orden lógico con el que iremos programando el sistema. Iremos marcando cada paso conforme avancemos.

### Hito 1: Cimientos del Backend (Fase Actual)
1.  [x] Definir esquema de la Base de Datos (`schema.prisma`).
2.  [x] Inicializar configuración de TypeScript y Linters.
3.  [ ] Crear servidor base de Express (`src/server.ts`).
4.  [ ] Ejecutar la migración a la base de datos (`npx prisma migrate dev`).
5.  [ ] Crear Endpoints (Rutas) iniciales (Ej. `GET /api/products`).

### Hito 2: Estructura del Frontend
1.  [x] Inicializar proyecto de Next.js.
2.  [ ] Limpiar código por defecto e inyectar variables de diseño (Colores de TribuSport en Tailwind).
3.  [ ] Crear Componentes Universales (Navbar, Footer, Botones).
4.  [ ] Conectar el Frontend con el Backend para pintar la lista de productos (Fetch a la API).

### Hito 3: Funcionalidades Core (Catálogo y Carrito)
1.  [ ] Maquetar la Ficha de Producto (Imágenes, selector de Tallas, Precio).
2.  [ ] Programar el Contexto/Estado Global del Carrito de Compras (Añadir, Eliminar, Calcular Total).
3.  [ ] Lógica de validación de inventario (No dejar añadir al carrito si el backend dice que no hay stock).

### Hito 4: Pagos y Seguridad
1.  [ ] Sistema de Autenticación de Usuarios (Registro/Login con JWT).
2.  [ ] Pantalla de Checkout (Formulario de dirección).
3.  [ ] Integración de SDK de Mercado Pago (Creación del token de pago).
4.  [ ] Endpoint para recibir confirmaciones de pago (Webhooks) y descontar inventario.

### Hito 5: Backoffice (Panel Admin)
1.  [ ] Pantalla para ver pedidos y cambiar estatus (Ej. "Enviado").
2.  [ ] Interfaz para crear/editar productos y cargar fotos.

---

## 5. Buenas Prácticas
*   **Git Commits:** Al terminar cada funcionalidad, siempre hacer un `git commit` descriptivo (ej. `feat: crear modelo de productos`).
*   **Tipado Estricto:** Nunca usar `any` en TypeScript. Siempre definir las interfaces (ej. `interface Product`).
*   **Variables de Entorno:** Nunca colocar contraseñas o claves de API (como las de Mercado Pago) directamente en el código. Siempre usar el archivo `.env`.
