
// CURRENT DATE AND TIME
window.addEventListener('DOMContentLoaded', () => {
    function updateTimeUTCPlus2() {
        const now = new Date();

        const options = {
            timeZone: 'Europe/Prague',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        const formatter = new Intl.DateTimeFormat('cs-CZ', options);
        const formatted = formatter.format(now).replace(',', '');
        const isoString = now.toISOString();
        const timeEl = document.getElementById('current-time');
        if (timeEl) {
            timeEl.textContent = formatted;
            timeEl.setAttribute('datetime', isoString);
        }
    }

    updateTimeUTCPlus2();
    setInterval(updateTimeUTCPlus2, 60000);
});