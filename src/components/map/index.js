import GoooMapReact from 'google-map-react'
import './styles.css';
import Marker from '../marker';
const Map =()=>{
    return(
        <div className='container-map'>
            <GoooMapReact
                bootstrapURLKeys={{key:''}}
                center={{
                    lat: -23.561684,
                    lng: -46.625378,
                }}
                defauktZoom={15}
                
            >
                <Marker 
                lat={-23.561684}
                lng={-46.625378}/>
            </GoooMapReact>
        </div>
    )
}

export default Map;