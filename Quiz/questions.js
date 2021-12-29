
console.log(calculateBmi(1.8,96));

function calculateBmi(height,weight) {
       //BMI = 体重[kg] / (身長[m]) ** 2
        return weight / height ** 2;          
}