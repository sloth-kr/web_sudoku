import { sudoku } from './sudoku.js';

const generate_sudoku_data = () => sudoku.board_string_to_grid(sudoku.generate("medium"));

export default generate_sudoku_data