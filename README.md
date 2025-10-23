# Servidor WEB con Nodejs y Expresss
Este proyecto incluye:
1. Variables de entorno
2. Routes
3. Controller
4. View
5. Layout
6. Formulario
7. Nodemailer
Ademas se vio:
a. carpeta private con index.html
b. carpeta public con css



### Ejecutar proyecto
```npm index.js```

### Instalar varibles de entorno
``` npm i dotenv ```
### Instalar EJS, motor de vitas
``` shell
 npm i ejs
 npm i express-ejs-layouts
 ```
### Instalar todas las dependencias
``` shell
 npm i 
```

### Ejecutar proyecto
``` npm run dev ```

# https://fakestoreapi.com/
Se utiliza para simular como se consume api


# Layout
Se crear una carpeta en views --> partials
Se crea los archivos header.ejs y footer.ejs
Estos archivos se incluyen en el layout.ejs 
```
  <%- include('../partials/header') %>
    <main>
      <%- body %>
    </main>
  <%- include('../partials/footer') %>
```

# Formulario  
Para obetenr dos de submit fue necesario incluir en el index.js
```
app.use(express.urlencoded({ extended: false }));
```
Si esto no es posible obtener los datos
```
const submit = (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body);
    // Aquí puedes manejar el envío del formulario, como guardarlo en una base de datos
    console.log('Formulario enviado:', { name, email, message });
    res.redirect('/contacto');
};
```

#Nodemailer
url: [nodemailer.com](https://nodemailer.com/)

instalar para enviar correos
```
npm install nodemailer
```
Uso de Mailtrap para testing de correos.  En la pagina encuentras la informacion para link con el test
url: https://mailtrap.io/signin

En el archivo .env se guardo
a. smtp_host
b. smtp_port
c. smtp_user
d. smtp_pass



