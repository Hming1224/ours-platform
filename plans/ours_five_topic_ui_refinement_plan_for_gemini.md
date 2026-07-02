# Ours 五議題頁 UI 元件與 Layout 優化提案計劃書

## 任務背景

目前 `index.html` 已完成五個議題模式切換，透過 `activeTopicId` 控制 `sports / finance / entertainment / policy / weather` 五種議題，並以同一套 IA 呈現：

1. Top Bar
2. Topic Header
3. 30 秒快速看懂 Summary Card
4. Tabs：話題趨勢 / 議題時間軸 / 新聞來源
5. 話題趨勢內容：分布條、雷達、留言卡
6. Bottom Nav

本次任務不是重做 IA，而是在 **資訊架構不變** 的前提下，讓五個議題在 UI 元件與 layout 上更有層次、更適合社群平台使用情境，同時維持目前的 Ours 設計語言：米白背景、紙感卡片、低飽和主題色、Noto Serif TC 標題、Noto Sans TC 內文、IBM Plex Mono 小型數字與 metadata。

請修改檔案：

```txt
/Users/hmingdesigner/Documents/Hming-AI-agent/400_Projects/ours/mockups-antigravity/index.html
```

---

## 核心設計方向

### 不要改動的 IA

請維持目前主要資訊順序：

```txt
Top Bar
→ Topic Header
→ 30 秒快速看懂
→ Tabs
→ 話題趨勢 / 議題時間軸 / 新聞來源
→ 留言區
→ Bottom Nav
```

### 這次可以改動的 UI / Layout

本次可以改：

- Topic Header 裡的資訊密度與 metadata 排列
- 五個議題的「話題趨勢」內部元件差異
- 雷達卡、分布條、留言卡的局部 layout
- 留言區底部新增「發文 CTA」
- 不同議題的視覺重點，例如運動偏爭議、財經偏數據、娛樂偏熱度、政策偏立場、氣象偏即時資訊

本次不要改：

- Tabs 數量與名稱
- Summary Card 位置
- Bottom Nav 結構
- 五個議題資料結構的大方向
- 字體與整體配色語言

---

## 一、優先修改 1：重新定義 Topic Header 上方資訊

### 目前問題

目前標題上方這排資訊包含：

```txt
分類 badge / 追蹤人數 / 狀態
```

標題下方又包含：

```txt
媒體數 / 報導數 / 更新時間
```

在手機寬度下，這兩排資訊有幾個問題：

1. 上方資訊偏雜，使用者第一眼不一定知道重點是「議題分類」還是「追蹤狀態」。
2. `追蹤 21,300 人` 比較像社群熱度，不一定需要放在標題前。
3. `狀態` 有價值，但應該更明確地傳達目前議題狀態，例如「後續觀察」、「持續發展」、「典禮前熱議」、「警戒中」。
4. 標題下方的媒體數、報導數、更新時間是新聞可信度與資料規模，適合保留，但可做成更乾淨的 stats row。

### 修改目標

把 Topic Header 改成三層：

```txt
1. 議題分類 + 狀態
2. 大標題
3. 資訊統計列：媒體 / 報導 / 更新 / 追蹤
```

也就是把「追蹤人數」從標題上方移到標題下方 stats row，降低上方雜訊。

---

## 二、Topic Header 建議新版 Layout

### 新版結構

請將 Topic Header 調整為：

```html
<div class="topic-header">
  <div class="topic-kicker-row">
    <span class="topic-category-badge">{{ topic.category }}</span>
    <span class="topic-status-pill">
      <span class="topic-status-dot"></span>
      {{ topic.status }}
    </span>
  </div>

  <h1 class="topic-title">{{ topic.title }}</h1>

  <div class="topic-stats-row">
    <span><b>{{ topic.mediaCount }}</b> 家媒體</span>
    <span class="dot-separator"></span>
    <span><b>{{ topic.reportCount }}</b> 篇報導</span>
    <span class="dot-separator"></span>
    <span>{{ topic.updatedAt }}</span>
    <span class="dot-separator"></span>
    <span>追蹤 <b>{{ topic.trackingCount }}</b></span>
  </div>
</div>
```

### 視覺規則

- `topic-category-badge` 保留目前主題色描邊 badge。
- `topic-status-pill` 建議做成比分類更輕的 pill，不要跟分類 badge 視覺競爭。
- `topic-stats-row` 可允許換行，避免手機小寬度擠壓。
- 標題仍維持 Serif 大字，不要縮太小。

### 建議 CSS

```css
.topic-header {
  padding: 22px 20px 18px;
}

.topic-kicker-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 13px;
  flex-wrap: wrap;
}

.topic-category-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 3px 8px;
  border-radius: 3px;
}

.topic-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  letter-spacing: .5px;
  color: #7C7567;
  background: #F4F1EA;
  border: 1px solid #E8DFCF;
  border-radius: 999px;
  padding: 3px 8px;
}

.topic-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}

.topic-title {
  font-family: 'Noto Serif TC', serif;
  font-weight: 900;
  font-size: 28px;
  line-height: 1.32;
  letter-spacing: -0.3px;
  margin: 0 0 14px;
  color: #17150F;
  text-wrap: balance;
}

.topic-stats-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: #7C7567;
}

.topic-stats-row b {
  color: #17150F;
  font-weight: 600;
}

.dot-separator {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #CFC8BA;
}
```

### renderVals 需補上的 style

目前 `topic.catBadgeStyle`、`topic.statusBadgeStyle`、`topic.statusDotStyle` 是 inline string。可以保留，但請讓它們符合新版 class 邏輯：

```js
topic: {
  ...topic,
  catBadgeStyle: `color:${topic.themeColor}; border:1px solid ${topic.themeColor}40; background:${topic.themeColor}15;`,
  statusDotStyle: `background:${topic.themeColor};`,
}
```

HTML 中可用：

```html
<span class="topic-category-badge" style="{{ topic.catBadgeStyle }}">{{ topic.category }}</span>
<span class="topic-status-pill">
  <span class="topic-status-dot" style="{{ topic.statusDotStyle }}"></span>
  {{ topic.status }}
</span>
```

---

## 三、優先修改 2：留言區底部新增「發 Post CTA」

### 目前問題

使用者看完整個議題、分布、雷達與留言後，會自然產生「我也想講一句」的需求。現在留言列表結束後沒有明確行動，互動閉環不夠完整。

### 修改目標

在「話題趨勢」Tab 的留言列表最底部，新增一個 CTA 卡片，引導使用者回到社群編輯發文。

CTA 文案依議題動態變化，但元件結構共用。

---

## 四、發 Post CTA 建議 Layout

請在留言列表 `<sc-for list="{{ topic.comments }}">` 結束後，新增：

```html
<div class="post-cta-card">
  <div class="post-cta-copy">
    <span class="post-cta-eyebrow">JOIN THE DISCUSSION</span>
    <p class="post-cta-title">{{ postCtaTitle }}</p>
    <p class="post-cta-desc">{{ postCtaDesc }}</p>
  </div>
  <button class="post-cta-button" style="{{ postCtaButtonStyle }}">
    發表看法
  </button>
</div>
```

### 建議 CSS

```css
.post-cta-card {
  margin-top: 2px;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid #E8DFCF;
  background: linear-gradient(135deg, #FFFDF8 0%, #F7F1E7 100%);
  box-shadow: 0 1px 3px rgba(40,35,28,0.03);
}

.post-cta-eyebrow {
  display: block;
  margin-bottom: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.1px;
  color: #A39C8E;
}

.post-cta-title {
  margin: 0 0 6px;
  font-family: 'Noto Serif TC', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.45;
  color: #17150F;
}

.post-cta-desc {
  margin: 0 0 12px;
  font-family: 'Noto Sans TC';
  font-size: 12.5px;
  line-height: 1.6;
  color: #6B6353;
}

.post-cta-button {
  width: 100%;
  height: 42px;
  border: none;
  border-radius: 999px;
  color: #FFFFFF;
  font-family: 'Noto Sans TC';
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(40,35,28,0.12);
}
```

### renderVals 新增文案

請新增：

```js
const postCtaByTopic = {
  sports: {
    title: '你怎麼看這場賽事爭議？',
    desc: '分享你對平權賽事、報名審查或城市治理的看法。',
  },
  finance: {
    title: '你現在怎麼看台股 AI 行情？',
    desc: '分享你的投資觀察、風險提醒或市場情緒。',
  },
  entertainment: {
    title: '你心中的金曲獎焦點是誰？',
    desc: '聊聊你看好的入圍者、表演舞台或台灣音樂觀察。',
  },
  policy: {
    title: '你支持這次選罷法修正嗎？',
    desc: '分享你對參政權、修法時機或個案疑慮的看法。',
  },
  weather: {
    title: '你所在地的狀況如何？',
    desc: '回報淹水、交通、停班停課或防災資訊，幫助更多人掌握現況。',
  },
};

const currentPostCta = postCtaByTopic[topic.id] || postCtaByTopic.policy;
```

在 `return` 中加入：

```js
postCtaTitle: currentPostCta.title,
postCtaDesc: currentPostCta.desc,
postCtaButtonStyle: `background:${topic.themeColor};`,
```

### CTA 放置位置

放在留言列表最底部，但仍在 `TAB: TREND` 內：

```txt
話題趨勢
→ 分布條
→ 雷達
→ 留言列表
→ 發 Post CTA
```

不要放到 Bottom Nav，也不要做 sticky，避免干擾閱讀。

---

## 五、五個議題可微調的 UI 差異方向

IA 不變，但建議讓五個議題在「話題趨勢」中有不同感覺。

---

## 1. 運動：爭議治理型

### 現況

運動頁目前包含：

- 立場分布
- 共識雷達
- 三則立場留言

### 建議微調

#### A. 分布條文案更像治理選項

現在分布是：

```txt
重視交流與平權 / 要求補充資訊 / 主張嚴格審查
```

這是合理的，請保留。

#### B. 留言卡可以增加「立場 badge」但保持低調

運動議題容易敏感，留言 badge 不要太鮮豔，可用目前低飽和色。

#### C. Post CTA 強調「補充觀點」而不是「站隊」

CTA 文案用：

```txt
你怎麼看這場賽事爭議？
分享你對平權賽事、報名審查或城市治理的看法。
```

---

## 2. 財經：市場儀表板型

### 現況

財經頁目前同樣用分布條 + 雷達 + 留言卡。

### 建議微調

#### A. 分布區標題維持「市場情緒」

目前已有 `isMarketSentiment` 條件，請確保財經頁標題顯示「市場情緒」，不是「立場分布」。

#### B. 雷達 tag 用「市場情緒雷達」

已存在：

```txt
B / 市場情緒雷達
```

請保留。

#### C. 留言卡 stance badge 可以不要顯示支持 / 中立 / 反對

財經不是典型政治立場，可以把三種 stance 顯示成：

```txt
偏多 / 觀望 / 偏空
```

實作方式可在 finance comments 中新增 `stanceLabelOverride`，或在 renderVals 裡依 topic.id 判斷：

```js
if (topic.id === 'finance') {
  support -> 偏多
  neutral -> 觀望
  oppose -> 偏空
}
```

---

## 3. 娛樂：討論面向型

### 現況

娛樂頁目前顯示「討論面向」，這比立場分布更適合娛樂。

### 建議微調

#### A. 留言卡不要顯示支持 / 中立 / 反對

娛樂討論不是支持反對，應改成：

```txt
粉絲觀點 / 樂評觀點 / 獨立觀點
```

或不顯示 stance badge。

建議保留 badge，但文案改成面向：

```txt
主流焦點 / 評審標準 / 獨立音樂
```

#### B. CTA 文案偏輕量

```txt
你心中的金曲獎焦點是誰？
聊聊你看好的入圍者、表演舞台或台灣音樂觀察。
```

#### C. 主題色保持紫色，但不要新增過多裝飾

維持 Ours 紙感，不要變成娛樂新聞閃亮風。

---

## 4. 公共政策：立場光譜型

### 現況

公共政策頁非常適合現有分布條與雷達。

### 建議微調

#### A. 分布條保留三段

```txt
支持修法 / 要求補充說明 / 質疑個案修法
```

#### B. 留言卡保留支持 / 中立 / 反對

這個議題就是典型立場議題，保留目前邏輯。

#### C. CTA 文案直接問立場

```txt
你支持這次選罷法修正嗎？
分享你對參政權、修法時機或個案疑慮的看法。
```

---

## 5. 氣象：即時回報型

### 現況

氣象頁目前也在話題趨勢中顯示雷達與留言。氣象不適合立場分布，但適合「資訊關鍵雷達」。

### 建議微調

#### A. 氣象不要顯示 distribution bar

目前 weather 的 `distribution: []`，因此不會顯示分布條，請維持。

#### B. 雷達保留，但命名為「災情關鍵雷達」

目前已有：

```txt
B / 災情關鍵雷達
```

請保留。

#### C. 留言卡 badge 不要顯示支持 / 中立 / 反對

氣象留言應顯示回報類型：

```txt
官方提醒 / 現場回報 / 交通提問
```

如短期不想改資料結構，可以先隱藏 weather 的 stance badge，目前 `hasStance: topic.id !== 'weather'` 已接近正確。

#### D. CTA 文案應該是回報現況

```txt
你所在地的狀況如何？
回報淹水、交通、停班停課或防災資訊，幫助更多人掌握現況。
```

---

## 六、次要優化：Summary Card 可加入「摘要類型文字」

目前 Summary Card 右上角只顯示：

```txt
由 AI 整理
```

建議改成依議題顯示：

```txt
由 AI 整理 · 爭點摘要
由 AI 整理 · 市場摘要
由 AI 整理 · 娛樂摘要
由 AI 整理 · 政策摘要
由 AI 整理 · 災情速報
```

### 實作方式

在 TOPICS 裡新增：

```js
summaryLabel: '爭點摘要'
summaryLabel: '市場摘要'
summaryLabel: '娛樂摘要'
summaryLabel: '政策摘要'
summaryLabel: '災情速報'
```

右上角改成：

```html
<span>由 AI 整理 · {{ topic.summaryLabel }}</span>
```

如果不想改資料，可直接根據 `topic.summaryMode` mapping。

---

## 七、次要優化：留言區可加 section heading

目前留言列表直接接在雷達後面，視覺上略突然。建議在留言列表前加小標：

```html
<div class="comment-section-head">
  <h3>{{ commentSectionTitle }}</h3>
  <span>來自社群討論</span>
</div>
```

文案建議：

```txt
運動：社群怎麼看
財經：投資人怎麼看
娛樂：樂迷怎麼看
公共政策：不同立場怎麼說
氣象：現場與提問
```

### 建議 CSS

```css
.comment-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 4px;
  margin-bottom: 10px;
}

.comment-section-head h3 {
  margin: 0;
  font-family: 'Noto Serif TC', serif;
  font-size: 17px;
  font-weight: 700;
  color: #17150F;
}

.comment-section-head span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: .8px;
  color: #A39C8E;
}
```

---

## 八、建議執行順序

請依照以下順序修改，避免一次改太多造成 broken layout。

### Step 1：新增 CSS

新增以下 class：

```txt
topic-header
topic-kicker-row
topic-category-badge
topic-status-pill
topic-status-dot
topic-title
topic-stats-row
dot-separator
post-cta-card
post-cta-eyebrow
post-cta-title
post-cta-desc
post-cta-button
comment-section-head
```

### Step 2：替換 Topic Header HTML

將目前 Topic Header 中的 inline layout 改成新版三層結構。

### Step 3：調整 `renderVals()` topic style

確保 `topic.catBadgeStyle` 和 `topic.statusDotStyle` 仍能吃 `topic.themeColor`。

### Step 4：新增 Post CTA mapping

加入 `postCtaByTopic` 與 `currentPostCta`。

### Step 5：在 return 加入 CTA 欄位

```js
postCtaTitle
postCtaDesc
postCtaButtonStyle
```

### Step 6：在留言列表底部新增 CTA 卡片

放在 `topic.comments` 的 `sc-for` 後面。

### Step 7：補留言區 heading

在留言列表前新增 `comment-section-head`。

### Step 8：五個議題逐一檢查

請用 demo chips 切換五個議題，逐一檢查：

```txt
運動 / 財經 / 娛樂 / 公共政策 / 氣象
```

---

## 九、驗收標準

### Header 驗收

- 標題上方只剩「分類 badge」與「狀態 pill」。
- 追蹤人數移到標題下方 stats row。
- stats row 在手機寬度不爆版，可自然換行。
- 五個議題的分類色仍正確：
  - 運動：紅棕
  - 財經：金棕
  - 娛樂：紫
  - 公共政策：藍
  - 氣象：綠

### CTA 驗收

- 話題趨勢留言列表底部出現發文 CTA。
- CTA button 顏色會依 `topic.themeColor` 改變。
- 五個議題文案不同。
- CTA 不要 sticky，不要遮住 bottom nav。

### Layout 驗收

- Tabs 還是維持：話題趨勢 / 議題時間軸 / 新聞來源。
- `timeline` 與 `sources` 不受影響。
- `weather` 不顯示立場分布，但仍可以顯示災情雷達與留言。
- Console 無 syntax error。

---

## 十、最小可交付版本

如果時間有限，請至少完成：

1. Header 重新整理：分類 + 狀態 / 標題 / stats row。
2. 留言列表底部新增發 Post CTA。
3. CTA 文案依五個議題切換。

其餘像留言 badge 文案、Summary Card label、comment section heading 可作為第二階段。

---

## 十一、請避免

- 不要把版面改成完全不同風格。
- 不要加入高飽和大面積色塊。
- 不要新增過多 icon，保持目前乾淨、文字導向的新聞社群感。
- 不要改掉五個議題的資料內容主軸。
- 不要移除 Demo topic chips。
- 不要把發文 CTA 做成浮動按鈕，避免干擾閱讀。
