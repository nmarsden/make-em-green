angular.module( 'meg.home', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, $modal, $location ) {

    var squares = [
        { id: 0, selected: true },
        { id: 1, selected: false },
        { id: 2, selected: true },
        { id: 3, selected: false },
        { id: 4, selected: true },
        { id: 5, selected: true },
        { id: 6, selected: true },
        { id: 7, selected: false },
        { id: 8, selected: true }
        ];

    var gameState = {
        movesLeft: 5,
        squares: squares
    };

    var showMenu = function() {
        $location.path("menu");
    };

    var initBoard = function() {
        var i = 0, len = squares.length;
        for(; i<len; i++) {
            squares[i].selected = false;
        }
        gameState.movesLeft = 5;
    };

    var isGameWon = function() {
        var i = 0, len = squares.length;
        for(; i<len; i++) {
            if (!squares[i].selected) {
                return false;
            }
        }
        return true;
    };

    var indexToCoords = function(index) {
        return {row: Math.floor(index / 3), col: (index % 3)};
    };

    var coordsToIndex = function(coords) {
        return (coords.row * 3) + coords.col;
    };

    var adjustedCoords = function(coords, rowDiff, colDiff) {
        return {
            row: coords.row + rowDiff,
            col: coords.col + colDiff
        };
    };

    var calcSquaresToToggle = function(index) {
        var indexes = [ index ];
        var coords = indexToCoords(index);
        if (coords.col < 2) {
            indexes.push(coordsToIndex(adjustedCoords(coords, 0, +1)));
        }
        if (coords.col > 0) {
            indexes.push(coordsToIndex(adjustedCoords(coords, 0, -1)));
        }
        if (coords.row < 2) {
            indexes.push(coordsToIndex(adjustedCoords(coords, +1, 0)));
        }
        if (coords.row > 0) {
            indexes.push(coordsToIndex(adjustedCoords(coords, -1, 0)));
        }
        return indexes;
    };

    var showModal = function (modalContents) {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: ModalInstanceCtrl,
            resolve: {
                modalContents: function() {
                    return modalContents;
                }
            }
        });

        modalInstance.result.then(function () {
            modalContents.okHandler();
        }, function () {
            modalContents.cancelHandler();
        });
    };

    var gameLost = function() {
        showModal({
           title: "You Lost!",
           message: "Retry?",
           okText: "Retry",
           okHandler: initBoard,
           cancelText: "Quit",
           cancelHandler: showMenu
        });
    };

    var gameWon = function() {
        showModal({
           title: "You Won!",
           message: "Continue?",
           okText: "Continue",
           okHandler: initBoard,
           cancelText: "Quit",
           cancelHandler: showMenu
        });
    };

    $scope.gameState = gameState;

    $scope.clickSquare = function(index) {
        var toggleIndexes = calcSquaresToToggle(index),
            i = 0,
            len = toggleIndexes.length;
        for (; i<len; i++) {
            var toggleIndex = toggleIndexes[i];
            gameState.squares[toggleIndex].selected = !gameState.squares[toggleIndex].selected;
        }
        gameState.movesLeft = gameState.movesLeft - 1;

        if (isGameWon()) {
            gameWon();
        }
        else if (gameState.movesLeft === 0) {
            gameLost();
        }
    };

    initBoard();
});

var ModalInstanceCtrl = function ($scope, $modalInstance, modalContents) {

    $scope.modalContents = modalContents;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

