import { Injectable } from '@angular/core';

@Injectable()
export class PuzzleService {

  private puzzles;
  private solutions;

  constructor() {
    this.puzzles = [];
    this.puzzles[ 0] = [0,0,21,0 ,0];
    this.puzzles[ 1] = [21,21,0 ,21,21];
    this.puzzles[ 2] = [10,27,27,27,10];
    this.puzzles[ 3] = [0 ,27,0 ,17,27];
    this.puzzles[ 4] = [15,23,23,24,27];
    this.puzzles[ 5] = [0 ,0 ,21,21,14];
    this.puzzles[ 6] = [15,17,17,17,15];
    this.puzzles[ 7] = [0 ,4 ,10,21,10];
    this.puzzles[ 8] = [10,31,14,26,7 ];
    this.puzzles[ 9] = [14,14,14,0 ,0 ];
    this.puzzles[10] = [21,21,21,21,14];
    this.puzzles[11] = [31,10,27,14,10];
    this.puzzles[12] = [8 ,20,10,5 ,2 ];
    this.puzzles[13] = [0 ,0 ,2 ,2 ,2 ];
    this.puzzles[14] = [0 ,2 ,0 ,2 ,0 ];
    this.puzzles[15] = [1 ,1 ,1 ,1 ,31];
    this.puzzles[16] = [0 ,0 ,4 ,14,31];
    this.puzzles[17] = [4 ,10,21,10,4 ];
    this.puzzles[18] = [21,0 ,21,0 ,21];
    this.puzzles[19] = [0 ,0 ,17,0 ,0 ];
    this.puzzles[20] = [30,2 ,14,2 ,2 ];
    this.puzzles[21] = [14,17,17,17,14];
    this.puzzles[22] = [0 ,0 ,28,12,4 ];
    this.puzzles[23] = [0 ,0 ,17,31,18];
    this.puzzles[24] = [1 ,3 ,7 ,15,30];
    this.puzzles[25] = [17,17,31,17,17];
    this.puzzles[26] = [4 ,14,4 ,4 ,4 ];
    this.puzzles[27] = [0 ,0 ,28,28,28];
    this.puzzles[28] = [0 ,2 ,0 ,0 ,0 ];
    this.puzzles[29] = [0 ,0 ,4 ,0 ,0 ];
    this.puzzles[30] = [17,19,21,25,17];
    this.puzzles[31] = [31,8 ,4 ,2 ,31];
    this.puzzles[32] = [8 ,8 ,21,17,25];
    this.puzzles[33] = [20,17,17,22,30];
    this.puzzles[34] = [24,10,17,21,0 ];
    this.puzzles[35] = [4 ,10,17,31,17];
    this.puzzles[36] = [0 ,14,14,14,0 ];
    this.puzzles[37] = [21,10,21,10,21];
    this.puzzles[38] = [10,1 ,3 ,12,10];
    this.puzzles[39] = [0 ,0 ,10,0 ,0 ];
    this.puzzles[40] = [17,10,4 ,4 ,4 ];
    this.puzzles[41] = [7 ,9 ,7 ,9 ,7 ];
    this.puzzles[42] = [17,11,7 ,2 ,14];
    this.puzzles[43] = [0 ,27,31,4 ,14];
    this.puzzles[44] = [14,5 ,28,15,21];
    this.puzzles[45] = [4 ,14,31,14,4 ];
    this.puzzles[46] = [4 ,31,5 ,18,16];
    this.puzzles[47] = [0 ,17,4 ,17,0 ];
    this.puzzles[48] = [17,10,4 ,10,17];
    this.puzzles[49] = [31,31,31,31,31];
    this.puzzles[50] = [27,0 ,27,0 ,27];
    this.puzzles[51] = [31,4 ,0 ,4 ,31];
    this.puzzles[52] = [31,10,4 ,10,31];
    this.puzzles[53] = [10,17,0 ,27,17];
    this.puzzles[54] = [4 ,6 ,27,12,4 ];
    this.puzzles[55] = [10,31,21,31,10];
    this.puzzles[56] = [21,17,27,17,21];
    this.puzzles[57] = [0 ,0 ,14,2 ,0 ];
    this.puzzles[58] = [16,8 ,4 ,6 ,5 ];
    this.puzzles[59] = [0 ,21,17,21,17];
    this.puzzles[60] = [31,14,14,14,31];
    this.puzzles[61] = [17,10,0 ,10,17];
    this.puzzles[62] = [14,10,14,8 ,14];
    this.puzzles[63] = [15,9 ,15,7 ,9 ];
    this.puzzles[64] = [21,21,21,21,14];
    this.puzzles[65] = [14,2 ,14,8 ,14];
    this.puzzles[66] = [31,17,21,17,31];
    this.puzzles[67] = [21,0 ,21,0 ,21];
    this.puzzles[68] = [10,21,14,21,10];
    this.puzzles[69] = [21,0 ,0 ,0 ,21];
    this.puzzles[70] = [31,29,27,23,31];
    this.puzzles[71] = [31,4 ,31,17,17];
    this.puzzles[72] = [27,10,27,10,27];
    this.puzzles[73] = [4 ,10,31,17,31];
    this.puzzles[74] = [17,27,21,17,17];
    this.puzzles[75] = [31,21,31,21,31];
    this.puzzles[76] = [14,4 ,4 ,4 ,14];
    this.puzzles[77] = [14,10,31,14,27];
    this.puzzles[78] = [0 ,0 ,4 ,0 ,0 ];
    this.puzzles[79] = [17,0 ,4 ,0 ,17];
    this.puzzles[80] = [27,27,0 ,27,27];
    this.puzzles[81] = [10,0 ,17,14,4 ];
    this.puzzles[82] = [21,14,27,14,21];
    this.puzzles[83] = [17,19,21,25,17];
    this.puzzles[84] = [21,21,27,21,21];
    this.puzzles[85] = [4 ,4 ,14,21,21];
    this.puzzles[86] = [21,21,21,21,31];
    this.puzzles[87] = [0 ,14,14,14,0 ];
    this.puzzles[88] = [4 ,10,17,31,17];
    this.puzzles[89] = [21,10,21,10,21];
    this.puzzles[90] = [17,14,10,14,17];
    this.puzzles[91] = [4 ,10,17,10,4 ];
    this.puzzles[92] = [21,0 ,10,0 ,21];
    this.puzzles[93] = [10,31,10,31,10];
    this.puzzles[94] = [31,21,31,29,31];
    this.puzzles[95] = [17,10,4 ,10,17];
    this.puzzles[96] = [31,4 ,31,4 ,31];
    this.puzzles[97] = [31,14,4 ,14,31];
    this.puzzles[98] = [4 ,21,31,21,4 ];
    this.puzzles[99] = [31,31,31,31,31];

    this.solutions = [];
    this.solutions[0] = [15, 20, 17, 22, 19, 24];
    this.solutions[1] = [5, 15, 7, 17, 9, 19];
    this.solutions[2] = [10, 2, 7, 17, 22, 14];
    this.solutions[3] = [10, 11, 21, 13, 23, 14];
    this.solutions[4] = [10, 20, 1, 8, 13, 24];
    this.solutions[5] = [10, 6, 2, 7, 22, 8, 14];
    this.solutions[6] = [5, 15, 11, 2, 12, 22, 14];
    this.solutions[7] = [20, 21, 12, 17, 22, 23, 24];
    this.solutions[8] = [20, 6, 16, 12, 22, 8, 18];
    this.solutions[9] = [0, 1, 6, 7, 3, 8, 4];
    this.solutions[10] = [0, 10, 6, 7, 22, 8, 4, 14];
    this.solutions[11] = [0, 10, 16, 7, 12, 18, 4, 14];
    this.solutions[12] = [5, 10, 1, 2, 22, 23, 14, 19];
    this.solutions[13] = [12, 17, 22, 8, 18, 4, 9, 14];
    this.solutions[14] = [7, 17, 3, 8, 18, 23, 9, 19];
    this.solutions[15] = [20, 1, 6, 11, 7, 17, 13, 18, 19];
    this.solutions[16] = [10, 15, 6, 2, 7, 22, 8, 14, 19];
    this.solutions[17] = [10, 6, 16, 2, 12, 22, 8, 18, 14];
    this.solutions[18] = [5, 10, 15, 7, 12, 17, 9, 14, 19];
    this.solutions[19] = [0, 10, 20, 1, 21, 7, 12, 17, 13];
    this.solutions[20] = [20, 16, 21, 2, 7, 17, 3, 13, 4, 9];
    this.solutions[21] = [0, 15, 1, 21, 2, 7, 13, 14, 19, 24];
    this.solutions[22] = [15, 20, 11, 7, 12, 22, 3, 18, 4, 14];
    this.solutions[23] = [0, 5, 16, 2, 7, 12, 8, 18, 14, 24];
    this.solutions[24] = [0, 11, 16, 2, 12, 17, 3, 9, 14, 24];
    this.solutions[25] = [0, 5, 10, 1, 11, 21, 7, 12, 22, 9, 24];
    this.solutions[26] = [0, 1, 6, 2, 7, 12, 8, 13, 23, 14, 24];
    this.solutions[27] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 18, 23];
    this.solutions[28] = [10, 6, 11, 16, 2, 7, 22, 8, 23, 14, 19];
    this.solutions[29] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 19, 24];
    this.solutions[30] = [10, 20, 1, 16, 2, 17, 8, 23, 9, 14, 19, 24];
    this.solutions[31] = [0, 15, 20, 6, 11, 21, 2, 22, 18, 23, 9, 14];
    this.solutions[32] = [10, 20, 6, 16, 2, 7, 12, 17, 18, 23, 19, 24];
    this.solutions[33] = [20, 6, 11, 16, 21, 2, 12, 8, 18, 9, 14, 19];
    this.solutions[34] = [0, 1, 6, 11, 16, 2, 12, 22, 8, 23, 4, 19];
    this.solutions[35] = [5, 1, 6, 16, 21, 17, 8, 13, 18, 4, 9, 14, 24];
    this.solutions[36] = [10, 6, 11, 16, 2, 7, 12, 17, 22, 8, 13, 18, 14];
    this.solutions[37] = [5, 15, 6, 11, 16, 2, 12, 22, 8, 13, 18, 9, 19];
    this.solutions[38] = [5, 10, 1, 6, 11, 16, 2, 12, 8, 18, 4, 9, 14];
    this.solutions[39] = [0, 20, 1, 6, 16, 21, 2, 12, 22, 8, 13, 18, 14];
    this.solutions[40] = [10, 15, 20, 1, 6, 16, 7, 12, 8, 13, 18, 23, 4, 19];
    this.solutions[41] = [0, 10, 15, 6, 11, 16, 2, 12, 17, 8, 18, 14, 19, 24];
    this.solutions[42] = [5, 10, 6, 11, 16, 2, 12, 17, 3, 8, 18, 4, 9, 14];
    this.solutions[43] = [5, 10, 1, 6, 11, 16, 7, 12, 8, 18, 23, 4, 9, 24];
    this.solutions[44] = [15, 20, 6, 11, 16, 21, 12, 17, 22, 3, 8, 18, 4, 19];
    this.solutions[45] = [0, 15, 1, 6, 16, 21, 2, 7, 12, 8, 13, 18, 14, 19, 24];
    this.solutions[46] = [0, 10, 1, 6, 16, 2, 7, 12, 22, 8, 13, 18, 23, 19, 24];
    this.solutions[47] = [0, 10, 15, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 19, 24];
    this.solutions[48] = [0, 5, 10, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 9, 24];
    this.solutions[49] = [0, 5, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    this.solutions[50] = [0, 10, 20, 4, 14, 24];
    this.solutions[51] = [1, 21, 7, 17, 3, 23];
    this.solutions[52] = [1, 21, 13, 4, 14, 24];
    this.solutions[53] = [5, 15, 1, 3, 9, 19];
    this.solutions[54] = [5, 1, 6, 18, 23, 19];
    this.solutions[55] = [10, 2, 7, 12, 17, 22, 14];
    this.solutions[56] = [5, 20, 7, 12, 22, 9, 24];
    this.solutions[57] = [0, 5, 11, 2, 3, 8, 4];
    this.solutions[58] = [0, 20, 1, 6, 16, 2, 13, 23, 4, 14, 24];
    this.solutions[59] = [10, 21, 12, 17, 22, 23, 14];
    this.solutions[60] = [5, 10, 20, 2, 17, 9, 14, 24];
    this.solutions[61] = [0, 20, 6, 16, 8, 18, 4, 24];
    this.solutions[62] = [2, 7, 12, 22, 3, 8, 13, 9];
    this.solutions[63] = [10, 1, 21, 7, 22, 3, 8, 4];
    this.solutions[64] = [0, 10, 6, 7, 22, 8, 4, 14];
    this.solutions[65] = [10, 15, 6, 21, 12, 3, 18, 9, 14];
    this.solutions[66] = [5, 15, 11, 2, 12, 22, 13, 9, 19];
    this.solutions[67] = [5, 10, 15, 7, 12, 17, 9, 14, 19];
    this.solutions[68] = [10, 11, 2, 7, 12, 17, 22, 13, 14];
    this.solutions[69] = [5, 10, 20, 7, 12, 22, 9, 14, 24];
    this.solutions[70] = [10, 15, 1, 11, 16, 8, 13, 23, 9, 14];
    this.solutions[71] = [1, 11, 16, 21, 12, 17, 18, 4, 14, 24];
    this.solutions[72] = [5, 15, 6, 11, 16, 8, 13, 18, 9, 19];
    this.solutions[73] = [5, 20, 1, 6, 8, 13, 23, 4, 9, 14];
    this.solutions[74] = [0, 10, 6, 21, 17, 22, 8, 23, 4, 14];
    this.solutions[75] = [0, 5, 10, 1, 11, 21, 2, 7, 12, 9, 24];
    this.solutions[76] = [0, 10, 15, 1, 21, 2, 7, 12, 13, 19, 24];
    this.solutions[77] = [5, 10, 1, 11, 16, 21, 22, 18, 4, 9, 24];
    this.solutions[78] = [0, 10, 15, 1, 21, 7, 12, 22, 13, 19, 24];
    this.solutions[79] = [0, 5, 1, 11, 21, 7, 12, 22, 9, 14, 24];
    this.solutions[80] = [5, 10, 15, 6, 11, 16, 8, 13, 18, 9, 14, 19];
    this.solutions[81] = [0, 10, 15, 20, 1, 11, 16, 2, 12, 18, 23, 19];
    this.solutions[82] = [5, 15, 6, 11, 16, 2, 22, 8, 13, 18, 9, 19];
    this.solutions[83] = [10, 20, 1, 16, 2, 17, 8, 23, 9, 14, 19, 24];
    this.solutions[84] = [5, 10, 15, 6, 16, 2, 22, 8, 18, 9, 14, 19];
    this.solutions[85] = [0, 15, 1, 6, 11, 2, 7, 12, 8, 23, 14, 19, 24];
    this.solutions[86] = [0, 5, 20, 1, 6, 2, 7, 12, 8, 13, 23, 9, 14];
    this.solutions[87] = [10, 6, 11, 16, 2, 7, 12, 17, 22, 8, 13, 18, 14];
    this.solutions[88] = [5, 1, 6, 16, 21, 17, 8, 13, 18, 4, 9, 14, 24];
    this.solutions[89] = [5, 15, 6, 11, 16, 2, 12, 22, 8, 13, 18, 9, 19];
    this.solutions[90] = [0, 5, 10, 1, 6, 16, 21, 2, 17, 8, 13, 18, 9, 24];
    this.solutions[91] = [0, 15, 1, 6, 16, 21, 2, 7, 8, 13, 18, 14, 19, 24];
    this.solutions[92] = [0, 5, 10, 1, 6, 16, 21, 2, 7, 8, 13, 18, 9, 24];
    this.solutions[93] = [0, 10, 15, 1, 6, 16, 21, 7, 22, 8, 13, 18, 19, 24];
    this.solutions[94] = [0, 11, 16, 21, 7, 12, 17, 22, 8, 13, 18, 9, 14, 24];
    this.solutions[95] = [0, 5, 10, 1, 6, 16, 21, 2, 12, 17, 8, 13, 18, 9, 24];
    this.solutions[96] = [0, 5, 10, 1, 6, 11, 16, 21, 12, 17, 22, 8, 18, 9, 24];
    this.solutions[97] = [0, 5, 10, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 24];
    this.solutions[98] = [0, 10, 15, 1, 6, 11, 16, 21, 2, 7, 12, 8, 18, 19, 24];
    this.solutions[99] = [0, 5, 1, 6, 16, 21, 12, 17, 22, 8, 13, 18, 9, 14, 24];
  }

  getPuzzle(level) {
    return this.puzzles[level - 1];
  }

  getSolution(level) {
    return this.solutions[level - 1];
  }

  getNumMovesForKnownSolution(level) {
    return this.solutions[level-1].length;
  }

  checkForDuplicatePuzzles() {
    console.log(`Checking for duplicate puzzles`);

    for (let i=0; i<this.puzzles.length-1; i++) {

      // console.log(`checking: puzzle ${i}`);

      for (let j=i+1; j<this.puzzles.length; j++) {

        let isDuplicate = true;
        if (this.puzzles[i].length !== this.puzzles[j].length) {
          isDuplicate = false;
        } else {
          for (let n=0; n<this.puzzles[i].length; n++) {
            if (this.puzzles[i][n] !== this.puzzles[j][n]) {
              isDuplicate = false;
            }
          }
        }

        if (isDuplicate) {
          console.log(`puzzle ${i} === puzzle ${j}`);
        }
      }
    }
  }
}
