import React from "react";
import { carService } from "../services/CarService";
import { useState, useEffect } from "react";
import { CarDetail } from "../components/CarDetail.component";

export const AppCars = () => {
  const [carList, setCarList] = useState([]);


  const getHandler = async () => {
    const response = await carService.getAll();
    setCarList(response.data);
  };
 
  useEffect(() => {
    getHandler();
  }, []);

  return  (<div>
  <ul>
    {carList.map((car) => (
      <li key={car.id}>
        <CarDetail
          id={car.id} 
          brand={car.brand}
          model={car.model}
          year={car.year}
          maxSpeed={car.maxSpeed}
          isAutomatic={car.isAutomatic}
          engine={car.engine}
          numberOfDoors={car.numberOfDoors}
        />
      </li>
    ))}
  </ul>
</div>
  )

};