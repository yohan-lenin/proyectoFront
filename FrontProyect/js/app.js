angular.module("MyApp", ["ngRoute", "ngResource"])
	.config(function($routeProvider){
	$routeProvider
		.when("/", {
			controller: "primerControl",
			templateUrl: "templates/home.html"
		})
		.when("/login",{
			controller: "LoginController",
			templateUrl: "templates/login.html"
		})
		.when("/producto/:id", {
			controller: "ProductoController",
			templateUrl: "templates/producto.html"
		})
		.when("/suministro", {
			controller: "SuministroController",
			templateUrl: "templates/suministro.html"
		})
		.when("/ventas", {
			controller: "VentasController",
			templateUrl: "templates/ventas.html"
		})
		.when("/venta/:id", {
			controller: "VentaController",
			templateUrl: "templates/venta.html"
		})
		.when("/formVenta/", {
			controller: "FormVentaController",
			templateUrl: "templates/formVenta.html"
		})
		

});