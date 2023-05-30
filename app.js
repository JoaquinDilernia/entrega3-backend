import express from 'express';
import ProductosManager from './productos.js';
const app = express();
const port = 3000;



const productos = new ProductosManager('./data/productos.json');

app.get('/', function (req, res){
    return res.send('Hello World!');
    });

app.get('/product', function (req, res){
    return res.json();
    });

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
    }
);

