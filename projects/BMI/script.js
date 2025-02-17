function calculateBMI() {
    let heightElement = document.getElementById("height");
    let weightElement = document.getElementById("weight");
    let result = document.getElementById("result");
    let remarks = document.getElementById("remarks");
    let height = parseFloat(heightElement.value);
    let weight = parseFloat(weightElement.value);
    let bmi;

    if(isNaN(weight) || isNaN(height)) {
        result.innerText = "Enter Valid Weight / Height";
    }
    bmi = weight / (height * height);
    result.innerText = `Your BMI is ${bmi.toFixed(2)}`
    if(bmi<18.5){
        remarks.innerText = `You thin. Go eat`;
        remarks.style.color = "magenta";
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        remarks.innerText = `Get yourself a 🍕 Your BMI is in normal range`;
        remarks.style.color = "green";
    }else if(bmi >= 25 && bmi <= 29.9) {
        remarks.innerText = `Hold up. You getting fat boi. Get some 🥗`
        remarks.style.color = "yellow";
    }else if(bmi >= 30 && bmi <= 34.9) {
        remarks.innerText = `You fat. You Class-I Fat 🦏`
        remarks.style.color = "orange";
    }else if(bmi >= 35 && bmi <= 39.9) {
        remarks.innerText = `Congratulations. You belong to Class-II of Fat School 🐋`
        remarks.style.color = "red";
    }else if(bmi >= 40) {
        remarks.innerText = `You are a boeing cargo carrier 💀`
        remarks.style.color = "purple";
    }
}

