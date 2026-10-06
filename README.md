# 🍻 BeerBrowse - Buscador de Cervecerías

Proyecto desarrollado como **Trabajo Práctico Final (Módulo 3)** para el Curso Inicial Front-End de la UTN.BA.

BeerBrowse es una aplicación web interactiva (SPA) que permite descubrir y explorar establecimientos, microcervecerías y brewpubs de diferentes partes del mundo. Consume los datos directamente de la API pública [Open Brewery DB](https://www.openbrewerydb.org/).

🌐 **[Ver Aplicación en Vivo](https://tp-final-frontend-developer.vercel.app/)**

## 🚀 Características y Funcionalidades

- **Exploración:** Listado dinámico de cervecerías en formato tarjeta (Cards) con datos clave.
- **Filtrado Avanzado (Plus):** Búsqueda de cervecerías por país mediante un formulario controlado.
- **Rutas Dinámicas:** Navegación fluida sin recargas utilizando `react-router-dom`.
- **Vista de Detalles:** Página específica para cada cervecería con información extendida (dirección, web, teléfono).
- **Manejo de Errores y Carga:** Indicadores de "Cargando..." y manejo de errores de conexión con la API.
- **Página 404 (Plus):** Interfaz amigable para rutas inexistentes (¡Barril vacío!).

## 🛠️ Tecnologías Utilizadas

- **React.js** (Librería principal UI)
- **Vite** (Entorno de desarrollo y empaquetador)
- **React Router DOM v6** (Enrutamiento declarativo)
- **CSS3** (Estilos nativos con flexbox y CSS Grid)
- **Custom Hooks** (`useFetchBreweries`, `useFetchBrewery` para modularizar la lógica de llamadas a la API)

## 💻 Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ijsgerez/tp-final-frontend-developer.git
   ```

2. **Ingresar a la carpeta del proyecto:**
   ```bash
   cd tp-final-frontend-developer
   ```

3. **Instalar las dependencias:**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
   ```bash
   npm install
   ```

4. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   La terminal te indicará una ruta local (generalmente `http://localhost:5173/`). Abre ese enlace en tu navegador web.

---
Creado con 💛 por [Javier Gerez](https://github.com/ijsgerez).