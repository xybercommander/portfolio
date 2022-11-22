import { useSelector } from 'react-redux';
import './Body.css'

const Body = () => {

    const pageIndex = useSelector(state => state.myPageIndex);

    return ( 
        <div className="body">
            Page Index: {pageIndex}
        </div>
    );
}
 
export default Body;