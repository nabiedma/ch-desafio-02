Vue.component('navbar', {
    props: {
        "current-page": String
    },
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
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

Vue.component("tabla", {
    props:["recetas", "tablecolor", "buttoncolor"],
    template: `
    <table class="table" :class="tablecolor">
        <thead class="text-uppercase">
            <th>ID</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Acciones</th>
        </thead>
        <tbody>
            <tr v-for="(receta, i) in recetas">
                <td>{{receta.id}}</td>
                <td>{{receta.categoria}}</td>
                <td>{{receta.cantidad}}</td>
                <td><img :src="receta.imagen" class="d-block mx-auto img-fluid" style="width: 350px; height: auto;" /></td>
                <td><a href="#" class="btn" :class="buttoncolor">Ver Recetas</a></td>
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