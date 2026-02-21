async function sendMessage() {
  const input = document.getElementById("message").value;

  document.getElementById("reply").innerText = "Thinking...";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  document.getElementById("reply").innerText = data.reply;
}