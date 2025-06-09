<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Semangat, Cepat Sembuh!</title>
  <style>
    body {
      font-family: 'Comic Sans MS', cursive, sans-serif;
      background-color: #ffe4e1;
      color: #333;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }

    .container {
      max-width: 600px;
      padding: 20px;
      background: #fff5f8;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }

    h1 {
      color: #e75480;
      font-size: 2.5em;
    }

    p {
      font-size: 1.2em;
      margin: 10px 0;
    }

    button {
      background-color: #ff69b4;
      border: none;
      padding: 10px 20px;
      font-size: 1em;
      border-radius: 10px;
      cursor: pointer;
      color: white;
      margin-top: 15px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #ff1493;
    }

    .joke {
      margin-top: 20px;
      font-style: italic;
      color: #666;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>Semangat yaa! 💪😄</h1>
    <p>Jangan lupa senyum, karena senyum itu gratis dan bikin imun naik! 😷✨</p>
    <button onclick="tampilkanLelucon()">Butuh hiburan? Klik aku!</button>
    <p class="joke" id="jokeArea"></p>
  </div>

  <script>
    const jokes = [
      "Kenapa komputer nggak pernah pilek? Karena dia punya antivirus! 🤧💻",
      "Kalo sakit jangan mikirin mantan, nanti tambah drop. 😅",
      "Sakit itu sementara... Tapi kalo kamu ngutang, itu bisa lama. 🤑",
      "Apa obat terbaik buat sakit? Tertawa... atau kamu 😘 (eaaa~)",
      "Kata dokter: istirahat, makan enak, dan jangan buka WA dari bos! 📵😂"
    ];

    function tampilkanLelucon() {
      const index = Math.floor(Math.random() * jokes.length);
      document.getElementById("jokeArea").innerText = jokes[index];
    }
  </script>

</body>
</html>
