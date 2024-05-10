# Module_DJS01_PHIBOG534_BCL2401_E02_Phillip-Bogopane_DJS01

## 1. Unit Mismatch
The original functions did not handle unit conversions correctly, leading to inaccuracies in calculations. For example, velocities were converted between km/h and m/s but the calculations involving acceleration (which is in m/s²) did not account for this unit difference properly.

## 2. Parameter Misalignment
Parameters were initially handled in a way that could easily lead to unit mismatch errors, causing potential confusion and incorrect results.

## Initial Parameters
- Initial Velocity (vel): The starting speed of the spacecraft, 10,000 km/h.
- Acceleration (acc): The spacecraft's acceleration, 3 m/s².
- Time (time): The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- Initial Distance (d): The starting distance from the reference point, 0 km.
- Initial Fuel (fuel): The starting amount of fuel, 5,000 kg.
- Fuel Burn Rate (fbr): The rate at which fuel is consumed, 0.5 kg/s.

## Expected Corrected Results
- New Velocity: Approximately 48,880 km/h after correction.
- New Distance: Approximately 10,000 km after correction.
- Remaining Fuel: Approximately 3,200 kg after correction.

## Solution Approach
- Used object destructuring in function parameters for better clarity and to avoid confusion with multiple parameters of different units.
- Implemented accurate unit conversions within the functions to ensure all calculations are performed with consistent units.
- Refactored functions to address the issues of unit mismatches and enhance parameter clarity.

## Code Refactor in index.js

const calcNewVel = ({ vel, acc, time }) => {
  const velInMps = vel * 1000 / 3600; // Convert velocity from km/h to m/s
  const newVelInMps = velInMps + (acc * time); // Perform calculation in m/s
  return newVelInMps * 3600 / 1000; // Convert velocity back to km/h for output
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


This refactored code addresses the unit mismatch and parameter misalignment issues, providing corrected results for the given scenario.