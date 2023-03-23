app.controller("DashboardCtrl", function ($scope, $http, $uibModal, $window, $location) {
  let headersConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  }

  //Get All Products
  $scope.getAllProducts = function () {
    $http.get("https://localhost:44362/api/Product/Get", headersConfig)
      .then((response1) => {
        console.log(response1.data);
        $scope.AllProductsArray = response1.data.response;
      }, (error) => {
        console.log(error)
      })
  }

  $scope.ViewPage = function (productId) {
    $window.localStorage.setItem('productId', productId);
    $location.path('/ProductPage');
  }

  $scope.GetProductDetails = function(){

    $http.get(`https://localhost:44362/api/Product/GetProductById?ProductId=${$window.localStorage.productId}`)
    .then((response) => {
      console.log(response);
      $scope.SingleProductsArray = response.data.response;

      console.log($scope.SingleProductsArray);
    }, (error) => {
      console.log(error)
    })

  }
  

});



