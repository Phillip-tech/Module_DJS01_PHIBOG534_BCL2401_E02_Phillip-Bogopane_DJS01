
const calcNewVel = ({ vel, acc, time }) => {
  const velInMps = vel * 1000 / 3600; // Convert velocity from km/h to m/s
  const newVelInMps = velInMps + (acc * time);// Perform calculation in m/s
  return newVelInMps * 3600 / 1000; // Convert velocity back to km/h for output // Perform calculation in m/s

};

// Usage of destructured parameters for clarity

try {
const initialParams = { vel: 10000, acc: 3, time: 3600, d: 0, fuel: 5000, fbr: 0.5 };
const vel2 = calcNewVel(initialParams);
const d2 = initialParams.d + (initialParams.vel * initialParams.time / 3600);
const rf = initialParams.fuel - (initialParams.fbr * initialParams.time);


console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);

} catch (error) {

console.error('An error occurred:', error);

}


