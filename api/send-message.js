export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, msg } = req.body;
  
  // 🔐 Vercel Settings -> Environment Variables में इन्हें सेव करें
  const botToken = process.env.TELEGRAM_BOT_TOKEN || "8848322473:AAFDrrwlvXpcC6f5hzkvvgqh1EAfK4wva0g";
  const chatId = process.env.TELEGRAM_CHAT_ID || "7326906197";

  const payloadText = `📩 <b>New Message from Portfolio!</b>\n\n` +
                      `👤 <b>Sender Name:</b> ${name}\n` +
                      `📧 <b>Sender Email:</b> ${email}\n\n` +
                      `💬 <b>Message Content:</b>\n<i>${msg}</i>`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: payloadText,
        parse_mode: 'HTML'
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Telegram dispatch failed' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
