window.onclick = function() { 
    let encabezados = document.createElement("h1")
    const texto = document.createTextNode("¿Quieres ser mi waifu?");
    //se esta creando una serie de elementos por cada tag existente y agregamos un texto
    
    encabezados.appendChild(texto);
    document.body.appendChild(encabezados)
    // append child crea un suboordinado en la jerarquia que nos ecnontramos ded un h1 un h2 por ejemplo o un div etc.
}

