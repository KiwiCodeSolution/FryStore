export async function sendToTelegram(message: string) {
	const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN
	const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID

	if (!TOKEN || !CHAT_ID) {
		console.error('Missing Telegram TOKEN or CHAT_ID')
		return false
	}

	const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

	try {
		await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
				parse_mode: 'HTML'
			})
		})
		return true
	} catch (e) {
		console.error('Telegram error:', e)
		return false
	}
}
