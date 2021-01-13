var i=0;
function nextslide() {
      document.getElementById("Fbi").src= images[i];
      document.getElementById("Names").innerHTML = Names[i];
       i=i+1
       if (i==4)
       {
             i=0;
       }
       
     }