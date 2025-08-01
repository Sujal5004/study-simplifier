function simplifyText() {
  const input = document.getElementById("inputText").value.trim();
  const type = document.getElementById("simplifyType").value;
  const outputBox = document.getElementById("output");
  const outputContainer = document.getElementById("outputContainer");

  if (!input) {
    outputBox.innerText = "❗ Please enter some study material.";
    outputContainer.classList.remove("hidden");
    return;
  }

  let simplified = "";

  if (type === "rhyme") {
    simplified = generateRhyme(input);
  } else if (type === "mnemonic") {
    simplified = generateMnemonic(input);
  } else {
    simplified = generateSummary(input);
  }

  outputBox.innerText = simplified;
  outputContainer.classList.remove("hidden");
}

function generateRhyme(text) {
  return `🎶 Here’s a rhyme to remember:\n“${text.split(' ').slice(0, 6).join(' ')}...\nThink and rhyme, remember in time!”`;
}

function generateMnemonic(text) {
  const words = text.split(' ').filter(w => w.length > 2);
  const initials = words.map(w => w[0].toUpperCase());
  return `🔤 Mnemonic using initials:\n${initials.join(' - ')}\nMake a sentence with these letters!`;
}

function generateSummary(text) {
  if (text.length < 100) return `📝 Summary:\n${text}`;
  return `📝 Summary:\n${text.slice(0, 80)}... (shortened for quick memory)`;
}
