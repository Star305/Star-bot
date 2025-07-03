const pairingForm = document.getElementById('pairing-form');
const pairBtn = document.getElementById('pair-btn');
const sessionIdDiv = document.getElementById('session-id');

pairingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const response = await fetch('/generate-session-id');
  const data = await response.json();
  const sessionId = data.sessionId;
  sessionIdDiv.innerText = `Session ID: ${sessionId}`;
  await fetch('/send-whatsapp-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phoneNumber, message: `Your session ID is: ${sessionId}` }),
  });
});
