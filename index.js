const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
});

transporter.verify().then(console.log).catch(console.error);
transporter.sendMail(
    {
        from: "",
        to: "",
        subject: "asunto del correo electrónico",
        text: "texto plano del correo",
        html: "<h1>Esto es una prueba.</h1>"
    }).then(info => {
        console.log( info );
    }).catch(console.error);
    //console.log("prueba")
