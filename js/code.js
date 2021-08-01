//validacion entrada
let btnstart = document.querySelector("#btn-start");
let examen = document.querySelector("#examen");
let error1 =  document.querySelector("#s1");
let error2 = document.querySelector("#s2");
let error3 = document.querySelector("#s3");
let codigo =  document.querySelector("#codigo");

btnstart.onclick = function(e){

e.preventDefault();
let name = document.querySelector("#name");
let instrument = document.querySelector("#instrument");

if(!/^[a-zA-Z]*$/g.test(name.value)){
    error1.textContent = "El campo nombre no puede contener numeros";
    error2.textContent = "";
    error3.textContent = "";
    return name.value;
    
    
}else if(name.value === ""){
    
    error1.textContent = "El campo nombre esta vacio";
    error2.textContent = "";
    error3.textContent = "";
    return false;
 
}else if(!/^[a-zA-Z]*$/g.test(instrument.value)){
    error2.textContent = "El campo instrumento no puede contener numeros";
    error1.textContent = "";
    error3.textContent = "";
}else if(instrument.value === ""){
    error2.textContent = "El campo instrumento esta vacio";
    error1.textContent = "";
    error3.textContent = "";
}
else if(instrument.value.length <5){
    error2.textContent = "Este instrumento no es el tuyo";
    error1.textContent = "";
    error3.textContent = "";
    
}else if(instrument.value != "piano"){
    error2.textContent = "Este instrumento no es el tuyo";
    error1.textContent = "";
    error3.textContent = "";
}else if(codigo.value != "22341" && codigo.value != "33124" && codigo.value != "11213" && codigo.value != "23423"){
    error3.textContent = "El codigo que acaba de introducir no le pertenece  o no intrdujo su codigo";
    error1.textContent = "";
    error2.textContent = "";
    
}else{
    examen.style.display ="block";
    error1.textContent = "";
    error2.textContent = "";
    error3.textContent = "";
    btnstart.styly.display="none";
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
    e.preventDefault();
    let resultado = 0;
    let pregunta1 = document.examen.q1.value;
    let pregunta2 = document.examen.q2.value;
    let pregunta3 = document.examen.q3.value;
    let pregunta4 =  document.examen.q4.value;
    let pregunta5 = document.examen.q5.value;
    let pregunta6 = document.examen.q6.value;
    let pregunta7 = document.examen.q7.value;
    let pregunta8 = document.examen.q8.value;
    let pregunta9 = document.examen.q9.value;
    let pregunta10 = document.examen.q10.value;
    let pregunta11 = document.examen.q11.value;
    let pregunta12 = document.examen.q12.value;
    let pregunta13 = document.examen.q13.value;
    let pregunta14 = document.examen.q14.value;
    let pregunta15 = document.examen.q15.value;

    let MostrarResultados1 = document.querySelector("#r1");
    let MostrarResultados2 = document.querySelector("#r2");
    let MostrarResultados3 = document.querySelector("#r3")

    let show1 = document.querySelector("#resultado-excelenete");
    let show2 = document.querySelector("#resultado-medio");
    let show3 = document.querySelector("#resultado-bajo");

    if(pregunta1 == false){
        
        alert("La pregunta numero 1 no ha sido completada");
        return;
    }else if(pregunta1 =="a"){
        resultado ++;
        
    }


    if(pregunta2 == false){
        alert("La pregunta numero 2 no ha sido completada");
        return;
    }else if(pregunta2 == "c"){
        resultado ++;
       
    }

    if(pregunta3 == false){
        alert("La pregunat numero 3 no ha sido completada");
        return;
    }else if(pregunta3 == "b"){
        resultado++;
    }

    if(pregunta4 == false){
        alert("La pregunat numero 4 no ha sido completada");
        return;
    }else if(pregunta4 == "d"){
        resultado++;
    }


    if(pregunta5 == false){
        alert("La pregunat numero 5 no ha sido completada");
        return;
    }else if(pregunta5 == "c"){
        resultado++;
    }


    if(pregunta6 == false){
        alert("La pregunat numero 6 no ha sido completada");
    }else if(pregunta6 == "a"){
        resultado++;
    }


    if(pregunta7 == false){
        alert("La pregunat numero 7 no ha sido completada");
        return;
    }else if(pregunta7 == "true"){
        resultado++;
    }


    if(pregunta8 == false){
        alert("La pregunat numero 8 no ha sido completada");
        return;
    }else if(pregunta8 == "d"){
        resultado++;
    }


    if(pregunta9 == false){
        alert("La pregunat numero 9 no ha sido completada");
        return;
    }else if(pregunta9 =="false"){
        resultado++;
    }


    if(pregunta10 == false){
        alert("La pregunat numero 10 no ha sido completada");
        return;
    }else if(pregunta10 =="f"){
        resultado++;
    }


    if(pregunta11 == false){
        alert("La pregunat numero 11 no ha sido completada");
        return;
    }else if(pregunta11 == "d"){
        resultado++;
    }


    if(pregunta12 == false){
        alert("La pregunat numero 12 no ha sido completada");
        return;
    }else if(pregunta12 == "c"){
        resultado++;
    }



    if(pregunta13 == false){
        alert("La pregunat numero 13 no ha sido completada");
        return;
    }else if(pregunta13 == "true"){
        resultado++;
    }



    if(pregunta14 == false){
        alert("La pregunat numero 14 no ha sido completada");
        return;
    }else if(pregunta14 == "b"){
        resultado++;
    }




    if(pregunta15 == false){
        alert("La pregunat numero 15 no ha sido completada");
        return;
    }else if(pregunta15 == "false"){
        resultado++;
    }

  
    if(resultado < 5){
        
        MostrarResultados1.textContent ="Su calificacion fue"+" "+resultado +"."+"  "+ "uufff no te fue bien, trata de practicar mas 😔😟😭😭";
        examen.style.display ="none";
        show3.style.display="block";

    }else if(resultado <= 5){
      
        MostrarResultados1.textContent ="Su calificacion fue"+" "+resultado +"."+"  "+ "uufff no te fue bien, trata de practicar mas 😔😟😭😭";
        examen.style.display ="none";
        show3.style.display="block";

    }else if(resultado == 6){
     
        MostrarResultados1.textContent ="Su calificacion fue"+" "+resultado +"."+"  "+ "uufff no te fue bien, trata de practicar mas 😔😟😭😭";
        examen.style.display ="none";
        show3.style.display="block";
    }
    else if(resultado <= 10){
       
        MostrarResultados2.textContent ="Su calificacion fue"+" "+resultado +"."+"  "+"Bien, pero debes de praticar mas😌😛😜😝";
        examen.style.display ="none";
        show2.style.display="block";

    }
    else if( resultado > 10){
       
        MostrarResultados3.textContent ="Su calificacion fue"+" "+resultado +"."+"  "+"Excelente pasaste la prueba 👌😎😎🎶🎶✨";
        examen.style.display ="none";
        show1.style.display="block";
       
        
    }


});




//else if(resultado >= 7){
        
//}else if(resultado >= 8){
        
//}else if(resultado >= 9){
    
//}else if(resultado >= 10){
    
//}