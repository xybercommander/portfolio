// import { useSelector } from 'react-redux';
import About from '../About/About';
import './Body.css'

const Body = () => {

    // const pageIndex = useSelector(state => state.myPageIndex);

    return ( 
        <div className="body">
            <About />
        </div>
    );
}
 
export default Body;