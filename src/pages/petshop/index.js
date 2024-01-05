import Header from '../../components/header'
import petlove from '../../assets/petlove.webp'
import Icon from '@mdi/react';
import { mdiCash, mdiCrosshairsGps, mdiStarOutline } from '@mdi/js';
import './styles.css'

const Petshop = () =>{
   return(
    <div className ="h-100">
    <Header/>
    <div className="container">
        <div className="row">
            <div className="col-2">
                <img src={petlove}
            className="img-fluid img-logo"></img>
            <b>PetLove</b>
            <div className='petshop-infos'>
            <Icon className='span mdi-star' path={mdiStarOutline} size={0.8} />
                <text>
                    <b>2,8</b>
                </text>
                <Icon className='span'path={mdiCash} size={0.8} />
                <text>
                    $$$
                </text>
                <Icon className='span' path={mdiCrosshairsGps} size={0.8} />
                <text>
                    2,9km
                </text>
                <label className='badge badge-primary'>Frete grátis</label>
            </div>
            <div className="col-10"></div>
        </div>
    </div>
    </div>
    </div>
   )
}

export default Petshop;