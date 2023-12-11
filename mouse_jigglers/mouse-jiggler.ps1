Add-Type -AssemblyName System.Windows.Forms

$cursorX = [System.Windows.Forms.Cursor]::Position.X
$cursorY = [System.Windows.Forms.Cursor]::Position.Y
clear
while ($true) {
    clear
    $cursorX++
    [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($cursorX, $cursorY)
    Write-Host '(─‿‿─)'
    
    
    Start-Sleep -Seconds 1
    clear
    write-host '(¬‿‿¬)'
    $cursorX--
    [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($cursorX, $cursorY)
    
    Start-Sleep -Seconds 1

    
}