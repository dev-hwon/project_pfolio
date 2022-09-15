import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lnblist from "../component/Lnblist";

export default function Header(props) {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div id="header">
            <div className="header__top">
                <button 
                    type="butotn" 
                    className={`btn__lnbmenu` + (toggle ? ' active' : '')} 
                    data-target="global__lnbmenu" 
                    onClick={handleClick}>
                    <span></span><span></span><span></span>
                </button>
                <h1><Link to="" ><img src="//img.enuri.info/images/sample/intro/logo_white@170.png" alt="로고" /></Link></h1>
            </div>
            <nav 
                className="global__lnbmenu" 
                id="global__lnbmenu"
                style={{'display' : (props.isMobile ? (toggle ? 'block' : 'none') : 'block') }}
            >
                <Lnblist changeDepth={props.changeDepth}></Lnblist>
            </nav>
        </div>
    );
}