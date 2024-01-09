

import petlove from '../../assets/petlove.webp'
import Icon from '@mdi/react';
import { mdiCash, mdiCrosshairsGps, mdiStarOutline } from '@mdi/js';
import './style.css'
const Petshop = () => {
    return (
        <li className="petshop d-inline-block">
            <div className="d-inline-block">
                <img src={petlove}
                    className="img-fluid img-logo"></img>
            </div>
            <div className="container-infos d-inline-block pl-3 align-bottom"> 
            <b>PetLove</b>
            <div className='petshop-infos'>
                <Icon className='span mdi-star' path={mdiStarOutline} size={0.8} />
                <text>
                    <b>2,8</b>
                </text>
                <Icon className='span' path={mdiCash} size={0.8} />
                <text>
                    $$$
                </text>
                <Icon className='span' path={mdiCrosshairsGps} size={0.8} />
                <text>
                    2,9km
                </text>
                
            </div>
            <label className='badge badge-primary'>Frete grátis</label>
            </div>
           
        </li>
    )
}
export default Petshop;