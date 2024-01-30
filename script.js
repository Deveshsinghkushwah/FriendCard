var currstatus = document.querySelector("h2");
var btn = document.querySelector("#btn");
var flag = 0;

btn.addEventListener("click",function() {
    if(flag == 0){

        currstatus.innerHTML = "Friends!";
        currstatus.style.color = "Green"
        btn.innerHTML = "Remove Friend";
        flag = 1;
    }
    else{
        currstatus.innerHTML = "Stranger";
        currstatus.style.color = "red"
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
});
