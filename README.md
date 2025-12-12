
# 🏆 Aplicación Deportiva – Angular 19
Esta es una aplicación web desarrollada con Angular 19 enfocada en la gestión y visualización de información deportiva. Permite a usuarios consultar datos actualizados sobre jugadores, partidos y competiciones, ofreciendo una interfaz moderna, rápida y responsiva.

## 📌 Características principales
👥 Listado de jugadores con detalles individuales.

📊 Tabla de posiciones actualizada por torneo o categoría.

🗓️ Fixture completo con fechas, horarios y enfrentamientos.

⚽ Resultados de partidos en tiempo real o cargados manualmente.

📢 Comunicados o noticias importantes del club/torneo.

📈 Estadísticas deportivas globales e individuales.

🔐 Sistema de autenticación JWT para manejo seguro de sesiones.

🎨 Interfaz construida con Angular Material, siguiendo principios de diseño moderno.

## 🛠️ Tecnologías utilizadas
| Tecnología               | Uso                                               |
| ------------------------ | ------------------------------------------------- |
| **Angular 19**           | Framework principal para la aplicación web        |
| **TypeScript**           | Lenguaje base tipado para mejor mantenibilidad    |
| **Angular Material**     | Componentes UI modernos y accesibles              |
| **RxJS**                 | Programación reactiva y manejo de flujos de datos |
| **JWT (JSON Web Token)** | Autenticación y autorización                      |
| **Servicios REST**       | Comunicación con la API backend                   |
| **HTML / Material**      | Maquetación y estilos                             |


## 🏗️ Arquitectura del proyecto:
El proyecto sigue una arquitectura modular y organizada en capas, diseñada para mantener el código escalable, reutilizable y fácil de mantener. La estructura principal se divide en diferentes carpetas, cada una con una responsabilidad claramente definida:

- **Pages** sirven como contenedores principales que representan vistas completas.

Estas páginas utilizan **components** reutilizables para construir la UI.

- Los **services** proporcionan datos y lógica, conectándose con el backend mediante HTTP y usando RxJS.

- **interfaces** aseguran tipado estricto en todo el proyecto.

- **pipes** y **directivas** enriquecen la presentación y el comportamiento de la app.

- **templat**e define la estructura general de navegación y diseño.

- **environments** permiten cambiar configuraciones sin modificar el código fuente.

## Diseño Responsive: 
El diseño se validó para funcionar correctamente tanto en dispositivos móviles como en escritorio, usando las utilidades de Material Angular.

## Compatibilidad
Node 20.15.0.

## Desplegar aplicacion
Instalar dependencias de la aplicacion:

```bash
npm install
```

Para iniciar un servidor de desarrollo local, ejecute:

```bash
npm serve
```

## Aplicacion disponible

- Aplicacion deportiva Angular 19, Angular Material, NodeJS y PostgreSQL [Aplicacion Angular](https://apptorneoaniversario.onrender.com/)
Clave de acceso: campeones