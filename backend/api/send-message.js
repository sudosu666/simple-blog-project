export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "Message text required" });
    return;
  }

  const now = new Date();
  const hour = now.getHours();
  const workingHours = hour >= 9 && hour < 18;

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    res.status(500).json({ error: "Telegram config missing" });
    return;
  }

  let messageToTelegram = `Новое сообщение с сайта:\n${text}\nВремя: ${now.toLocaleString()}`;

  if (!workingHours) {
    messageToTelegram += "\n⚠️ Сообщение получено вне рабочего времени.";
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const telegramRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageToTelegram,
      }),
    });

    if (!telegramRes.ok) throw new Error("Telegram API error");

    res.status(200).json({
      success: true,
      workingHours,
      info: workingHours
        ? "Ваше сообщение отправлено, мы свяжемся с вами в ближайшее время."
        : "Сейчас нерабочее время, но мы получили ваше сообщение и свяжемся с вами при первой возможности.",
    });
  } catch (error) {
    res.status(500).json({ error: "Ошибка при отправке в Telegram" });
  }
}
