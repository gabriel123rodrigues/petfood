import GoogleMapReact from 'google-map-react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './styles.css';
import {  useSelector } from 'react-redux';
import Marker from '../marker';
const Map = ({ petshops }) => {

  const {mapCenter} = useSelector((state)=>state.shop)
    // const {mapCenter} = useSelector(state=>state.shop)
    // const { isLoaded } = useJsApiLoader({
    //   id: 'google-map-script',
    //   googleMapsApiKey: "AIzaSyB-7pxBN8OlkIuP6qj02lHJ7gi5QZN-Hj4"
    // })
    return (
        <div className='container-map'>


             <GoogleMapReact
                     bootstrapURLKeys={{ key: "AIzaSyB-7pxBN8OlkIuP6qj02lHJ7gi5QZN-Hj4" }}
                     center={mapCenter}
                     defaultZoom={15}
                   >
                     {petshops.map((p) => (
                       <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />
                     ))}
            </GoogleMapReact> 
       




        </div>
    )
}


export default Map;



           

             {/* {  isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{width:'100%',height:'100%'}}
                  center={mapCenter}
                  zoom={15}
                  
                >
                  {petshops.map(p=> <Marker 
                    petshop={p}
                    position={{lat: p.location.lat, lng: p.location.lng}}/>)}
                  <></>
                </GoogleMap>
            ): <></> } */}