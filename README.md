# Roberto Cervantes — Portfolio Web

Plantilla lista para publicar en **GitHub Pages**, con la estructura:

```
roberto-cervantes.com
├── index.html                # Home (Hero, Summary, Expertise, Projects, Experience, Education, Contact)
├── projects/
│   └── procurement-intelligence-portal.html   # Case Study
├── assets/
│   ├── styles.css
│   └── script.js
├── CNAME                      # Dominio personalizado
└── README.md
```

---

## Paso 1 — Crea una cuenta de GitHub

Si aún no tienes una: entra a [github.com](https://github.com) y crea una cuenta gratuita.

## Paso 2 — Crea el repositorio

1. En GitHub, haz clic en **New repository** (el botón "+" arriba a la derecha → *New repository*).
2. Nómbralo, por ejemplo: `roberto-cervantes-portfolio` (el nombre no afecta el dominio final).
3. Márcalo como **Public**.
4. No marques "Add a README" si vas a subir estos archivos ya hechos.
5. Haz clic en **Create repository**.

## Paso 3 — Sube los archivos

### Opción A — Desde el navegador (más fácil, sin usar la terminal)

1. En la página del repositorio recién creado, haz clic en **uploading an existing file** (o el botón **Add file → Upload files**).
2. Arrastra **todos** los archivos y carpetas de esta plantilla (`index.html`, `CNAME`, la carpeta `assets/`, la carpeta `projects/`) manteniendo la misma estructura.
3. Baja y haz clic en **Commit changes**.

> ⚠️ Importante: `index.html` debe quedar en la **raíz** del repositorio, no dentro de una subcarpeta.

### Opción B — Con Git desde la terminal

```bash
cd ruta/a/la/carpeta/site
git init
git add .
git commit -m "Primer commit: portfolio web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/roberto-cervantes-portfolio.git
git push -u origin main
```

## Paso 4 — Activa GitHub Pages

1. En el repositorio, ve a **Settings** (⚙️, arriba).
2. En el menú lateral, haz clic en **Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**.
5. Espera 1–2 minutos. GitHub te dará una URL tipo:
   `https://tu-usuario.github.io/roberto-cervantes-portfolio/`

Con esto **ya tienes el sitio publicado** (aunque todavía con la URL de GitHub, no con tu dominio propio).

## Paso 5 — Conecta tu dominio propio (roberto-cervantes.com)

Ya incluí el archivo `CNAME` con el contenido `roberto-cervantes.com`, así que solo falta apuntar el DNS del dominio hacia GitHub:

1. Entra al panel de tu proveedor de dominio (donde compraste `roberto-cervantes.com`: GoDaddy, Namecheap, Google Domains, etc.) y busca la sección **DNS**.
2. Crea estos registros:

   **Para el dominio raíz (`roberto-cervantes.com`)** — 4 registros tipo `A` apuntando a:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **Para `www.roberto-cervantes.com`** — un registro tipo `CNAME`:
   ```
   www   CNAME   tu-usuario.github.io.
   ```

3. Vuelve a **Settings → Pages** en GitHub, en el campo **Custom domain** escribe `roberto-cervantes.com` y guarda.
4. Espera a que la propagación DNS termine (puede tardar desde minutos hasta ~24 horas).
5. Cuando GitHub detecte el dominio correctamente, activa la opción **Enforce HTTPS** (aparecerá disponible después de la verificación).

## Paso 6 — Verifica

- Entra a `https://roberto-cervantes.com` y confirma que carga tu sitio.
- Prueba también `https://www.roberto-cervantes.com`.
- Revisa el sitio en móvil (el menú se convierte en botón hamburguesa).

---

## Cómo poner tu fotografía en el Hero

En el hero hay un marco circular con una foto de ejemplo (`assets/roberto-cervantes.jpg`). Para poner la tuya:

1. Toma o elige una foto tuya de traje, idealmente cuadrada (misma proporción de ancho y alto) y con buena resolución (mínimo 600x600px).
2. Reemplaza el archivo `assets/roberto-cervantes.jpg` por tu foto, **manteniendo el mismo nombre** (o si usas otro nombre/extensión, actualiza la línea `<img src="assets/roberto-cervantes.jpg" ...>` en `index.html`).
3. El marco circular, el borde bronce y las marcas técnicas de las esquinas se aplican automáticamente vía CSS — no necesitas recortar la foto en círculo tú mismo.

## Cómo personalizar el contenido

Todos los textos de ejemplo están marcados como "Reemplaza..." dentro de:

- `index.html` — secciones Home
- `projects/procurement-intelligence-portal.html` — el caso de estudio

Para editar, abre esos archivos con cualquier editor de texto (recomendado: [VS Code](https://code.visualstudio.com/)) y reemplaza el texto entre las etiquetas HTML, sin tocar las etiquetas mismas (`<p>`, `<h2>`, etc.).

Para añadir un cuarto proyecto en "Featured Projects", copia un bloque `<a class="project-row">...</a>` completo dentro de `index.html` y crea un nuevo archivo `.html` en `projects/` (puedes duplicar `procurement-intelligence-portal.html` como plantilla).

## Ver el sitio en tu computadora antes de publicarlo

No necesitas subir nada a GitHub para probarlo primero: simplemente haz doble clic en `index.html` y se abrirá en tu navegador. También puedes usar la extensión **Live Server** de VS Code para recargar automáticamente al guardar cambios.
