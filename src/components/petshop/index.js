

import {setShopMapSelected, setShopMapCenter} from '../../store/modules/shop/action'
import Icon from '@mdi/react';
import {useDispatch, useSelector} from 'react-redux'
import { mdiCash, mdiCrosshairsGps, mdiStarOutline } from '@mdi/js';
import './style.css';


const Petshop = ({petshop}) => {
    
    
    const dispatch = useDispatch();
    const {petshopMapSelected} = useSelector((state)=>state.shop);

    const setSelectedPetshop = () =>{
        dispatch(setShopMapSelected(petshop._id));
        dispatch(setShopMapCenter(petshop.location));
    
}

    return (
        <li className={`petshop d-inline-block  ${petshopMapSelected === petshop._id ? 'active': ''}`}
        onClick={()=>setSelectedPetshop()}
        >
            <div className="d-inline-block">
                <img src={petshop.logo}
                    className="img-fluid img-logo"></img>
            </div>
            <div className="container-infos d-inline-block pl-3 align-bottom"> 
            <b>{petshop.nome}</b>
            <div className='petshop-infos'>
                <Icon className='span mdi-star' path={mdiStarOutline} size={0.8} />
                <text>
                    <b>2,8</b>
                </text>
                <Icon className='span' path={mdiCash} size={0.8} />
                <text>
                    {petshop.categoria}
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