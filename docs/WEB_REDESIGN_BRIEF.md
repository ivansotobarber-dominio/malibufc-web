# Brief de rediseño, web oficial Malibú FC

Estado: auditoría inicial y dirección de diseño, 2026-08-10.

## Idea visual

Un club de fútbol de Tenerife contado como una crónica de jornada: campo, vestuario, personas, marcador y comunidad. La web debe priorizar evidencia real, jerarquía editorial y ritmo de partido sobre tarjetas decorativas.

## Diagnóstico priorizado

| Severidad | Evidencia a vigilar | Por qué resta credibilidad | Corrección exacta | Efecto esperado |
| --- | --- | --- | --- | --- |
| P0 | Placeholders visibles en contacto, plantilla, calendario o tienda | Parece demo, no web oficial | Separar bloques confirmados de pendientes y reducir el placeholder al mínimo | Más confianza |
| P0 | Datos deportivos y comerciales sin responsable visible | Riesgo de publicar información errónea | Añadir estado, fecha de actualización y responsable en el control interno | Menos errores |
| P1 | Repetición de tarjetas con el mismo peso | Sensación de plantilla generada | Usar una portada editorial con hero, marcador, rail de próximos partidos y bloques asimétricos | Más identidad |
| P1 | Tipografía y copy demasiado neutros | No transmite fútbol ni Tenerife | Definir sistema tipográfico propio, titulares compactos, labels de jornada y lenguaje de vestuario | Más carácter |
| P1 | Animación sin relación con el partido | Se percibe como adorno | Reservar movimiento a marcador, líneas de campo, entradas de contenido y estados de jornada | Interacción con propósito |
| P2 | Patrocinadores y colaboradores tratados igual que navegación | Pierde valor comercial | Crear módulo de alianzas con jerarquía, contraprestación y enlace | Mejor percepción de socios |
| P2 | Historia y audiovisual escondidos o pendientes | Falta narrativa de club | Crear páginas propias, aunque estén marcadas en construcción | Mejor arquitectura |
| P2 | Tienda sin señales de disponibilidad real | Riesgo de expectativas falsas | Mostrar diseño de referencia, precio pendiente, tallas y estado de pedido | Menos fricción |

## Dirección de interfaz

- Fondo marfil y azul noche, oro únicamente como acento funcional.
- Escudo, fotografía real y textura de campo como activos principales.
- Bordes y sombras discretos, sin glassmorphism ni blobs decorativos.
- Componentes limitados a hero editorial, match centre, rail, gallery, product list y content blocks.
- La portada resume; calendario, plantilla, tienda, historia y redes tienen páginas propias.
- Toda animación respeta `prefers-reduced-motion` y no oculta información.

## Próxima iteración de producto

1. Rehacer portada con jerarquía de partido y fotografía real.
2. Añadir página de historia, marcada como «en construcción».
3. Añadir módulo de vídeo y redes con YouTube Malibú FC pendiente de URL.
4. Convertir plantilla, calendario y tienda en experiencias de página completa.
5. Ejecutar QA responsive y revisión de lanzamiento antes de publicar cambios.
