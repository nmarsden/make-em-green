angular.module( 'meg.home', [
  'ui.router',
  'meg.gameStateService'
])

.config([ '$stateProvider', function config( $stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    }
  });
}])

.controller( 'HomeCtrl',
    [ '$scope', '$modal', '$location', 'gameStateService', function HomeController( $scope, $modal, $location, gameStateService ) {

    var puz = [];
    puz[ 0] = [0,0,21,0 ,0];
    puz[ 1] = [21,21,0 ,21,21];
    puz[ 2] = [10,27,27,27,10];
    puz[ 3] = [0 ,27,0 ,17,27];
    puz[ 4] = [15,23,23,24,27];
    puz[ 5] = [0 ,0 ,21,21,14];
    puz[ 6] = [15,17,17,17,15];
    puz[ 7] = [0 ,4 ,10,21,10];
    puz[ 8] = [10,31,14,26,7 ];
    puz[ 9] = [14,14,14,0 ,0 ];
    puz[10] = [21,21,21,21,14];
    puz[11] = [31,10,27,14,10];
    puz[12] = [8 ,20,10,5 ,2 ];
    puz[13] = [0 ,0 ,2 ,2 ,2 ];
    puz[14] = [0 ,2 ,0 ,2 ,0 ];
    puz[15] = [1 ,1 ,1 ,1 ,31];
    puz[16] = [0 ,0 ,4 ,14,31];
    puz[17] = [4 ,10,21,10,4 ];
    puz[18] = [21,0 ,21,0 ,21];
    puz[19] = [0 ,0 ,17,0 ,0 ];
    puz[20] = [30,2 ,14,2 ,2 ];
    puz[21] = [14,17,17,17,14];
    puz[22] = [0 ,0 ,28,12,4 ];
    puz[23] = [0 ,0 ,17,31,18];
    puz[24] = [1 ,3 ,7 ,15,30];
    puz[25] = [17,17,31,17,17];
    puz[26] = [4 ,14,4 ,4 ,4 ];
    puz[27] = [0 ,0 ,28,28,28];
    puz[28] = [0 ,2 ,0 ,0 ,0 ];
    puz[29] = [0 ,0 ,4 ,0 ,0 ];
    puz[30] = [17,19,21,25,17];
    puz[31] = [31,8 ,4 ,2 ,31];
    puz[32] = [8 ,8 ,21,17,25];
    puz[33] = [20,17,17,22,30];
    puz[34] = [24,10,17,21,0 ];
    puz[35] = [4 ,10,17,31,17];
    puz[36] = [0 ,14,14,14,0 ];
    puz[37] = [21,10,21,10,21];
    puz[38] = [10,1 ,3 ,12,10];
    puz[39] = [0 ,0 ,10,0 ,0 ];
    puz[40] = [17,10,4 ,4 ,4 ];
    puz[41] = [7 ,9 ,7 ,9 ,7 ];
    puz[42] = [17,11,7 ,2 ,14];
    puz[43] = [0 ,27,31,4 ,14];
    puz[44] = [14,5 ,28,15,21];
    puz[45] = [4 ,14,31,14,4 ];
    puz[46] = [4 ,31,5 ,18,16];
    puz[47] = [0 ,17,4 ,17,0 ];
    puz[48] = [17,10,4 ,10,17];
    puz[49] = [31,31,31,31,31];
    puz[50] = [27,0 ,27,0 ,27];
    puz[51] = [31,4 ,0 ,4 ,31];
    puz[52] = [31,10,4 ,10,31];
    puz[53] = [10,17,0 ,27,17];
    puz[54] = [4 ,6 ,27,12,4 ];
    puz[55] = [10,31,21,31,10];
    puz[56] = [21,17,27,17,21];
    puz[57] = [0 ,0 ,14,2 ,0 ];
    puz[58] = [16,8 ,4 ,6 ,5 ];
    puz[59] = [0 ,21,17,21,17];
    puz[60] = [31,14,14,14,31];
    puz[61] = [17,10,0 ,10,17];
    puz[62] = [14,10,14,8 ,14];
    puz[63] = [15,9 ,15,7 ,9 ];
    puz[64] = [21,21,21,21,14];
    puz[65] = [14,2 ,14,8 ,14];
    puz[66] = [31,17,21,17,31];
    puz[67] = [21,0 ,21,0 ,21];
    puz[68] = [10,21,14,21,10];
    puz[69] = [21,0 ,0 ,0 ,21];
    puz[70] = [31,29,27,23,31];
    puz[71] = [31,4 ,31,17,17];
    puz[72] = [27,10,27,10,27];
    puz[73] = [4 ,10,31,17,31];
    puz[74] = [17,27,21,17,17];
    puz[75] = [31,21,31,21,31];
    puz[76] = [14,4 ,4 ,4 ,14];
    puz[77] = [14,10,31,14,27];
    puz[78] = [0 ,0 ,4 ,0 ,0 ];
    puz[79] = [17,0 ,4 ,0 ,17];
    puz[80] = [27,27,0 ,27,27];
    puz[81] = [10,0 ,17,14,4 ];
    puz[82] = [21,14,27,14,21];
    puz[83] = [17,19,21,25,17];
    puz[84] = [21,21,27,21,21];
    puz[85] = [4 ,4 ,14,21,21];
    puz[86] = [21,21,21,21,31];
    puz[87] = [0 ,14,14,14,0 ];
    puz[88] = [4 ,10,17,31,17];
    puz[89] = [21,10,21,10,21];
    puz[90] = [17,14,10,14,17];
    puz[91] = [4 ,10,17,10,4 ];
    puz[92] = [21,0 ,10,0 ,21];
    puz[93] = [10,31,10,31,10];
    puz[94] = [31,21,31,29,31];
    puz[95] = [17,10,4 ,10,17];
    puz[96] = [31,4 ,31,4 ,31];
    puz[97] = [31,14,4 ,14,31];
    puz[98] = [4 ,21,31,21,4 ];
    puz[99] = [31,31,31,31,31];

    var solve = [];
    solve[0] = [15, 20, 17, 22, 19, 24];
    solve[1] = [5, 15, 7, 17, 9, 19];
    solve[2] = [10, 2, 7, 17, 22, 14];
    solve[3] = [10, 11, 21, 13, 23, 14];
    solve[4] = [10, 20, 1, 8, 13, 24];
    solve[5] = [10, 6, 2, 7, 22, 8, 14];
    solve[6] = [5, 15, 11, 2, 12, 22, 14];
    solve[7] = [20, 21, 12, 17, 22, 23, 24];
    solve[8] = [20, 6, 16, 12, 22, 8, 18];
    solve[9] = [0, 1, 6, 7, 3, 8, 4];
    solve[10] = [0, 10, 6, 7, 22, 8, 4, 14];
    solve[11] = [0, 10, 16, 7, 12, 18, 4, 14];
    solve[12] = [5, 10, 1, 2, 22, 23, 14, 19];
    solve[13] = [12, 17, 22, 8, 18, 4, 9, 14];
    solve[14] = [7, 17, 3, 8, 18, 23, 9, 19];
    solve[15] = [20, 1, 6, 11, 7, 17, 13, 18, 19];
    solve[16] = [10, 15, 6, 2, 7, 22, 8, 14, 19];
    solve[17] = [10, 6, 16, 2, 12, 22, 8, 18, 14];
    solve[18] = [5, 10, 15, 7, 12, 17, 9, 14, 19];
    solve[19] = [0, 10, 20, 1, 21, 7, 12, 17, 13];
    solve[20] = [20, 16, 21, 2, 7, 17, 3, 13, 4, 9];
    solve[21] = [0, 15, 1, 21, 2, 7, 13, 14, 19, 24];
    solve[22] = [15, 20, 11, 7, 12, 22, 3, 18, 4, 14];
    solve[23] = [0, 5, 16, 2, 7, 12, 8, 18, 14, 24];
    solve[24] = [0, 11, 16, 2, 12, 17, 3, 9, 14, 24];
    solve[25] = [0, 5, 10, 1, 11, 21, 7, 12, 22, 9, 24];
    solve[26] = [0, 1, 6, 2, 7, 12, 8, 13, 23, 14, 24];
    solve[27] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 18, 23];
    solve[28] = [10, 6, 11, 16, 2, 7, 22, 8, 23, 14, 19];
    solve[29] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 19, 24];
    solve[30] = [10, 20, 1, 16, 2, 17, 8, 23, 9, 14, 19, 24];
    solve[31] = [0, 15, 20, 6, 11, 21, 2, 22, 18, 23, 9, 14];
    solve[32] = [10, 20, 6, 16, 2, 7, 12, 17, 18, 23, 19, 24];
    solve[33] = [20, 6, 11, 16, 21, 2, 12, 8, 18, 9, 14, 19];
    solve[34] = [0, 1, 6, 11, 16, 2, 12, 22, 8, 23, 4, 19];
    solve[35] = [5, 1, 6, 16, 21, 17, 8, 13, 18, 4, 9, 14, 24];
    solve[36] = [10, 6, 11, 16, 2, 7, 12, 17, 22, 8, 13, 18, 14];
    solve[37] = [5, 15, 6, 11, 16, 2, 12, 22, 8, 13, 18, 9, 19];
    solve[38] = [5, 10, 1, 6, 11, 16, 2, 12, 8, 18, 4, 9, 14];
    solve[39] = [0, 20, 1, 6, 16, 21, 2, 12, 22, 8, 13, 18, 14];
    solve[40] = [10, 15, 20, 1, 6, 16, 7, 12, 8, 13, 18, 23, 4, 19];
    solve[41] = [0, 10, 15, 6, 11, 16, 2, 12, 17, 8, 18, 14, 19, 24];
    solve[42] = [5, 10, 6, 11, 16, 2, 12, 17, 3, 8, 18, 4, 9, 14];
    solve[43] = [5, 10, 1, 6, 11, 16, 7, 12, 8, 18, 23, 4, 9, 24];
    solve[44] = [15, 20, 6, 11, 16, 21, 12, 17, 22, 3, 8, 18, 4, 19];
    solve[45] = [0, 15, 1, 6, 16, 21, 2, 7, 12, 8, 13, 18, 14, 19, 24];
    solve[46] = [0, 10, 1, 6, 16, 2, 7, 12, 22, 8, 13, 18, 23, 19, 24];
    solve[47] = [0, 10, 15, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 19, 24];
    solve[48] = [0, 5, 10, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 9, 24];
    solve[49] = [0, 5, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    solve[50] = [0, 10, 20, 4, 14, 24];
    solve[51] = [1, 21, 7, 17, 3, 23];
    solve[52] = [1, 21, 13, 4, 14, 24];
    solve[53] = [5, 15, 1, 3, 9, 19];
    solve[54] = [5, 1, 6, 18, 23, 19];
    solve[55] = [10, 2, 7, 12, 17, 22, 14];
    solve[56] = [5, 20, 7, 12, 22, 9, 24];
    solve[57] = [0, 5, 11, 2, 3, 8, 4];
    solve[58] = [0, 20, 1, 6, 16, 2, 13, 23, 4, 14, 24];
    solve[59] = [10, 21, 12, 17, 22, 23, 14];
    solve[60] = [5, 10, 20, 2, 17, 9, 14, 24];
    solve[61] = [0, 20, 6, 16, 8, 18, 4, 24];
    solve[62] = [2, 7, 12, 22, 3, 8, 13, 9];
    solve[63] = [10, 1, 21, 7, 22, 3, 8, 4];
    solve[64] = [0, 10, 6, 7, 22, 8, 4, 14];
    solve[65] = [10, 15, 6, 21, 12, 3, 18, 9, 14];
    solve[66] = [5, 15, 11, 2, 12, 22, 13, 9, 19];
    solve[67] = [5, 10, 15, 7, 12, 17, 9, 14, 19];
    solve[68] = [10, 11, 2, 7, 12, 17, 22, 13, 14];
    solve[69] = [5, 10, 20, 7, 12, 22, 9, 14, 24];
    solve[70] = [10, 15, 1, 11, 16, 8, 13, 23, 9, 14];
    solve[71] = [1, 11, 16, 21, 12, 17, 18, 4, 14, 24];
    solve[72] = [5, 15, 6, 11, 16, 8, 13, 18, 9, 19];
    solve[73] = [5, 20, 1, 6, 8, 13, 23, 4, 9, 14];
    solve[74] = [0, 10, 6, 21, 17, 22, 8, 23, 4, 14];
    solve[75] = [0, 5, 10, 1, 11, 21, 2, 7, 12, 9, 24];
    solve[76] = [0, 10, 15, 1, 21, 2, 7, 12, 13, 19, 24];
    solve[77] = [5, 10, 1, 11, 16, 21, 22, 18, 4, 9, 24];
    solve[78] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 19, 24];
    solve[79] = [0, 5, 1, 11, 21, 7, 12, 22, 9, 14, 24];
    solve[80] = [5, 10, 15, 6, 11, 16, 8, 13, 18, 9, 14, 19];
    solve[81] = [0, 10, 15, 20, 1, 11, 16, 2, 12, 18, 23, 19];
    solve[82] = [5, 15, 6, 11, 16, 2, 22, 8, 13, 18, 9, 19];
    solve[83] = [10, 20, 1, 16, 2, 17, 8, 23, 9, 14, 19, 24];
    solve[84] = [5, 10, 15, 6, 16, 2, 22, 8, 18, 9, 14, 19];
    solve[85] = [0, 15, 1, 6, 11, 2, 7, 12, 8, 23, 14, 19, 24];
    solve[86] = [0, 5, 20, 1, 6, 2, 7, 12, 8, 13, 23, 9, 14];
    solve[87] = [10, 6, 11, 16, 2, 7, 12, 17, 22, 8, 13, 18, 14];
    solve[88] = [5, 1, 6, 16, 21, 17, 8, 13, 18, 4, 9, 14, 24];
    solve[89] = [5, 15, 6, 11, 16, 2, 12, 22, 8, 13, 18, 9, 19];
    solve[90] = [0, 5, 10, 1, 6, 16, 21, 2, 17, 8, 13, 18, 9, 24];
    solve[91] = [0, 15, 1, 6, 16, 21, 2, 7, 8, 13, 18, 14, 19, 24];
    solve[92] = [0, 5, 10, 1, 6, 16, 21, 2, 7, 8, 13, 18, 9, 24];
    solve[93] = [0, 10, 15, 1, 6, 16, 21, 7, 22, 8, 13, 18, 19, 24];
    solve[94] = [0, 11, 16, 21, 7, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    solve[95] = [0, 5, 10, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 9, 24];
    solve[96] = [0, 5, 10, 1, 6, 11, 16, 21, 12, 17, 22, 8, 18, 9, 24];
    solve[97] = [0, 5, 10, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 24];
    solve[98] = [0, 10, 15, 1, 6, 11, 16, 21, 2, 7, 12, 8, 18, 19, 24];
    solve[99] = [0, 5, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 14, 24];

    var gameState = gameStateService.model;
    var squares = gameState.squares;
    var bestSolutions = gameState.bestSolutions;

    var showMenu = function() {
        $location.path("menu");
    };

    var initSquares = function(level) {
        var levelData = puz[level - 1];
        var i = 0, row = 0, len = 25;
        squares.length = 0;
        for (; i < len; i=i+5, row++) {
            squares.push({ id: i,   selected: !(levelData[row] & 1) });
            squares.push({ id: i+1, selected: !(levelData[row] & 2) });
            squares.push({ id: i+2, selected: !(levelData[row] & 4) });
            squares.push({ id: i+3, selected: !(levelData[row] & 8) });
            squares.push({ id: i+4, selected: !(levelData[row] & 16) });
        }
    };

    var initBoard = function() {
        initSquares(gameState.selectedLevel);
        gameState.movesTaken = 0;
        gameState.movesLeft = 15;
    };

    var replay = function() {
        if (!gameState.isLevelLocked) {
            gameState.isReplay = true;
            initBoard();
        }
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
        return {row: Math.floor(index / 5), col: (index % 5)};
    };

    var coordsToIndex = function(coords) {
        return (coords.row * 5) + coords.col;
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
        if (coords.col < 4) {
            indexes.push(coordsToIndex(adjustedCoords(coords, 0, +1)));
        }
        if (coords.col > 0) {
            indexes.push(coordsToIndex(adjustedCoords(coords, 0, -1)));
        }
        if (coords.row < 4) {
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

    var selectPreviousLevel = function() {
        if (gameState.selectedLevel > 1) {
            gameState.selectedLevel--;
            gameState.isReplay = false;
            initBoard();
        }
    };

    var selectNextLevel = function() {
        if (gameState.selectedLevel < 100) {
            gameState.selectedLevel++;
            gameState.isReplay = false;
            initBoard();
        }
    };

    var gameLost = function() {
        showModal({
           title: "No Moves Left!",
           message: "I know you can do this. Give it another go?",
           okText: "Retry",
           okHandler: replay,
           cancelText: "Quit",
           cancelHandler: showMenu
        });
    };

    var isLevelPreviouslySolved = function(level) {
        return (level <= bestSolutions.length);
    };

    var updateBestSolutions = function() {
        if (gameState.movesTaken < gameState.bestSolution) {
            gameState.bestSolution = gameState.movesTaken;
            if (isLevelPreviouslySolved(gameState.selectedLevel)) {
                bestSolutions[gameState.selectedLevel-1] = gameState.bestSolution;
            } else {
                bestSolutions.push(gameState.bestSolution);
            }
        }
    };

    var gameWon = function() {
        updateBestSolutions();
        showModal({
            title: "Level Solved",
            message: "You are awesome! Ready for the next level?",
            okText: "Next Level",
            okHandler: selectNextLevel,
            cancelText: "Replay",
            cancelHandler: replay
        });
    };

    var calcNumStarsEarned = function(level, playersSolution) {
        var bestSolution = solve[level-1].length;
        if (playersSolution === bestSolution) {
            return 3;
        } else if (playersSolution <= (bestSolution + 4)) {
            return 2;
        } else {
            return 1;
        }
    };

    $scope.gameState = gameState;

    $scope.$watch('gameState.selectedLevel', function(selectedLevel) {
        gameState.isLevelLocked = (selectedLevel > (bestSolutions.length + 1));

        var isLevelSolved = isLevelPreviouslySolved(selectedLevel);

        gameState.isLevelSolved = isLevelSolved;
        gameState.bestSolution = isLevelSolved ? bestSolutions[selectedLevel - 1] : 999;

        var numStarsEarned = calcNumStarsEarned(gameState.selectedLevel, gameState.bestSolution);
        gameState.starsEarned[0].earned = (numStarsEarned > 0);
        gameState.starsEarned[1].earned = (numStarsEarned > 1);
        gameState.starsEarned[2].earned = (numStarsEarned > 2);
    });

    $scope.selectPreviousLevel = selectPreviousLevel;

    $scope.selectNextLevel = selectNextLevel;

    $scope.clickSquare = function(index) {
        var toggleIndexes = calcSquaresToToggle(index),
            i = 0,
            len = toggleIndexes.length;
        for (; i<len; i++) {
            var toggleIndex = toggleIndexes[i];
            gameState.squares[toggleIndex].selected = !gameState.squares[toggleIndex].selected;
        }
        gameState.movesTaken = gameState.movesTaken + 1;
        gameState.movesLeft = gameState.movesLeft - 1;

        if (isGameWon()) {
            gameWon();
        }
        else if (gameState.movesLeft === 0) {
            gameLost();
        }
    };

    $scope.showMenu = showMenu;

    $scope.replay = replay;

    $scope.isShowSolved = function() {
        return gameState.isLevelSolved && !gameState.isReplay;
    };

    initBoard();
}]);

var ModalInstanceCtrl = function ($scope, $modalInstance, modalContents) {

    $scope.modalContents = modalContents;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
ModalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'modalContents'];
