const boton = document.getElementById("submit-boton");
boton.addEventListener("click", () => {
    // variables para obtener nombre
    const nombreCliente = document.getElementById("nombre").value;
    const apellidoCliente = document.getElementById("apellido").value;

    const  nombreCompleto = nombreCliente+ " "+ apellidoCliente;
   
    // variables para obtener fecha y hora
    var hoy = new Date();
    hoy.setHours(5);
    const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    const hora = hoy.getHours() + ':' + hoy.getMinutes();

    const fechaYHora = fecha + '/' + hora;
    
    // reviso si están checkeados los servicios
    const lavadoExterior    = $("#lavadoExterior").prop("checked");
    const lavadoMotor       = $("#lavadoMotor").prop("checked");

    // creo variable para hacer cálculo
    let montoNeto           = 0;

    if( lavadoExterior ) {
        montoNeto = montoNeto + 7000;
    }

    if( lavadoMotor ) {
        montoNeto = montoNeto + 5000;
    }

    // cálculo impuesto y total 
    const impuesto  = montoNeto * 0.19;
    const total     = montoNeto + impuesto;

    // cargo los datos a pantalla 
    document.getElementById("nombreCliente").innerHTML   = `<span> ${nombreCompleto}</span>`;
    document.getElementById("entrega").innerHTML   = `<span> ${fechaYHora}</span>`;
    document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
});

    