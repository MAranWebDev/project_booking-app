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

## Requerimientos

1. (ok) - Responsive Design: Móvil/Tablet/Desktop, respetando material design
2. (ok) - Traducciones: Idiomas inglés/español
3. (pendiente) - Local Storage: Almacenar info usuario como nombre y idioma
4. Usuarios:
   (ok) - Registrar usuarios.
   (ok) - Validar contraseña.
   (ok) - Utilizar variables de entorno .env.
   (ok) - Una páquina bloqueada para usuarios autenticados.
   (ok) - Contraseña hasheada en db.
   (ok) - Api que se logre conectar a la base de datos.
5. (ok) - Validaciones: En todos los campos de formularios + mensajes de error.
6. Funcionalidad adicionales:
   (pendiente) - Carga de datos.
   (pendiente) - Visualización de datos.

## Technologies

**Installers**

- google chrome: https://www.google.com/chrome/
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

**Tech Stack**

- “next.js”: Framework full stack.
- “typescript”: Lenguaje de programación
- “mongodb”: Base de datos
- “prettier”: Identador y formateador de código.
- “eslint”: Linter, detecta errores.
- “mui”: Framework UI.
- “react-hook-form”: Manipulación de formularios.
- "hookform/resolvers": Conector entre react-hook-form y zod.
- “zod”: Validaciones cliente y servidor.
- “next-intl”: Traducciones de next.js.
- “next-auth”: Autenticación de next.js.
- “bcryptjs”: Encriptador de contraseñas de next.js.
- “mongoose”: ORM para interactuar con mongodb.

**Tutorials**

- Traducciones (next-intl): https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
- Material design (mui): https://mui.com/material-ui/integrations/nextjs/
- Validaciones cliente (react-hook-form | zod): https://react-hook-form.com/docs/useform
- Validaciones servidor (zod): https://zod.dev/?id=parse
- Autenticación y db (next-auth):
  - https://www.youtube.com/watch?v=w9l7vUWzw1I
  - https://github.com/fazt/next-auth-credentials-mongodb/tree/master
- Agendamiento: https://www.youtube.com/watch?v=ny9T62gqrWg

explicar como se abre mongo express
