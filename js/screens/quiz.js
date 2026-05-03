// =============================================
// QUIZ SCREENS (Q1-Q6)
// =============================================
function toggle(el, key, val) {
  el.classList.toggle('sel');
  if (!Array.isArray(S[key])) S[key] = [];
  if (el.classList.contains('sel')) {
    if (S[key].indexOf(val) < 0) S[key].push(val);
  } else {
    S[key] = S[key].filter(function(v) { return v !== val; });
  }
}

function pick(el, key, val) {
  var grid = el.parentElement;
  grid.querySelectorAll('.mcq').forEach(function(c) { c.classList.remove('sel'); });
  el.classList.add('sel');
  S[key] = val;
}

function next(key, dest) {
  var v = S[key];
  var ok = Array.isArray(v) ? v.length > 0 : v !== '';
  if (!ok) { toast('Please make a selection'); return; }
  show(dest);
}
