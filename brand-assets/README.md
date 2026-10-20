# CMSR92 Brand Assets - Logo & Colores Corporativos

Este directorio contiene todos los recursos de marca (logos y especificaciones de color) del identificador de marca CMSR92.

## 📁 Variantes de Logo Disponibles

### 1. **CMSR92-logo-horizontal.svg** (280×100px)
- **Uso principal**: Headers de sitios web, firmas de email, documentos
- **Formato**: Logo horizontal con red neuronal + texto
- **Mejor para**: Espacios anchos y horizontales

### 2. **CMSR92-logo-square.svg** (300×300px)
- **Uso principal**: Avatares de redes sociales, perfiles, thumbnails
- **Formato**: Símbolo de red neuronal arriba + texto CMSR92 debajo
- **Mejor para**: Espacios cuadrados (LinkedIn, Twitter, GitHub, etc.)

### 3. **CMSR92-symbol-only.svg** (100×100px)
- **Uso principal**: Favicon, iconos de app, elementos pequeños
- **Formato**: Solo el símbolo de red neuronal
- **Mejor para**: Espacios muy reducidos donde el texto no es legible

### 4. **CMSR92-logo-large.svg** (560×200px)
- **Uso principal**: Banners, impresión, presentaciones
- **Formato**: Logo horizontal de alta calidad (2x resolución)
- **Mejor para**: Materiales impresos, posters, banners de alta resolución

### 5. **CMSR92-logo-horizontal-white.svg** (280×100px)
- **Uso principal**: Sobre fondos de color de marca (banda de cabecera de los dashboards)
- **Formato**: Mismo dibujo que el horizontal, en blanco y sin nodos internos
- **Mejor para**: Fondos turquesa oscuro (#065A68 → #087F93), donde el blanco tiene ≥ 4,7:1

> Los dashboards usan PNG exportados de estas variantes (`cmsr92-logo-blanco.png` y `cmsr92-simbolo.png`) para no
> depender de la tipografía instalada en el equipo de quien los visita.

---

## 🎨 Paleta de Colores Corporativos

### Colores Principales

#### **Cyan Principal** 
- **HEX**: `#0CA5BE`
- **RGB**: `rgb(12, 165, 190)`
- **Uso**: Color primario de marca, nodos de red neuronal, acentos principales

#### **Cyan Claro / Turquesa**
- **HEX**: `#57CDDF`
- **RGB**: `rgb(87, 205, 223)`
- **Uso**: Gradientes, highlights, punto medio de transiciones

#### **Cyan Oscuro**
- **HEX**: `#0BA5BE`
- **RGB**: `rgb(11, 165, 190)`
- **Uso**: Sombras, variaciones, texto sobre fondos claros

### Colores Secundarios

#### **Blanco**
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **Uso**: Nodos internos, bordes, texto sobre fondos oscuros

#### **Negro (sombras)**
- **HEX**: `#000000` (con 30% opacidad)
- **RGB**: `rgb(0, 0, 0, 0.3)`
- **Uso**: Sombras sutiles para mejorar contraste

---

## 🎯 Gradiente de Marca

**Gradiente principal del texto CMSR92:**
```css
background: linear-gradient(135deg, #0CA5BE 0%, #57CDDF 50%, #0BA5BE 100%);
```

Este gradiente cyan → turquesa → cyan crea un efecto vibrante que:
- ✅ Se ve perfectamente en fondos claros y oscuros
- ✅ Mantiene legibilidad en cualquier tema de navegador
- ✅ Representa innovación, tecnología y datos

---

## 📐 Especificaciones Técnicas

### Formato SVG
- **Vectorial escalable** sin pérdida de calidad
- **Compatible** con todos los navegadores modernos
- **Optimizado** para web con filtros y gradientes SVG nativos

### Características Especiales
- **Sombra sutil**: Mejora contraste en fondos claros sin afectar fondos oscuros
- **Gradientes incrustados**: Los colores están definidos dentro del SVG
- **Sin dependencias**: No requiere fuentes externas (Courier New o, si no está, la monoespaciada del sistema)

---

## 💡 Guía de Uso

### ✅ Usar el logo para:
- Headers y footers de sitios web
- Perfiles de redes sociales (LinkedIn, GitHub, Twitter, etc.)
- Firmas de correo electrónico
- Presentaciones y documentos profesionales
- Materiales impresos (tarjetas de visita, posters)
- Favicon de sitios web

### ❌ Evitar:
- Cambiar los colores del logo
- Distorsionar las proporciones (mantener aspect ratio)
- Añadir fondos de color que interfieran con el diseño
- Usar versiones de baja calidad cuando hay SVG disponible

---

## 🚀 Integración Rápida

### En HTML:
```html
<!-- Logo horizontal -->
<img src="brand-assets/logo-variants/CMSR92-logo-horizontal.svg" alt="CMSR92" height="50">

<!-- Logo cuadrado -->
<img src="brand-assets/logo-variants/CMSR92-logo-square.svg" alt="CMSR92" width="150">

<!-- Solo símbolo -->
<img src="brand-assets/logo-variants/CMSR92-symbol-only.svg" alt="CMSR92" width="40">
```

### Como Favicon:
```html
<link rel="icon" type="image/svg+xml" href="brand-assets/logo-variants/CMSR92-symbol-only.svg">
```

### En CSS (background):
```css
.logo {
    background-image: url('brand-assets/logo-variants/CMSR92-logo-horizontal.svg');
    background-size: contain;
    background-repeat: no-repeat;
}
```

---

## 📝 Notas de Diseño

1. **Red Neuronal**: El símbolo representa conexiones de datos, machine learning e inteligencia artificial
2. **Tipografía**: Monospace bold para reflejar profesionalismo técnico
3. **Colores Cyan/Turquesa**: Asociados con tecnología, innovación, confianza y datos
4. **Versatilidad**: Diseñado para funcionar en cualquier contexto (web, impreso, digital)

---

## 📄 Licencia

Estos logos son propiedad de Carlos Manuel Suárez Rivero (CMSR92) y están destinados para uso personal y profesional del propietario de la marca.

---

**Última actualización**: Noviembre 2025  
**Versión**: 1.0  
