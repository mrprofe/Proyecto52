# Proyecto 52 - Site GitHub Pages

Site estático para publicar en GitHub Pages.

## Estructura

- `index.html`: contenido principal.
- `style.css`: estilos visuales, colores y animaciones.
- `script.js`: menú móvil y animación al hacer scroll.
- `assets/logo-proyecto52.png`: logo del proyecto.

## Cómo editar enlaces

### Playlists de YouTube

En `index.html`, dentro de la sección `catalogo`, cada capítulo tiene un enlace como este:

```html
href="https://www.youtube.com/playlist?list=PL0b8WvDs4r84CAPITULO01"
```

Reemplaza ese valor por el playlist real de cada capítulo.

### Capítulo actual con flamas

Busca la clase:

```html
current-chapter
```

Mueve esa clase al capítulo que esté activo en ese momento.

### Canales

En la sección `canales`, cambia estos enlaces por los reales:

- WhatsApp: `https://wa.me/00000000000`
- Telegram: `https://t.me/proyecto52`
- Instagram: `https://www.instagram.com/proyecto52`

### Site actual

El bloque `site-actual` ya apunta a:

```text
https://mrprofe.github.io/Proyecto52/
```
