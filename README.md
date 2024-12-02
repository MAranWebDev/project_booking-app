# Proyecto de Diseño de Software 2024: Página para gestión de salud mental en el trabajo

## Requerimientos

**Enunciado**

1. Responsive Design: Móvil/Tablet/Desktop, respetando material design
2. Traducciones: Idiomas inglés/español
3. Local Storage: Almacenar info usuario como nombre y idioma
4. Usuarios: Registrar y validar contraseña:

   - Utilizar variables de entorno .env.
   - Una páquina bloqueada para usuarios autenticados.
   - Contraseña hasheada en db.
   - Api que se logre conectar a la base de datos.

5. Validaciones: En todos los campos de formularios + mensajes de error.

6. Funcionalidad adicional: Funcionalidad adicional como carga y visualización de datos.

**Estado**

1. responsive design - (ok)
2. traducciones - (ok)
3. local storage - (pendiente)
4. validaciones - (ok)
5. usuarios:

   - registro de usuarios - (ok)
   - login de usuarios - (ok)
   - variables de entorno - (ok)
   - pagina protegida - (ok)
   - constraseñas encriptadas - (ok)
   - api base de datos - (ok)

6. funcionalidad adicional:

   - agendar tus consultas - (pendiente)
   - visualizar tus consultas - (pendiente)

## Instrucciones de uso

**Levantar base de datos**

```bash
docker-compose up -d
```

**Destruir base de datos**

```bash
docker-compose down -v
```

**Crear carpeta node_modules y package-lock.json**

```bash
$ npm install
```

**Correr aplicación**

```bash
npm run dev
```

## Material de referencia

- traducciones (next-intl): https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
- material design (mui): https://mui.com/material-ui/integrations/nextjs/
- validaciones cliente (react-hook-form | zod): https://react-hook-form.com/docs/useform
- validaciones servidor (zod): https://zod.dev/?id=parse
- autenticación y db (next-auth):
  - https://www.youtube.com/watch?v=w9l7vUWzw1I
  - https://github.com/fazt/next-auth-credentials-mongodb/tree/master
- agendamiento: https://www.youtube.com/watch?v=C3U1RforbH4
