const express = require('express'); //importando express
const exphbs = require('express-handlebars'); //importando express-handlebars

const app = express(); //instanciando express

app.listen(3000, () => { // levantando el servidor en el puerto 3000
    console.log(`Servidor Express iniciado en el puerto 3000`);
});

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/assets')); //assets como carpeta publica

app.engine('handlebars', exphbs.engine({
    extname: '.handlebars', // Extensiones de los archivos de plantillas
    defaultLayout: 'main', // Plantilla principal
    layoutsDir: __dirname + '/views', // Directorio de las plantillas principales
    partialsDir: __dirname + '/views/componentes' // Directorio de los partials
}));

app.get("/", function(req, res) { //ruta raiz
    res.render("main", { // renderiza a main y manda arreglo productos
       productos:['banana','cebollas','lechuga','papas','pimenton','tomate']
    });
});

//ruta para css de bootstrap
app.use('/bootstrap', 
         express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// ruta para js de bootstrap
app.use('/bootstrap', 
         express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//ruta jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

// ruta frontend
app.use('/front', express.static(__dirname + '/frontend'))

// render devuelve un arreglo con los productos y las imagenes vienen de assets 
//en una variable de arreglo dentro del servidor o un archivo json gestionado con fileSystem
// usar un each en el parcial del arreglo, valor de arreglo literal + la imagen
// cuando uno haga clic sobre una imagen el producto se va a colocar en opaco, y con doble click vuelve a lo original
// la modal muestra los productos seleccionados al hacer click sobre el carrito

