# Proyecto de Diseño de Software 2024: Página para gestión de salud mental en el trabajo

## Instructions

**Build db**

```bash
docker-compose up -d
```

**Destroy db**

```bash
docker-compose down -v
```

**Create node_modules & package-lock.json**

```bash
$ npm install
```

**Run app**

```bash
npm run dev
```

**Urls**

- Client: http://localhost:3000/
- Api: http://localhost:3000/api
- Mongo Express (GUI): http://localhost:8081

## Requerimientos

1. Responsive Design: Móvil/Tablet/Desktop, respetando material design
2. Traducciones: Idiomas inglés/español
3. Local Storage: Almacenar info usuario como nombre y idioma
4. Usuarios:
   - Registrar usuarios.
   - Validar contraseña.
   - Utilizar variables de entorno .env.
   - Una páquina bloqueada para usuarios autenticados.
   - Contraseña hasheada en db.
   - Api que se logre conectar a la base de datos.
5. Validaciones: En todos los campos de formularios + mensajes de error.
6. Funcionalidad adicionales:
   - Carga de datos.
   - Visualización de datos.

## Technologies

**Installers**

- node: https://nodejs.org/en
- git | git bash | github: https://git-scm.com/downloads
- docker desktop: https://www.docker.com/products/docker-desktop/
- vscode: https://code.visualstudio.com/
- vscode extensiones:
  - Error Lens: Para ver mensajes de error en el editor.
  - ESLint: Para ver errores del linter en el editor.
  - Prettier - Code formatter: Para formatear código.
  - shell-format: Para formatear archivos que no son prettier.
  - Supermaven: Autocompletar código con ia.
  - vscode-icons: Para ver iconos en el editor.

**Tech Stack**

- typescript: Lenguaje de programación
- prettier: Identador y formateador de código.
- eslint: Linter, detecta errores.
- next.js: Framework full stack.
- next-auth: Autenticación de next.js.
  - bcryptjs: Encriptador de contraseñas de next.js.
- next-intl: Traducciones de next.js.
- react-hook-form: Manipulación de formularios.
  - hookform/resolvers: Conector entre react-hook-form y zod.
- zod: Validaciones cliente y servidor.
- mongodb: Base de datos
  - mongoose: ORM para interactuar con mongodb.
- mui: Framework UI.
  - mui-x-date-pickers: Calendario.
  - notistack: Notificaciones.

**Tutorials**

- Traducciones (next-intl): https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
- Material design (mui): https://mui.com/material-ui/integrations/nextjs/
- Calendario (mui-x-date-pickers): https://mui.com/x/react-date-pickers/getting-started/
- Notificaciones (notistack): https://notistack.com/features/basic
- Validaciones cliente (react-hook-form | zod): https://react-hook-form.com/docs/useform
- Validaciones servidor (zod): https://zod.dev/?id=parse
- Autenticación y db (next-auth): https://www.youtube.com/watch?v=w9l7vUWzw1I
- Agendamiento: https://www.youtube.com/watch?v=ny9T62gqrWg
