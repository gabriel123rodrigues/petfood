import GoogleMapReact from 'google-map-react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './styles.css';
import Marker from '../marker';
const Map = ({ petshops }) => {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyB-7pxBN8OlkIuP6qj02lHJ7gi5QZN-Hj4"
    })
    return (
        <div className='container-map'>
            
        {  isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{width:'100%',height:'100%'}}
                  center={{
                    lat: -23.561684,
                    lng: -46.625378,}}
                  zoom={15}
                  
                >
                  {petshops.map(p=> <Marker 
                    petshop={p}
                    position={{lat: p.location.lat, lng: p.location.lng}}/>)}
                  <></>
                </GoogleMap>
            ): <></> }




        </div>
    )
}


export default Map;



            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB-7pxBN8OlkIuP6qj02lHJ7gi5QZN-Hj4' }}
                center={{
                    lat: -23.561684,
                    lng: -46.625378,
                }}
                defaultZoom={15}

            >
                {petshops.map(p => <Marker
                    lat={p.location.lat}
                    lng={p.location.lng} />)}
            </GoogleMapReact>  */}