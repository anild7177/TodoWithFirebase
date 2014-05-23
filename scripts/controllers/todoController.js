TodoApp.controller('todoController', function($scope, $location, $firebase) {
    var url = "https://burning-fire-6966.firebaseio.com/";
    var todoReference = new Firebase(url);

    

    $scope.addTodo = function() {
        var newTodo = $scope.newTodo.trim();

        if (!newTodo.length)
            return;

        $scope.todos.$add({
            title: newTodo,
            completed: false
        });

        $scope.newTodo = '';
    };

    $scope.todos = $firebase(todoReference);
    $scope.newTodo = '';
});