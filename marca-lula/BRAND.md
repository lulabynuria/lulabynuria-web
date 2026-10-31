<!-- Guía de marca Método Lula. Fuente: Design System "Método Lula" en claude.ai. Los logos están en logos/ (los nombres de archivo coinciden con la tabla de Logotipos). -->

# Método Lula

Guía de estilo de **el método LULA by Núria Pallarés** (@lulabynuria) para todo lo que se haga alrededor del curso: web, landings de Kit, emails, stories, diapositivas y la plataforma del curso. Construida a partir del documento de branding de la marca; donde la guía añade algo que no estaba en el branding (por ejemplo, el texto para web), se indica como propuesta.

## Esencia y voz

> No es moda, es entenderte.

El Método Lula enseña a vestir según el propio cuerpo, el estilo y la vida real, para mujeres reales que quieren sentirse bien consigo mismas. El público son sobre todo mujeres de 40 a 65 años.

Cómo hablamos:

- **De tú, cercano y seguro.** "Aprenderás a vestir según tu cuerpo", no "El alumno aprenderá…".
- **Criterio antes que tendencia.** La idea central es que no hace falta más ropa ni un cuerpo distinto, sino criterio.
- **Frases cortas y claras.** Una idea por frase; nada de jerga de moda sin explicar.
- **Femenino por defecto** ("sé la primera", "suscrita"), porque el público es femenino.
- **Sin promesas exageradas ni presión.** Nada de "¡Últimas plazas!" en mayúsculas ni cuentas atrás falsas.

## Logotipos

Archivos originales de la diseñadora, en PNG de alta resolución (6250 px) con fondo transparente. Úsalos siempre como imagen, nunca recompuestos a mano.

| Archivo | Qué es | Sobre qué fondo |
| --- | --- | --- |
| `monograma.png` | Isotipo de cuatro bloques L · U · L · A | Blanco. Sobre gris perla, el bloque «A» se funde con el fondo |
| `monograma-vertical-fondo-blanco.png` | El mismo isotipo, formato vertical con fondo blanco opaco | Donde no se admite transparencia: foto de perfil, sellos impresos |
| `logotipo-burdeos.png` | "el método LULA by Núria Pallarés" en burdeos | Blanco, gris perla o rosa palo. Es la versión por defecto |
| `logotipo-coral.png` | Logotipo en coral | Burdeos, o blanco y gris perla solo en tamaño grande |
| `logotipo-rosa-palo.png` | Logotipo en rosa palo | Burdeos |
| `logotipo-gris-perla.png` | Logotipo en gris perla | Burdeos o coral (en coral, solo en tamaño grande) |

Normas:

- **Monograma** para avatares, favicon, esquinas de diapositivas y sellos; **logotipo** para portadas y cabeceras de web y email.
- Deja alrededor un margen mínimo igual a la altura de una letra de LULA.
- No cambies los colores de los bloques del monograma, no los redondees, no los deformes ni les pongas sombra.
- Para el favicon, reduce el monograma: el logotipo completo no se lee a tamaño pequeño.

## Color

| Token | Valor | Para qué |
| --- | --- | --- |
| `brand-coral` | #e26577 | Color principal: impacto, botones, LULA grande |
| `brand-burdeos` | #57151a | Tinta: texto principal y fondos oscuros |
| `brand-rosa-palo` | #f1bdcb | Tinte suave: fondos secundarios, texto sobre burdeos |
| `brand-gris-perla` | #f5f5f5 | Fondo neutro de todas las piezas |

Las piezas de la marca usan **grandes campos de un solo color**: una diapositiva entera en burdeos, otra en coral, otra en gris perla. No se mezclan más de dos colores de fondo en una misma vista.

Combinaciones de texto (contraste mínimo legible 4,5:1 para texto normal, 3:1 para títulos de 24px o más):

| Texto sobre fondo | Contraste | Uso |
| --- | --- | --- |
| Burdeos sobre gris perla | 12,6:1 | Cualquier texto |
| Blanco sobre burdeos | 13,8:1 | Cualquier texto |
| Rosa palo sobre burdeos | 8,4:1 | Cualquier texto |
| Burdeos sobre rosa palo | 8,4:1 | Cualquier texto |
| Coral sobre burdeos | 4,2:1 | Solo títulos y LULA grande |
| Blanco sobre coral | 3,3:1 | Solo títulos de 24px o más |
| Coral sobre gris perla | 3,0:1 | Solo títulos de 24px o más |

**Ojo:** en el branding, la diapositiva coral lleva un párrafo largo en blanco. Funciona en una pantalla grande, pero en móvil, web o email ese texto queda por debajo del mínimo legible. Para párrafos sobre coral, usa burdeos o pasa el párrafo a un fondo claro.

## Tipografía

Tres familias, todas en Google Fonts:

- **Noto Sans** — solo la palabra LULA, en mayúsculas y con interletrado muy amplio (`wordmark-lula`, 0,57em). En el documento de branding aparece como "Noto Serif Thai Condensed", pero esa fuente no incluye letras latinas: Canva la sustituye por Noto Sans, que es lo que realmente se ve. En web hay que cargar Noto Sans.
- **Cardo** — "el método" y antetítulos editoriales, siempre en minúscula (`eyebrow-metodo`).
- **Montserrat** — la firma y los titulares en cursiva (`firma`, `titular`), y el texto en Medium (`texto-presentacion`, `texto-web`).

El branding fija el texto con un interlineado de 2,23, muy aireado: es el estilo `texto-presentacion`, pensado para diapositivas y bloques cortos. Para párrafos largos en web y email, la guía propone `texto-web` (17px, interlineado 1,7).

En la web, las fuentes se alojan en el propio servidor (no se cargan desde Google) para no transferir datos de las visitantes a terceros.

## Composición

- **Mucho aire.** Contenido centrado, con márgenes generosos (`space-4` entre secciones).
- **Formas cuadradas.** Sin esquinas redondeadas salvo un `radius-sm` en campos y botones.
- **Una idea por vista.** Cada diapositiva, story o sección de web dice una sola cosa.
- **Bloque de firma.** "el método / LULA / by Núria Pallarés" apilado y centrado abre o cierra las piezas importantes.

## Aplicaciones

- **Web y plataforma del curso:** fondo gris perla, texto burdeos, botones coral con texto blanco en negrita a 16px o más.
- **Emails (Kit):** fondo blanco o gris perla, cabecera con el logotipo, texto burdeos en Montserrat con Arial como respaldo (muchos clientes de correo no cargan fuentes web).
- **Stories y reels:** campos de color a sangre, LULA o la frase clave en grande, máximo dos colores por pieza.
