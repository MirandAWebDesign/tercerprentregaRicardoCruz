const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
})
})
console.log("hola")

function agregado(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}

$('#myBtn').click(function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
});

document.getElementById("mostrarAlerta").addEventListener("click", function() {
    // Muestra la alerta de SweetAlert
    Swal.fire({
      title: '¡Alerta!',
      text: 'Esto es una alerta con SweetAlert',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  });

  function exito(){
    Swal.fire('SweetAlert2 is working!')
  }