$("#grayButton").on("click", function(){
     $("body").css("background-color","gray");
     $("li").removeClass("active");
     $("grayButton").addClass("active");
});

$("#whiteButton").on("click", function(){
     $("body").css("background-color","white");
     $("li").removeClass("active");
     $("whiteButton").addClass("active");
});

$("#yellowButton").on("click", function(){
     $("body").css("background-color","yellow");
     $("li").removeClass("active");
     $("yellowButton").addClass("active");
});

$("#blueButton").on("click", function(){
     $("body").css("background-color","blue");
     $("li").removeClass("active");
     $("blueButton").addClass("active");
});



/*
document.getElementById("whiteButton").onclick = function(){
  document.body.style.backgroundColor = "#fff";
  document.getElementById("whiteButton").className =  "active";
  document.getElementById("grayButton").className =  "";
  document.getElementById("blueButton").className =  "";
  document.getElementById("yellowButton").className =  "";
}

document.getElementById("grayButton").onclick = function(){
  document.body.style.backgroundColor = "gray";
  document.getElementById("whiteButton").className =  "";
  document.getElementById("grayButton").className =  "active";
  document.getElementById("blueButton").className =  "";
  document.getElementById("yellowButton").className =  "";
}

document.getElementById("blueButton").onclick = function(){
  document.body.style.backgroundColor = "blue";
  document.getElementById("whiteButton").className =  "";
  document.getElementById("grayButton").className =  "";
  document.getElementById("blueButton").className =  "active";
  document.getElementById("yellowButton").className =  "";
}

document.getElementById("yellowButton").onclick = function(){
  document.body.style.backgroundColor = "yellow";
  document.getElementById("whiteButton").className =  "";
  document.getElementById("grayButton").className =  "";
  document.getElementById("blueButton").className =  "";
  document.getElementById("yellowButton").className =  "active";
}
*/