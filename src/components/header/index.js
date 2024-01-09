import Icon from '@mdi/react';
import logoWhite from '../../assets/logo-white.png'
import logo from '../../assets/logo.png'
import { mdiCart } from '@mdi/js';
import './style.css'
import {Link} from 'react-router-dom'
import React from 'react';

const Header =  ({whiteVersion,hideCart}) =>{
    const openDrawer = () =>{
        const event = new CustomEvent ('openCart');
        window.dispatchEvent(event);
    }
    return (
        <div className="col-12">
            <header className='py-4 px-4 text-center'>
           <Link to="/"><img src={whiteVersion ? logoWhite : logo} className='img-fluid'></img></Link> 
            </header>
           {!hideCart && <button onClick ={()=>openDrawer()}className="btn btn-secondary cart-button">
                <span>
                    <Icon path={mdiCart} size={0.8}></Icon> 2 intens
                </span>
            </button>}
        </div>
    )
}

export default Header;