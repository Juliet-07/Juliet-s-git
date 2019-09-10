let userid = prompt("input your username:");
let username = document.querySelector(".user").innerHTML =`loggedin as ${userid}`;
function logout(){
    let lucky = confirm("Are you sure you want to logout?")
 if (lucky){
   document.querySelector("#smart").innerHTML = "Login"
   username = document.querySelector(".user").style.display="none";
 }
}


// let userid = prompt("input your username:");
// let user = document.querySelector('.user')
// let username = user.textContent = userid
// let button = document.querySelector('#smart')


// function logout(){
//     if (username){
        
//         username.innerHTML = "" ;
//          button.textContent= "Login";
        
//     }
//     else {
//          username = userid; 
//           button.textContent = "Logout";
//     }
// }
