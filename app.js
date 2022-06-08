var y;
function get() {
    
    var a = document.getElementById("fName");
    var b = document.getElementById("lName");
    var c = document.getElementById("mail");

    

    var x = a.value;
    var z = b.value;
    y = c.value;
    

    

    x = x.replace(/\s\s+/g, " ");
    z = z.replace(/\s\s+/g, " ");
    y = y.replace(/\s\s+/g, "");

   
 
    if (x.length <= 1 && z.length <=1 ) {

        alert("Your name must contain more than one character");
    }

    else if ( x.length >= 15 || z.length >= 15) {
        alert("Your name must be in 15 characters");

    }

//    else if(y === "/", "{}","[]","<>","()") {
//        alert("These characters are not allowed");

//    }

   else if (x == "" || y == "" || z == "") {
       alert("Please fill out all fields")

   }

   else{
         console.log(y)
         console.log (x);
         console.log (z);
  
   }

}