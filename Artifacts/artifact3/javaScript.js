var even;
var odd;
var blank;

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  even = "<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
  odd = "<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
  blank = "<span style='color:White;'>" + pSymbol +"</span>";
 
  rhombusTop(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombusBottom(pHeight, pColorEven, pColorOdd, pSymbol);

}

function rhombusTop(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine = "";
  var b  = pHeight;
  
  for (i = 0; i < pHeight; i++){
    rLine += "<p>";
    b--;
    
    for(j = b; j > 0; j--){
      rLine += blank;
    }
    
    for(j = 0; j <= i; j++){
      rLine += even;
      rLine += odd;
    }
  
    rLine +="</p>";

  }
  document.getElementById("top").innerHTML = rLine;
}

function rhombusBottom(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine = "";
  
  for (i = pHeight; i > 0; i--){
    rLine += "<p>";
    
    for(j = 0; j < pHeight - i; j++){
      rLine += blank;
    }
    
    for(j = 0; j < i; j++){
      rLine += even;
      rLine += odd;
    }
    
    rLine +="</p>";

  }
  document.getElementById("bot").innerHTML = rLine;
}
