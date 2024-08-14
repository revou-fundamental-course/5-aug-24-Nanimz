// Ini Javascript
function hitungBMI() {
    var beratBadan = document.getElementById("berat-badan").value;
    var tinggiBadan = document.getElementById("tinggi-badan").value / 100; // konversi ke meter
    var bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);
  
    var kategori = "";
    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
      kategori = "Kelebihan Berat Badan";
    } else {
      kategori = "Kegemukan (Obesitas)";
    }
  
    document.getElementById("nilaiBMI").innerHTML = `BMI Anda: ${bmi}`;
    document.getElementById("kategoriBMI").innerHTML = `Anda berada dalam kategori: ${kategori}`;
  }
  