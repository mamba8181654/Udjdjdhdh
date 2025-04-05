async function sendMessage() {
  const input = document.getElementById('input').value;
  const chat = document.getElementById('chat');
  chat.value += "You: " + input + "\n";
  document.getElementById('input').value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  chat.value += "GPT: " + reply + "\n\n";
