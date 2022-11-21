import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [index, setIndex] = useState(0);

    function changeIndex(e, newIndex) {
        e.preventDefault();
        setIndex(newIndex);
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
                    className={index === 0 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 0)}
                >
                    {
                        (index === 0)
                            ? <div>&lt; Services &gt;</div>
                            : <div>Services</div>
                    }
                </li>
                {/* 2 */}
                <li 
                    className={index === 1 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 1)}
                >
                    {
                        (index === 1)
                            ? <div>&lt; Works &gt;</div>
                            : <div>Works</div>
                    }
                </li>
                {/* 3 */}
                <li 
                    className={index === 2 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 2)}
                >
                    {
                        (index === 2)
                            ? <div>&lt; Notes &gt;</div>
                            : <div>Notes</div>
                    }
                </li>
                {/* 4 */}
                <li 
                    className={index === 3 ? 'selected-li' : 'normal-li'}
                    onClick={(e) => changeIndex(e, 3)}
                >
                    {
                        (index === 3)
                            ? <div>&lt; Contacts &gt;</div>
                            : <div>Contacts</div>
                    }
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;