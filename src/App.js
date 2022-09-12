import './App.css';
import MakeSudokuTable from './makeSudokuTable';

function App() {
  return (
    <div>
      <h1 id='title'>스도쿠!!</h1>
      <div>
        <MakeSudokuTable id='table'/>
      </div>
    </div>
  );

}

export default App;
