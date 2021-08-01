//validacion entrada
let btnstart = document.querySelector("#btn-start");
let examen = document.querySelector("#examen");
let error1 =  document.querySelector("#s1");
let error2 = document.querySelector("#s2");

btnstart.onclick = function(e){

e.preventDefault();
let name = document.querySelector("#name");
let instrument = document.querySelector("#instrument");

if(!/^[a-zA-Z]*$/g.test(name.value)){
    error1.textContent = "El campo nombre no puede contener numeros";
    return name.value;
    
    
}else if(name.value === ""){
    
    error1.textContent = "El campo nombre esta vacio";
    return false;
 
}else if(!/^[a-zA-Z]*$/g.test(instrument.value)){
    error2.textContent = "El campo instrumento no puede contener numeros";
}else if(instrument.value === ""){
    error2.textContent = "El campo instrumento esta vacio";
}
else if(instrument.value.length <5){
    error2.textContent = "Este instrumento no es el tuyo";
}else if(instrument.value != "piano"){
    error2.textContent = "Este instrumento no es el tuyo";
}else{
    examen.style.display ="block";
    error1.textContent = "";
    error2.textContent = "";
}

}

//tooltip con bootstrp
$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    });


//validaion del examen
let btn = document.querySelector("#boton");

btn.addEventListener("click", (e)=>{
    let resultado = 0;
    let pregunta1 = document.examen.q1.value;
    if(pregunta1 == false){
        alert("la pregunat numero uno no esta completada");
    }else if(pregunta1 =="a"){
        resultado ++;
        alert(resultado);
    }else{
        alert(resultado);
    }
});