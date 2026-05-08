<#
.SYNOPSIS
    掃描 tech/ 和 all-member/ 下的 HTML，重建 index.html
#>

$RepoRoot = $PSScriptRoot
$Sections = @("tech", "all-member")

$SectionLabels = @{
    "tech"       = "技術人員"
    "all-member" = "全員"
}

# 收集各資料夾的報告
$Groups = @{}
foreach ($Section in $Sections) {
    $Dir = Join-Path $RepoRoot $Section
    if (Test-Path $Dir) {
        $Files = Get-ChildItem $Dir -Filter "*.html" | Sort-Object Name -Descending
        $Groups[$Section] = $Files
    } else {
        $Groups[$Section] = @()
    }
}

# 取得 git log 資訊（加上最後 commit 日期）
function Get-GitDate($RelPath) {
    $Result = git log -1 --format="%ai" -- $RelPath 2>&1
    if ($Result -match "(\d{4}-\d{2}-\d{2})") {
        return $Matches[1]
    }
    return ""
}

# 建立 HTML
$Cards = ""
foreach ($Section in $Sections) {
    $Label = $SectionLabels[$Section]
    $Files = $Groups[$Section]
    if ($Files.Count -eq 0) { continue }

    $Items = ""
    foreach ($F in $Files) {
        $RelPath = "$Section/$($F.Name)"
        $GitDate = Get-GitDate $RelPath
        $DateBadge = if ($GitDate) { "<span class='date'>$GitDate</span>" } else { "" }
        $SlugTitle = $F.BaseName -replace "-", " " -replace "_", " "
        $Items += @"
        <li>
          <a href="$RelPath">$SlugTitle</a>
          $DateBadge
        </li>
"@
    }

    $Cards += @"
    <section>
      <h2><span class="badge">$Label</span> $Section</h2>
      <ul>
$Items
      </ul>
    </section>
"@
}

$Now = Get-Date -Format "yyyy-MM-dd HH:mm"

$Html = @"
<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>技術報告索引</title>
<style>
  :root {
    --bg: #0f1117;
    --surface: #1a1d27;
    --border: #2a2d3e;
    --accent: #7c6af5;
    --accent2: #34d399;
    --text: #e2e8f0;
    --muted: #64748b;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, "Segoe UI", sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    padding: 2rem 1rem;
  }
  header {
    max-width: 760px;
    margin: 0 auto 2.5rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1.5rem;
  }
  header h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem; }
  header p { color: var(--muted); font-size: 0.85rem; }
  section {
    max-width: 760px;
    margin: 0 auto 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .badge {
    background: var(--accent);
    color: #fff;
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
  }
  ul { list-style: none; }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border);
  }
  li:last-child { border-bottom: none; }
  a {
    color: var(--text);
    text-decoration: none;
    font-size: 0.95rem;
    flex: 1;
  }
  a:hover { color: var(--accent); }
  .date {
    color: var(--muted);
    font-size: 0.78rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    margin-left: 1rem;
  }
  footer {
    max-width: 760px;
    margin: 2rem auto 0;
    color: var(--muted);
    font-size: 0.75rem;
    text-align: right;
  }
</style>
</head>
<body>
<header>
  <h1>技術報告索引</h1>
  <p>最後更新：$Now</p>
</header>
$Cards
<footer>由 build-index.ps1 自動產生</footer>
</body>
</html>
"@

$IndexPath = Join-Path $RepoRoot "index.html"
$Html | Out-File -FilePath $IndexPath -Encoding UTF8 -NoNewline
Write-Host "index.html 已更新（$Now）" -ForegroundColor Green
