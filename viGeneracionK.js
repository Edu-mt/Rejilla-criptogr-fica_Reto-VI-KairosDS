const sideSize = 6; // Grid de lado 6
const gridPosBase = [[1, 1],[4, 1],[2, 2],[6, 2],[5, 3],[1, 4],[4, 4],[3, 5],[6, 5]];
const encriptedMessage = "lróaon. sg sdersoildsu.:.cc kiomamii";
function decrypt(encriptedMessage, gridPosBase) {
  let gridMessage = [];
  let lineaGridMessage = [];
  let arrayDecrypted = [];
  let i, j, k, m, n, p;
  let giros;
  let grid = [];
  let li;
  let col;
  let gridLinea = [];
  const arrayMessage = Array.from(encriptedMessage);
  for (li = 0; li < sideSize; li++) {
    for (col = 0; col < sideSize; col++) {
      valor = [col + 1, li + 1];
      gridLinea.push(valor);
    }
    grid.push(gridLinea);
    gridLinea = [];
  }
  for (giros = 0; giros < 4; giros++) {
    for (i = 0; i <= arrayMessage.length; i++) {
      if (lineaGridMessage.length < sideSize) {
        lineaGridMessage.push(arrayMessage[i]);
      } else {
        gridMessage.push(lineaGridMessage);
        lineaGridMessage = [arrayMessage[i]];
      }
    }
    for (j = 0; j < grid.length; j++) {
      for (k = 0; k < grid[j].length; k++) {
        for (m = 0; m < gridPosBase.length; m++) {
          if (grid[j][k][0] === gridPosBase[m][0] &&grid[j][k][1] === gridPosBase[m][1]) {
            arrayDecrypted.push(gridMessage[j][k]);
          }
        }
      }
    }
    if (arrayDecrypted.length < arrayMessage.length) {
      grid.reverse();
      for (n = 0; n < grid.length; n++) {
        for (p = 0; p < n; p++) {
          const temp = grid[n][p];
          grid[n][p] = grid[p][n];
          grid[p][n] = temp;
        }
      }
    }
  }
  return arrayDecrypted.join("");
}
const decryptedMessage = decrypt(encriptedMessage, gridPosBase);
console.log(decryptedMessage);