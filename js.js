var target;
// var guess_input_text;
var guess_input;
var finished;
var guess = 0;

function launch_game() {

    var random_number = Math.random() * 100;
    target = Math.floor(random_number) + 1;
    console.log(target);
    document.getElementById( "response" ).innerHTML += '<p class="bot">Salut, veux-tu jouer avec moi ? </p>';

};

function check(){
  // Retrive data from textbox
  var guess_input_text = document.getElementById("guess").value;
  guess_input = parseInt(guess_input_text);
  document.getElementById( "response" ).innerHTML += "<p class='humain'>" + guess_input_text + "</p>";


  if (guess_input == target) {
    document.getElementById( "response" ).innerHTML += "<p class='bot'>Bravo, il fallait effectivement trouver " + target + " </p>";
    document.getElementById( "response" ).innerHTML += "<p class='bot'>Tu as réussi en à peine " + guess + " essais !  </p>";
    document.getElementById( "response" ).innerHTML += "<p class='bot'>Veux tu faire une autre partie ? </p>";
    guess=0;
  } else {
     if (guess_input<0 || guess_input>100 || isNaN(guess_input)) {
      document.getElementById( "response" ).innerHTML += '<p class="bot">Erreur: vous avez saisi ' + guess_input_text + '. Vous devez saisir un chiffre entre 0 et 100 : </p>';
      guess++;
      document.getElementById("guess").value = "";
    } else if (guess_input < target){
      document.getElementById( "response" ).innerHTML += "<p class='bot'>Non, c'est plus... Essayez encore </p>";
      guess++;
      document.getElementById("guess").value = "";
    } else if (guess_input > target){
      document.getElementById( "response" ).innerHTML += "<p class='bot'>Non, c'est moins... Essayez encore </p>";
      guess++;
      document.getElementById("guess").value = "";
    };
  };


};

function do_game(){
    if (guess==0){
      var go = okToPlay(go);
      var guess_input_text = document.getElementById("guess").value;
      if (go===true){
        document.getElementById( "response" ).innerHTML += "<p class='humain'>" + guess_input_text + "</p>";
        document.getElementById( "response" ).innerHTML += '<p class="bot">Ok,... Je pense à un nombre entre 1 et 100, essaye de deviner lequel :-) </p>';
        document.getElementById("guess").value = "";
        guess+=1;
      } else {
        document.getElementById( "response" ).innerHTML += "<p class='humain'>" + guess_input_text + "</p>";
        document.getElementById( "response" ).innerHTML += '<p class="bot">ok, tant pis :-( \n salut !</p>';
        alert("ok, tant pis :-( \n salut !");
      };

    } else {
        check();
      }
  };

function okToPlay(guess){

  if (document.getElementById("guess").value ==="go" ||
      document.getElementById("guess").value ==="Oui" ||
      document.getElementById("guess").value ==="Ok" ||
      document.getElementById("guess").value ==="yep" ||
      document.getElementById("guess").value ==="Yes" ||
      document.getElementById("guess").value ==="yes" ||
      document.getElementById("guess").value.indexOf("o")==0) {
        return true;
      };

};
