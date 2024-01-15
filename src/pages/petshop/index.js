import Header from '../../components/header'
import petlove from '../../assets/petlove.webp';
import { useEffect } from 'react';
import {useDispatch, useState, useSelector} from 'react-redux'
import Icon from '@mdi/react';
import { useParams } from 'react-router-dom';
import { mdiCash, mdiCrosshairsGps, mdiStarOutline } from '@mdi/js';
import Product from '../../components/products/card';
import './styles.css';
import { requestPetshop } from '../../store/modules/shop/action';

const Petshop = () =>{

    const {id} = useParams();
    
    const dispatch = useDispatch();
    const {petshop} = useSelector ((state)=>state.shop);
    
    useEffect(()=>{
        dispatch(requestPetshop(id));
    },[])

   return(
    <div className ="h-100">
    <Header/>
    <div className="container">
        <div className="row">
            <div className="col-2">
                <img src={petshop.logo}
            className="img-fluid img-logo"></img>
            <b>{petshop.nome}</b>
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
           
        </div>
        <div className="col-10">
                <h5>Produtos</h5>
                <div className="row">
                {petshop.products?.map((p) => (
                <Product product={p} />
              ))}
                </div>
            </div>
    </div>
    </div>
    </div>
   )
}

export default Petshop;