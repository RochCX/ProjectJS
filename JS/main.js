function cambiar(imagen){
    let img = document.querySelector('img');
    img.style.width="50%";
    let titulo = document.querySelector('#titulo')

    switch (imagen){
        case 1:
            img.src = "./IMG/al1.jpg";
            titulo.style.color = "red";
            break;
        case 2:
            img.src = "./IMG/al2.jpg";
            titulo.style.color = "green";
            break;
        case 3:
            img.src = "./IMG/al3.jpeg";
            titulo.style.color = "purple";
            break;
        default:
            alert(imagen);
    }
}