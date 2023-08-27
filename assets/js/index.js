/* DOM */
const precio = document.getElementById ("precio")
const cantidad = document.querySelector(".cantidad");
const btnMas = document.getElementById("btn-mas");
const btnMenos = document.getElementById("btn-menos");
const valorTotal = document.querySelector(".valor-total");

/* Variables */
const precioValue = Number(precio.innerHTML);

/* Métodos */
const sumar = () => {
const cantidadValue = Number(cantidad.innerHTML);
cantidad.innerHTML = cantidadValue + 1;
valorTotal.innerHTML = Number(cantidad.innerHTML) * precioValue;
}

const restar = () => {
const cantidadValue = Number(cantidad.innerHTML);
cantidad.innerHTML = cantidadValue - 1;
valorTotal.innerHTML = Number(cantidad.innerHTML) * precioValue;
}

/* Eventos */
btnMas.addEventListener("click", sumar);
btnMenos.addEventListener("click", restar);