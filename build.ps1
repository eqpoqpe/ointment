$packagesPath = Join-Path $PSScriptRoot "packages"

if (Test-Path $packagesPath) {
    Get-ChildItem -Path $packagesPath -Directory | ForEach-Object {
        $packageDir = $_.FullName
        Write-Host "Building in $packageDir..."
        Push-Location $packageDir
        try {
            pnpm build
        } catch {
            Write-Host "Failed to build in $packageDir" -ForegroundColor Red
        } finally {
            Pop-Location
        }
    }
} else {
    Write-Host "Error: packages directory not found!" -ForegroundColor Red
}