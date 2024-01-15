import'./style.css'
import { useSelector } from 'react-redux';
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png';
import petlove from '../../assets/petlove.webp';
import {Link} from 'react-router-dom'



const Marker = ({petshop}) =>{

    const { petshopMapSelected} = useSelector ((state) => state.shop)
   

    return (
        <Link to={`/petshop/${petshop._id}`}>
        <div>
            <img  src={petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon}></img>
            <img src={petshop.logo}
                className="img-marker"
            ></img>
        </div>
        </Link>
    )
}

export default Marker;