# EpicBackend

API de Epic History. Su responsabilidad actual es gestionar usuarios y sesiones; todavía no implementa reglas de combate, cartas, clases jugables ni persistencia del progreso del juego.

## Arquitectura actual

- `Program.cs` configura controladores, Entity Framework Core con PostgreSQL, autenticación JWT, CORS para `http://localhost:3000` y Swagger durante el desarrollo.
- `Controllers/` contiene las operaciones de registro (`SignInController`) e inicio de sesión (`LogInController`).
- `Data/EpicContext.cs` expone la tabla `users` mediante Entity Framework Core.
- `Models/Users.cs` representa el usuario persistido: `id`, `type`, `user`, `password` y `email`. El campo `type` existe en la base, pero todavía no modela clases de personaje.
- `DTOs/` contiene tipos para recibir datos de usuario y credenciales; actualmente el registro recibe `Users` directamente y `NewUsers` no se utiliza.
- `Responses/` define la respuesta común (`message`, `statusCode`, `error`) y la respuesta de sesión con datos y token.
- `Utils/Validations.cs` contiene expresiones regulares para el registro. `Utils/Jwt.cs` calcula el hash de la contraseña y emite tokens JWT.
- `Migrations/` conserva tres migraciones históricas: creación de `users`, cambio de nombre de la columna de contraseña y agregado de `type`.

## API disponible

| Método y ruta | Implementación actual |
| --- | --- |
| `POST /SignIn` | Valida nombre, contraseña y correo; comprueba duplicados y crea un usuario. |
| `POST /LogIn` | Busca por nombre o correo y contraseña; devuelve los datos de sesión y un JWT válido durante 10 minutos. |

Ambos endpoints son públicos. Los errores de negocio se expresan principalmente en el objeto JSON mediante `statusCode` y `error`; los controladores no asignan esos códigos como estado HTTP de la respuesta. Hay configuración para validar JWT, pero todavía no existen endpoints de juego protegidos con `[Authorize]`.

## Ejecución local

Se requiere el SDK de .NET 10 y PostgreSQL. Para una instalación nueva, copiar `appsettings.example.json` a `appsettings.json`, configurar `ConnectionStrings:PostgreSQLConnection` y `Jwt:key`, y aplicar las migraciones existentes a la base de datos. `appsettings.json` está excluido de Git.

En este entorno se creó una instancia local independiente en `.local-db/data`, con la base `epichistory` en `127.0.0.1:5433`. El archivo local `appsettings.json` ya apunta a ella. La carpeta `.local-db/` también está excluida de Git. Si la instancia se detiene, se puede volver a iniciar desde la raíz del repositorio con PostgreSQL 18 instalado:

```powershell
pg_ctl.exe -D EpicBackend/.local-db/data -l EpicBackend/.local-db/postgres.log -w start
```

Desde la raíz del repositorio:

```powershell
dotnet run --project EpicBackend/EpicBackend.csproj --launch-profile http
```

La API escucha en `http://localhost:8080`. En desarrollo, Swagger está disponible en `http://localhost:8080/swagger`. Para comprobar la compilación:

```powershell
dotnet build EpicBackend/EpicBackend.csproj
```

## Límites conocidos

- El hash de contraseñas es SHA-256 directo, sin sal ni un algoritmo específico para contraseñas. Esto debe corregirse antes de usar cuentas reales.
- No hay modelo ni endpoints para personajes, clases, habilidades, mazos, encuentros, turnos o progreso.
- La API no tiene pruebas automatizadas y la conexión con una base PostgreSQL real depende de la configuración local.
