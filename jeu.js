window.addEventListener('DOMContentLoaded', function(){
  "use strict";
  // Volume audio de la musique de fondJeu : 1=max, 0=mute
  var vid = document.getElementById("irishMusic");
  vid.volume = 0.2;

  // ============================
  // Animation Mickey O'Rourke - Faire danser Mickey
  // Variables
  var intervalId;
  // Déclaration de fonctions
  function intervalle () { //mouvement latéral du leprechaun en bas de la zone de jeu
    intervalId = setInterval(changeMarge,100);
  };
  var miseA0deMarge = function () { // s'assurer que la marge est bien à zéro
    document.body.children[1].children[0].style["margin-left"] = 0;
  };
  var changeMarge = function () {
    var margePF = parseFloat(document.body.children[1].children[0].style["margin-left"]);
    if (margePF>-3521){ // détermine la dernière position à droite du sprite du leprechaun avant de reprendre la position 0
      margePF = margePF-503;
    }else{
      margePF = 0;
    }
    document.body.children[1].children[0].style["margin-left"] = margePF+'px'; // En dehors de la boucle : la valeur finale de la boucle if défini la nouvelle valeur de la marge. Ne s'arrête que lorsqu'on commence le jeu.
  };
  // appel des fonctions
  intervalle ();
  changeMarge();
  // Fin de la danse de Mickey
  // ============================
  $("#compteurElementJeu").hide();
  $("#arcCiel").hide();
  $("#leprechaun").hide();
  $("#terrainJeu").hide();
  $("#html").hide();
  $("#css").hide();
  $("#javascript").hide();
  $("#jquery").hide();
  $("#jqueryui").hide();
  $("#ajax").hide();
  $("#bootstrap").hide();
  $("#angularjs").hide();
  $("#mongodb").hide();
  $("#nodejs").hide();
  $("#expressjs").hide();
  $("#meteorjs").hide();
  $("#voirLeCV").hide();
  // $("#backend").hide();
  $("button").click(function(){
    $("#accueilJeu").fadeOut(1000);
    $("#mickeyContainer").fadeOut(1000);
    $("#compteurElementJeu").fadeIn(2000);
    $("#leprechaun").fadeIn(2000);
    $("#terrainJeu").fadeIn(2000);
    $("#arcCiel").fadeIn(200);
    // $("#arcCiel").show();
    $("#acces").hide();
  });
// Mouvement du leprechaun
var miniLeprechaunCont = document.getElementById('leprechaun'); // conteneur
  miniLeprechaunCont.style.position = 'absolute';
  miniLeprechaunCont.style.top = '80%'; // y2 fixe
  miniLeprechaunCont.style.left = '500px'; // x2 variable
  miniLeprechaunCont.style.height = '115px'; // h2 fixe
  miniLeprechaunCont.style.width = '85px'; // w2 fixe
  miniLeprechaunCont.overflow = 'hidden';
  miniLeprechaunCont.zIndex = '5';
  // miniLeprechaunCont.style.backgroundColor = 'blue';
var miniLeprechaunImg = document.getElementById('leprechaunImg'); // image
  miniLeprechaunImg.style.position = 'absolute';
  miniLeprechaunImg.style.top = '0px';
  miniLeprechaunImg.style.left = '-268px';
  miniLeprechaunImg.margin = '0px';
// DEBUT Div id="terrainJeu"
var terrainDeJeu = document.getElementById('terrainJeu');
  terrainDeJeu.style.position = 'relative';
  terrainDeJeu.style.top = '18%';
  terrainDeJeu.style.left = '15%';
  terrainDeJeu.style.width = '71%';
  terrainDeJeu.style.height = '78%';
  terrainDeJeu.style.overflow = 'hidden';
  terrainDeJeu.style.margin = '0px';
  // terrainDeJeu.style.backgroundColor = 'red';
  terrainDeJeu.style.zIndex = '4';
// FIN Div id="terrainJeu"
// DEBUT bandeau arc-en-ciel#arcCiel ATTN : pb avec l'image aléatoire qui tombe
var arcEnCiel = document.getElementById('arcCiel');
  arcEnCiel.style.position = 'absolute';
  arcEnCiel.style.backgroundRepeat = 'no-repeat';
  arcEnCiel.style.width ='100%';
  arcEnCiel.style.height = '100%';
  arcEnCiel.style.margin = '0px';
  arcEnCiel.style.padding = '0px';
  arcEnCiel.style.zIndex = '6';
// FIN bandeau arc-en-ciel
// DEBUT Deplacement latéral leprechaun
window.addEventListener('keydown', function(event){ // mouvement du leprechaun
  // var miniLeprechaunContPF = parseFloat(miniLeprechaunCont.style.left);
  var miniLeprechaunImgPF = parseFloat(miniLeprechaunImg.style.left);
  switch(event.keyCode){
    case 37:
      var miniLeprechaunContPF = parseFloat(miniLeprechaunCont.style.left);
      if(miniLeprechaunContPF > 0){
        miniLeprechaunCont.style.left = (parseFloat(miniLeprechaunCont.style.left) - 10) + 'px';
        // miniLeprechaunImg.style.left = (miniLeprechaunImgPF-88.5)+'px';
        if (miniLeprechaunImgPF-88.5>-533){
          miniLeprechaunImg.style.left = (miniLeprechaunImgPF-88.5)+'px';
        }else{
          miniLeprechaunImg.style.left = '-2.5px';
        };
      };
    break;
    case 39:
      var largeurLeprechaun = jQuery('#leprechaun').width();
      var largeurTerrainDeJeu = jQuery('#terrainJeu').width();
      var positionLeprechaun = parseFloat(miniLeprechaunCont.style.left);
      if(positionLeprechaun + largeurLeprechaun < largeurTerrainDeJeu-1){
        miniLeprechaunCont.style.left = (parseFloat(miniLeprechaunCont.style.left) + 10) + 'px';
        // miniLeprechaunImg.style.left = (miniLeprechaunImgPF+88.5)+'px';
        if (miniLeprechaunImgPF+88.5<-2.5){
          miniLeprechaunImg.style.left = (miniLeprechaunImgPF+88.5)+'px';
        }else{
          miniLeprechaunImg.style.left = '-533px';
        };
      };
    break;
    };
  }); // fin keydown
  // FIN Deplacement latéral leprechaun
  // DEBUT Répéter la création d'object qui tombe
  // créer une div objet
  var elementQuiTombe = document.createElement("img");
  var largeurTerrainDeJeu = jQuery('#terrainJeu').width();
    elementQuiTombe.id = 'objetQuiTombe';
    elementQuiTombe.style.position ='absolute';
    elementQuiTombe.style.backgroundImage = "url('jeu/hat.png')";
    elementQuiTombe.style.backgroundRepeat = "no-repeat";
    elementQuiTombe.style.top = '0px'; // y1 variable
    elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px'; // x1 variable
    elementQuiTombe.style.width = '80px'; // w1 fixe
    elementQuiTombe.style.height = '118px'; //h1 fixe
    elementQuiTombe.style.zIndex = '5';
    document.getElementById('terrainJeu').appendChild(elementQuiTombe);
  // DEBUT appeler une image au hasard
  var tableauObjetQuiTombe = ["jeu/angularjs.png", "jeu/bootstrap.png", "jeu/css3.png", "jeu/html.png", "jeu/expressjsp.png", "jeu/javascript.png", "jeu/jqueryp.png", "jeu/jqueryuip.png", "jeu/mongodbp.png", "jeu/nodejsp.png", "jeu/ajax.png", "jeu/meteorjs.png", "jeu/coin.png", "jeu/coin.png", "jeu/biere.png", "jeu/biere.png", "jeu/heart.png", "jeu/heart.png", "jeu/horseshoe.png", "jeu/horseshoe.png", "jeu/hat.png", "jeu/hat.png", "jeu/trefle.png", "jeu/trefle.png", "jeu/potOfGold.png", "jeu/potOfGold.png", "jeu/coin.png", "jeu/coin.png", "jeu/biere.png", "jeu/biere.png", "jeu/heart.png", "jeu/heart.png", "jeu/horseshoe.png", "jeu/horseshoe.png", "jeu/hat.png", "jeu/hat.png", "jeu/trefle.png", "jeu/potOfGold.png"];
  // DEBUT attribuer une valeur à chaque image après collision
  var valeurObjetQuiTombe = ["jeu/angularjstr.png", "jeu/bootstraptr.png", "jeu/css3tr.png", "jeu/htmltr.png", "jeu/expressjsptr.png", "jeu/javascripttr.png", "jeu/jqueryptr.png", "jeu/jqueryuiptr.png", "jeu/mongodbptr.png", "jeu/nodejsptr.png", "jeu/ajaxtr.png", "jeu/meteorjstr.png", "jeu/1points.png", "jeu/1points.png", "jeu/2points.png", "jeu/2points.png", "jeu/5points.png", "jeu/5points.png", "jeu/7points.png", "jeu/7points.png", "jeu/9points.png", "jeu/9points.png", "jeu/10points.png", "jeu/10points.png", "jeu/15points.png", "jeu/15points.png", "jeu/1points.png", "jeu/1points.png", "jeu/2points.png", "jeu/2points.png", "jeu/5points.png", "jeu/5points.png", "jeu/7points.png", "jeu/7points.png", "jeu/9points.png", "jeu/9points.png", "jeu/10points.png", "jeu/15points.png"];
  // FIN attribuet une valeur à chaque image après collision
  // Conmpteurs à incrémenter après collision
  var caseTableau;
  var selectObjetRandom = function(){
    // caseTableau = parseInt(Math.random()*12);
    caseTableau = parseInt(Math.random()*38);
    var pointeCase = tableauObjetQuiTombe[caseTableau];
    elementQuiTombe.style.backgroundImage = "url('"+pointeCase+"')";
  };
  // FIN rajouter une image au hasard (selectObjetRandom)
  // DEBUT faire tomber l'objet
var IntervalleDesc;
function intervalleDescente () {
  IntervalleDesc = setInterval(changeTop,50);
}; // fin intervalleDescente
var collision = true;
var compteurCoin = 0;
var compteurBiere = 0;
var compteurHeart = 0;
var compteurHorseshoe = 0;
var compteurHat = 0;
var compteurTrefle = 0;
var compteurPotOfGold = 0;
var total = 0;
var changeTop = function(){
  var mouvementVerticalElementQuiTombePF = parseFloat(elementQuiTombe.style.top)+(parseFloat(elementQuiTombe.style.height)*0.5);
  var hauteurTerrainDeJeu = jQuery('#terrainJeu').height();
  var x1 = parseFloat(elementQuiTombe.style.left); // 80px
  var y1 = parseFloat(elementQuiTombe.style.top); // 118px
  var w1 = parseFloat(elementQuiTombe.style.width); // 80px
  // var h1 = parseFloat(elementQuiTombe.style.height); // 118px
  var x2 = parseFloat(miniLeprechaunCont.style.left); // 85px
  var y2 = hauteurTerrainDeJeu-(jQuery('#leprechaun').height()); // variable 80%
  var w2 = parseFloat(miniLeprechaunCont.style.width); // 85px
  // var h2 = parseFloat(miniLeprechaunCont.style.height); // 115px
  if (mouvementVerticalElementQuiTombePF < hauteurTerrainDeJeu){
    elementQuiTombe.style.top = (parseFloat(elementQuiTombe.style.top)+10)+"px";
    if (
      (x1 > x2) && (x1 < x2+85) && (y1+w1 > y2) && (y1 <y2+w2) && collision
      ){
        var changeObjetRandom = function(){
          var pointeValue = valeurObjetQuiTombe[caseTableau];
          elementQuiTombe.style.backgroundImage = "url('"+pointeValue+"')";
          // Relier aux compteurs
          if (elementQuiTombe.style.backgroundImage=='url("jeu/angularjstr.png")'){
            // var audio = document.getElementById("tadaa");
            // audio.volume = 0.2;
            $("#angularjs").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/bootstraptr.png")'){
            var audio = document.getElementById("tadaa");
            audio.volume = 0.2;
            $("#bootstrap").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/css3tr.png")'){
            $("#css").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/htmltr.png")'){
            $("#html").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/expressjsptr.png")'){
            $("#expressjs").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/javascripttr.png")'){
            $("#javascript").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/jqueryptr.png")'){
            $("#jquery").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/jqueryuiptr.png")'){
            $("#jqueryui").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/mongodbptr.png")'){
            $("#mongodb").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/nodejsptr.png")'){
            $("#nodejs").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/ajaxtr.png")'){
            $("#ajax").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/meteorjstr.png")'){
            $("#meteorjs").show();
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/1points.png")'){
            compteurCoin = compteurCoin+1;
            document.body.children[4].children[0].children[0].lastChild.childNodes[1].nodeValue = compteurCoin+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/2points.png")'){
            compteurBiere = compteurBiere+2;
            document.body.children[4].children[0].children[1].lastChild.childNodes[1].nodeValue = compteurBiere+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/5points.png")'){
            compteurHeart = compteurHeart+5;
            document.body.children[4].children[0].children[2].lastChild.childNodes[1].nodeValue = compteurHeart+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/7points.png")'){
            compteurHorseshoe = compteurHorseshoe+7;
            document.body.children[4].children[0].children[3].lastChild.childNodes[1].nodeValue = compteurHorseshoe+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/9points.png")'){
            compteurHat = compteurHat+9;
            document.body.children[4].children[0].children[4].lastChild.childNodes[1].nodeValue = compteurHat+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/10points.png")'){
            compteurTrefle = compteurTrefle+10;
            document.body.children[4].children[0].children[5].lastChild.childNodes[1].nodeValue = compteurTrefle+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };
          if (elementQuiTombe.style.backgroundImage=='url("jeu/15points.png")'){
            compteurPotOfGold = compteurPotOfGold+15;
            document.body.children[4].children[0].children[6].lastChild.childNodes[1].nodeValue = compteurPotOfGold+" points";
            collision=false;
            setTimeout (function(){
              collision=true;
              elementQuiTombe.style.top = '0px';
              elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
              selectObjetRandom();
            },200);
          };// Fin compteurs
        }; // FIN var changeObjetRando
      changeObjetRandom();
    }; // Fin conditions de collision
    if (//DEBUT conditions de fin de jeu
      (document.getElementById('html').style.display == 'inline')
      && (document.getElementById('css').style.display == 'inline')
      && (document.getElementById('javascript').style.display == 'inline')
      && (document.getElementById('jquery').style.display == 'inline')
      && (document.getElementById('jqueryui').style.display == 'inline')
      && (document.getElementById('bootstrap').style.display == 'inline')
      && (document.getElementById('angularjs').style.display == 'inline')
      && (document.getElementById('mongodb').style.display == 'inline')
      && (document.getElementById('nodejs').style.display == 'inline')
      && (document.getElementById('expressjs').style.display == 'inline')
      && (document.getElementById('ajax').style.display == 'inline')
      && (document.getElementById('meteorjs').style.display == 'inline')
    ){
      clearInterval(IntervalleDesc);
      total = compteurCoin + compteurBiere + compteurHeart + compteurHat + compteurHorseshoe + compteurTrefle + compteurPotOfGold;
      document.getElementById('total').innerHTML = 'Vous avez gagné '+total+' points.';
      console.log(document.getElementById('lienCV'));
      $('#voirLeCV').show();
      $('#acces').show();
      acces.style.top = '60%';
      acces.style.left = '38.5%';
    }; // FIN conditions de fin de jeu
  }else{
    elementQuiTombe.style.top = '0px';
    elementQuiTombe.style.left = (Math.random()*(largeurTerrainDeJeu-80)-0)+'px';
    selectObjetRandom();
  }; // FIN mouvementVerticalElementQuiTombePF < hauteurTerrainDeJeu
}; // FIN changeTop
  selectObjetRandom();
  intervalleDescente();
  changeTop();
});
