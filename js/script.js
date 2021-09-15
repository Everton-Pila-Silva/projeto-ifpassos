
//-------------------------------------------------------------------------------//
$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});


function regressiva(){
    var target_date = new Date("october 18, 2021").getTime();
    var dias, horas, minutos, segundos;
    setInterval(function () {        
        var current_date = new Date().getTime();
        var segundos_f = (target_date - current_date)/1000;

        dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400; 
        
        horas = (parseInt(segundos_f / 3600))+13;
        segundos_f = segundos_f % 3600; 
        
        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);

        document.getElementById('dia').innerHTML =dias;
        document.getElementById('hora').innerHTML =horas;
        document.getElementById('minuto').innerHTML =minutos;
        document.getElementById('segundo').innerHTML =segundos;  
    }, 1000);
}

function programacao(numero){   
    if(numero == 1){
        document.getElementById('botao1').style.background="#b2bec3";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Node Js </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Jonatan - 4° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1RyfIgEgz4u-duvD6209KxCV6R1Ha_8cd/view" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Computação Quântica </p> <p id="horario"> 15:00 - 17:00 </p> <p id="responsavel"> Instrutora: Amanda - 6° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1uXd_xtCKr9fp__1LsYJMDqgH2cEky6Z4/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Análise de Negócios </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Fabrício Laguna </p> <a id="link-meet" href="https://drive.google.com/file/d/1fh4wWElvZaTy6Uv4yXnd5BFhEA_T_C3n/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> </div>';
    }
    
    if(numero == 2){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#b2bec3";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de Conversa Papo com PyLadies </p> <p id="horario"> 13:00 - 14:30 </p> <p id="responsavel"> PyLadies Sul de Minas </p> <a id="link-meet" href="https://drive.google.com/file/d/1kHNTz6SmK9MOKgpBBmF4SYeTBhKz46ij/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Arduíno </p> <p id="horario"> 15:00 - 18:00 </p> <p id="responsavel"> Instrutor: Albert - 6° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1pCW6QFI7nWm-MmMgxQxtstIaCPPwbgOZ/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Computação Forense </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: André Bononi </p> <a id="link-meet" href="https://drive.google.com/file/d/1RMRCCO3eVpWLxww2ai4wxT1QYCqo3ijT/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> </div>';
    }
    
    if(numero == 3){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#b2bec3";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso React </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Jonatan - 4° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1dDZRx5WrBjAOV133unlLZ1DFI1gb-Hs3/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Git e GitHub </p> <p id="horario"> 16:00 - 18:00 </p> <p id="responsavel"> Instrutora: Marisa - 8° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1JjmMf90Ns-Ilph0izQuL4BYuPqNqJlMO/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Lei Geral de Proteção de Dados (LGPD) - Desafios e oportunidades para o profissional de TI </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Anderson Souza </p> <a id="link-meet" href="https://drive.google.com/file/d/1IuTaQtX9GbpYp4CJdp2rN9j3_YWlvImw/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> </div>';
    }  
    
    if(numero == 4){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#b2bec3";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso React Native </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Jonatan - 4° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1pI6MyoHCvK4lVVx4gcP7uVTMZyoRtE02/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Criando sites responsivos com o Bootstrap </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutora: Janaína - Docente </p> <a id="link-meet" href="https://drive.google.com/file/d/1Yw_djrtgfh0D-ZdwMHAJK1hHxwqO8-_H/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Segurança Ofensiva </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Joatham Pedro </p> <a id="link-meet" href="https://drive.google.com/file/d/1XOSIDHspJS6ZsyWEHtKbtARAg_2ni3qz/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> </div>';
    } 
    
    if(numero == 5){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#b2bec3";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso de Docker e Kubernetes </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Luís Felipe - 8° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/11f5P7Hja-nZlNd0Aed9GIkqzmkKOJtLG/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso A importância do tratamento de imagens no comércio digital </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutora: Naiane </p> <a id="link-meet" href="https://drive.google.com/file/d/1Pluxjyg82Cj4TmKfK3zEX9pfnbpgmtZ5/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Aprendendo a programar com Python </p> <p id="horario"> 16:00 - 18:00 </p> <p id="responsavel"> Instrutora: Marisa - 8° Período </p> <a id="link-meet" href="https://drive.google.com/file/d/1TdJDwhl28Pi9dc8Frh7KllyxWsmV0UiT/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra AWS Business Professional </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Rafael Kelles </p> </div> </div> </div>';
    }   
}

function MostraTexto(nome){
    document.getElementById(nome).style="opacity:1;";
    document.getElementById(nome+'M').style="filter: grayscale(100%);";
}

function TiraTexto(nome){
    document.getElementById(nome).style="opacity:0;";
    document.getElementById(nome+'M').style="filter: grayscale(20%);";
}  
