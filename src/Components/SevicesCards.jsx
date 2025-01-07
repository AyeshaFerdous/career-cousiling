import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import AOS from "aos";
import "aos/dist/aos.css";


const SevicesCards = () => {

    const data = useLoaderData();
     const [services, setServices] = useState([]);
    const {category} = useParams();
 

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    useEffect(()=>{
        if(category){
            const filterByCategory = [...data].filter(service => service.category == category);
            setServices(filterByCategory);
        }
        else{
            setServices(data.slice(0,6));
        }
    },[category, data])
    return (
       <>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10  px-10' data-aos="zoom-in-right" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="600">
            {
                services.map(service => <Card key={service.id} service={service}></Card>)
            }
        </div>
      
       </>
    );
};

export default SevicesCards;