Vue.component('navbar', {
    props: {
        "current-page": String
    },
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Recetas</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link" href="./index.html">Listado</a>
                <a class="nav-link" href="./contacto.html">Contacto</a>
                <span class="nav-link disabled">Página actual: {{ currentPage }}</span>
                </div>
            </div>
        </div>
    </nav>
    `
})

Vue.component("card", {
    props: ["receta"],
    template: `
    <div class="card">
        <h2 class="text-center">Categoria {{receta.categoria}}</h2>
        <h3 class="text-center">{{receta.cantidad}}</h3>
        <img class="d-block mx-auto img-fluid" :src="receta.imagen" />
    </div>
    `
})

Vue.component("tabla", {
    props:["receta"],
    template: `
    <table class="table table-stripped">
        <thead>
            <th>ID</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Imagen</th>
        </thead>
        <tbody>
            <tr>
                <td>{{receta.id}}</td>
                <td>{{receta.categoria}}</td>
                <td>{{receta.cantidad}}</td>
                <td>{{receta.imagen}}</td>
            </tr>
        </tbody>
    </table>
    `
})

var app = new Vue({
    el: '#app',
    data: {
      recetas: [
        {
            id: 1,
            categoria: "Pizzas",
            cantidad: 5,
            imagen: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            id: 2,
            categoria: "Postres",
            cantidad: 3,
            imagen: "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            id: 3,
            categoria: "Carnes Rojas",
            cantidad: 3,
            imagen: "https://images.pexels.com/photos/7613432/pexels-photo-7613432.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
      ]
    }
  })