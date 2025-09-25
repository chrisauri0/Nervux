```sh
git clone https://github.com/chrisauri0/Nervux.git
```


flowchart TB
    %% Personas / Clientes
    U[Usuario / Jugador\n(PC, Móvil, TV, Web)] --> C1[Cliente GeForce NOW\n(App/Web/TV)]
    C1 -->|Envia input\nRecibe video| CP[Control Plane / Orquestador]

    %% Control Plane
    CP -->|Asigna sesión| GH[Game Session Host\n(GPU Instance)]
    CP -->|Gestión subscripciones\nColas, Auth| AUTH[Auth & Billing Service]
    CP -->|Telemetry / Logs| MON[Monitoring & Analytics]

    %% Game Session Host
    GH -->|Frames brutos| ENC[Media Pipeline / Encoder\n(H.264/AV1 RTP/WebRTC)]
    ENC -->|Video/audio stream| C1
    C1 -->|Input (teclas, joystick)| GH

    %% Storage
    GH --> ST[Storage Distribuido / NVMesh\n(Imágenes de juegos, DLC)]
    
    %% Sistemas externos
    CP --> PAY[Payment System]
    CP --> PUB[Publisher APIs / Launchers\n(Steam, Epic)]
    ENC --> CDN[CDN / Edge Nodes\nDistribución de assets]

    %% Relaciones
    MON --> CP
    ST --> GH


# NERVUX Neurotechnology

Sitio web oficial de NERVUX Neurotechnology, empresa especializada en neurotecnologías para la optimización de la salud cerebral. Ofrecemos información sobre tratamientos innovadores como la Estimulación Magnética Transcraneal (EMT), testimonios, preguntas frecuentes y contacto.

## 🚀 Tecnologías utilizadas

- [Astro](https://astro.build/) (framework principal)
- [MDX](https://mdxjs.com/) para contenido enriquecido
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [Netlify](https://www.netlify.com/) para despliegue
- Integraciones: `@astrojs/mdx`, `@astrojs/sitemap`, `@tailwindcss/vite`

## 📁 Estructura del proyecto

```
├── public/                # Archivos estáticos (fuentes, imágenes, etc.)
├── src/
│   ├── assets/            # Imágenes y recursos multimedia
│   ├── components/        # Componentes Astro reutilizables
│   ├── content/           # Contenido en MDX
│   ├── layouts/           # Layouts base
│   ├── pages/             # Páginas principales del sitio
│   └── styles/            # Estilos globales
├── .astro/                # Archivos generados por Astro
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind CSS
├── astro.config.mjs       # Configuración de Astro
├── tsconfig.json          # Configuración de TypeScript
└── netlify.toml           # Configuración de despliegue en Netlify
```

## 🧑‍💻 Scripts principales

| Comando           | Acción                                              |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Inicia el servidor de desarrollo (`localhost:4321`) |
| `npm run build`   | Genera el sitio para producción en `./dist/`        |
| `npm run preview` | Previsualiza el sitio generado                      |

## 🌐 Estructura de páginas

- `/` — Página principal (Hero, explicación EMT, quiz, testimonios, contacto)
- `/tratamientos` — Información sobre tratamientos ofrecidos
- `/preguntas` — Preguntas frecuentes y profesionales
- `/antecedentes` — Historia y evidencia científica de la EMT
- `/contacto` — Formulario de contacto
- `/404` — Página de error personalizada

## 🎨 Paleta de colores y tipografías

- Colores principales: `#010119`, `#1b56ac`, `#0de7fc`, `#a6a6a6`, `#e7f1f8`, `#ffffff`, `#000000`
- Tipografías: Glacial Indifference, Roboto, League Spartan, Atkinson

## 📄 Créditos y licencia

- Basado en [Bear Blog](https://github.com/HermanMartinus/bearblog/)
- Licencia MIT para estilos base

---

¿Dudas o sugerencias? Contáctanos en [Nervux1@gmail.com](mailto:Nervux1@gmail.com) o por WhatsApp al 4424488313.
