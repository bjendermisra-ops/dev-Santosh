export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, refUrl, msg, features, budget } = req.body;
  
  // 🔐 Vercel Dashboard -> Environment Variables में इन्हें कॉन्फ़िगर करें [1]
  const botToken = process.env.TELEGRAM_BOT_TOKEN || "8848322473:AAFDrrwlvXpcC6f5hzkvvgqh1EAfK4wva0g";
  const chatId = process.env.TELEGRAM_CHAT_ID || "7326906197";

  // Telegram HTML formatted template delivery
  const payloadMessage = `🚀 <b>New Message from Portfolio Inquiry!</b>\n\n` +
                         `👤 <b>Client Name:</b> ${name}\n` +
                         `📱 <b>Contact Info:</b> ${email}\n` +
                         `🔗 <b>Reference URL:</b> ${refUrl || 'None'}\n` +
                         `💬 <b>Requirements:</b>\n<i>${msg || 'None'}</i>\n\n` +
                         `🛠️ <b>Requested Features:</b>\n${features.join('\n') || 'None'}\n\n` +
                         `💰 <b>Estimated Project Budget:</b> ${budget}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: payloadMessage,
        parse_mode: 'HTML'
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Telegram sendMessage API failed' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
