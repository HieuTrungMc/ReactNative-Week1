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

//challenge 3
function gymnastics(dolphins, koalas) {
    const average = list => list.reduce((prev, curr) => prev+curr)/list.length
    let dolphinScores =  average(dolphins)
    let koalasScores =  average(koalas)
    if(dolphinScores > 100 && koalasScores > 100) {
        if(dolphinScores > koalasScores)
            console.log(`Dolphins Wins!`);
        else if(dolphinScores < koalasScores)
            console.log(`Koala Wins!`);
        else 
            console.log(`It's a draw!`);
    } else {
        (koalasScores < 100) ? console.log(`Dolphin Wins!`) : console.log(`Koala Wins!`)
    }
}
gymnastics([96,108,89], [88,91,110])
gymnastics([97,112,101], [109,95,123])
gymnastics([97,112,101], [109,95,106])

