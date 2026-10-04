# EpicFrontend

Cliente web de Epic History. Presenta el acceso al juego y los primeros prototipos visuales de escenarios, clases, cartas de habilidades y combate.

## Arquitectura actual

- `index.html` y `src/main.jsx` son la entrada de Vite y montan la aplicación React.
- `src/App.jsx` mantiene la sesión en `SessionContext` y decide qué rutas mostrar según el valor guardado en `localStorage`.
- `src/views/` contiene las pantallas. `src/components/` reúne elementos reutilizables como la barra superior, las cartas, los marcos de personaje, los botones y el modal.
- `src/Controllers/Post.js` y `Get.js` son envoltorios de `fetch` hacia `http://localhost:8080/`. Actualmente la interfaz utiliza `Post` para el inicio de sesión; `Get` no participa en un flujo visible.
- `src/assets/` contiene estilos, ilustraciones y audio. Bootstrap aporta estilos de interfaz.
- `vite.config.mjs` configura el servidor en el puerto 3000 y Vitest para pruebas de componentes.

## Pantallas y flujo implementados

| Área | Estado actual |
| --- | --- |
| Acceso | `LogIn.jsx` envía credenciales a `POST /LogIn`, muestra errores y guarda la respuesta de sesión en `localStorage`. |
| Navegación | `TopBar.jsx` muestra el usuario, opciones de navegación y cierre de sesión. |
| Castillo | `MainCastle.jsx` dibuja un escenario con puntos de interés. Taberna y Monasterio tienen navegación desde el escenario; otros puntos son bocetos. |
| Historia | `Chapter1/Introduction.jsx` muestra una introducción narrativa. |
| Clases y cartas | Existen mazos visibles para Druida (3 cartas), Mago (3 cartas) y Guerrero (1 carta). Cada carta muestra imagen, descripción, maná y un contador visual de reutilización. |
| Combate | `Combat.jsx` muestra dos marcos de personajes; todavía no conecta cartas, daño, recursos ni turnos. |

`HeroSelection.jsx` contiene una selección visual de Mago, Guerrero, Druida, Monje y Arquero, pero todavía no está conectada a las rutas. Monje y Arquero no tienen mazos. `Home.jsx` es un marcador de posición y tampoco está conectado. `PassTurnButton.jsx` no se usa en combate y su lógica de turno está incompleta.

Las rutas de cartas son `/DruidCards`, `/MageCards` y `/WarriorCards`. El capítulo define `/Chapter1/Introduction` y `/Chapter1/Combat`; `/Chapter1` no tiene una pantalla inicial. El botón «Play» navega a `/Chapter1`, y «Continue» de la introducción vuelve a `/Login`; todavía no forman una secuencia jugable completa.

## Estado de la mecánica de cartas

Los mazos están definidos directamente en sus componentes JSX y `GenericAbilityCard.jsx` reutiliza su presentación. El contador de reutilización cambia al pulsar una carta, pero no existe un estado de combate compartido ni una relación con el paso de turnos. Los valores y textos de las habilidades son prototipos visuales, no efectos aplicados a personajes o enemigos.

## Ejecución y pruebas

Se requiere una versión de Node.js compatible con `package.json`. Desde `EpicFrontend/`:

```powershell
npm install
npm start
```

La web se abre en `http://localhost:3000`. Para ejecutar la prueba de inicio de sesión y generar la compilación de producción:

```powershell
npm test
npm run build
```

La prueba actual (`src/App.test.jsx`) simula la respuesta del API y comprueba que el formulario se envía una vez y abre la navegación autenticada. No cubre un servidor ni una base de datos reales.

## Límites conocidos

- No hay una interfaz de registro, aunque el backend expone `POST /SignIn`.
- La sesión se guarda como objeto en `localStorage`, mientras que los envoltorios de API buscan un valor separado llamado `token`; ese valor no se guarda al iniciar sesión.
- La comprobación de sesión se basa en la presencia de datos locales. No valida la caducidad del JWT ni consulta al servidor.
- Escenarios, selección de clases y combate siguen en distintas fases de prototipo; aún no constituyen un ciclo de juego completo.
