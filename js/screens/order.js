// =============================================
// ORDER & SUCCESS SCREENS
// =============================================
function getImgByName(name) {
  var map = {
    'Gluten Free Flour': 'glute_free_atta_1776891609711.png',
    'Sugar Release Control': 'atta_specialties_1776891628687.png',
    'Select Atta': 'atta_specialties_1776891628687.png',
    'Multigrains Atta': 'aashirvaad_atta_variants_1776891264442.png',
    'MP Sharbati Atta': 'sharbati_atta_1776891344579.png',
    'Khapli Atta': 'aashirvaad_atta_variants_1776891264442.png',
    'Ragi Atta': 'ragi_atta_1776891364327.png',
    'Arhar Dal': 'arhar_dal_single_1776891424414.png',
    'Moong Dal': 'aashirvaad_dals_rice_1776891222849.png',
    'Basmati Rice': 'basmati_rice_single_1776891404996.png',
    'Flaxseeds': 'aashirvaad_seeds_snacks_1776891242682.png',
    'Chia Seeds': 'aashirvaad_seeds_snacks_1776891242682.png',
    'Makhana': 'makhana_single_1776891444858.png',
    'Haldi Powder': 'haldi_powder_single_1776891527740.png',
    'Jeera Seeds': 'aashirvaad_pantry_items_1776891283451.png',
    'Instant Poha': 'aashirvaad_pantry_items_1776891283451.png'
  };
  return map[name] || 'aashirvaad_atta_1776890836335.png';
}

function goOrder() {
  var imgStyle = 'width:42px;height:42px;vertical-align:middle;margin-right:12px;border-radius:50%;object-fit:contain;mix-blend-mode:multiply;border:2px solid var(--g2);background:#fff;box-shadow:0 3px 8px rgba(0,0,0,0.2);';

  document.getElementById('o-main').innerHTML =
    '<div class="o-item"><span class="o-nm"><img src="' + S.rec.attaImg + '" style="' + imgStyle + '">' + S.rec.atta + '</span><span class="o-tag">' + S.qty.atta + ' ' + S.qtyUnit.atta + '</span></div>';

  var extras = S.cats;
  if (extras.length > 0 || S.customAtta) {
    document.getElementById('o-extras-card').style.display = 'block';
    var extrasHtml = extras.map(function(a) {
      return '<div class="o-item"><span class="o-nm"><img src="' + getImgByName(a) + '" style="' + imgStyle + '">' + a + '</span><span class="o-tag">' + (S.lang === 'hi' ? '1 \u0907\u0915\u093e\u0908' : '1 unit') + '</span></div>';
    }).join('');
    
    if (S.customAtta) {
      extrasHtml += '<div class="o-item"><span class="o-nm"><img src="aashirvaad_atta_1776890836335.png" style="' + imgStyle + '">Custom Atta (' + S.customAtta.total + ' kg)</span><span class="o-tag">1 unit</span></div>';
      extrasHtml += '<div style="font-size:12px; color:var(--brM); margin-left:54px; margin-top:-8px; margin-bottom:12px;">' + S.customAtta.desc + '</div>';
    }
    
    document.getElementById('o-extras').innerHTML = extrasHtml;
  } else {
    document.getElementById('o-extras-card').style.display = 'none';
  }
  document.getElementById('o-grind').textContent = T('rec_cust_' + S.grind.toLowerCase());
  document.getElementById('o-cycle').textContent = T('rec_cust_' + S.cycle.toLowerCase().replace('-', ''));
  show('s-order');
}

function goPayOnline() {
  var ref = 'ASH-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById('ref-code').textContent = ref;
  document.getElementById('suc-pay-mode').style.display = 'block';
  document.getElementById('suc-pay-mode').textContent = (S.lang === 'hi' ? '\u0932\u093f\u0902\u0915 +91 ' : 'Link sent to +91 ') + S.phone + (S.lang === 'hi' ? ' \u092a\u0930 \u092d\u0947\u091c\u093e \u0917\u092f\u093e' : '');
  document.getElementById('suc-icon').textContent = '\uD83D\uDCB3';
  document.getElementById('suc-headline').textContent = T('suc_title');
  document.getElementById('suc-desc').innerHTML = S.lang === 'hi' ? '\u0905\u092a\u0928\u0947 \u092b\u094b\u0928 \u092a\u0930 \u092d\u0941\u0917\u0924\u093e\u0928 \u092a\u0942\u0930\u093e \u0915\u0930\u0947\u0902\u0964<br>\u0911\u0930\u094d\u0921\u0930 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u093e\u0909\u0902\u091f\u0930 \u092a\u0930 \u0915\u094b\u0921 \u0926\u093f\u0916\u093e\u090f\u0902\u0964' : 'Complete payment on your phone.<br>Show code at counter to collect order.';
  saveProfile();
  show('s-success');
}

function goSuccess() {
  var ref = 'ASH-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById('ref-code').textContent = ref;
  document.getElementById('suc-icon').textContent = '\u2705';
  document.getElementById('suc-headline').textContent = T('suc_title');
  document.getElementById('suc-desc').innerHTML = T('suc_sub');
  document.getElementById('suc-pay-mode').style.display = 'none';
  saveProfile();
  show('s-success');
}

// =============================================
// RESET
// =============================================
function reset() {
  var currentLang = S.lang;
  S = {
    lang: currentLang, name: '', phone: '', email: '',
    q1: [], q2: '', q3: [], q4: '', q5: '',
    grind: 'Fine', cycle: 'Weekly', cats: [],
    qty: { atta: 8 },
    qtyUnit: { atta: 'kg' },
    qtySet: false,
    customAtta: null
  };
  document.getElementById('i-name').value = '';
  document.getElementById('i-phone').value = '';
  document.getElementById('i-otp').value = '';
  document.getElementById('d-email').value = '';
  document.querySelectorAll('.mcq.sel').forEach(function(c) { c.classList.remove('sel'); });

  document.querySelectorAll('.cat-tile.on').forEach(function(c) { c.classList.remove('on'); });
  document.getElementById('o-extras-card').style.display = 'none';
  show('s-entry');
}

// =============================================
// TOAST
// =============================================
var toastTimer;
function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { t.classList.remove('show'); }, 2400);
}

// =============================================
// IMAGE PREVIEW MODAL
// =============================================
function previewImage(src, name) {
  document.getElementById('v-img').src = src;
  document.getElementById('v-name').innerText = name;
  document.getElementById('v-modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('v-modal').style.display = 'none';
}
