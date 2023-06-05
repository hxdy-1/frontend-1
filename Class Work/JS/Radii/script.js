// Task: Given an array of radii. Calculate the diameter, circumference, and area of each radius and output 3 arrays... each containing the appropriate result.

// Ex: const radius = [2, 1, 3, 5];
// Result:
// For diameter:  [4, 2, 6, 10]. For circumference: [12.566370614359172, 6.283185307179586, 18.84955592153876, 31.41592653589793]. For area: [12.566370614359172, 3.141592653589793, 28.274333882308138, 78.53981633974483]

const radii = [2, 1, 3, 5];

const diameterFormula = (Radius) => 2 * Radius;

const circumferenceFormula = (Radius) => 2 * Math.PI * Radius;

const areaFormula = (Radius) => Math.PI * Radius * Radius;

function calcValues(radiiArr, formula) {
    const ansArr = [];
    for (const radius of radiiArr) {
        ansArr.push(formula(radius));
    }

    return ansArr;
}

console.log(calcValues(radii, diameterFormula));
console.log(calcValues(radii, circumferenceFormula));
console.log(calcValues(radii, areaFormula));