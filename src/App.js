// import { useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';

function App() {

  // const pageIndex = useSelector(state => state.pageIndex);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
