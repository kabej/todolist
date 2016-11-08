describe('TodoListController', function() {

  // Configuration
  var $scope, controller;

  beforeEach(module('todoApp'));
  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    controller = $controller('TodoListController', {
      $scope: $scope
    });
  }));


  // Test 1
  it('La liste des todos est initialisée', function() {
    expect($scope.todos).toBeDefined();
  });


  // Test 2
  it('La liste doit contenir 1 élement après l\ajout d\'un élément', function() {
    $scope.addTodo();
    expect($scope.todos.length).toEqual(1);
  });

  // Test 3
  it('Le nombre de taches restantes doit être de 1', function() {
    $scope.addTodo();
    expect($scope.remaining()).toEqual(1);
  });

  // Test 3
  it('Le nombre de taches restantes doit être de 0', function() {
    $scope.addTodo();
    $scope.todos[0].done = true;
    expect($scope.remaining()).toEqual(0);
  });

});
