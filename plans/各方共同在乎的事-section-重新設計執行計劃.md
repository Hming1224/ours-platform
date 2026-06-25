# 「各方共同在乎的事」Section 重新設計執行計劃

## 範圍

重設議題頁 AI 摘要卡中的「各方共同在乎的事」section。

- 目標檔案：`mockups/index.html`
- 目前位置：AI SUMMARY 區塊內，註解 `<!-- shared concerns -->` 下方
- 影響範圍：僅調整 AI 摘要卡內的 shared concerns 小節，不改動上方標題、摘要本文、展開 facts、tab bar 與下方內容

## 執行目標

把目前 6 個 tag chips 的呈現，改成一個更有資訊層次的「跨立場共同關切」模組。

保留原本六個內容：

- 供電穩定
- 電價負擔
- 2050 淨零
- 核安風險
- 核廢處置
- 資訊透明

改版後要讓使用者一眼看懂：各方不是完全沒有交集，而是都在乎同幾件事，只是排序與取捨不同。

## 版型結構

### 1. 外層容器

新增一個獨立容器 `.shared-concerns`。

位置：

- 放在 AI 摘要文字下方
- 放在展開 facts 區塊上方

視覺定位：

- 是 AI 摘要卡內部的小型資訊模組
- 不做成另一張大型卡片
- 使用淡米色背景、細邊框與 16px radius

### 2. Header 區

Header 使用左右排列。

左側文字：

```text
／ 各方共同在乎的事
```

右側 badge：

```text
跨立場共通
```

目的：

- 明確標示這不是「立場分類」
- 讓使用者知道這是在講不同立場都會在意的共同問題

### 3. 主句區

在 header 下方加入一句核心問題。

文案：

```text
各方都在問：如何在穩定供電、合理電價與可承擔風險之間取捨？
```

樣式：

- 使用 `Noto Serif TC`
- 字重 700
- 尺寸約 16px
- 行高約 1.5
- 作為此 section 的核心訊息

### 4. 內容區

將原本 6 個 chips 分成兩組資訊卡。

左卡：

```text
民生與產業
供電穩定
電價負擔
2050 淨零
```

右卡：

```text
安全與治理
核安風險
核廢處置
資訊透明
```

設計目的：

- 讓共同關切不只是散落標籤
- 讓使用者能理解這些關切大致分成「生活/經濟」與「安全/制度」兩種面向
- 保持手機版可快速掃讀

### 5. 底部 Takeaway

在兩欄資訊卡下方加入一條 takeaway。

文案：

```text
分歧不在於是否重視安全或供電，而在於哪個風險該優先處理。
```

視覺：

- 使用淡黃色提示條
- 左側可放一個小型 `!` 或 sparkle 標記
- 語氣要像整理重點，不像警告

## 樣式規格

### 外層 `.shared-concerns`

```css
margin-bottom: 16px;
padding: 14px;
border: 1px solid #E8DFCF;
border-radius: 16px;
background: linear-gradient(
  135deg,
  rgba(251, 246, 235, 0.95) 0%,
  rgba(255, 253, 248, 0.96) 58%,
  rgba(244, 250, 248, 0.88) 100%
);
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
```

### Header

- eyebrow 使用 `IBM Plex Mono`
- font-size：10px
- letter-spacing：1.5px
- 顏色：`#A39C8E`
- badge 使用綠灰系，避免與紅色立場色混淆

### 兩欄資訊卡

```css
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 9px;
```

子卡：

```css
padding: 11px;
border: 1px solid rgba(222, 213, 195, 0.9);
border-radius: 12px;
background: rgba(255, 255, 255, 0.58);
```

### 色彩方向

- 民生與產業：金棕色點綴
- 安全與治理：綠灰色點綴
- 不使用大面積紅色，避免看起來像警示或支持/反對立場

## 建議 HTML 結構

```html
<div class="shared-concerns">
  <div class="shared-concerns__head">
    <div class="shared-concerns__eyebrow">／ 各方共同在乎的事</div>
    <div class="shared-concerns__badge">跨立場共通</div>
  </div>

  <p class="shared-concerns__question">
    各方都在問：如何在穩定供電、合理電價與可承擔風險之間取捨？
  </p>

  <div class="shared-concerns__grid">
    <div class="concern-cluster">
      <div class="concern-cluster__label">
        <span class="concern-cluster__dot"></span>
        民生與產業
      </div>
      <div class="concern-item">
        <span>供電穩定</span>
        <span class="concern-item__rank">01</span>
      </div>
      <div class="concern-item">
        <span>電價負擔</span>
        <span class="concern-item__rank">02</span>
      </div>
      <div class="concern-item">
        <span>2050 淨零</span>
        <span class="concern-item__rank">03</span>
      </div>
    </div>

    <div class="concern-cluster">
      <div class="concern-cluster__label">
        <span class="concern-cluster__dot concern-cluster__dot--green"></span>
        安全與治理
      </div>
      <div class="concern-item">
        <span>核安風險</span>
        <span class="concern-item__rank">04</span>
      </div>
      <div class="concern-item">
        <span>核廢處置</span>
        <span class="concern-item__rank">05</span>
      </div>
      <div class="concern-item">
        <span>資訊透明</span>
        <span class="concern-item__rank">06</span>
      </div>
    </div>
  </div>

  <div class="shared-concerns__takeaway">
    <div class="shared-concerns__mark">!</div>
    <p class="shared-concerns__copy">
      分歧不在於是否重視安全或供電，而在於哪個風險該優先處理。
    </p>
  </div>
</div>
```

## 實作步驟

1. 在 `mockups/index.html` 的 `<style>` 區新增 `.shared-concerns` 相關 CSS class。
2. 找到 `<!-- shared concerns -->` 區塊。
3. 移除目前 6 個 pill chip 的 `flex-wrap` layout。
4. 替換成新的 HTML 結構。
5. 開啟 `mockups/index.html` 檢查手機寬度。
6. 確認不影響下方「新聞事實摘要 FACTS」展開區。
7. 確認不影響 sticky tab bar 行為。

## 驗收標準

- 在 390px 手機寬度下，文字不溢出、不重疊。
- 兩欄資訊卡可以清楚掃讀。
- Section 高度可以比原本 chips 稍高，但不能搶走 AI 摘要卡的主視覺。
- 使用者能在 3 秒內理解：這裡是在講「共同關切」，不是「各方立場」。
- 視覺風格仍符合目前 Ours mockup：溫和、新聞感、低裝飾、資訊優先。

## 後續延伸

第一版先不要做互動，避免摘要區過重。

若未來要加互動，可以讓每個共同關切點可點擊展開：

- 支持方怎麼說
- 反對方怎麼說
- 中立方怎麼說

這個延伸適合放到下一版，或移到「觀點光譜」tab 內處理。
