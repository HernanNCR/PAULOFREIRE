function traslaterWindow(data) {
  if (data === "OFERTA") {
    window.location.href = "oferta_educativa.html";
  } else if (data === "CONOCENOS") {
  } else if (data === "CONTACTANOS") {
  }
}
 
function traslaterfk() {
    window.location.href ="https://www.facebook.com/share/1E7QLFMoWu/?mibextid=wwXIfr";
}

function traslaterig() {
    window.location.href = "https://www.instagram.com/finstitutopaulo?mdxt=MWUxb21oMDBudmc2bw==";
  
}

function traslaterMaps() {
  window.location.href = "https://www.google.com/maps/search/?api=1&query=Prolongacion+Paseo+Montejo+Benito+Juarez+Merida+Yucatan+97000";
}

function traslaterPrincipal(){
    window.location.href = "index.html";
}

function llamar() {
  window.location.href = "tel:+529934688236";
}

function enviarCorreo() {
  window.location.href = "mailto:instituto.academia.freire@gmail.com";
}

function mandarWhatsApp(string) {
  const numero = "+529934688236"; // Código de país + número
  const mensaje = "Hola, me gustaría obtener más información sobre";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)} ${string}`;

  window.open(url, "_blank");
}