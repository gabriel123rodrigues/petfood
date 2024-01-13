import'./style.css'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png';
import petlove from '../../assets/petlove.webp'



const Marker = ({petshop}) =>{
    return (
        <div>
            <img className="img-marker" src={MarkerIcon}></img>
            <img src={petshop.logo}
                    className="img-marker"></img>
        </div>
    )
}

export default Marker;