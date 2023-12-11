const form = document.querySelector("form");
// console.log(form)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const messgaeofBMI = (weight / ((height * height) / 10000)).toFixed(2);
  if (messgaeofBMI < 18.6) {
    results.innerHTML = `<span>${messgaeofBMI} Under Weight</span>`;
  }
  if (messgaeofBMI > 18.6 && messgaeofBMI < 24.9) {
    results.innerHTML = `<span>${messgaeofBMI} Normal Range</span>`;
  }
  if (messgaeofBMI > 24.9) {
    results.innerHTML = `<span>${messgaeofBMI} Overweight</span>`;
  }
});
