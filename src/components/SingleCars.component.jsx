import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCarDetails } from "../components/SingleCarDetails.component";
import { carService } from "../services/CarService";

export const SingleCars = () => {
    const {id} = useParams();
    const [car, setCar] = useState([]);

    const handleGetSingleCar = async () => {
        const { data } = await carService.getId(id);
        setCar(data);
    }
    
    useEffect(()=>{
        handleGetSingleCar(id); 
    }, [id]);

    return (
        <div>
            {car && (
                <SingleCarDetails 
                    model={car.model}
                    brand={car.brand}
                />
            )}
        </div>
    );
}