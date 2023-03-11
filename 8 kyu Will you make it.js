const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let consumpt = distanceToPump / mpg
    if ( consumpt <= fuelLeft) {
      return true;
    } else {
      return false;
    }
  };
  