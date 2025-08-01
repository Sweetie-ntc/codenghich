const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Kích thước canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Ký tự "mã hóa tình yêu" — bạn có thể thay bằng tên, ký tự trái tim, hoặc code
const chars = "I❤LOVE❤YOU".split("");

const fontSize = 18;
const columns = canvas.width / fontSize;

// Mỗi cột có một giá trị y
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  // Vẽ nền mờ để tạo hiệu ứng mờ dần
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff0037ff"; // Màu chữ Matrix
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33); // khoảng ~30 FPS
