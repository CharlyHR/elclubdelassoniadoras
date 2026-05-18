# CLAUDE.md — El Club de las Soñadoras · Pau Castro

## Always Do First
- **Invocar el skill `frontend-design`** antes de escribir cualquier código frontend, en cada sesión, sin excepciones.
- **Revisar `brand_assets/`** antes de cualquier decisión de diseño. Si hay logo, fotos o guía visual: usarlos. Sin brand assets presentes, respetar la identidad definida abajo.

---

## Contexto del Proyecto

Sitio web para **Pau Castro**, abogada UBA especializada en fertilidad, coach y mamá por FIV. Fundadora de *El Club de las Soñadoras* — comunidad de 55K+ personas en Instagram (@elclubdelassoniadoras).

**Propuesta única:** No es un estudio jurídico genérico. Es una combinación de rigor legal + empatía real + comunidad. Pau vivió en carne propia el proceso de fertilidad. Eso la diferencia de cualquier competidor.

**Lema:** *#AquíNoSeRindeNadie*

**Sitio estático:** HTML + CSS + JS puro. Sin frameworks, sin CMS. Se sube directamente a Hostinger vía File Manager.

---

## Archivos del Proyecto

```
PauWeb/
├── index.html            ← One page principal
├── faqs.html             ← Página de preguntas frecuentes (mismo header/footer)
├── brand_assets/         ← Logo, fotos de Pau (cuando lleguen)
├── imagenes/
│   ├── pau-hero.jpg      ← Foto principal (placeholder hasta que llegue)
│   └── pau-about.jpg     ← Foto sección Quiénes Somos
├── screenshot.mjs
└── temporary-screenshots/
```

---

## Secciones de index.html (One Page)

1. **Hero** — Primera impresión. La sección más importante. Efecto WOW obligatorio.
2. **Quiénes Somos** — Pau como persona y El Club como comunidad.
3. **Servicios** — Amparos legales, Asesoría 1:1, Coaching.
4. **Historias** — Testimonios estilo Instagram DM. Sección estrella.
5. **Contacto** — Formulario completo + WhatsApp + email.
6. **Footer** — Links, hashtag, link a FAQs.

---

## Brand Identity

### Paleta de colores
```
--rose:        #C1847A   /* Rosa polvoso — primario, CTAs */
--rose-light:  #E8C5BF   /* Rosa claro — bordes, fondos suaves */
--rose-pale:   #F5EAE7   /* Rosa muy pálido — fondos de cards */
--rose-deep:   #8B5C54   /* Rosa oscuro — hover states */
--cream:       #FAF7F2   /* Crema — fondo principal */
--cream-dark:  #F0EAE0   /* Crema oscuro — separadores */
--sage:        #8B9E8A   /* Verde salvia — acento secundario */
--sage-light:  #C4D0C3   /* Salvia claro — blobs decorativos */
--terracotta:  #B86B55   /* Terracota — énfasis */
--sand:        #D4C5B0   /* Arena — elementos neutros */
--dark:        #2A1F1C   /* Casi negro cálido — texto, fondo historias */
--text-muted:  #8A7A74   /* Gris cálido — texto secundario */
```

Nunca usar azules fríos, morados genéricos, grises neutros, paleta default de Tailwind.

### Tipografía
- **Display:** `Cormorant Garamond` — títulos, citas, testimonios. Poético, elegante.
- **Body:** `DM Sans` — cuerpo, labels, UI. Limpio, moderno.
- Google Fonts: `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500`
- Labels/eyebrows: DM Sans 500, uppercase, letter-spacing 0.15em, color `--rose`
- Énfasis poético en títulos: italic en `--rose`
- Nunca: Inter, Roboto, Arial, system-ui

### Estilo general
- Grain sutil en body: SVG noise filter, opacity 0.04-0.06
- Blobs decorativos: `border-radius:50%; filter:blur(80px)` — profundidad sin ruido
- Sombras con tinte: `0 12px 32px rgba(193,132,122,0.25)`. Nunca flat.
- Border-radius: cards 20-24px, botones 100px pill, imágenes asimétricas

---

## Hero — Efecto WOW (Prioridad Máxima)

**Layout:** asimétrico — texto izquierda 55%, foto Pau derecha 45%

**Blobs animados de fondo:**
Círculos con `filter:blur(80px)` que se mueven lentamente con CSS keyframes (15-20s loop, movimiento suave de translate + scale).

**Text Reveal Cinematográfico:**
```css
@keyframes lineReveal {
  from { transform: translateY(110%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.hero-line { overflow: hidden; }
.hero-line span {
  display: block;
  animation: lineReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}
```
Cada línea del título entra con stagger de 0.15s. Efecto de "cortina que se abre".

**Partículas flotantes:**
10-12 círculos (4px-16px) en `--rose-light`, `--sage-light`, `--cream-dark`. Animación float independiente + parallax suave con mousemove JS. Opacity 0.3-0.6. En mobile: 6 partículas, sin parallax.

**Foto de Pau:** `mix-blend-mode: multiply` sobre fondo `--rose-pale`. Placeholder: `imagenes/pau-hero.jpg` → `https://placehold.co/600x750/E8C5BF/8B5C54?text=Pau+Castro`

**Floating cards:** ocultas en mobile. En desktop:
- Card 1: ⚖️ "Amparos urgentes" / "Ley 26.862 · Fertilidad asistida" — fadeInLeft delay 0.8s
- Card 2: 🤝 "#AquíNoSeRindeNadie" / "55K+ soñadoras" — fadeInLeft delay 1.1s

**Stats:** `55K+` / `642` / `100%` en Cormorant Garamond grande, con labels DM Sans uppercase.

**Copy:**
- Eyebrow: "Abogada · Coach · Mamá por FIV"
- Título: "Tu sueño tiene / *respaldo legal* / y comunidad"
- Subtítulo: "Si tu obra social te pone trabas para un tratamiento de fertilidad, estás en el lugar correcto. Te acompañamos desde el amparo hasta el alma."
- CTA primario: "Iniciar consulta gratuita →"
- CTA secundario: "Ver historias reales →"

---

## Historias — Sección Estrella (Instagram DM Style)

Esta es el corazón emocional del sitio. Tiene que sentirse auténtica — como ver los DMs reales que Pau recibe.

### Fondo de sección
`--dark` (#2A1F1C) con grain sutil. Íntimo, como abrir el teléfono de noche.

### Anatomía de cada card DM

**Barra superior (simula header de conversación Instagram):**
```
← [avatar] @nombre_usuario          📷 📹
```
- Fondo: `rgba(255,255,255,0.04)`, `border-bottom: 1px solid rgba(255,255,255,0.08)`
- Flecha ← decorativa a la izquierda
- Avatar circular con iniciales, fondo `--rose`
- Nombre en gris claro, DM Sans, 0.82rem
- Íconos de cámara/video a la derecha (SVG simples, decorativos)

**Burbuja del mensaje:**
- Fondo: `rgba(255,255,255,0.07)` + `backdrop-filter: blur(4px)`
- Borde: `1px solid rgba(193,132,122,0.25)`
- Border-radius: `4px 18px 18px 18px` (esquina superior izquierda recta — estilo Instagram DM)
- Texto: Cormorant Garamond italic, 1.1rem, `rgba(255,255,255,0.88)`, line-height 1.7
- Padding: 1.25rem 1.5rem

**Footer de la card:**
- Corazón ❤️ + número de likes (decorativo, ej: "847")
- Timestamp relativo: "hace 3 semanas", "hace 1 mes" — DM Sans, 0.72rem, `rgba(255,255,255,0.35)`
- Alineados a la derecha

### Efectos hover y click
```
Normal:  opacity 0.85, transform scale(1), borde sutil
Hover:   opacity 1, scale(1.02), borde --rose-light más visible,
         box-shadow: 0 0 40px rgba(193,132,122,0.15)
         el ❤️ pulsa: keyframe scale(1→1.3→1)
Click:   el ❤️ anima (scale 1→1.5→0.9→1.1→1), color rojo brillante
         el contador sube +1
```

### Layout
- Grid 3 columnas desktop, 2 tablet, 1 mobile
- Alturas variables (masonry feel) — usar `columns: 3` CSS o grid con `align-items: start`
- Scroll reveal con stagger 0.1s entre cards

### Testimonios a usar (apodos estilo Instagram)
| Usuario | Texto | Detalle |
|---|---|---|
| `@maria.flo` | "Cuando la obra social me rechazó por segunda vez, ya no tenía energías. Pau no solo presentó el amparo en tiempo récord, sino que me explicó cada paso. En tres semanas tenía la autorización." | Amparo FIV · Bs As |
| `@laurita_cba` | "Encontré a Pau cuando más perdida estaba. Su cuenta me dio la información que necesitaba y cuando necesité ayuda legal, ya sabía que era la persona indicada. Es abogada y es persona." | Asesoría · Córdoba |
| `@vale.sonadora` | "El coaching me cambió la cabeza. Llegué a las sesiones angustiada y salí con herramientas reales. Pau entiende porque vivió el proceso. Eso no tiene precio." | Coaching · Rosario |
| `@ana.g.mza` | "Mi prepaga decía que yo ya había 'agotado' los intentos. Pau demostró que eso no existe en la ley. Gracias a ella voy por mi cuarto transfer con cobertura completa." | Amparo · Mendoza |
| `@romi.bsas` | "La comunidad del Club me hizo sentir que no estaba sola. Pero cuando necesité respaldo legal de verdad, Pau respondió rápido, claro, y con un trato humano que uno no espera de una abogada." | Asesoría + Coaching · CABA |
| `@caro.esperando` | "Nunca imaginé que iba a necesitar una abogada para poder ser mamá. Pau me explicó mis derechos con una claridad y una calidez que no olvidé más." | Amparo · Santa Fe |

**Importante:** estos testimonios son representativos. Reemplazar por testimonios reales con permiso de las clientas antes de publicar.

---

## FAQs — faqs.html

### Estructura
- Header y footer **idénticos** al de index.html — copiar el código exacto
- Fondo: `--cream`, mismo estilo visual
- Link en nav (discreto, entre Historias y Contacto) y en footer

### Acordeón
- Cada pregunta: card con fondo blanco, `border: 1px solid var(--cream-dark)`, border-radius 12px
- Click para expandir: animación `max-height` + `opacity`, 0.4s ease
- Pregunta activa: `border-left: 3px solid var(--rose)`, fondo `--rose-pale` muy suave
- Ícono: `+` → rota 45° → `×` con `transform: rotate(45deg)`, transition 0.3s
- Tipografía pregunta: DM Sans 500, `--dark`
- Tipografía respuesta: DM Sans 400, `--text-muted`, line-height 1.8

### Contenido de preguntas

**Sobre amparos**
- ¿Qué es un amparo de fertilidad y cuándo lo necesito?
- ¿Mi obra social puede negarme la FIV por mi edad?
- ¿Cuántos tratamientos por año debe cubrir mi obra social?
- ¿Qué pasa si mi prepaga dice que "agotaste" los intentos?
- ¿Cuánto tarda en resolverse un amparo?
- ¿Puedo hacer un amparo si vivo en el interior del país?
- ¿La medicación para estimulación ovárica también está cubierta?

**Sobre derechos y cobertura**
- ¿Qué dice exactamente la Ley 26.862?
- ¿Las obras sociales y prepagas tienen las mismas obligaciones?
- ¿Qué tratamientos están incluidos en la cobertura obligatoria?
- ¿Qué documentación necesito para reclamar?

**Sobre coaching**
- ¿En qué se diferencia el coaching de la psicología?
- ¿Se puede hacer el acompañamiento de forma online?
- ¿Cuántas sesiones suelen necesitarse?

**Sobre El Club**
- ¿Qué es El Club de las Soñadoras?
- ¿Cómo puedo ser parte de la comunidad?
- ¿Pau atiende en todo el país?

---

## Navegación

### Desktop
- Logo/nombre a la izquierda — Cormorant Garamond, `--rose-deep`
- Links: Nosotras · Servicios · Historias · FAQs · Contacto
- CTA pill: "Consultá gratis" — fondo `--rose`, texto blanco
- Scroll → glass effect: `backdrop-filter: blur(16px)` + `background: rgba(250,247,242,0.92)` + border-bottom sutil

### Mobile — Hamburguesa
```css
/* 3 líneas → X animado */
.hamburger span { transition: transform 0.3s, opacity 0.3s; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: translateX(-8px); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
```
- Overlay full screen: fondo `--dark` (95% opacity) o `--cream`
- Links centrados, Cormorant Garamond 2rem, stagger de entrada
- Botón WhatsApp visible en el menú móvil
- Se cierra al hacer click en cualquier link

---

## Responsive — Mobile First

### Breakpoints
```
mobile:  < 640px    → 1 columna, padding 1.25rem
tablet:  640-900px  → 2 columnas donde aplique
desktop: > 900px    → layout completo
```

### Reglas por sección
- **Hero mobile:** columna única, foto debajo del texto, partículas reducidas a 6, floating cards ocultas
- **Historias mobile:** 1 columna, cards full width
- **Servicios mobile:** 1 columna
- **Contacto mobile:** columna única, formulario primero
- **Footer mobile:** columna única centrada
- **Títulos mobile:** `clamp(2.2rem, 8vw, 3.5rem)`
- **Touch targets:** mínimo 44×44px en todos los elementos interactivos

---

## Animaciones y Motion

- Scroll reveal: IntersectionObserver, `.reveal` → `.visible`, 0.7s ease, stagger por sección
- Hover cards: `translateY(-6px)` + shadow, `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Like DM: keyframe scale con rebote, color a rojo
- Acordeón FAQs: `max-height` + `opacity`, 0.4s ease
- Banner marquee: CSS `animation: marquee linear infinite`
- NUNCA `transition-all` — siempre propiedades específicas
- NUNCA animar layout properties (width, height, padding)

---

## Servidor y Screenshots

- **Live Server** (VS Code, Ritwick Dey) → `http://127.0.0.1:5500`
- `node screenshot.mjs http://127.0.0.1:5500` para index
- `node screenshot.mjs http://127.0.0.1:5500/faqs.html faqs-v1` para FAQs
- Guardar en `./temporary-screenshots/`
- Mínimo 2 rondas por página

---

## Reglas Duras

- Solo paleta definida. Cero Tailwind defaults.
- Solo Cormorant Garamond + DM Sans.
- Hero con blobs animados + partículas + text reveal. No negociable.
- Historias con estilo Instagram DM — no cards genéricas.
- `transition-all` prohibido.
- Responsive completo con hamburguesa animada.
- `index.html` y `faqs.html` comparten header y footer idénticos.
- Testimonios son representativos — reemplazar por reales antes de publicar.
- Funciona en Chrome, Firefox y Safari móvil.
