const nodemailer = require("nodemailer");

const index = (req, res) => {
    res.render('contacto');
};

const submit = async (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body);
    // Aquí puedes manejar el envío del formulario, como guardarlo en una base de datos
    console.log('Formulario enviado:', { name, email, message });

    // Configurar el transporte de nodemailer
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        const info = await transport.sendMail({
            from: `"${req.body.name}" <${req.body.email}>`,
            to: "bar@example.com, baz@example.com",
            subject: "Formulario de contacto enviado",
            text: `Nombre: ${req.body.name}\nEmail: ${req.body.email}\nMensaje: ${req.body.message}`,
            html: `<b>Nombre:</b> ${req.body.name}<br><b>Email:</b> ${req.body.email}<br><b>Mensaje:</b> ${req.body.message}`,
        });

        console.log("Message sent:", info);

        console.log('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }

    res.redirect('/contacto');
};

module.exports = {
    index,
    submit
};