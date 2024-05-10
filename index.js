/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

/*// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);*/

const calcNewVel = ({ vel, acc, time }) => {
  const velInMps = vel * 1000 / 3600; // Convert velocity from km/h to m/s
  const newVelInMps = velInMps + (acc * time);// Perform calculation in m/s
  return newVelInMps * 3600 / 1000; // Convert velocity back to km/h for output // Perform calculation in m/s

};


const initialParams = { vel: 10000, acc: 3, time: 3600, d: 0, fuel: 5000, fbr: 0.5 };
const vel2 = calcNewVel(initialParams);
const d2 = initialParams.d + (initialParams.vel * initialParams.time / 3600);



