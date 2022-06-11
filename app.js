var y;
function get() {
    
    var a = document.getElementById("fName");
    var b = document.getElementById("lName");
    var c = document.getElementById("mail");
    var error1 =  document.getElementById("error1");
    var error2 =  document.getElementById("error2");
    // var error3 =  document.getElementById("error3");



    

    var x = a.value;
    var z = b.value;
    y = c.value;
    

    

    x = x.replace(/\s\s+/g, " ");
    z = z.replace(/\s\s+/g, " ");
    y = y.replace(/\s\s+/g, "");

   
 
    if (x.length <= 1 || z.length <=1 ) {

        error1.innerText= "Your name must contain more than one character";
        error1.style.transition = "3s";
        error1.style.color = "red";

        error2.innerText= "Your name must contain more than one character";
        error2.style.transition = "3s";
        error2.style.color = "red";
    }

     if ( x.length >= 15 ) {
        error1.innerText= "Your name must be in 15 characters";
        error1.style.transition = "3s";
        error1.style.color = "red";

    }

    // else{
    //     error1.innerText = "";
    // }

    if ( z.length >= 15) {
        error2.innerText= "Your name must be in 15 characters";
        error2.style.transition = "3s";
        error2.style.color = "red";


    }

    // else{
    //     error2.innerText = "";
    // }


//    else if(y === "/", "{}","[]","<>","()") {
//        alert("These characters are not allowed");

//    }

    if (z === " ") {
       error2 = "Please fill out all fields";
       error2.style.transition = "3s";
       error2.style.color = "red";

    //    error2 ("Please fill out all fields")
    //    error2.style.transition = "3s";
    //    error2.style.color = "red";

    //    error3 ("Please fill out all fields")
    //    error3.style.transition = "3s";
    //    error3.style.color = "red";

   }

   else{
         console.log(y)
         console.log (x);
         console.log (z);
  
   }

}