export function convertNumber(cookie: number) {
    if (cookie >= 1000000000000000) return String(Math.round(cookie / 10000000000) / 100 + 'Qua');
    if (cookie >= 1000000000000) return String(Math.round(cookie / 10000000000) / 100 + 'Tri');
    if (cookie >= 1000000000) return String(Math.round(cookie / 10000000) / 100 + 'Bil');
    if (cookie >= 1000000) return String(Math.round(cookie / 10000) / 100 + 'Mil');
    if (cookie >= 1000) return String(Math.round(cookie / 10) / 100 + 'k');
    if (cookie < 1000) return String(Math.round(cookie * 10) / 10);
  }