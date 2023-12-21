var info ={name:"ahmed",age:25,work:"programmer"}

console.log(typeof(info));



localStorage.setItem("data",JSON.stringify(info));

var info=JSON.parse(localStorage.getItem("data"));

console.log(info.name)



document.getElementById("color").onchange = function(){
    localStorage.setItem("color",document.getElementById("color").value);
    document.body.style.background =localStorage.getItem("color")
}
