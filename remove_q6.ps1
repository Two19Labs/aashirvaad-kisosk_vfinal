$content = [System.IO.File]::ReadAllText('c:\Users\adity\Downloads\AashirvaadKiosk_vFinal\index.html')

# 1. Update Q5 button
$content = $content.Replace('onclick="next(''q5'',''s-q6'')" data-i18n="quiz_next">Next &rarr;</button>', 'onclick="genRec()" data-i18n="quiz_gen_plan">See My Plan &#10022;</button>')

# 2. Update Retake button
$content = $content.Replace('onclick="show(''s-q6'')" data-i18n="rec_retake">&larr; Retake</button>', 'onclick="show(''s-q5'')" data-i18n="rec_retake">&larr; Retake</button>')

# 3. Remove Q6 block
# Regex to match from <!-- ===== Q6 ===== --> to just before <!-- ===== PROCESSING ===== -->
$content = $content -replace '(?s)<!-- ===== Q6 ===== -->.*?</div>\s*<!-- ===== PROCESSING ===== -->', '<!-- ===== PROCESSING ===== -->'

# 4. Update Step text
$content = $content.Replace('Step 1 of 6', 'Step 1 of 5')
$content = $content.Replace('Step 2 of 6', 'Step 2 of 5')
$content = $content.Replace('Step 3 of 6', 'Step 3 of 5')
$content = $content.Replace('Step 4 of 6', 'Step 4 of 5')
$content = $content.Replace('Step 5 of 6', 'Step 5 of 5')

[System.IO.File]::WriteAllText('c:\Users\adity\Downloads\AashirvaadKiosk_vFinal\index.html', $content, [System.Text.Encoding]::UTF8)
Write-Output "HTML successfully updated for Q6 removal."
