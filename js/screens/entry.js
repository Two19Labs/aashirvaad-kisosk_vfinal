// =============================================
// ENTRY SCREEN
// =============================================
function goOTP() {
  var name = document.getElementById('i-name').value.trim();
  var phone = document.getElementById('i-phone').value.trim();
  if (!name) { document.getElementById('e-name').classList.add('show'); return; }
  document.getElementById('e-name').classList.remove('show');
  if (phone.length !== 10) { document.getElementById('e-phone').classList.add('show'); return; }
  document.getElementById('e-phone').classList.remove('show');
  S.name = name; S.phone = phone;
  saveState();
  document.getElementById('otp-desc').textContent = T('otp_subtitle') + ' +91 ' + phone;
  document.getElementById('i-otp').value = '';
  show('s-otp');
}

// =============================================
// OTP SCREEN
// =============================================
function verifyOTP() {
  var otp = document.getElementById('i-otp').value.trim();
  if (otp.length !== 4) { document.getElementById('e-otp').classList.add('show'); return; }
  document.getElementById('e-otp').classList.remove('show');
  var profiles = JSON.parse(localStorage.getItem('ASH_USER_PROFILES') || '{}');
  if (profiles[S.phone]) {
    toast((S.lang === 'hi' ? '\u0935\u093e\u092a\u0938\u0940 \u092a\u0930 \u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948, ' : 'Welcome back, ') + S.name + '!');
    S.email = profiles[S.phone].email || '';
  }
  document.getElementById('d-name').value = S.name;
  document.getElementById('d-phone').value = S.phone;
  document.getElementById('d-email').value = S.email || '';
  show('s-details');
}

// =============================================
// DETAILS SCREEN
// =============================================
function goQuiz() {
  S.email = document.getElementById('d-email').value.trim();
  saveState();
  show('s-q1');
}
