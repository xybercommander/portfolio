import './App.css';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';

function App() {

  var pageIndex = 1;

  return (
    <div className="App">
      <Navbar />
      <Body pageIndex={pageIndex} />
    </div>
  );
}

export default App;
