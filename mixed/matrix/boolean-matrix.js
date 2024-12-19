class Solution {
  totalRounds(matrix) {
    let roundCount = 0;
    const rowLength = matrix.length;
    const columnLength = matrix[0].length;

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < columnLength; j++) {
        if (matrix[i][j] === 1) {
          roundCount++;
        }
      }
    }
    return roundCount;
  }

  findOccurenceOne(matrix) {
    const occurenceArray = [];
    const totalRoundsCount = this.totalRounds(matrix);
    const rows = matrix.length;
    const columns = matrix[0].length;

    if (totalRoundsCount >= 1) {
      let remainingRounds = totalRoundsCount;
      while (remainingRounds > 0) {
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < columns; j++) {
            if (matrix[i][j] === 1) {
              occurenceArray.push(i);
              occurenceArray.push(j);
            }
          }
        }
        remainingRounds--;
      }
    }
    return occurenceArray;
  }

  convertOne(matrix) {
    const totalRow = matrix.length;
    const totalColumn = matrix[0].length;
    const resultArray = this.findOccurenceOne(matrix);
    let i = 0;

    while (i < resultArray.length) {
      const rowIndex = resultArray[i];
      const columnIndex = resultArray[i + 1];
      for (let row = 0; row < totalRow; row++) {
        matrix[row][columnIndex] = 1;
      }
      for (let col = 0; col < totalColumn; col++) {
        matrix[rowIndex][col] = 1;
      }

      i += 2;
    }

    return matrix;
  }

  booleanMatrix(matrix) {
    return this.convertOne(matrix);
  }
}
