import logo from './logo.svg';
import './App.css';
import { sudoku } from './sudoku.js';

function App() {

  sudoku.print_board(sudoku.generate("medium"));

  return (
    <div>
      <h1>스도쿠!</h1>
      <div></div>
    </div>
  );
}

export default App;
