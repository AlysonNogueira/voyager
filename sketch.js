/*Esse código JavaScript pertence a Alyson Nogueira graduando em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte ano 2022*/
/*Código refernte a criação de um game com objetivo de auxiliar na educação fundamental brasileira, expecificadamente, a matéria de geografia com o subtema Sistema Solar*/

var tela = 0
var img = [] 

function preload() { 
  img[0] = loadImage('MenuVoyager2.png');
  img[1] = loadImage('icVoyager.png')
  img[2] = loadImage('AlysonEENogueira.jpeg')
  img[3] = loadImage('VitorHugo.PNG')
  img[4] = loadImage('FORA DE AR.png')
  img[5] = loadImage('Pale_Blue_Dot.png')
}
function mouseReleased() {
  if(tela==1){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=6}}
  else if(tela==6){ if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){tela=7}}
  else if(tela==7){ if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){tela=8}}
  else if(tela==8){ if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){tela=9}}
  else if(tela==9){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=10}}
  else if(tela==10){ if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){tela=11}}
  else if(tela==11){ if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){tela=12}}
  else if(tela==12){ if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){tela=13}}
  else if(tela==13){ if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){tela=14}}
  else if(tela==14){ if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){tela=5}}
}
function draw() {
    //Menu;
    if(tela==0){
        stroke(0)    
        createCanvas(600, 640);
        image(img[0], 0, 0, 600, 600)

        if(mouseX > 190 && mouseX < 190 + 220 && mouseY > 225 && mouseY < 225 + 70){
            fill(240)
            rect(190, 225, 220, 70, 15);
            if(mouseIsPressed){
                tela=1
            }
        }
        if(mouseX > 190 && mouseX < 190 +220 && mouseY > 325 && mouseY < 325 + 70){
            fill(240)
            rect(190, 325, 220, 70, 15);
            if (mouseIsPressed){
                tela=2
            }
        }
        if(mouseX > 190 && mouseX < 190 + 220 && mouseY > 425 && mouseY < 425 + 70){
            fill(240)
            rect(190, 425, 220, 70, 15);
            if (mouseIsPressed){
                tela=3
            }
        }
        noStroke()  
        textAlign(CENTER)
        fill(153, 101, 21);
        textAlign(CENTER);
        textSize(80);
        textStyle(BOLD);
        text("VOYAGER", 300, 150);
        textSize(14);
        text("Uma viagem pelo Espaço Profundo", 300, 80);
        textSize(30);  
        textStyle(BOLD);
        text("iniciar", 300, 270);
        text("instruções", 300, 370);
        text("créditos", 300, 470);
    }
    //Instruções
    if(tela==2){
        image(img[1], 0 , 0, 600, 600)
        textStyle(BOLD);
        fill(15);
        textAlign(CENTER);
        textSize(50);
        text("INSTRUÇÕES", 300, 150);
        textStyle(NORMAL);
        textSize(18);
        text("Em um jogo de perguntas e respostas sobre o Sistema Solar", 300, 300); 
        text("e seus componentes, responda as perguntas corretamente", 300, 320);  
        text("para avançar as fases.", 300, 340);
        //Botão voltar
        if (mouseX > 30 && mouseX < 30 + 70 && mouseY > 30 && mouseY < 30 + 50){
            stroke(200);
            fill(200);
            rect(30, 30, 70, 50, 15);
            if(mouseIsPressed){
                tela=0
            }
        }
        textStyle(BOLD);
        textSize(14);
        textAlign(LEFT);
        fill(15);
        noStroke( );
        text("Voltar", 46, 60);                        
    }
    //Créditos
    if(tela==3){
        image(img[1], 0, 0, 600, 600)
        textStyle(BOLD); 
        fill(15);
        textAlign(CENTER);
        textSize(50);
        text("CRÉDITOS", 300, 150);
        textStyle(NORMAL);
        textAlign(LEFT); 
        textSize(18);
        text("Alyson E. E. Nogueira.", 110, 270);
        textSize(14);
        text("Graduando em Ciência e Tecnologia na Escola de Ciência e Tecnologia da", 110, 290);
        text("Universidade Federal do Rio Grande do Norte.", 110, 310);
        textSize(18);
        text("Vitor Hugo Campelo Pereira.", 110, 350);
        textSize(14);
        text("Doutorado em Geografia (2018), Mestre em Geografia (2013), Graduado", 110, 370);
        text("em Geografia Bacharelado (2008), Licenciatura Plena (2011) e Espe-", 110, 390);
        text("cialista em Geoprocessamento e Cartografia Digital (2011) pela UFRN,", 110, 410);
        text("atua principalmente em Meio ambiente, Análise Espacial, Cadastro", 110, 430);  
        text("Urbano, Sensoriamento Remoto  e Processamento Digital de Imagens.", 110, 450);  
        text("Geógrafo da Prefeitura Municipal de São Gonçalo do Amarante/RN,", 110, 470);  
        text("professor de Geografia da rede estadual do estado e desenvolve", 110, 490);   
        text("atividades de consultoria voltadas ao licenciamento ambiental e à", 110, 510);   
        text("à mapeamentos de diversas naturezas.", 110, 530);   
        //Fotos do orientando e do orientador
        image(img[2], 50, 260, 50, 60)
        image(img[3], 50, 340, 50, 60)
        //Botão voltar
        if (mouseX > 30 && mouseX < 30 + 70 && mouseY > 30 && mouseY < 30 + 50) {
            stroke(200);
            fill(200);
            rect(30, 30, 70, 50, 15);
            if(mouseIsPressed){
                tela=0
            }
        }
        textStyle(BOLD);
        textSize(14);
        fill(15);
        noStroke( );
        text("Voltar", 46, 60); 
    } 
    //Pergunta 1
    if(tela==1){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
            } 
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
            fill(153, 101, 21)
            rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(30)
        fill(0)
        text("Sobre os planetas do sistema solar é \n INCORRETO afirmar que:", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("Vênus é um dos planetas rochosos com temperatura \nmais baixa do sistema solar.", 70, 210)
        text("Mercúrio é o planeta mais perto do sol. É um planeta \nmuito quente e rochoso.", 70, 280)
        text("Marte é um planeta teluriano. Tem uma \nsuperfície seca de cor vermelha.", 70, 350)
        text("O joviano Júpiter é o maior planeta do sistema solar.", 70, 430)
    }
    //você perdeu contato com a Terra
    if(tela==4){

        createCanvas(600, 600)
        image(img[4], 0, 0, 600, 600)
            if(mouseX > 190 && mouseX < 190 +220 && mouseY > 310 && mouseY < 310 + 70){
                fill(240)
                rect(190, 310, 220, 70, 15)
                if(mouseIsPressed){
                    tela=1
                }
            }
        noStroke()
        fill(153, 101, 21);
        textAlign(CENTER)
        textSize(70);
        textStyle(BOLD);
        text("ATENÇÃO", 300, 120)
        textSize(25);
        text("você perdeu contato com a Terra", 300, 155)
        textSize(30);
        text("reconectar", 300, 350)
            if(mouseX > 190 && mouseX < 190 +220 && mouseY > 390 && mouseY < 390 + 70){
                  fill(240)
                  rect(190, 380, 220, 70, 15)
                  if(mouseIsPressed){
                      tela=0
                  }        
            }
      fill(153, 101, 21);
      textAlign(CENTER)
      textStyle(BOLD);
      noStroke()
      textSize(30);
      text("desistir", 300, 425)
    }
    //você cumpriu sua missão
    if(tela==5){
        createCanvas(600, 600)
        image(img[5], 0, 0, 600, 600) 
        fill(153, 101, 21);
        stroke(55)
        strokeWeight(4)
        textAlign(CENTER)
        textSize(70)
        text("PARABENS", 300, 140)
        textSize(25);
        text("você cumpriu sua missão", 300, 170)
        textAlign(CENTER)
        textSize(22)
        text("A Terra é o único mundo conhecido, até hoje, \nque abriga vida. Não há outro lugar, pelo menos \nno futuro próximo, para onde a nossa espécie \npossa emigrar. Visitar, sim. Assentar-se, ainda não. \nGostemos ou não, a Terra é onde temos de ficar \npor enquanto. - Carl Sagan", 300, 310)
        noStroke()  
            if(mouseX > 210 && mouseX < 210 + 180 && mouseY > 490 && mouseY < 490 + 50){
                fill(240) 
                rect(210, 490, 180, 50, 15);
                if(mouseIsPressed){
                    tela=0
                }
            } 
        textAlign(CENTER)
        stroke(55)
        strokeWeight(4)
        fill(153, 101, 21);
        textSize(30);  
        textStyle(BOLD);
        text("menu", 300, 520);
    }
 /*Esse código JavaScript pertence a Alyson Nogueira graduando em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte ano 2022*/   
    //Pergunta 2
    if(tela==6){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            } 
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(30)
        fill(0)
        text("Assinale a alternativa ERRADA", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("Planetas – Rochosos ou Telurianos: Mercúrio, \nVênus, Terra, Marte", 70, 210)
        text("Planetas – Gasosos ou Jovianos: Júpiter, Saturno, \nUrano, Netuno.", 70, 280)
        text("Lua é o planeta mais próximo da Terra.", 70, 360)
        text("Um Planeta do sistema solar é um corpo celeste que \nestá em órbita em torno do Sol.", 70, 420)
    }
    //Pergunta 3
    if(tela==7){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        //a
        stroke(0)
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }     
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("No sistema solar os planetas giram em \ntorno do Sol seguindo uma determinada \nordem, sobre o tema está INCORRETO:", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("Vênus,Terra, Marte, Saturno, Urano e Netuno, \ndentre outros, são planetas do sistema solar.", 70, 210)
        text("Quanto mais próximo do Sol estiver o planeta, \nmenor será sua velocidade em torno daquele astro.", 70, 280)
        text("Mercúrio é o mais próximo do Sol.", 70, 360)
        text("Órbita é o nome que damos ao caminho que os \nplanetas percorrem em torno do Sol. O conjunto \nformado pelo Sol, planetas e sua luas se mantém \nunido devido à força de atração gravitacional.", 70, 420)
    }
    //Pergunta 4
    if(tela==8){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }     
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
            }
        noStroke()
        textAlign(CENTER)
        textSize(25)
        fill(0)
        text("Rochas que ao entrarem na atmosfera \nTerrestre se incendeiam e na maioria dos \ncasos se desintegram antes de tocarem a \nsuperfície do planeta. Estas rochas, são", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("satélites.", 70, 220)
        text("lua.", 70, 290)
        text("galáxias.", 70, 360)
        text("meteoros.", 70, 430)
    } 
    //Pergunta 5
    if(tela==9){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
            }     
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("O Planeta Terra tem, aproximadamente, \nquantos bilhões de anos?", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("4,5 bilhões de anos", 70, 220)
        text("5,5 bilhões de anos.", 70, 290)
        text("6,5 bilhões de anos.", 70, 360)
        text("7,5 bilhões de anos", 70, 430)
    } 
 /*Esse código JavaScript pertence a Alyson Nogueira graduando em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte ano 2022*/   
    //Pergunta 6
    if(tela==10){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
            }
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("Devido a atração gravitacional, a \natmosfera terrestre torna-se mais \nrarefeita conforme se distancia da \nsuperfície do planeta.", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("Certo.", 70, 290)
        text("Errado.", 70, 360)
    } 
    //Pergunta 7
    if(tela==11){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("O sistema solar...", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("compreende todos os planetas que \norbitam o sol.", 70, 210)
        text("é o conjunto constituído pelo Sol e todos os corpos \ncelestes que estão sob seu domínio gravitacional.", 70, 280)
        text("compreende os astros que existem no universo.", 70, 360)
        text("comprende os planetas principais e secundários.", 70, 430)
    } 
    //Pergunta 8
    if(tela==12){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }    
            }     
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("Cinturão de Asteróides...", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("é uma região do sistema solar que se situa \nentre a Terra e Marte.", 70, 210)
        text("é uma região onde se concentram os cometas.", 70, 290)
        text("é uma região do Sistema Solar compreendida \naproximadamente entre as órbitas de Marte e Júpiter.", 70, 350)
        text("é uma região que se situa para lá de Plutão.", 70, 430)
    } 
    //Pergunta 9
    if(tela==13){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0)
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
            }     
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("A Nuvem de Oort...", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("é uma nuvem esférica de planetesimais voláteis que \nse acredita localizar-se a cerca de um ano-luz, \ndo Sol.", 70, 210)
        text("é uma nuvem de asteróides situada para lá de Marte.", 70, 290)
        text("é uma nuvem de cometas que se situa na órbita \nde Saturno.", 70, 350)
        text("é uma concentração anormal de gases e poeiras.", 70, 430)
    } 
    //Pergunta 10
    if(tela==14){
        createCanvas(600, 600)
        image(img[1], 0, 0, 600, 600)
        stroke(0) 
        //a
        fill(240)
        rect(30, 200, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 200 && mouseY < 230){
                fill(153, 101, 21)
                rect(30, 200, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //b
        fill(240)
        rect(30, 270, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 270 && mouseY < 300){
                fill(153, 101, 21)
                rect(30, 270, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        //c
        fill(240)
        rect(30, 340, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 340 && mouseY < 370){
                fill(153, 101, 21)
                rect(30, 340, 30, 30);
                if(mouseIsPressed){
                    tela=5
                }
            }
        //d
        fill(240)
        rect(30, 410, 30, 30);
            if(mouseX > 30 && mouseX < 60 && mouseY > 410 && mouseY < 440){
                fill(153, 101, 21)
                rect(30, 410, 30, 30);
                if(mouseIsPressed){
                    tela=4
                }
            }
        noStroke()
        textAlign(CENTER)
        textSize(28)
        fill(0)
        text("O Sol...", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("É um planeta do sistema solar.", 70, 220)
        text("É uma estrela binária do sistema solar.", 70, 290)
        text("O componente central e principal fonte de energia \ndo Sistema Solar.", 70, 350)
        text("É um componente secundário do sistema solar.", 70, 430)
    }
/*Esse código JavaScript pertence a Alyson Nogueira graduando em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte ano 2022*/    
}