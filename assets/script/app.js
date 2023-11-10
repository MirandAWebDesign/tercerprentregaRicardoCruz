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
//ocultar carrito
const btnOcultarCarrito = document.getElementById('ocultarCarritoBtn');


// Evento click para ocultar el carrito
btnOcultarCarrito.addEventListener('click', () => {
    containerCartProducts.classList.add('hidden-cart');
});

// Evento click para ocultar el carrito

    // Obtén la referencia al div
    const tempDiv = document.getElementById('tempDiv');

    // Muestra el div inicialmente
    tempDiv.style.display = 'block';

    // Configura un temporizador para ocultar el div después de 3000 milisegundos (3 segundos)
    setTimeout(() => {
        tempDiv.style.display = 'none';
    }, 3000);

// vaciar carrito
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

vaciarCarritoBtn.addEventListener('click', () => {
    // Vaciar el array de productos
    allProducts = [];
    
    // Limpiar el HTML del carrito
    showHTML();
});

//  local stor


/**Para los datos de formulario */

// Función para obtener los datos del formulario desde el localStorage
const getFormDataFromStorage = () => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
};

// Función para guardar los datos del formulario en el localStorage
const saveFormDataToStorage = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
};

document.getElementById('cerrarModal').addEventListener('click', function () {
    // ... (código anterior)

    // Obtener datos del formulario y guardarlos en localStorage
    const formData = {
        nombre,
        numeroCelular,
        correoElectronico,
        numeroTarjeta,
        fechaVencimiento,
        cvv,
        calle,
        numeroInterior,
        numeroExterior,
        ciudad,
        codigoPostal,
    };

    saveFormDataToStorage(formData);
});

document.getElementById('cerrarModal2').addEventListener('click', function () {
    // ... (código anterior)

    // Obtener datos del formulario y guardarlos en localStorage
    const formData = {
        nombre,
        numeroCelular,
        correoElectronico,
        numeroTarjeta,
        fechaVencimiento,
        cvv,
        calle,
        numeroInterior,
        numeroExterior,
        ciudad,
        codigoPostal,
    };

    saveFormDataToStorage(formData);
});

// Al cargar la página, obtener datos del formulario del localStorage
document.addEventListener('DOMContentLoaded', () => {
    const formData = getFormDataFromStorage();

    // Restaurar los datos del formulario en caso de que existan
    document.getElementById('nombre-cliente').value = formData.nombre || '';
    document.getElementById('numero-celular').value = formData.numeroCelular || '';
    document.getElementById('correo-electronico').value = formData.correoElectronico || '';
    document.getElementById('numero-tarjeta').value = formData.numeroTarjeta || '';
    document.getElementById('fecha-vencimiento').value = formData.fechaVencimiento || '';
    document.getElementById('cvv').value = formData.cvv || '';
    document.getElementById('calle').value = formData.calle || '';
    document.getElementById('numero-interior').value = formData.numeroInterior || '';
    document.getElementById('numero-exterior').value = formData.numeroExterior || '';
    document.getElementById('ciudad').value = formData.ciudad || '';
    document.getElementById('codigo-postal').value = formData.codigoPostal || '';
});
/**fin local stor */


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

/* MODIFICAR ALERT DE SWEETALERT*/

//**ALerts */



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

function agregado(){
    Swal.fire({
        position: 'top-end',
        icon: 'none',
        title: 'Agregado a Carrito!',
        showConfirmButton: false,
        timer: 1000,
		customClass: {
			container: 'custom-swal-container',
			popup: 'custom-swal-popup',
			title: 'custom-swal-title',
			text: 'custom-swal-text',
			icon: 'custom-swal-icon',
		},	

      });
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
	document.getElementsByClassName('modal2')[0].style.display = 'block';
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

	  function cancelada(){
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Debes llenar todos los datos",
			footer: 'Compra Cancelada'
		  });
	  }

	      // Verificar si algún campo obligatorio está vacío
		  if (!nombre || !numeroCelular || !correoElectronico || !numeroTarjeta || !fechaVencimiento || !cvv || !calle || !numeroInterior || !numeroExterior || !ciudad || !codigoPostal) {
			alert('Por favor, llene todos los campos obligatorios. Compra cancelada.');
		
			/*window.location.href = "compra.html";*/
			window.location.href = "compra.html";
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

