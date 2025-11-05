# 🚀 Guía de Inicio Rápido - Portfolio CMSR92

## ¿Qué tienes ahora?

✅ **Portfolio HTML/CSS/JS** completo y profesional  
✅ **100% GRATIS** para siempre (GitHub Pages)  
✅ **Diseño idéntico** al original React  
✅ **Formulario de contacto** funcional  
✅ **Responsive** (móvil, tablet, desktop)  
✅ **SEO optimizado** con meta tags

---

## 🎯 Próximos Pasos (3 TAREAS)

### **TAREA 1: Configurar Formspree (5 minutos)**

1. Ve a **https://formspree.io** → **Sign Up** (GRATIS)
2. Crear cuenta con tu email
3. Click **"+ New Form"**
4. Nombre: `Portfolio Contact Form`
5. **Copia tu Form ID** (ejemplo: `mnnqkpdg`)
6. Abre `index.html` en un editor de texto
7. Busca línea **405**: `<form action="https://formspree.io/f/YOUR_FORM_ID"`
8. Reemplaza `YOUR_FORM_ID` con tu ID real
9. **Guarda** el archivo

**Configuración adicional (Recomendado):**
- Dashboard Formspree → Settings:
  - Email: `carlossuarezrivero_92@hotmail.com`
  - ✅ "Use sender's email as reply-to"
  - ✅ "reCAPTCHA v3"

---

### **TAREA 2: Publicar en GitHub Pages (10 minutos)**

#### **Opción A: GitHub Desktop (Más fácil)**
1. Descarga: https://desktop.github.com/
2. Abre GitHub Desktop
3. File → New Repository:
   - Name: `portfolio`
   - Local Path: Selecciona carpeta `static-portfolio`
4. "Publish repository" → Desactiva "Keep private"
5. Ve a GitHub.com → Tu repositorio → Settings → Pages
6. Source: `main` branch, `/root` folder → Save
7. **¡Listo!** Tu sitio en: `https://TU-USUARIO.github.io/portfolio`

#### **Opción B: Git (Terminal)**
```bash
cd static-portfolio
git init
git add .
git commit -m "Portfolio inicial"

# Crea repo en GitHub.com (público)
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git branch -M main
git push -u origin main

# Activa Pages: Settings → Pages → main branch → Save
```

---

### **TAREA 3 (OPCIONAL): Dominio Personalizado**

Si compraste dominio en IONOS.es (o similar):

**1. Configurar DNS en IONOS:**
| Tipo | Host | Destino |
|------|------|---------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | TU-USUARIO.github.io |

**2. GitHub:**
- Settings → Pages → Custom domain: `www.tudominio.com`
- Espera 10-60 min
- ✅ Activa "Enforce HTTPS"

---

## 📂 Estructura de Archivos

```
static-portfolio/
├── index.html          ← Tu portfolio completo
├── styles.css          ← Estilos profesionales
├── script.js           ← Navegación e interactividad
├── images/             ← Imágenes del portfolio
│   ├── Hero_background_data_visualization_*.png
│   └── Dashboard_project_preview_*.png
├── README.md           ← Guía completa
└── QUICK_START.md      ← Esta guía
```

---

## ✏️ Modificar Contenido

### **Añadir nuevo proyecto:**
1. Abre `index.html`
2. Busca línea ~224 (sección Projects)
3. Copia bloque `<div class="project-card">...</div>`
4. Pégalo debajo del existente
5. Modifica: título, descripción, tecnologías, link, imagen
6. Guarda y sube cambios a GitHub

### **Cambiar colores:**
Abre `styles.css` → Líneas 6-31 → Modifica variables:
```css
--color-primary: hsl(199, 89%, 48%);  /* Azul */
--color-chart-2: hsl(174, 72%, 56%);  /* Cyan */
```

---

## 🔄 Actualizar Sitio Después de Cambios

### **Con GitHub Desktop:**
1. Haz cambios en archivos
2. GitHub Desktop los detecta
3. Escribe mensaje: "Añadido proyecto X"
4. "Commit to main" → "Push origin"
5. **Espera 1-2 min** → Sitio actualizado

### **Con Git:**
```bash
git add .
git commit -m "Descripción cambios"
git push
```

---

## ❌ Solución de Problemas

| Problema | Solución |
|----------|----------|
| Formulario no envía | Verifica Form ID en `index.html` línea 405 |
| Página 404 | Repo debe ser público, Pages activado |
| Dominio no funciona | Espera 60 min, verifica DNS |
| Imágenes no cargan | Revisa rutas `images/nombre.png` |

---

## 💰 Costos Reales

- **Hosting**: 0€ (GitHub Pages)
- **Formulario**: 0€ (Formspree 50/mes)
- **SSL**: 0€ (automático)
- **Dominio**: ~12€/año (opcional)

**Total: 0€/mes** 🎉

---

## 📞 Necesitas Ayuda?

1. **Problemas técnicos**: Ver `README.md` (sección Problemas Comunes)
2. **Dudas Formspree**: https://help.formspree.io
3. **GitHub Pages**: https://docs.github.com/pages

---

## ✅ Checklist Final

- [ ] Formspree configurado (Form ID cambiado)
- [ ] Repositorio creado en GitHub (público)
- [ ] GitHub Pages activado
- [ ] Sitio cargando en `https://TU-USUARIO.github.io/portfolio`
- [ ] Formulario probado (envía email)
- [ ] (Opcional) Dominio personalizado configurado
- [ ] (Opcional) HTTPS activado

---

**¡Felicidades!** Tu portfolio profesional está en línea 🚀

**URL de tu portfolio:** `https://TU-USUARIO.github.io/portfolio`  
(o `https://www.tudominio.com` si configuraste dominio)

---

**Creado para:** Carlos Manuel Suárez Rivero - CMSR92  
**Fecha:** Octubre 2025  
**Costo total:** 0€ 💚
