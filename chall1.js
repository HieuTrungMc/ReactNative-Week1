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


