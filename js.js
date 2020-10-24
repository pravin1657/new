// FUNCTION FOR PRINTING RESULT
function sayhello(){
    var name=document.getElementById("name").value;
    var massage="hello";
    document.getElementById("textarea1").textContent="hello " + name;

}
// function call of sayhello
document.querySelector("button").addEventListener("click", sayhello);
 

//Function for printing co-ordintes for x and y of arrow after pressing shift key
function m(event){
    if(event.shiftKey==true){
        console.log("X:" +event.clientX);
        console.log("Y:" +event.clientY);
    }
    
}
document.querySelector("body").addEventListener("mousemove",m);

