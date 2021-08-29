function calcular(porcentaje, cantidad){
    const nu3=100; 
    return porcentaje*cantidad/nu3;
}
function calcularPorcentaje(){
    const entrada1=document.getElementById("cantidad");
    const entrada2=document.getElementById("porcentaje");
    const cantidad=Number(entrada1.value);
    const porcentaje=Number(entrada2.value);
    const valor=calcular(porcentaje,cantidad);

    const porcentajeSalida=document.getElementById("numero1");
    porcentajeSalida.innerText=`${porcentaje}`;
    const constante=document.getElementById("numero2");
    constante.innerText=`100`;
    const cantidadSalida=document.getElementById("numero3");
    cantidadSalida.innerText=`${cantidad}`;
    const salida=document.getElementById("salida");
    salida.innerText=`${valor}`;
}