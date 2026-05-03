// =============================================
// APP STATE & PERSISTENCE
// =============================================
var S = {
  lang: 'en',
  name: '', phone: '', email: '',
  q1: [],
  q2: 'medium',
  q3: [],
  q4: 'general',
  q5: 'Fine',
  grind: 'Fine',
  cycle: 'Weekly',
  cats: [],
  qty: { atta: 8 },
  qtyUnit: { atta: 'kg' },
  qtySet: false
};

function saveState() {
  localStorage.setItem('ASH_KIOSK_SESSION', JSON.stringify(S));
}

function saveProfile() {
  var profiles = JSON.parse(localStorage.getItem('ASH_USER_PROFILES') || '{}');
  profiles[S.phone] = { name: S.name, email: S.email };
  localStorage.setItem('ASH_USER_PROFILES', JSON.stringify(profiles));
}
