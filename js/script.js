
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    
    // Fungsi untuk menghitung luas segitiga
    function hitungLuasSegitiga() {
      console.log("Button hitung clicked");
      const alas = parseFloat(document.getElementById("alas").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
      const outputLuas = document.getElementById("output-luas");
      const tataCaraLuas = document.getElementById("tata-cara-luas");
  
      console.log("Alas:", alas, "Tinggi:", tinggi);
  
      if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        outputLuas.value = `Luas segitiga adalah ${luas}`;
  
        // Menampilkan tata cara pengerjaan
        tataCaraLuas.innerHTML = `
          <div id="subrumus">Tata Cara Pengerjaan:</div>
          <p id="rumussegitiga">
            Diketahui:<br>
            Alas (a) = ${alas}<br>
            Tinggi (t) = ${tinggi}<br><br>
            Rumus luas segitiga:<br>
            L = 1/2 x alas x tinggi<br><br>
            Substitusi nilai:<br>
            L = 1/2 x ${alas} x ${tinggi}<br><br>
            Hasil perhitungan:<br>
            L = ${luas}
          </p>
        `;
        console.log("Luas:", luas);
      } else {
        outputLuas.value = "Masukkan nilai valid";
        tataCaraLuas.innerHTML = "";
      }
    }
    
    // Fungsi untuk menghitung keliling segitiga
    function hitungKelilingSegitiga() {
        const sisi1 = parseFloat(document.getElementById("sisi_1").value);
        const sisi2 = parseFloat(document.getElementById("sisi_2").value);
        const sisi3 = parseFloat(document.getElementById("sisi_3").value);
        const outputKeliling = document.getElementById("output-keliling");
        const tataCaraKeliling = document.getElementById("tata-cara-keliling");
    
        console.log("Sisi 1:", sisi1, "Sisi 2:", sisi2, "Sisi 3:", sisi3);
    
        if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
          const keliling = sisi1 + sisi2 + sisi3;
          outputKeliling.value = `Keliling segitiga adalah ${keliling}`;
    
          // Menampilkan tata cara pengerjaan
          tataCaraKeliling.innerHTML = `
              <div id="subrumus">Tata Cara Pengerjaan:</div>
              <p id="rumussegitiga">
                Diketahui:<br>
                Sisi 1 (a) = ${sisi1}<br>
                Sisi 2 (b) = ${sisi2}<br>
                Sisi 3 (c) = ${sisi3}<br><br>
                Rumus keliling segitiga:<br>
                K = Sisi 1 + Sisi 2 + Sisi 3<br><br>
                Substitusi nilai:<br>
                K = ${sisi1} + ${sisi2} + ${sisi3}<br><br>
                Hasil perhitungan:<br>
                K = ${keliling}
              </p>
            `;
          console.log("Keliling:", keliling);
        } else {
          outputKeliling.value = "masukkan nilai valid";
          tataCaraKeliling.innerHTML = "";
        }
      }

    // Fungsi untuk mereset inputan
    function resetInput() {
      document.getElementById("alas").value = "";
      document.getElementById("tinggi").value = "";
      document.getElementById("output-luas").value = "";
      document.getElementById("tata-cara-luas").innerHTML = "";
      document.getElementById("sisi_1").value = "";
      document.getElementById("sisi_2").value = "";
      document.getElementById("sisi_3").value = "";
      document.getElementById("output-keliling").value = "";
      document.getElementById("tata-cara-keliling").innerHTML = "";
    }
  
  
    // Menambahkan event listener ke tombol hitung
    document.getElementById("hitungLuas").addEventListener("click", hitungLuasSegitiga);
    document.getElementById("hitungKeliling").addEventListener("click", hitungKelilingSegitiga);
  
    // Menambahkan event listener ke tombol reset
    document.getElementById("Reset").addEventListener("click", resetInput);
  
  });
  
  // Fungsi untuk menampilkan dan menyembunyiman inputan dan tata cara pengerjaan
  function toggleElement(tutupId) {
    var tutup = document.getElementById(tutupId);
    if (tutup.classList.contains("hide")) {
        tutup.classList.remove("hide");
    } else {
        tutup.classList.add("hide");
    }
  }