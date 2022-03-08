// this is where you write your javascript

$(window).keydown(function(e){

  var key = e.key;

  console.log(key);

  // here, add a line to hide the title
  $(".title").hide();

  if (key == "a") {
    $("body").css("background-color", "#1e9c15");
    $(".message").html("A");
    $(".message").css("color", "black");
  }
  else if (key == "b") {
    $("body").css("background-color", "#1c5ada");
    $(".message").html("B");
$(".message").css("color", "black");
  }
  else if (key == "c") {
    $("body").css("background-color", "#fab3e2");
    $(".message").html("C");
$(".message").css("color", "black");
  }
  else if (key == "d") {
    $("body").css("background-color", "#fa80b9");
    $(".message").html("D");
$(".message").css("color", "black");
  } 

  else if (key == "e") {
    $("body").css("background-color", "#2e2e2e");
    $(".message").html("E");
    $(".message").css("color", "black");
  } 

 else if (key == "f") {
    $("body").css("background-color", "#f7e40b");
    $(".message").html("F");
    $(".message").css("color", "black");
  }  
 else if (key == "g") {
    $("body").css("background-color", "#00720d");
    $(".message").html("G");
    $(".message").css("color", "black");
  }  
 else if (key == "h") {
    $("body").css("background-color", "#96e6fd");
    $(".message").html("H");
    $(".message").css("color", "black");
  }  
 else if (key == "i") {
    $("body").css("background-color", "#000000");
    $(".message").html("I");
    $(".message").css("color", "white");
  }

 else if (key == "j") {
    $("body").css("background-color", "#bb1414");
    $(".message").html("J");
    $(".message").css("color", "black");
  }
 else if (key == "k") {
    $("body").css("background-color", "#fbdd00");
    $(".message").html("K");
    $(".message").css("color", "black");
  }
 else if (key == "l") {
    $("body").css("background-color", "#fadec1");
    $(".message").html("L");
    $(".message").css("color", "black");
  }
 else if (key == "m") {
    $("body").css("background-color", "#f47300");
    $(".message").html("M");
    $(".message").css("color", "black");
  }

 else if (key == "n") {
    $("body").css("background-color", "#000387");
    $(".message").html("N");
    $(".message").css("color", "black");
  }
 else if (key == "o") {
    $("body").css("background-color", "#fafafa");
    $(".message").html("O");
    $(".message").css("color", "black");
  }

 else if (key == "p") {
    $("body").css("background-color", "#340eac");
    $(".message").html("P");
    $(".message").css("color", "black");
  } 

 else if (key == "q") {
    $("body").css("background-color", "#06420d");
    $(".message").html("Q");
    $(".message").css("color", "black");
  }

 else if (key == "r") {
    $("body").css("background-color", "#00620b");
    $(".message").html("R");
    $(".message").css("color", "black");
  }

 else if (key == "s") {
    $("body").css("background-color", "#d05301");
    $(".message").html("S");
    $(".message").css("color", "black");
  }

   else if (key == "t") {
    $("body").css("background-color", "#e9b903");
    $(".message").html("T");
    $(".message").css("color", "black");
  }

  else if (key == "u") {
    $("body").css("background-color", "#cc2112");
    $(".message").html("U");
    $(".message").css("color", "black");
  }

  else if (key == "v") {
    $("body").css("background-color", "#0a530e");
    $(".message").html("V");
    $(".message").css("color", "black");
  }

  else if (key == "w") {
    $("body").css("background-color", "#fc8cc9");
    $(".message").html("W");
    $(".message").css("color", "black");
  }

  else if (key == "x") {
    $("body").css("background-color", "#dfb800");
    $(".message").html("X");
    $(".message").css("color", "black");
  }

  else if (key == "y") {
    $("body").css("background-color", "#7c4606");
    $(".message").html("Y");
    $(".message").css("color", "black");
  }

  else if (key == "z") {
    $("body").css("background-color", "#026406");
    $(".message").html("Z");
    $(".message").css("color", "black");
  }
  else if (key == "0") {
    $("body").css("background-color", "#ffffff");
    $(".message").html("0");
    $(".message").css("color", "black");
  }

  else if (key == "1") {
    $("body").css("background-color", "#000000");
    $(".message").html("1");
    $(".message").css("color", "white");
  }
  
  else if (key == "2") {
    $("body").css("background-color", "#c00a0a");
    $(".message").html("2");
    $(".message").css("color", "black");
  }

  else if (key == "3") {
    $("body").css("background-color", "#fff554");
    $(".message").html("3");
    $(".message").css("color", "black");
  }
  else if (key == "4") {
    $("body").css("background-color", "#2f7b09");
    $(".message").html("4");
    $(".message").css("color", "black");
  }

  else if (key == "5") {
    $("body").css("background-color", "#5cd1f0");
    $(".message").html("5");
    $(".message").css("color", "black");
  }

  else if (key == "6") {
    $("body").css("background-color", "#f29ad4");
    $(".message").html("6");
    $(".message").css("color", "black");
  }

  else if (key == "7") {
    $("body").css("background-color", "#b868fe");
    $(".message").html("7");
    $(".message").css("color", "black");
  }

  else if (key == "8") {
    $("body").css("background-color", "#02057e");
    $(".message").html("8");
    $(".message").css("color", "black");
  }

  else if (key == "9") {
    $("body").css("background-color", "#004102");
    $(".message").html("9");
    $(".message").css("color", "black");
  }


  else if (e.keyCode == 32) {

   // $("body").css("background-color", "#ffffff");

  }




  else {
    // $("body").css("background-color", "red");
  }

});

   // <input type="text" name="Name" size="20">




