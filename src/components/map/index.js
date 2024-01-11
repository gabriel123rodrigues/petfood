import GoogleMapReact from 'google-map-react'
import './styles.css';
import Marker from '../marker';
const Map =()=>{
    return(
        <div className='container-map'>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyB-7pxBN8OlkIuP6qj02lHJ7gi5QZN-Hj4'}}
                center={{
                    lat: -23.561684,
                    lng: -46.625378,
                }}
                defauktZoom={15}
                
            >
                <Marker 
                lat={-23.561684}
                lng={-46.625378}/>
            </GoogleMapReact>
        </div>
    )
}

export default Map;