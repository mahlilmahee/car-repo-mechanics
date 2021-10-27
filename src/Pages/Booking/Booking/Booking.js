
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router';
const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/cars/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
          
            <h4> Details of : {service.name}</h4>
        </div>
    );
};

export default Booking;