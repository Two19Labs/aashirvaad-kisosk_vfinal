// =============================================
// RECOMMENDATION ENGINE & DATA (Atta only)
// =============================================
var REC = {
  diabetes: {
    kids:    { a:'Low GI / Multigrain Atta', l:'Stable sugars & growth support'},
    adults:  { a:'Low GI Atta', l:'Blood sugar control & metabolism'},
    elderly: { a:'Low GI Atta (Fine)', l:'Slow release energy for geriatric care'}
  },
  heart: {
    kids:    { a:'Multigrain Atta', l:'Balanced nutrition for healthy development'},
    adults:  { a:'Multigrain / Khapli Atta', l:'Cholesterol control & heart health'},
    elderly: { a:'Khapli Atta (Soft)', l:'Low sodium diet support'}
  },
  weight: {
    kids:    { a:'Oats + Multigrain Atta', l:'High fibre, lower calorie density'},
    adults:  { a:'Oats Atta', l:'Metabolism boost & satiety'},
    elderly: { a:'Oats Atta (Light)', l:'Light on digestion, weight control'}
  },
  general: {
    kids:    { a:'Multigrain Atta', l:'High protein & vitamin enriched'},
    adults:  { a:'MP Sharbati Premium', l:'Wholesome daily nourishment'},
    elderly: { a:'MP Sharbati (Fine)', l:'Soft textures, full nutrition'}
  },
  kids_nut: {
    kids:    { a:'Multigrain Atta', l:'Growth focus, high protein'},
    adults:  { a:'Protein+ Multigrain', l:'Strength & stamina'},
    elderly: { a:'Protein Atta (Fine)', l:'Muscle mass maintenance'}
  },
  digestion: {
    kids:    { a:'Khapli Atta (Ancient)', l:'Gentle on young stomachs'},
    adults:  { a:'Khapli Atta', l:'Digestive health & ancient grains'},
    elderly: { a:'Khapli / Jowar Atta', l:'Easy to digest, high fibre'}
  }
};


var IMGS = {
  'Gluten Free Flour': 'glute_free_atta_1776891609711.png',
  'Sugar Release Control': 'atta_specialties_1776891628687.png',
  'Select Atta': 'atta_specialties_1776891628687.png',
  'Multigrains Atta': 'aashirvaad_atta_variants_1776891264442.png',
  'MP Sharbati Atta': 'sharbati_atta_1776891344579.png',
  'Khapli Atta': 'aashirvaad_atta_variants_1776891264442.png',
  'Ragi Atta': 'ragi_atta_1776891364327.png'
};

// Qty data per family size/delivery cycle (atta only)
var QTY_NUM = {
  small:   { Weekly:{a:2,au:'kg'}, 'Bi-weekly':{a:4,au:'kg'}, Monthly:{a:9,au:'kg'}, Quarterly:{a:27,au:'kg'} },
  medium:  { Weekly:{a:4.5,au:'kg'}, 'Bi-weekly':{a:9,au:'kg'}, Monthly:{a:19,au:'kg'}, Quarterly:{a:57,au:'kg'} },
  large:   { Weekly:{a:7.5,au:'kg'}, 'Bi-weekly':{a:15,au:'kg'}, Monthly:{a:32,au:'kg'}, Quarterly:{a:95,au:'kg'} }
};

function getFamilyType() {
  if (S.q1.indexOf('kids') >= 0) return 'kids';
  if (S.q1.indexOf('elderly') >= 0) return 'elderly';
  return 'adults';
}

function genRec() {
  if (!S.q5) S.q5 = 'Fine'; // default granularity
  saveState();
  show('s-processing');
  setTimeout(function() { buildRec(); show('s-rec'); }, 2500);
}

function buildRec() {
  var ft = getFamilyType();
  var h = S.q4 || 'general'; // S.q4 = health goal (removed from quiz, defaults to general)
  var hGroup = REC[h] || REC['general'];
  var r = hGroup[ft] || hGroup['adults'];

  S.rec = {
    atta: r.a,
    attaImg: IMGS[r.a] || 'aashirvaad_atta_1776890836335.png'
  };

  var hLabels = {
    diabetes: T('q4_diabetes'), heart: T('q4_heart'), weight: T('q4_weight'),
    general: T('q4_general'), kids_nut: T('q4_protein'), digestion: T('q4_digestion')
  };
  var ftLabels = { kids: T('q1_kids'), adults: T('q1_adults'), elderly: T('q1_elderly') };
  var sizeLabels = { small: T('q2_small'), medium: T('q2_medium'), large: T('q2_large') };

  document.getElementById('r-name').textContent = S.name + ' ' + (S.lang === 'hi' ? '\u0915\u093e \u0938\u094d\u092e\u093e\u0930\u094d\u091f-\u092a\u0948\u0915' : '\u2019s Smart-Pack');
  document.getElementById('r-tags').textContent = ftLabels[ft] + ' \u00b7 ' + (hLabels[h] || (S.lang === 'hi' ? '\u092a\u094b\u0937\u0923 \u092f\u094b\u091c\u0928\u093e' : 'Nutrition Plan'));
  document.getElementById('r-atta').textContent = S.rec.atta;

  document.getElementById('img-atta').src = S.rec.attaImg;

  document.getElementById('btn-atta').onclick = function() { previewImage(S.rec.attaImg, S.rec.atta); };

  var whyPts = [
    T('rec_why_health') + ' ' + (hLabels[h] || (S.lang === 'hi' ? '\u0906\u092a\u0915\u093e \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f' : 'your health')),
    r.l,
    T('rec_why_family') + ' ' + (sizeLabels[S.q2] || (S.lang === 'hi' ? '\u0906\u092a\u0915\u093e \u092a\u0930\u093f\u0935\u093e\u0930' : 'your family')),
    T('rec_why_style')
  ];
  document.getElementById('r-why').innerHTML = whyPts.map(function(p) {
    return '<div class="why-pt"><div class="why-dot"></div><div class="why-txt">' + p + '</div></div>';
  }).join('');

  updateQty();
  updateCartBadge();


}

// =============================================
// QUANTITIES (Atta only)
// =============================================
function updateQty() {
  var sz = S.q2 || 'medium';
  var cy = S.cycle || 'Weekly';
  var q = (QTY_NUM[sz] && QTY_NUM[sz][cy]) ? QTY_NUM[sz][cy] : QTY_NUM['medium']['Weekly'];
  if (!S.qtySet) {
    S.qty = { atta: q.a };
    S.qtyUnit = { atta: q.au };
  }
  renderQty();
  var grindLbl = T('rec_cust_' + S.grind.toLowerCase());
  var cycleLbl = T('rec_cust_' + S.cycle.toLowerCase().replace('-', ''));
  document.getElementById('r-grind').textContent = grindLbl + ' ' + (S.lang === 'hi' ? '\u092a\u093f\u0938\u093e\u0908' : 'grind') + ' \u00b7 ' + cycleLbl + ' ' + (S.lang === 'hi' ? '\u0906\u092a\u0942\u0930\u094d\u0924\u093f' : 'supply');
}

function renderQty() {
  document.getElementById('qv-atta').textContent = S.qty.atta;
  document.getElementById('qu-atta').textContent = S.qtyUnit.atta;
}

function adjQty(item, delta) {
  S.qtySet = true;
  var conf = { atta: { min: 1, st: 1 } };
  var c = conf[item];
  if (!c) return;
  S.qty[item] = Math.max(c.min, Math.round((S.qty[item] + delta * c.st) * 10) / 10);
  renderQty();
}

function setTog(type, el, val) {
  var grpId = type === 'grind' ? 'tg-grind' : 'tg-cycle';
  document.getElementById(grpId).querySelectorAll('.tog').forEach(function(t) { t.classList.remove('on'); });
  el.classList.add('on');
  S[type] = val;
  if (type === 'cycle') S.qtySet = false;
  updateQty();
}

function updateCartBadge() {
  var total = S.cats.length + 1;
  document.querySelectorAll('.cart-count').forEach(function(b) {
    b.textContent = total;
    if (total > 0) b.classList.add('has-items');
  });
}


function toggleCat(el, name) {
  el.classList.toggle('on');
  if (el.classList.contains('on')) {
    if (S.cats.indexOf(name) < 0) S.cats.push(name);
    toast(name + ' ' + T('toast_added'));
  } else {
    S.cats = S.cats.filter(function(a) { return a !== name; });
  }
  updateCartBadge();
  saveState();
}
