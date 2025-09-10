export const YEREVAN_TZ = 'Asia/Yerevan';

export function todayYerevanISO() {
	const fmt = new Intl.DateTimeFormat('en-CA', {
		timeZone: YEREVAN_TZ, year: 'numeric', month: '2-digit', day: '2-digit'
	});
	return fmt.format(new Date()); // 'YYYY-MM-DD'
}