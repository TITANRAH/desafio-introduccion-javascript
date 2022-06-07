precio = '400000';
precioFijo = document.querySelector('#precio');
precioFijo.innerHTML = precio;

function calcular(){
    
    cantidad = document.querySelector('#cantidad');
    showCantidad = document.querySelector('#show-cantidad');
    showCantidad.innerHTML = cantidad.value;
    total = Number(cantidad.value) * Number(precio);
    precioTotal = document.querySelector('#precio-total');
    precioTotal.innerHTML = total;
    color = document.querySelector('#color');
    showColor = document.querySelector('#show-color');
    showColor.style.backgroundColor = color.value;
    console.log('color-->',color.value)
    console.log('cantidad-->', cantidad.value);
    console.log('este es el total--->', total);
}