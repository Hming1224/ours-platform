# Ours — 台灣公共社群平台（設計專案）

外部委託專案。為一個基金會型組織設計「屬於台灣的公共新聞社群平台」雛形，發起人為新聞背景、與公視/華視/中央社/央廣等公共媒體有連結。第一版聚焦 **Facts（新聞事實）+ Opinions（公共討論）**，Actions（公民行動）留待後續。

本階段產出：Wireframe → Mockup → 可點擊 Prototype（手機 App 優先）。

## 資料夾

- `index.html` — **網站總入口（portal）**。列出所有對外提案/進度，每個提案一張卡片連到對應資料夾。新提案就在這裡新增一張卡。
- `wireframes/` — 議題頁 wireframe 提案。`議題頁-提案配置器.html`（互動配置器，元件可即時切換）、`議題頁-提案.html`（靜態全覽）。
- `簡報/` — 對案主/金主的說明簡報。
  - `Ours-AI策略簡報.html` — **可投影的 HTML 簡報（16 頁，含每頁講稿）**。瀏覽器開啟，← → 翻頁、按 `N` 顯示講稿、Cmd/Ctrl+P 可列印成含講稿的 PDF。每個功能走「選項優缺點 → 為什麼選最終版」。
  - `AI策略簡報-大綱.md` — 簡報的純文字大綱（HTML 的內容來源）。
- `競品截圖/` — 實際擷取的競品畫面（Ground News / AllSides / Particle / Cofacts / Polis）。

## 網站與部署（控管慣例）

- 本專案是**獨立 git repo**：`github.com/Hming1224/ours-platform`（自己的 `main`，不在母 LifeOS repo 內）。
- **一個專案 = 一個 repo = 一個 Vercel 專案**（同名 `ours-platform`），對外網址固定一個。
- **每次新提案/進度的做法**：① 在根目錄開一個新資料夾放該提案 ② 在 `index.html` 新增一張卡片連過去 ③ commit + push。**不要**為單一提案另開新的 Vercel 專案（否則網站會越長越多、難管理）。
- Vercel 接 git 自動部署後，push 到 `main` 即自動更新；舊版本由 Vercel deployment 歷史自動保留。

## 相關文件（在母 repo）

- 完整 AI 應用策略 + 決策樹（含保留選項與理由）：`100_Todo/plans/2026-06-17-Ours-AI應用策略.md`
- 原始專案背景文件：`~/Downloads/Ours_台灣公共社群平台_專案背景.md`

## 核心理念（AI 憲法）

1. AI 是助手，不是裁判 2. 先共識、後分歧 3. 橋接式排序，不靠按讚數 4. 誠實但不審查

## 進度

- ✅ 2026-06-17：6 大 AI 應用策略討論完成，產出決策樹計劃書 + 簡報大綱；補上競品借鏡（Ground News / Particle / AllSides / Polis / Community Notes / NewsGuard / Cofacts）與迷音 Miin 反面對照；新增「雲端 AI 限制下技術可行性盤點」「單篇付費 × AI 摘要共存設計」；擷取 5 張競品實際畫面存於 `競品截圖/`。
- ✅ 2026-06-18：**升級 v2**。①加「社群平台骨架」（人為主、AI 配角）＋第 5 條憲法「潛入式 AI」（AI 輕量潛入資訊卡與討論串，必要時由 @Ours 介入）②六大功能選項改成發散的三範式（誰主導：AI／你自己／群眾）③新聞整理補搜尋發現④納入團隊競品表（Reddit / Vibe Reader / Google 新聞 / PTT / 朝日 / 天下）細緻分析。簡報擴成 16 頁、本地驗證全頁不爆版。第 4 條憲法上方仍是 4 條，v2 已擴為 5 條（見計劃書）。
- ✅ 2026-06-23：完成**議題頁 wireframe 提案**（探索頁＋議題詳情頁，含議題卡/觀點光譜/共識/opinion/新聞來源可信度/時間序等元件變體），做成可即時切換的**互動配置器**＋靜態全覽。專案改為**獨立 repo `ours-platform`**並建立根目錄 portal，部署 Vercel。
- ⬜ 下一步：依選定組合合成「定版 wireframe」→ 進 Figma 做 mockup；補首頁、議題討論頁主畫面；補團隊競品實拍（Reddit CMV、Vibe Reader、Polis 散佈圖）。
