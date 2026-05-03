var blendCategories = {
  "Protein Atta": ["Besan (Chickpea flour)", "Moong Dal Flour", "Soya Flour", "Lentils (Masoor)", "Chickpeas", "Rajma", "Green Peas", "Quinoa", "Oats", "Foxtail Millet", "Proso Millet", "Hemp Seeds", "Pumpkin Seeds"],
  "Iron Atta": ["Amaranth (Rajgira)", "Bajra Flour", "Sesame Seeds (Til)", "Pumpkin Seeds", "Spinach Powder", "Beetroot Powder", "Bajra", "Lentils", "Chickpeas"],
  "Low GI Atta": ["Bajra Flour", "Barley (Jau)", "Oats Flour", "Chia Seeds", "Flaxseed Powder", "Moong Dal Flour", "Barley", "Bajra", "Chickpeas"],
  "Calcium Atta": ["Ragi Flour", "Amaranth (Rajgira)", "Sesame Seeds (Til)", "Chia Seeds", "Chickpeas", "Ragi", "Amaranth", "Spinach"],
  "Vitamin Atta": ["Spinach Powder", "Beetroot Powder", "Moringa Powder"],
  "High Fibre": ["Bajra Flour", "Ragi Flour", "Amaranth (Rajgira)", "Oats Flour", "Chickpeas", "Rajma", "Black gram", "Bajra", "Oats", "Jowar", "Kodo Millet"],
  "Strength+ (Zn Mg K Blend)": ["Bajra Flour", "Ragi Flour", "Pumpkin Seeds", "Sunflower Seeds", "Sesame Seeds", "Flaxseed", "Chia Seeds", "Spinach", "Bajra", "Lentils", "Kidney Beans"],
  "Multigrain": ["Bajra Flour", "Ragi Flour", "Amaranth (Rajgira)", "Oats Flour", "Barley (Jau)", "Jowar"],
  "Multi Millet": ["Bajra Flour", "Ragi Flour", "Foxtail Millet", "Proso Millet", "Little Millet", "Kodo Millet"],
  "Low Calorie": ["Oats Flour", "Barley (Jau)", "Flaxseed Powder", "Chia Seeds", "Spinach Powder", "Beetroot Powder", "Carrot Powder", "Moringa Powder", "Barnyard"],
  "Low Carb": ["Flaxseed Powder", "Chia Seeds", "Pumpkin Seeds", "Sunflower Seeds"],
  "Gluten Free": ["Bajra Flour", "Ragi Flour", "Amaranth (Rajgira)", "Chia Seeds", "Chickpea flour", "Flaxseed", "Sesame Seeds", "Pumpkin Seeds", "Sunflower Seeds", "Spinach Powder", "Beetroot Powder", "Moringa Powder"],
  "Keto": ["Flaxseed Powder", "Chia Seeds", "Pumpkin Seeds", "Sunflower Seeds"],
  "Vegetable Flours": ["Spinach Powder", "Beetroot Powder", "Carrot Powder", "Moringa Powder", "Methi Powder"],
  "Low Cholesterol": ["Oats", "Barley", "Soya"]
};

var blendOptions = [
  "Amaranth", "Amaranth (Rajgira)", "Bajra", "Bajra Flour", "Barley", "Barley (Jau)",
  "Barnyard", "Beetroot Powder", "Besan (Chickpea flour)", "Black gram", "Carrot Powder",
  "Chia Seeds", "Chickpea flour", "Chickpeas", "Flaxseed", "Flaxseed Powder", "Foxtail Millet",
  "Green Peas", "Hemp Seeds", "Jowar", "Kidney Beans", "Kodo Millet", "Lentils",
  "Lentils (Masoor)", "Little Millet", "Methi Powder", "Moong Dal Flour", "Moringa Powder",
  "Oats", "Oats Flour", "Proso Millet", "Pumpkin Seeds", "Quinoa", "Ragi", "Ragi Flour",
  "Rajma", "Sesame Seeds", "Sesame Seeds (Til)", "Soya", "Soya Flour", "Spinach",
  "Spinach Powder", "Sunflower Seeds"
];

// Map elements to colors for chart
var colorPalette = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

var activeCategory = null;
var activeElements = {}; // element -> quantity

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var headerNode = document.querySelector('#s-rec .header');
    if (headerNode) {
      // Step 1 Header
      var header1 = headerNode.cloneNode(true);
      var sub1 = header1.querySelector('.logo-sub');
      if (sub1) sub1.textContent = 'Make Your Own Mix';
      var customScreen1 = document.getElementById('s-custom-atta-1');
      var placeholder1 = document.getElementById('custom-atta-1-header-placeholder');
      if (placeholder1 && customScreen1) customScreen1.replaceChild(header1, placeholder1);

      // Step 2 Header
      var header2 = headerNode.cloneNode(true);
      var sub2 = header2.querySelector('.logo-sub');
      if (sub2) sub2.textContent = 'Make Your Own Mix';
      var customScreen2 = document.getElementById('s-custom-atta-2');
      var placeholder2 = document.getElementById('custom-atta-2-header-placeholder');
      if (placeholder2 && customScreen2) customScreen2.replaceChild(header2, placeholder2);
    }
    
    renderCategories();
    renderElements();
  }, 500);
});

function renderCategories() {
  var container = document.getElementById('cat-container');
  var html = '';
  for(var cat in blendCategories) {
    html += '<button class="cat-btn" onclick="toggleCategory(\'' + cat + '\')" id="cat-btn-' + cat.replace(/\s+/g, '-') + '">' + cat + '</button>';
  }
  if (container) container.innerHTML = html;
}

function renderElements() {
  var container = document.getElementById('elements-container');
  var html = '';
  for(var i=0; i<blendOptions.length; i++) {
    var el = blendOptions[i];
    html += '<button class="pill-btn" onclick="toggleElement(\'' + el + '\')" id="el-btn-' + el.replace(/[^a-zA-Z0-9]/g, '-') + '">' + el + '</button>';
  }
  if (container) container.innerHTML = html;
}

function toggleCategory(cat) {
  var btns = document.querySelectorAll('.cat-btn');
  for(var i=0; i<btns.length; i++) { btns[i].classList.remove('active'); }
  
  if (activeCategory === cat) {
    activeCategory = null;
  } else {
    activeCategory = cat;
    var btn = document.getElementById('cat-btn-' + cat.replace(/\s+/g, '-'));
    if (btn) btn.classList.add('active');
  }
  
  activeElements = {};
  var elBtns = document.querySelectorAll('.pill-btn');
  for(var i=0; i<elBtns.length; i++) { elBtns[i].classList.remove('active'); }
  
  if (activeCategory) {
    var elements = blendCategories[cat];
    for(var j=0; j<elements.length; j++) {
      var el = elements[j];
      activeElements[el] = 0.5; // default 0.5kg
      var eBtn = document.getElementById('el-btn-' + el.replace(/[^a-zA-Z0-9]/g, '-'));
      if(eBtn) eBtn.classList.add('active');
    }
  }
}

function toggleElement(el) {
  var btn = document.getElementById('el-btn-' + el.replace(/[^a-zA-Z0-9]/g, '-'));
  if (activeElements[el]) {
    delete activeElements[el];
    if (btn) btn.classList.remove('active');
  } else {
    activeElements[el] = 0.5; // default 0.5kg
    if (btn) btn.classList.add('active');
  }
}

function goToStep2() {
  var elementsList = Object.keys(activeElements);
  if (elementsList.length === 0) {
    toast("Please choose at least one blend ingredient.");
    return;
  }
  
  renderSliders();
  updateCustomAtta();
  show('s-custom-atta-2');
}

function renderSliders() {
  var container = document.getElementById('blend-sliders-container');
  var elementsList = Object.keys(activeElements);
  
  if (elementsList.length === 0) {
    if (container) container.innerHTML = '<div style="font-size:13px; color:var(--g2); font-style:italic;">No ingredients selected. Please choose ingredients above.</div>';
    return;
  }
  
  var html = '';
  for(var i=0; i<elementsList.length; i++) {
    var el = elementsList[i];
    var val = activeElements[el];
    html += '<div style="background:#fff; padding:16px; border-radius:8px; border:1px solid #eae0d5; box-shadow:0 1px 4px rgba(0,0,0,0.02);">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">' +
        '<strong style="color:var(--r3); font-size:14px;">' + el + '</strong>' +
        '<button onclick="removeElement(\'' + el + '\')" style="background:none; border:none; color:var(--brM); cursor:pointer; font-size:20px; font-weight:bold; line-height:1; padding:0 4px;">&times;</button>' +
      '</div>' +
      '<div style="display:flex; align-items:center; gap:16px;">' +
        '<input type="range" class="c-slider" min="0.5" max="10" step="0.5" value="' + val + '" oninput="updateElementQty(\'' + el + '\', this.value)">' +
        '<span style="font-size:15px; width:50px; text-align:right; font-weight:600; color:var(--r3);" id="val-' + el.replace(/[^a-zA-Z0-9]/g, '-') + '">' + val + ' kg</span>' +
      '</div>' +
    '</div>';
  }
  if (container) container.innerHTML = html;
}

function updateElementQty(el, val) {
  activeElements[el] = parseFloat(val);
  var span = document.getElementById('val-' + el.replace(/[^a-zA-Z0-9]/g, '-'));
  if (span) span.textContent = val + ' kg';
  updateCustomAtta();
}

function removeElement(el) {
  toggleElement(el);
  renderSliders();
  updateCustomAtta();
}

function updateCustomAtta() {
  var total = parseFloat(document.getElementById('i-total-kg').value) || 0;
  var baseKg = (total * 0.6).toFixed(1);
  var maxBlendKg = (total * 0.4).toFixed(1);
  
  var blendSpan = document.getElementById('blend-kg');
  if (blendSpan) blendSpan.textContent = maxBlendKg;
  var dTotal = document.getElementById('donut-total');
  if (dTotal) dTotal.innerHTML = total.toFixed(1) + '<span style="font-size:12px;">kg</span>';
  
  var currentBlend = 0;
  for(var key in activeElements) {
    currentBlend += activeElements[key];
  }
  
  var err = document.getElementById('blend-err');
  if (err) {
    if (currentBlend > parseFloat(maxBlendKg)) {
      err.style.display = "block";
      err.textContent = "Total blend amount (" + currentBlend.toFixed(1) + " kg) exceeds 40% limit (" + maxBlendKg + " kg)";
    } else {
      err.style.display = "none";
    }
  }
  var trCurrent = document.getElementById('tracker-current');
  var trTotal = document.getElementById('tracker-total');
  if (trCurrent) trCurrent.textContent = (parseFloat(baseKg) + currentBlend).toFixed(1);
  if (trTotal) trTotal.textContent = total.toFixed(1);

  updateChart(total, parseFloat(baseKg), currentBlend);
}

function updateChart(total, baseKg, currentBlendKg) {
  var chart = document.getElementById('atta-donut');
  var legend = document.getElementById('donut-legend');
  
  if (!chart || !legend) return;
  
  var baseWheatName = document.getElementById('s-base-wheat').value;
  var emptyKg = total - baseKg - currentBlendKg;
  if (emptyKg < 0) emptyKg = 0;
  
  var sections = [];
  sections.push({ name: baseWheatName, val: baseKg, color: '#f3c473' }); 
  
  var cIdx = 0;
  for(var key in activeElements) {
    sections.push({ name: key, val: activeElements[key], color: colorPalette[cIdx % colorPalette.length] });
    cIdx++;
  }
  
  if (emptyKg > 0) {
    sections.push({ name: 'Unfilled / Empty', val: emptyKg, color: '#e0e0e0' });
  }
  
  var gradientStops = [];
  var currentPercent = 0;
  var legendHtml = '';
  
  var totalToUse = (baseKg + currentBlendKg > total) ? (baseKg + currentBlendKg) : total;
  
  for(var i=0; i<sections.length; i++) {
    var pct = (sections[i].val / totalToUse) * 100;
    gradientStops.push(sections[i].color + ' ' + currentPercent + '% ' + (currentPercent + pct) + '%');
    currentPercent += pct;
    
    legendHtml += '<div style="display:flex; align-items:center; gap:4px;">' +
      '<span style="display:inline-block; min-width:12px; height:12px; background:' + sections[i].color + '; border-radius:3px;"></span>' +
      '<span style="line-height:1.2;">' + sections[i].name + ' (' + sections[i].val.toFixed(1) + 'kg)</span>' +
    '</div>';
  }
  
  chart.style.background = 'conic-gradient(' + gradientStops.join(', ') + ')';
  legend.innerHTML = legendHtml;
}

function saveCustomAtta() {
  var total = parseFloat(document.getElementById('i-total-kg').value) || 0;
  var maxBlend = total * 0.4;
  
  var currentBlend = 0;
  var blendItems = [];
  
  for(var key in activeElements) {
    var val = activeElements[key];
    currentBlend += val;
    blendItems.push({ name: key, qty: val });
  }
  
  if (currentBlend > maxBlend) {
    toast("Total blend amount exceeds the 40% limit!");
    return;
  }
  
  var baseWheat = document.getElementById('s-base-wheat').value;
  var desc = "Base: " + baseWheat + " (" + (total*0.6).toFixed(1) + " kg)";
  if (blendItems.length > 0) {
    var bTexts = [];
    for(var j=0; j<blendItems.length; j++) {
      bTexts.push(blendItems[j].name + " (" + blendItems[j].qty + " kg)");
    }
    desc += " | Blend: " + bTexts.join(', ');
  }
  
  toast("Custom Atta added to order!");
  
  S.customAtta = {
    total: total,
    base: baseWheat,
    baseQty: total * 0.6,
    blend: blendItems,
    desc: desc
  };
  
  if (typeof updateCartBadge === "function") {
    updateCartBadge();
  }
  goOrder();
}
