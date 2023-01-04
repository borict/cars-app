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

  const handleDelete = async (id) => {
    const data = await carService.delete(id);
    if (data.count) {
      setCarList(carList.filter((post) => post.id !== id));
    }
  };

  return (
    <div>
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
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
