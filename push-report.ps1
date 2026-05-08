<#
.SYNOPSIS
    把 HTML 報告推到 GitHub Pages

.PARAMETER File
    要發布的 HTML 檔案路徑（可拖曳進來）

.PARAMETER Audience
    受眾：tech 或 all-member（預設依檔名自動判斷）

.PARAMETER Message
    Commit 訊息（選填，預設自動產生）

.EXAMPLE
    .\push-report.ps1 .\agentic-coding-showcase.html
    .\push-report.ps1 .\agentic-coding-showcase.html -Audience tech
    .\push-report.ps1 .\my-report.html -Audience all-member -Message "add Q2 review"
#>

param(
    [Parameter(Mandatory)]
    [string]$File,

    [ValidateSet("tech", "all-member", "")]
    [string]$Audience = "",

    [string]$Message = ""
)

$ErrorActionPreference = "Stop"
$RepoRoot = $PSScriptRoot

# --- 解析檔案 ---
$SourcePath = Resolve-Path $File
$FileName = [System.IO.Path]::GetFileName($SourcePath)
$SlugName = $FileName -replace '\s+', '-'

# --- 自動判斷受眾 ---
if ($Audience -eq "") {
    if ($FileName -match "all.?member|allmember|全員|全体") {
        $Audience = "all-member"
    } else {
        $Audience = "tech"
    }
    Write-Host "自動判斷受眾：$Audience" -ForegroundColor Cyan
}

# --- 建立目的資料夾 ---
$DestDir = Join-Path $RepoRoot $Audience
if (-not (Test-Path $DestDir)) {
    New-Item -ItemType Directory -Path $DestDir | Out-Null
    Write-Host "建立資料夾：$Audience/" -ForegroundColor Green
}

$DestPath = Join-Path $DestDir $SlugName

# --- 複製檔案 ---
Copy-Item -Path $SourcePath -Destination $DestPath -Force
Write-Host "複製：$SlugName → $Audience/$SlugName" -ForegroundColor Green

# --- 重建 index.html ---
Write-Host "更新 index.html..." -ForegroundColor Cyan
& "$RepoRoot\build-index.ps1"

# --- Git 操作 ---
Push-Location $RepoRoot

try {
    git add "$Audience/$SlugName" index.html

    if ($Message -eq "") {
        $Message = "publish: $Audience/$SlugName"
    }

    git commit -m $Message

    $Remote = git remote 2>&1
    if ($LASTEXITCODE -eq 0 -and $Remote) {
        Write-Host "推送到 GitHub..." -ForegroundColor Cyan
        git push
        Write-Host "完成！" -ForegroundColor Green

        # 顯示 Pages URL（如果有設定）
        $RemoteUrl = git remote get-url origin 2>&1
        if ($RemoteUrl -match "github\.com[:/](.+?)(?:\.git)?$") {
            $RepoPath = $Matches[1]
            $Parts = $RepoPath -split "/"
            if ($Parts.Count -eq 2) {
                $User = $Parts[0]
                $Repo = $Parts[1]
                Write-Host "網頁預覽：https://$User.github.io/$Repo/$Audience/$SlugName" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "尚未設定 remote，已 commit 但未 push" -ForegroundColor Yellow
        Write-Host "執行：git remote add origin <你的 repo URL>" -ForegroundColor Yellow
    }
} finally {
    Pop-Location
}
