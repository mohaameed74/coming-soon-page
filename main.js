
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  let myInp = document.getElementById("email");
  let btn = document.getElementById("submit");
 let span = document.querySelector(".wrong");


btn.addEventListener("click",function(){
    let email = myInp.value;
    if(re.test(email) === false && email !== ""){
        span.style.display = "block";
        myInp.style.border = "1px solid hsl(354, 100%, 66%)";
      
    }else {
        span.style.display = "none";
        myInp.style.border = " 1px solid #ccc";
    }

})

