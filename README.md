# 🚀 Portfolio Profesional - Carlos Muñoz

Portfolio profesional de Data Science, Machine Learning, Business Intelligence y AI desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 🌐 Demo en Vivo

🔗 [Ver Portfolio](https://cmsr92.github.io/portfolio)

## ✨ Características

- 🎨 Diseño moderno y profesional con colores de marca (#0CA5BE, #57CDDF)
- 🌓 Tema claro/oscuro adaptativo
- 📱 Diseño responsive (mobile-first)
- ⚡ Animaciones suaves y transiciones
- 🎯 Secciones: Sobre Mí, Habilidades, Proyectos, Educación, Contacto
- 💼 60+ tecnologías en 10 categorías
- 📊 2 proyectos destacados + 5 en desarrollo

## 🛠️ Tecnologías

- HTML5 (semántico, accesibilidad)
- CSS3 (Variables, Grid, Flexbox, Animaciones)
- JavaScript (ES6+, IntersectionObserver, localStorage)
- Font Awesome 6.4.0
- Google Fonts (Inter)

## 📦 Estructura del Proyecto

```
cmsr92/
├── index_v2.html          # Página principal
├── styles_v2.css          # Estilos
├── script_v2.js           # JavaScript
├── images/                # Assets y placeholders
│   ├── cinema-dashboard.svg
│   └── ecommerce-analytics.svg
└── brand-assets/          # Logos y recursos de marca
```

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear repositorio en GitHub
```bash
# En tu terminal
cd C:\Users\Carlos\OneDrive\Desktop\cmsr92
git init
git add .
git commit -m "Initial commit: Portfolio profesional V2"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portfolio.git
git push -u origin main
```

### Paso 2: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: "main" → carpeta "/ (root)"
5. Save

### Paso 3: Renombrar archivos (automático)
GitHub Pages buscará automáticamente `index.html` como página principal.

**Opción A: Renombrar manualmente**
```bash
mv index_v2.html index.html
mv styles_v2.css styles.css
mv script_v2.js script.js
```
Luego actualiza las referencias en `index.html`:
- `<link href="styles.css">`
- `<script src="script.js">`

**Opción B: Usar los archivos v2 directamente**
Configura en Settings → Pages → "Index document" como `index_v2.html` (si disponible en tu plan)

Tu portfolio estará disponible en:
```
https://TU_USUARIO.github.io/portfolio
```

## 📝 Personalización

### Colores de marca
Los colores están definidos en `styles_v2.css`:
```css
--color-primary: #0CA5BE;
--color-primary-light: #57CDDF;
--color-gradient: linear-gradient(135deg, #0CA5BE 0%, #57CDDF 50%, #0BA5BE 100%);
```

### Contacto
Actualiza los enlaces en `index_v2.html`:
- Email: `mailto:tu@email.com`
- LinkedIn: `https://linkedin.com/in/tu-perfil`
- GitHub: `https://github.com/tu-usuario`

### Proyectos
Reemplaza los placeholders SVG con capturas reales:
```html
<!-- Cambiar esto -->
<div class="project-image placeholder">
    <i class="fas fa-chart-line fa-4x"></i>
</div>

<!-- Por esto -->
<img src="images/proyecto-screenshot.png" alt="Proyecto">
```

## 🎯 Próximos Pasos

- [ ] Tomar screenshots de proyectos reales
- [ ] Actualizar enlaces a repositorios GitHub
- [ ] Añadir dominio personalizado (cuando esté disponible)
- [ ] Implementar analytics (Google Analytics o Plausible)
- [ ] Añadir animaciones de fondo en hero (opcional)

## 📄 Licencia

© 2025 Carlos Muñoz. Todos los derechos reservados.

## 📧 Contacto

- **Email**: carlos@example.com
- **LinkedIn**: [linkedin.com/in/cmsr92](https://linkedin.com/in/cmsr92)
- **GitHub**: [github.com/cmsr92](https://github.com/cmsr92)

---

Desarrollado con 💙 por CMSR92 | Noviembre 2025
