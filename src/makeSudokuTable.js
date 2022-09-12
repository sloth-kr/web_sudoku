import generate_sudoku_data from './generateSudoku.js'

function MakeSudokuTable(props) {
  const sudoku_array = generate_sudoku_data();
  console.log(sudoku_array);

  return (
    <table id={props.id}>
      {sudoku_array.map((line, i) => (
        <tr>
          {sudoku_array[i].map((item, j) => (
            <td className={"square " + "row" + (i+1) + " col" + (j+1)}>{item}</td>
          ))}
        </tr>
      ))}
    </table>
  );

}

export default MakeSudokuTable