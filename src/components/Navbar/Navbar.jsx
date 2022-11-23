import { useDispatch, useSelector } from 'react-redux';
import { pageChange } from '../../actions';
import './Navbar.css'

const Navbar = () => {
    // const [index, setIndex] = useState(0);
    const pageIndex = useSelector(state => state.myPageIndex);
    const dispatch = useDispatch();

    function changeIndex(e, newIndex) {
        e.preventDefault();
        dispatch(pageChange(newIndex));
    }

    return ( 
        <div className="navbar">
            <div className="name-container">
                <h1 className='firstName'>Samrat</h1>
                <h1 className='lastName'>Mukherjee</h1>
            </div>
            <ul>
                {/* 1 */}
                <li 
                    className={pageIndex === 0 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 0)}
                >
                    {
                        (pageIndex === 0)
                            ? <div>&lt; About &gt;</div>
                            : <div>About</div>
                    }
                </li>
                {/* 2 */}
                <li 
                    className={pageIndex === 1 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 1)}
                >
                    {
                        (pageIndex === 1)
                            ? <div>&lt; Services &gt;</div>
                            : <div>Services</div>
                    }
                </li>
                {/* 3 */}
                <li 
                    className={pageIndex === 2 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 2)}
                >
                    {
                        (pageIndex === 2)
                            ? <div>&lt; Works &gt;</div>
                            : <div>Works</div>
                    }
                </li>
                {/* 4 */}
                <li 
                    className={pageIndex === 3 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 3)}
                >
                    {
                        (pageIndex === 3)
                            ? <div>&lt; Contacts &gt;</div>
                            : <div>Contacts</div>
                    }
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;