
//-------------------------------------------------------------------------------//
$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

function programacao(numero){   
    if(numero == 1){
        document.getElementById('botao1').style.background="#000f92";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: RSSF - o elo fraco da IoT </p> <p id="horario"> 19:00 - 20:00 </p> <p id="responsavel"> Prof. Omar Branquinho</p> <a id="link-meet" href="https://www.youtube.com/watch?v=aTp567hNVag" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa: Desafios da mulher na área de TI </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Grupo meninas digitais, Pyladies, MulherAda.. </p> <a id="link-meet" href="https://meet.google.com/ohf-qiob-ymx" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Prototipagem com Figma </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Matheus Augusto Simões </p> <a id="link-meet" href="https://meet.google.com/ivf-rxzf-wze" target="_blank"> ASSISTIR  </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Arduino </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Albert Medeiros de Paula </p> <a id="link-meet" href="https://meet.google.com/vud-foje-ocz" target="_blank"> ASSISTIR  </a> </div> </div> </div>';
    }
    
    if(numero == 2){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000f92";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: Cultura Maker </p> <p id="horario"> 09:30 - 10:30 </p> <p id="responsavel"> Heloisa Neves </p> <a id="link-meet" href="https://meet.google.com/usq-gjke-xmb" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Introdução a Automação e Teste de Software </p> <p id="horario"> 14:00 - 17:00 </p> <p id="responsavel"> Vanessa Rodrigues </p> <a id="link-meet" href="https://meet.google.com/csi-voty-skd" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: Inovação Corporativa </p> <p id="horario"> 19:00 - 20:00 </p> <p id="responsavel"> Mauren Ginaldo Souza </p> <a id="link-meet" href="https://meet.google.com/gdq-wzgh-gdg" target="_blank"> ASSISTIR  </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Arduino </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Albert Medeiros de Paula </p> <a id="link-meet" href="https://meet.google.com/vud-foje-ocz" target="_blank"> ASSISTIR  </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Prototipagem de Interfaces com o Figma </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Matheus Augusto Simões </p> <a id="link-meet" href="https://meet.google.com/ivf-rxzf-wze" target="_blank"> ASSISTIR  </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Como fazer um site portfólio no GitHub </p> <p id="horario"> 20:00 - 22:00 </p> <p id="responsavel"> Marisa Vieira </p> <a id="link-meet" href="https://meet.google.com/phe-ynrt-fpg" target="_blank"> ASSISTIR  </a> </div> </div> </div>';
    }
    
    if(numero == 3){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000f92";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: Tecnologia e Ação Social </p> <p id="horario"> 9:30 - 10:30 </p> <p id="responsavel"> Eduardo Fernandes Tardiole  </p> <a id="link-meet" href="https://meet.google.com/bid-ncbc-ziq?hs=224" target="_blank"> ASSISTIR  </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Workshop docker </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Luciano d´Avilla Ferreira </p> <a id="link-meet" href="https://meet.google.com/ubr-aveu-rpr" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Introdução ao React JS </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Jonatan Gabriel Bortolon </p> <a id="link-meet" href="https://meet.google.com/wto-pogh-xgp" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Microsoft Power BI </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Otávio Augusto Souza Silva </p> <a id="link-meet" href="https://meet.google.com/jgt-dwih-fjg" target="_blank"> ASSISTIR  </a> </div> </div> </div>';
    }  
    
    if(numero == 4){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000f92";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg">  Café com CLT: Um papo sobre o que o mercado espera de você!</p> <p id="horario"> 9:30 - 10:30 </p> <p id="responsavel"> João Victor Teixeira, Guilherme Rodella, Luiz Aurilio</p> <a id="link-meet" href="https://meet.google.com/wvm-bizg-drp" target="_blank"> ASSISTIR  </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Introdução ao RPA - Java </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Macelo Leite Junior </p> <a id="link-meet" href="https://meet.google.com/tuy-geex-ysw" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Landing pages e prototipagem com Adobe XD </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Gabriel Sales </p> <a id="link-meet" href="https://meet.google.com/cwj-hdcw-ytc" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Mikrotik </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Marcelo Rodrigo dos Santos </p> <a id="link-meet" href="https://meet.google.com/hrf-rtcd-txh" target="_blank"> ASSISTIR  </a> </div> </div> </div>';
    } 
    
    if(numero == 5){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000f92";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa com Alunos e Ex-Alunos </p> <p id="horario"> 19:00 - 20:30 </p> <p id="responsavel"> Alunos e Ex-alunos do IF </p> <a id="link-meet" href="https://meet.google.com/ciw-emdv-jus" target="_blank"> ASSISTIR </a> </div> </div> </div>';
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
