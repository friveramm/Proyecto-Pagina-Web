$("#nombre").on("keyup blur", function(){
    var nombre = $("#nombre").val();
    if (nombre.length > 0) {
        if (String(nombre).length > 4){
            $("#nombre").css("border","1.5px solid green");
        }else{
            $("#nombre").css("border","1.5px solid red");
        };        
    }else{
        $('#rut').css("border", "")
    };
});

$("#rut").on("keyup blur", function() {
    var rut = $("#rut").val().trim(); // Se elimina cualquier espacio en blanco al inicio o al final

    if (rut.length > 0) {
        if (rut.length >= 8 && rut.length <= 9){
            if (/^[1-9][0-9]{0,7}[0-9kK]$/.test(rut)) {
                // El formato del RUT es válido
                $("#rut").css("border", "1.5px solid green");
            } else {
                // El formato del RUT no es válido
                $("#rut").css("border", "1.5px solid red");
            }
        }else{
            $("#rut").css("border", "1.5px solid red");
        }
    } else {
        // El campo está vacío
        $("#rut").css("border", "");
    }
});

$("#correo").on("keyup blur", function() {
    var correo = $("#correo").val();
    if (correo.length > 0) {
        if (correo.length > 4) {
            if (/^[\w._]+@(gmail|live|outlook)\.(com|cl)$/.test(correo)) {
                $("#correo").css("border", "1.5px solid green");
            } else {
                console.log('error en correo?')
                $("#correo").css("border", "1.5px solid red");
            }
        } else {
            $("#correo").css("border", "1.5px solid red");
        }
    } else {
        $("#correo").css("border", ""); // Restablecer el estilo de borde si el campo está vacío
    }
});

$("#rut").blur(function(){
    var rut = String($("#rut").val());
    if (rut.length >= 8 && rut.length <= 9){
        var formattedRut = formatRut(rut);
        $("#rut").val(formattedRut);
    }
});

function formatRut(rut) {
    rut = rut.replace(/[^\dkK]+/g, ""); // Remover todos los caracteres no numéricos excepto "k" o "K"
    var formatted = "";
    var digit = rut.slice(-1); // Obtener el último dígito
    rut = rut.slice(0, -1); // Remover el último dígito
    while (rut.length > 3) {
        formatted = "." + rut.slice(-3) + formatted; // Agregar puntos cada 3 dígitos desde la derecha
        rut = rut.slice(0, -3); // Remover los últimos 3 dígitos
    }
    formatted = rut + formatted + "-" + digit; // Agregar guión y último dígito
    return formatted;
}