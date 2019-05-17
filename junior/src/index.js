const express = require("express");
const app = express();

app.get("/noticia", (req, res) => {
  let noticia = [
    { id: "123", titulo: "Medio ambiente", fecha: 30/03/2019, pais:"colombia", vistas:"10" },
    { id: "245", titulo: "Cambio climatico", fecha: 29/04/2019, pais:"brazil", vistas:"90" },
    { id: "456", titulo: "Tala de arboles", fecha: 19/08/2019, pais:"ecuador", vistas:"29" },
    { id: "223", titulo: "Fauna en peligro", fecha: 30/07/2019, pais:"mexico", vistas:"30" }
  ];
  res.send(noticia);
});
app.get("/producto", (req, res) => {
  let producto = [
    { id: "11234", nombre: "consecuencias climaticas", fecha: 29/03/2019, lugardecreacion:"colombia", tipo:"video", ruta:"www.consecuenciaclimatica.com",idnoticia:"123" },
    { id: "0001", nombre: "brazil solo amarillo", fecha: 28/09/2019, lugardecreacion:"brazil", tipo:"video", ruta:"www.soloamarillo.com",idnoticia:"245" },
    { id: "2222", nombre: "Tala de arboles", fecha: 19/05/2019, lugardecreacion:"ecuador", tipo:"video", ruta:"www.taladearboles.com",idnoticia:"456" },
    { id: "01234", nombre: "polo norte en su muerte", fecha: 14/05/2019, lugardecreacion:"ee.uu", tipo:"video", ruta:"www.polonorteensumuerte.com",idnoticia:"223" }
  ];
  res.send(producto);
});
app.get("/redessociales", (req, res) => {
  let redessociales = [
    { id: "223", nombre: "facebook", url: "wwww.facebook.com", usuario:"juan23", contraseña:"100202", idproducto:"11234" },
    { id: "123", nombre: "Youtube", url: "wwww.youtube.com", usuario:"Xiomara23", contraseña:"23455", idproducto:"0001" },
    { id: "345", nombre: "twiiter", url: "wwww.twiiter.com", usuario:"Daniel54", contraseña:"22345", idproducto:"2222" },
    { id: "908", nombre: "Instagram", url: "wwww.instagram.com", usuario:"junior98", contraseña:"222222", idproducto:"01234" }
  ];
  res.send(redessociales);
});
app.get("/foro", (req, res) => {
  let foro = [
    { id: "23444", tema: "consecuencias climaticas", idredessociales:"223" },
    { id: "3445", tema: "Polo norte en su muerte", idredessociales:"123" },
    { id: "9993", tema: "brazil solo amarillo", idredessociales:"345" },
    { id: "9844", tema: "consecuencias ambientales", idredessociales:"908" }
  ];
  res.send(foro);
});
app.get("/comentario", (req, res) => {
  let comentario = [
    { id: "2334551", texto: "El clima se ha visto afectado  durante los ultimos años", rating:"112342", idforo:"23444" },
    { id: "2334553", texto: "En los ultimos años se ha perdio el 30% de la capa de hielo", rating:"33324", idforo:"3445" },
    { id: "2334554", texto: "perdia del 50% de la flora", rating:"3344", idforo:"9993" },
    { id: "2334552", texto: "Problemas del polo magnetico", rating:"22344", idforo:"9844" }
  ];
  res.send(comentario);
});
app.get("/persona", (req, res) => {
  let persona = [
    { id: "001", nombre: "Juan", apellido:"Mendez", pais:"Mexico",idnoticia:"123" },
    { id: "002", nombre: "Xiomara", apellido:"Mercado", pais:"ee.uu",idnoticia:"245" },
    { id: "003", nombre: "Anuar", apellido:"Gonzalez", pais:"ecuador",idnoticia:"456" },
    { id: "004", nombre: "Junior", apellido:"Garcia", pais:"mexico",idnoticia:"223" }
  ];
  res.send(persona);
});
app.get("/medio", (req, res) => {
  let medio = [
    { id: "004", nombre: "naturas", url:"www.natura.com", fecha:"13/03/2019",tipo:"video", idpersona:"001" },
    { id: "005", nombre: "planeta t", url:"www.planetat.com", fecha:"16/04/2019",tipo:"pagina web", idpersona:"002" },
    { id: "006", nombre: "ecomas", url:"www.ecomas.com", fecha:"20/06/2019",tipo:"pagina web", idpersona:"003" },
    { id: "007", nombre: "ambiente+", url:"www.ambiente+.com", fecha:"24/08/2019",tipo:"video", idpersona:"004" }
  ];
  res.send(medio);
});
app.get("/genera", (req, res) => {
  let genera = [
    { id: "00233", idnoticia: "123", idproducto:"11234" },
    { id: "00234", idnoticia: "245",  idproducto:"0001" },
    { id: "00235", idnoticia: "456", idproducto:"2222" },
    { id: "002334", idnoticia: "223", idproducto:"908" }
    
  ];
  res.send(genera);
});
app.get("/vistas", (req, res) => {
  let vistas = [
    { idnoticia: "123", id: "1324", idpersona:"001" },
    { idnoticia: "245", id: "1346", idpersona:"002" },
    { idnoticia: "456", id: "4567", idpersona:"003" },
    { idnoticia: "223", id: "5679", idpersona:"004" }
  ];
  res.send(vistas);
});
app.get("/adquiere", (req, res) => {
  let adquiere = [
    { idnoticia: "123",id:"4566", idmedio:"004" },
    { idnoticia: "245",id:"4578", idmedio:"005" },
    { idnoticia: "456",id:"3489", idmedio:"006" },
    { idnoticia: "223",id:"45638", idmedio:"007" }
  ];
  res.send(adquiere);
});

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});


