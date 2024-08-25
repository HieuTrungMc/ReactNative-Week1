//challenge 1

function BMI(markMass, markHeight, johnMass, johnHeight){
    function calculateBMI(mass, height) {
        return mass/Math.pow(height, 2)
    }
    let markHigherBMI = (calculateBMI(markMass,markHeight) > calculateBMI(johnMass, johnHeight)) ? true: false 
    
    console.log(markHigherBMI)
}
BMI(78, 1.69, 92, 1.95)
BMI(95, 1.88, 85, 1.76)

//challenge 2
function BMIImproved(markMass, markHeight, johnMass, johnHeight){
    function calculateBMI(mass, height) {
        return mass/Math.pow(height, 2)
    }
    let markBMI = calculateBMI(markMass,markHeight)
    let johnBMI = calculateBMI(johnMass, johnHeight)
    if(markBMI > johnBMI) {
        console.log(`Mark's BMI is higher than John's`);
        console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`);
    } else {
        console.log(`John's BMI is higher than Mark's`);
        console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);

    }
    
}
BMIImproved(78, 1.69, 92, 1.95)
BMIImproved(95, 1.88, 85, 1.76)

