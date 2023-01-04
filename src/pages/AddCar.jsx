import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { carService } from "../services/CarService";

export const AddCar = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: false,
    engine: "",
    numberOfDoors: "",
  });

  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = null;

    if (id) {
      data = await carService.edit(id, newCar);
    } else {
      data = await carService.add(newCar);
    }

    if (!data) {
      alert('The new car is not created');
      return;
    }

    history.push('/cars');
  };

  const resetForm = () => {
    setNewCar("");
  };

  const handleClick = () => {
    alert(
      newCar.brand +
        " " +
        newCar.model +
        " " +
        newCar.year +
        " " +
        newCar.maxSpeed +
        " " +
        newCar.numberOfDoors +
        " " +
        newCar.engine
    );
  };
  
  return (
    <div>
        <h2>{id ? 'Edit' : 'Add new'} </h2>
      <form onSubmit={handleSubmit}>
        <label>
          brand:
          <input
            type="text"
            required
            value={newCar.brand}
            minLength={2}
            onChange={(e) => {
              setNewCar({ ...newCar, brand: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          model:
          <input
            type="text"
            value={newCar.model}
            required
            minLength={2}
            onChange={(e) => {
              setNewCar({ ...newCar, model: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          year:
          <select name="years" id="years">
            {[...new Array(29)].map((el, index) => (
              <option value={index + 1990} key={index}>
                {index + 1990}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label>
          maxSpeed:
          <input
            type="number"
            value={newCar.maxSpeed}
            onChange={(e) => {
              setNewCar({ ...newCar, maxSpeed: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          numberOfDoors:
          <input
            type="number"
            required
            value={newCar.numberOfDoors}
            onChange={(e) => {
              setNewCar({ ...newCar, numberOfDoors: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>engine: </label>
        <br />
        
        <label>diesel</label>
        <input
          type="radio"
          value="diesel"
          required
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>petrol</label>
        <input
          type="radio"
          value="petrol"
          required
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>electric</label>
        <input
          type="radio"
          value="electric"
          required
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>hybrid</label>
        <input
          type="radio"
          value="hybrid"
          required
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />{" "}
        <br />
        <br />
        <button>{id ? 'Edit' : 'Add'}</button>
        <br />
        <button type="reset" value="Reset" onClick={() => resetForm()}>
          Reset
        </button>
        <button onClick={handleClick}>Preview</button>
      </form>
    </div>
  );
}