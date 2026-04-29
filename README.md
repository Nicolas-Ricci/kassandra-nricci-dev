# Kassandra AI 2.1 — Ecosistema Digital Beta

Kassandra AI 2.1 es un ecosistema de panel de control futurista y responsivo diseñado con una estética **Cyberpunk / Sci-Fi**. Este proyecto sirve como interfaz central para un asistente virtual avanzado, integrando visualizaciones de datos, gestión de misiones y una interfaz de chat inteligente.

Desarrollado por **[nricci.dev](https://nricci.dev)**.

---

## 🚀 Características Principales

- **Diseño Cyberpunk Premium:** Interfaz oscura con efectos de neón, glassmorphism, scanlines de tipo CRT y animaciones fluidas.
- **Arquitectura de Islas:** Los módulos del sistema están organizados en "islas" flotantes interconectadas (Data Hub, Automatización, Misiones, Utilidades).
- **Responsividad Fluida:** Optimizado para monitores 4K, laptops y dispositivos móviles con ajustes automáticos de escala y layout.
- **Asistente Virtual Kassandra:** Chat integrado (Beta) con personalidad propia, desarrollado para asistencia en productividad y organización.
- **HUD Holográfico:** Barra superior dinámica con estados de sistema, control de audio y notificaciones.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** SVG personalizados con renderizado de píxeles nítidos.
- **Diseño:** Sistema de colores basado en HSL para contrastes neón de alta fidelidad.

---

## 📦 Instalación y Uso

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 📂 Estructura del Proyecto

```text
src/
├── components/       # Componentes modulares (Islas, HUD, Chat, etc.)
├── assets/           # Recursos estáticos
├── App.jsx           # Orquestador principal y lógica de layout
├── index.css         # Sistema de diseño global y animaciones custom
└── main.jsx          # Punto de entrada de React
```

---

## 📝 Notas de Versión (Beta 2.1)

- Se ha unificado la lógica de escalado para laptops.
- Se ha optimizado la versión móvil ocultando paneles secundarios y centrando el acceso al chat.
- El chat incluye ahora scroll persistente y una barra de desplazamiento estética.
- Créditos de desarrollador integrados globalmente.

---

## ✉️ Contacto

Si tienes dudas o feedback sobre Kassandra AI, puedes contactar a:
- **Web:** [nricci.dev](https://nricci.dev)
- **Email:** [nicolas@nricci.dev](mailto:nicolas@nricci.dev)

---
*Kassandra AI — Asistente virtual en desarrollo permanente.*
