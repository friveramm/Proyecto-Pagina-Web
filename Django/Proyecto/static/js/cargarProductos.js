$(document).ready(function () {
    $.get("https://picsum.photos/v2/list?page=6&limit=8",
        function (data) {
            $.each(data, function (i, item) {
                console.log(item)
                $("#catalogo").append(
                    '<div class="col mx-auto">' +
                    '<div class="card h-100 w-75 mx-auto">' +
                        '<img src="' + item.download_url + '" class="card-img-top" alt="Cargando imagen...">' +
                        '<div class="card-body">' +
                            '<p class="card-text text-bottom bg-opacity-25">Nombre del Producto</p>' +
                            // '<p class="card-text text-bottom bg-opacity-25">' + item.author + '</p>' +
                            '<p>$1.990</p>' +
                            '<div class="cont-agregar-carrito">' +
                                '<input type="number" id="quantity" name="quantity" min="1" max="100" value="1">' +
                                '<button class="btn btn-primary" id="add-to-cart-1">+</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>');
            });
        });

});