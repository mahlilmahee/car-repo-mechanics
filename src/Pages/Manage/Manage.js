import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/cars')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const hanlingDelete=cul=>{
        fetch(`http://localhost:4000/cars/${cul}`,{
            method:'DELETE'
        })
        .then(res=>res.json)
        .then(data=>
            {console.log(data)
            if(data.deletedCount ){
                alert('successfully deleted Now ');
                const remaining=services.filter(id=>id._id!==cul);
                setServices(remaining)
            }} 
        )
    }
    return (
        <div>
            {
                services.map(data=><div key={data._id}> <h5>{data.name} <button onClick={()=>hanlingDelete(data._id)}>Delete</button></h5> </div>)
            }
        </div>
    );
};

export default Manage;