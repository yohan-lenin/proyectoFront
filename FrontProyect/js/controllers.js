(function(){

var app = angular.module("MyApp")

app.controller("LoginController", function($scope, $location){
	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;
		if ($scope.username == 'admin' && $scope.password =='admin') {
			$location.path('/');
		}
	}
});

 app.controller("primerControl", function ($scope, $resource){

 	Post = $resource("http://localhost/ServisP/producto/:id", {id: "@id"});
 	$scope.posts = Post.query();
 	$scope.removePost = function(post){
 		Post.delete({id: post.idProducto}, function(data){
 			alert('Producto Eliminado-> '+post.idProducto);
 			console.log(data);
 			$scope.posts = Post.query();
 		});
 	}

}); 
 app.controller("ProductoController", function($scope, $resource, $routeParams){
 	Post = $resource("http://localhost/ServisP/producto/:id", {id: "@id"});
 	$scope.post= Post.get({id: $routeParams.id});

 });

 app.controller("SuministroController", function($scope, $resource){
 	Post = $resource("http://localhost/ServisP/addP/:id", {id: "@id"});
	$scope.post = {};
 	Post.headers = {'Content-Type':'application/x-www-form-urlencoded'};
 	$scope.title = "Suministrar producto";
 	$scope.savePost = function(){
			console.log($scope.post);
			Post.save({data: $scope.post}, function(data){
				console.log(data);
			});
			
 		
 	}

 });
 app.controller("VentasController", function ($scope, $resource){

 	Post = $resource("http://localhost/ServisP/venta/:id", {id: "@id"});
 	$scope.posts = Post.query();
 	$scope.removePost = function(post){
 		Post.delete({id: post.idVenta}, function(data){
 			alert('Eliminar venta -> '+post.idVenta);
 			console.log(data);
 			$scope.posts = Post.query();
 			console.log("Exitosoo");
 		});
 	}

}); 
  app.controller("VentaController", function($scope, $resource, $routeParams){
 	Post = $resource("http://localhost/ServisP/venta/:id", {id: "@id"});
 	$scope.post= Post.get({id: $routeParams.id});
 });

   app.controller("FormVentaController", function($scope, $resource){
 	Post = $resource("http://localhost/ServisP/addP/:id", {id: "@id"});
	$scope.post = {};
 	Post.headers = {'Content-Type':'application/x-www-form-urlencoded'};
 	$scope.title = "Realizar Venta";
 	$scope.savePost = function(){
			console.log($scope.post);
			Post.save({data: $scope.post}, function(data){
				console.log(data);
			});
			
 		
 	}
 });
  app.controller("VentaController", function($scope, $resource, $routeParams){
 	Post = $resource("http://localhost/ServisP/venta/:id", {id: "@id"});
 	$scope.post= Post.get({id: $routeParams.id});
 });


  app.controller('SelectDinamico', ['$scope', function($scope){
  	$scope.cosas = ['hiegr', 'gfg'];
  	$scope.idProveedor = "";
  }]);






/*
 	$scope.post = {};
 	$htpp.post("http://localhost/ServisP/producto/"{
 		idProveedor: $scope.post.idProveedor,
 		codigoProducto = $scope.post.codigoProducto,
 		nombreProducto = $scope.post.nombreProducto,
 		presentacionProducto = $scope.post.presentacionProducto,
 		cantidadProducto = $scope.post.cantidadProducto,
 		precioVenta = $scope.post.precioVenta,
 		precioCompra = $scope.post.precioCompra
 	})
 	.success(function(data,status,headers,config){
			console.log(data);
			$scope.post.push($scope.post);
			$scope.post = {};
		})
		.error(function(error, status, headers, config){
			console.log(error .  "holaaa" . $scope.post );
		});




 $scope.addPost = function($http, $scope){
		$http.post("http://localhost/ServisP/addP", {
			//id: $scope.newPost._id,
			nombre: $scope.newPost.nombre,
			apellido: $scope.newPost.apellido,
			edad: $scope.newPost.edad,
			cursos: $scope.newPost.cursos,
			cuchilla: $scope.newPost.cuchilla
		})
		.success(function(data,status,headers,config){
			console.log(data);
			$scope.posts.push($scope.newPost);
			$scope.newPost = {};
		})
		.error(function(error, status, headers, config){
			console.log(error);
		});
	}*/
})();