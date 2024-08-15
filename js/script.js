function hitungBMI() {
  var beratBadan = document.getElementById("berat-badan").value;
  var tinggiBadan = document.getElementById("tinggi-badan").value / 100; // konversi ke meter
  var bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);

  var kategori = "";
  var hasilBMIText = "";
  var infoText = ""; // Variabel untuk menyimpan informasi tambahan

  if (bmi < 18.5) {
    kategori = "Kurang";
    hasilBMIText = "Hasil BMI Anda kurang dari 18.5";
    infoText = `
          Anda berada dalam kategori berat badan kurang.
          Cara terbaik untuk meningkatkan berat badan adalah dengan mengatur pola makan yang kaya nutrisi dan berolahraga.
          Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal.
      `;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (Ideal)";

    if (bmi >= 18.5 && bmi < 20) {
      hasilBMIText = "Hasil BMI Anda di antara 18 dan 20";
    } else if (bmi >= 20 && bmi <= 22) {
      hasilBMIText = "Hasil BMI Anda di antara 20 dan 22";
    } else if (bmi > 22 && bmi <= 24.9) {
      hasilBMIText = "Hasil BMI Anda di antara 22 dan 25";
    }
    infoText = `
          Anda berada dalam kategori berat badan ideal.
          Pertahankan pola makan sehat dan olahraga teratur untuk menjaga kesehatan dan berat badan Anda.
      `;
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Lebih";
    if (bmi >= 25 && bmi < 27) {
      hasilBMIText = "Hasil BMI Anda di antara 25 dan 27";
    } else if (bmi >= 27 && bmi <= 29.9) {
      hasilBMIText = "Hasil BMI Anda di antara 27 dan 30";
    }
    infoText = `
          Anda berada dalam kategori overweight atau berat badan berlebih.
          Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.
          Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.
      `;
  } else {
    kategori = "Kegemukan (Obesitas)";
    hasilBMIText = "Hasil BMI Anda lebih dari 30";
    infoText = `
          Anda berada dalam kategori obesitas.
          Penting untuk segera mengambil langkah-langkah untuk menurunkan berat badan, seperti berkonsultasi dengan dokter atau ahli gizi.
          Obesitas dapat meningkatkan risiko berbagai penyakit serius seperti diabetes, penyakit jantung, dan lainnya.
      `;
  }

  document.getElementById("nilaiBMI").innerHTML = `${bmi}`;
  document.getElementById("kategoriBMI").innerHTML = `Berat Badan Anda ${kategori}`;
  document.getElementById("hasil").innerHTML = hasilBMIText;
  document.getElementById("infoBMI").innerHTML = infoText;

  // Tampilkan tombol konsultasi
  document.getElementById("konsultasiButtons").style.display = "block";
}