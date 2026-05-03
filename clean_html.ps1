$lines = [System.IO.File]::ReadAllLines('c:\Users\adity\Downloads\AashirvaadKiosk_vFinal\index.html')

# Array to store new lines
$newLines = @()

for ($i = 0; $i -lt $lines.Length; $i++) {
    $lineNum = $i + 1
    # Skip "Add to Your Pack" and "Also Add" sections (lines 397-409)
    if ($lineNum -ge 397 -and $lineNum -le 409) { continue }
    # Skip non-Atta tiles in "Explore More" (lines 416-420)
    if ($lineNum -ge 416 -and $lineNum -le 420) { continue }
    
    $newLines += $lines[$i]
}

[System.IO.File]::WriteAllLines('c:\Users\adity\Downloads\AashirvaadKiosk_vFinal\index.html', $newLines, [System.Text.Encoding]::UTF8)
Write-Output "HTML successfully cleaned up."
