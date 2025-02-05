function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML = "<span class='text-danger'>Please enter both weight and height.</span>";
        return;
    }

    height = height / 100; // Convert cm to meters
    let bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        document.getElementById("result").classList.add("text-warning");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        document.getElementById("result").classList.add("text-success");
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        document.getElementById("result").classList.add("text-warning");
    } else {
        category = "Obese";
        document.getElementById("result").classList.add("text-danger");
    }

    document.getElementById("result").innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
}
