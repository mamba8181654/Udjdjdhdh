async function sendMessage() {
  const input = document.getElementById('input').value;
  const chat = document.getElementById('chat');
  chat.value += "You: " + input + "\n";
  document.getElementById('input').value = "";

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY_HERE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: input }] }]
    })
  });

  const data = await response.json();
  const reply = data.candidates[0].content.parts[0].text;
  chat.value += "Gemini: " + reply + "\n\n";
}
