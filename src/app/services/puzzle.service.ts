import { Injectable } from '@angular/core';

@Injectable()
export class PuzzleService {

  private solutions;

  constructor() {
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

  getNumMovesForKnownSolution(level) {
    return this.solutions[level-1].length;
  }

}
