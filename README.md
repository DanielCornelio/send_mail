
# Enviar Correo Electrónico con Nodemailer

Enviar Correo Electrónico con Nodemailer


## ¿Qué Necesito para usar Nodemailer?

Principalmente necesitaremos:

- Tener instalado Node.js.
- Un gestor de paquetes como NPM.
- Un editor de código como Visual Studio Code.
- Acceso a un Servicio SMTP para envío de correos

## Ejecutar Localmente

Clonar el proyecto

```bash
  git clone https://github.com/DanielCornelio/send_mail.git
```

Ir al directorio del proyecto

```bash
  cd send_mail
```

Instalar dependencias

```bash
  npm install
```

Configurar SMTP

```bash
  {
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
  }
```

Configurar Información para enviar el mail

```bash
  {
    from: "from@mail.com", // Mail desde donde se enviará el correo electrónico
    to: "to@mail.com", // Correos de destinatario
    subject: "Prueba", // Asunto del correo electrónico
    text: "Esto es una prueba.", // En caso de no poder recibir un html, entonces esto será lo que llegue como mensaje
    html: "<h1>Esto es una prueba.</h1>" // Template en html
  }
```

Ejecutar Script

```bash
  npm start
```

## Variables de Entorno

Para ejecutar este proyecto, necesitaras añadir las siguientes variables a tu archivo .env

`HOST`
`PORT`
`USER`
`PASS`

