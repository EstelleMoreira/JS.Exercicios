function mudarLampada(){

    let lampada = document.getElementById("lampada");

    if(lampada.src.endsWith("imagens/apagada.jpg")){

        lampada.src = "imagens/acesa.jpg";
        lampada.alt = "Lâmpada Acesa";
        
    }else{

        lampada.src = "imagens/apagada.jpg";
        lampada.alt = "Lâmpada Apagada"

    }

}
 

