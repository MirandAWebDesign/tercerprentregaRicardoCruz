const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];


const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
//**ALerts */
function agregado(){
    Swal.fire({
        /*position: 'bottom-end',*/
        position: 'top-end',
        icon: 'success',
        title: 'Agregado a Carrito!',
        showConfirmButton: false,
        timer: 1000
      })
  }
  function comprado(){
    Swal.fire({
        /*position: 'bottom-end',*/
        position: 'center',
        icon: 'success',
        title: 'Compra Exitosa!',
        showConfirmButton: false,
        timer: 1800
      })
  }
  function irDatosPago() {
	window.location.href = "datospago.html";
}
/*Modal 1*/
document.getElementById('abrirModal').addEventListener('click', function() {
	document.getElementById('ocultacar').style.display = 'none';
	document.getElementsByClassName('modal').style.display = 'block';
});

document.getElementById('cerrarModal').addEventListener('click', function() {
	document.getElementById('formulario-compra').style.display = 'none';
});
/**MODAL 2 */
document.getElementById('abrirModal2').addEventListener('click', function() {
	document.getElementById('formulario-compra').style.display = 'none';
	document.getElementsByClassName('modal2').style.display = 'block';
});

document.getElementById('cerrarModal2').addEventListener('click', function() {
	document.getElementById('resumen-compra').style.display = 'none';
});


  //**complemento */
  let carrito = [];
  let total = 0.00;

  function agregarAlCarrito(idProducto, nombre, precio) {
	  carrito.push({ idProducto, nombre, precio });
	  total += precio;
	  actualizarCarrito();
  }
    console.log(carrito);
  function actualizarCarrito() {
	  const carritoList = document.getElementById('carrito');
	  carritoList.innerHTML = '';

	  carrito.forEach(item => {
		  const li = document.createElement('li');
		  li.textContent = `ID: ${item.idProducto} - Nombre: ${item.nombre} - Precio: $${item.precio.toFixed(2)}`;
		  carritoList.appendChild(li);
	  });

	  document.getElementById('total').textContent = total.toFixed(2);
  }

  function generarCompra() {
	  const formularioCompra = document.getElementById('formulario-compra');
	  formularioCompra.style.display = 'block';
  }

  function realizarCompra() {
	 
	  const nombre = document.getElementById('nombre-cliente').value;
	  const numeroCelular = document.getElementById('numero-celular').value;
	  const correoElectronico = document.getElementById('correo-electronico').value;
	  const numeroTarjeta = document.getElementById('numero-tarjeta').value;
	  const fechaVencimiento = document.getElementById('fecha-vencimiento').value;
	  const cvv = document.getElementById('cvv').value;
	  const calle = document.getElementById('calle').value;
	  const numeroInterior = document.getElementById('numero-interior').value;
	  const numeroExterior = document.getElementById('numero-exterior').value;
	  const ciudad = document.getElementById('ciudad').value;
	  const codigoPostal = document.getElementById('codigo-postal').value;

	  if (numeroTarjeta.length !== 16) {
		  alert('El número de tarjeta debe tener 16 dígitos.');
		  return;
	  }

	  const resumenCompra = document.getElementById('resumen-compra');
	  const productosCompradosList = document.getElementById('productos-comprados');
	  const totalPagado = document.getElementById('total-pagado');

	  productosCompradosList.innerHTML = '';
	  carrito.forEach(item => {
		  const li = document.createElement('li');
		  li.textContent = `ID: ${item.idProducto} - Nombre: ${item.nombre} - Precio: $${item.precio.toFixed(2)}`;
		  productosCompradosList.appendChild(li);
	  });

	  totalPagado.textContent = total.toFixed(2);

	  document.getElementById('resumen-nombre-cliente').textContent = nombre;
	  document.getElementById('resumen-numero-celular').textContent = numeroCelular;
	  document.getElementById('resumen-correo-electronico').textContent = correoElectronico;
	 /** document.getElementById('resumen-numero-tarjeta').textContent = numeroTarjeta;
	  document.getElementById('resumen-fecha-vencimiento').textContent = fechaVencimiento;
	  document.getElementById('resumen-cvv').textContent = cvv;*/
	  document.getElementById('resumen-calle').textContent = calle;
	  document.getElementById('resumen-numero-interior').textContent = numeroInterior;
	  document.getElementById('resumen-numero-exterior').textContent = numeroExterior;
	  document.getElementById('resumen-ciudad').textContent = ciudad;
	  document.getElementById('resumen-codigo-postal').textContent = codigoPostal;

	  resumenCompra.style.display = 'block';

	  carrito = [];
	  total = 0.00;
	  actualizarCarrito();
  }