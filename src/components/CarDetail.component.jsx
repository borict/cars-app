
export const CarDetail = ({
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
  id,
}) => {
  return (
    <div>
      <p>
        {brand} {model} {year} {maxSpeed} {isAutomatic} {engine} {numberOfDoors}
      </p>
    </div>
  );
};
