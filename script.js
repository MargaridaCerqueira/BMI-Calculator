const btn = document.getElementById("calculate");

btn.addEventListener("click", function calculateBmi() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    document.getElementById("warning").innerHTML =
      "Please fill out the input fields!";
    return;
  }

  bmi = (weight / height ** 2).toFixed(2);

  document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;

  let status = document.getElementById("status");
  if (bmi < 18.5) {
    status.innerHTML = "You are underweight 😟";
    document.getElementById("calculatorBox").style.backgroundColor = "#87B1E3";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status.innerHTML = "You have a healthy weight 🤩";
    document.getElementById("calculatorBox").style.backgroundColor = "#C1E999";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status.innerHTML = "You are overweight 😦";
    document.getElementById("calculatorBox").style.backgroundColor = "#FAE488";
  } else {
    status.innerHTML = "You are obese 😨";
    document.getElementById("calculatorBox").style.backgroundColor = "#F48C8C";
  }
});

const btnClear = document.getElementById("clear");

btnClear.addEventListener("click", function reset() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  document.getElementById("result").innerHTML = "";
  document.getElementById("status").innerHTML = "";
  document.getElementById("calculatorBox").style.backgroundColor = "#fefcf3";
});
