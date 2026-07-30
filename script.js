
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
}
document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const type = link.dataset.placeholder;
    const messages = {
      autotrader: 'Auto Trader dealer-profile link will be added after James confirms it.'
    };
    showToast(messages[type]);
  });
});
document.getElementById('enquiryForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = String(form.get('name') || '').trim();
  const contact = String(form.get('contact') || '').trim();
  const type = String(form.get('type') || '').trim();
  const message = String(form.get('message') || '').trim();

  const subject = `Carology Customs test enquiry: ${type}`;
  const body = [
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Enquiry type: ${type}`,
    '',
    message
  ].join('\n');

  const mailto = `mailto:john.fitzjohn.1975@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showToast('Opening your email app with the enquiry prepared.');
  window.location.href = mailto;
});
