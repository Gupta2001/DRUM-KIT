var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       var k=this.innerHTML;
        sound(k);
        ani(k);
    });
}

function ani(key){
    var ac=document.querySelector("."+key);
    ac.classList.add("Ani");
    setTimeout(function(){
        ac.classList.remove("Ani");
    },100);
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    ani(event.key);
});





function sound(kk){
    switch(kk){
        case "a":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "d":
                var tom3=new Audio("tom-3.mp3");
                tom3.play();
                break;
        case "f":
                var tom4=new Audio("tom-4.mp3");
                tom4.play();
                break;
         case "g":
            var tom5=new Audio("kick-bass.mp3");
            tom5.play();
             break;
         case "h":
                var tom6=new Audio("snare.mp3");
                tom6.play();
                break;      
         case "j":
                 var tom7=new Audio("crash.mp3");
                tom7.play();
                    break;  
        default: console.log(key);
    }
}