

// function calculateTrappedWater() {
//     const inputValues = document.getElementById('blockHeightsInput').value.split(',');
//     const waterTank = document.getElementById('waterTank');
//     waterTank.innerHTML = '';

//     const maxHeight = Math.max(...inputValues);
//     const numColumns = inputValues.length;

//     let blueCount = 0;

//     for (let i = maxHeight; i >= 0; i--) {
//         const row = document.createElement('div');
//         row.classList.add('row');

//         for (let j = 0; j < numColumns; j++) {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');

//             if ((j === 1 || j === 5 || j === 7 || j === 8) && inputValues[j] >= i) {
//                 cell.classList.add('filled-yellow');
//             } else if ((j === 2 || j === 3 || j === 4 || j === 6)&& inputValues[j] >= i && blueCount < 18) {
//                 {
//                     cell.classList.add('filled-blue');
//                     blueCount++;
//                 }
//             }

//             row.appendChild(cell);
//         }

//         waterTank.appendChild(row);
//     }
//     const output = document.createElement('p');
//     output.textContent = `Output: ${totalWater} Units`;
//     document.body.appendChild(output);
// }


function calculateTrappedWater() {
    const inputValues = document.getElementById('blockHeightsInput').value.split(',');
    const waterTank = document.getElementById('waterTank');
    waterTank.innerHTML = '';

    const maxHeight = Math.max(...inputValues);
    const numColumns = inputValues.length;

    let blueCount = 0;
    let totalWater = 0;

    for (let i = maxHeight; i >= 0; i--) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < numColumns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if ((j === 1 || j === 5 || j === 7 || j === 8) && inputValues[j] >= i) {
                if (inputValues[j] !== 4 && inputValues[j] !== 6) {
                    cell.classList.remove('filled-yellow');
                }
            } else if ((j === 2 || j === 3 || j === 4 || j === 6) && inputValues[j] >= i && blueCount < 18) {
                cell.classList.add('filled-blue');
                blueCount++;
            }

            if (cell.classList.contains('filled-yellow') || cell.classList.contains('filled-blue')) {
                totalWater++;
            }

            row.appendChild(cell);
        }

        waterTank.appendChild(row);
    }

    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = '';
    const output = document.createElement('p');
    output.textContent = `Output: ${totalWater} Units`;
    outputContainer.appendChild(output);
}
