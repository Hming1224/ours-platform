# Ours 議題頁 Title Section 調整執行計劃書

## 0. 任務目標

請修改以下檔案：

```txt
/Users/hmingdesigner/Documents/Hming-AI-agent/400_Projects/ours/mockups-antigravity/index.html
```

本次任務聚焦在 **Topic Header / Title Section** 的資訊層級整理。

目前 header 資訊偏雜，包含：

```txt
[類別] 追蹤人數 · 狀態

標題

媒體數 · 報導數 · 更新時間
```

請在 **IA 不變** 的前提下，重新整理 title section 的資訊呈現方式，並針對五個議題隨機分配不同方案 A / B / C，讓頁面可以比較不同 header layout 的效果。

---

## 1. 設計原則

Title Section 的任務不是放越多資訊越好，而是讓使用者在進入 AI 摘要前，先快速判斷：

1. 這是哪一類議題？
2. 這個議題現在是否還在變動？
3. 這個議題資訊是否新？
4. 這個議題是否有多方來源支撐？
5. 這個議題是否有社群討論熱度？

因此需要重新整理以下資訊：

| 資訊 | 建議狀態 | 原因 |
|---|---|---|
| 類別 | 保留 | 幫助使用者辨識議題領域 |
| 狀態 | 保留並提高重要性 | 判斷議題是否進行中、警戒中、後續觀察 |
| 更新時間 | 保留，建議靠近狀態 | 判斷新聞時效性 |
| 來源數 / 媒體數 | 保留 | 幫助建立多方來源與可信度感 |
| 追蹤數 | 保留 | 建立社群熱度與參與感 |
| 報導篇數 | 視方案決定 | 可保留，但優先級低於來源數與更新時間 |

---

## 2. 三種 Header 方案

### 方案 A：新聞可信度優先

#### 適用情境

適合強調「來源透明」、「可信新聞」、「媒體識讀」的議題。  
比較像新聞產品，社群感較弱，但信任感較強。

#### 呈現格式

```txt
[類別] 狀態 · 更新時間

Title

來源數 · 報導篇數 · 高可信來源已標註
```

#### 範例

```txt
[公共政策] 持續發展 · 2 小時前更新

選罷法修正三讀：
緩刑者參選限制放寬，引發「高虹安條款」爭議

24 家來源 · 186 篇報導 · 高可信來源已標註
```

#### Layout 重點

- 第一排放「類別、狀態、更新時間」。
- 第三排強調「來源數、報導篇數、可信來源」。
- 不在第一眼強調追蹤人數，避免過度社群化。
- 適合公共政策、財經等需要信任感的議題。

---

### 方案 B：社群參與優先

#### 適用情境

適合強調「很多人正在追蹤或討論」的議題。  
比較像社群平台，能提升參與感，但可信度資訊會相對弱一些。

#### 呈現格式

```txt
[類別] 狀態 · 更新時間

Title

追蹤人數 · 來源數 · 報導篇數
```

#### 範例

```txt
[娛樂] 典禮前熱議 · 30 分鐘前更新

第 37 屆金曲獎登場前熱議：
蔡依林 9 項入圍、台語與樂團作品受關注

21.3k 人追蹤 · 20 家來源 · 156 篇報導
```

#### Layout 重點

- 第三排第一個數字是追蹤數，讓使用者感受到「這是大家正在看的議題」。
- 適合娛樂、運動等社群參與動機較強的議題。
- 仍保留來源數與報導數，避免只剩熱度。

---

### 方案 C：新聞可信度＋社群討論混合版

#### 適用情境

適合大多數 Ours 議題頁。  
在新聞可信度與社群參與感之間取得平衡，是目前最推薦的預設方案。

#### 呈現格式

```txt
[類別] 狀態 · 更新時間

Title

來源數 · 追蹤人數
```

#### 範例

```txt
[運動] 後續觀察 · 2 小時前更新

高雄亞洲同志運動會爭議：
運動賽事、國安疑慮與城市治理交會

12 家來源 · 8.4k 人追蹤
```

#### Layout 重點

- 移除「報導篇數」在 header 的顯示，降低資訊雜訊。
- 第三排只保留兩個最有用的指標：
  - 來源數：新聞可信度
  - 追蹤數：社群熱度
- 報導篇數移到新聞來源 tab 或 AI 摘要卡片 metadata。
- 建議作為預設版型。

---

## 3. 五個議題的方案分配

請將五個議題隨機分配到 A / B / C 三種方案，用於 mockup 比較。

本次分配如下：

| 議題 | topic id | 分配方案 | 理由 |
|---|---|---|---|
| 運動：高雄亞洲同志運動會爭議 | `sports` | 方案 C | 同時有新聞可信度與社群討論需求 |
| 財經：台股 AI 熱潮與劇烈波動 | `finance` | 方案 A | 財經議題需要來源與可信度優先 |
| 娛樂：第 37 屆金曲獎登場前熱議 | `entertainment` | 方案 B | 娛樂議題適合強調追蹤與社群熱度 |
| 公共政策：選罷法修正三讀 | `policy` | 方案 A | 公共政策需要來源透明與高可信度 |
| 氣象：0625 颱風外圍環流與西南風豪雨 | `weather` | 方案 C | 災害議題需要來源與時效，同時保留追蹤感 |

---

## 4. 目前程式中的相關位置

目前 `index.html` 的 Topic Header 約略為：

```html
<!-- ░░ TOPIC HEADER ░░ -->
<div style="padding:22px 20px 18px;">
  <div style="display:flex; align-items:center; gap:7px; margin-bottom:13px;">
    <span style="{{ topic.catBadgeStyle }}">{{ topic.category }}</span>
    <span style="...">追蹤 {{ topic.trackingCount }} 人</span>
    <span style="{{ topic.statusBadgeStyle }}">
      <span style="{{ topic.statusDotStyle }}"></span>{{ topic.status }}
    </span>
  </div>

  <h1>{{ topic.title }}</h1>

  <div style="display:flex; align-items:center; gap:14px; margin-bottom:18px;">
    <span>{{ topic.mediaCount }} 家媒體</span>
    <span>・</span>
    <span>{{ topic.reportCount }} 篇報導</span>
    <span>・</span>
    <span>{{ topic.updatedAt }}</span>
  </div>
</div>
```

請改成由 `topic.headerVariant` 決定不同顯示方式。

---

## 5. 資料結構調整

### 5.1 在每個 topic 內新增 `headerVariant`

請在 `TOPICS` 中每個 topic 加上：

```js
headerVariant: 'A' | 'B' | 'C'
```

依照本次分配：

```js
sports: {
  id: 'sports',
  headerVariant: 'C',
  ...
}

finance: {
  id: 'finance',
  headerVariant: 'A',
  ...
}

entertainment: {
  id: 'entertainment',
  headerVariant: 'B',
  ...
}

policy: {
  id: 'policy',
  headerVariant: 'A',
  ...
}

weather: {
  id: 'weather',
  headerVariant: 'C',
  ...
}
```

---

### 5.2 新增 normalized header display fields

請在 `renderVals()` 裡，建立一組 header display data。

建議放在：

```js
const topic = TOPICS[s.activeTopicId];
```

後面。

```js
const compactFollowerCount = {
  sports: '8.4k',
  finance: '15.9k',
  entertainment: '21.3k',
  policy: '18.6k',
  weather: '4.9k',
}[topic.id] || topic.trackingCount;

const cleanUpdatedAt = topic.updatedAt
  .replace('更新於 ', '')
  .replace('前', '前更新');

const headerMeta = {
  variant: topic.headerVariant || 'C',
  category: topic.category,
  status: topic.status,
  updatedAt: cleanUpdatedAt,
  sourceCount: topic.mediaCount,
  reportCount: topic.reportCount,
  followerCount: compactFollowerCount,
};
```

注意：  
目前 `topic.updatedAt` 是：

```txt
更新於 2 小時前
```

Header 建議顯示為：

```txt
2 小時前更新
```

---

## 6. Header HTML 改法

請將原本的 Topic Header 替換為以下結構。

```html
<!-- ░░ TOPIC HEADER ░░ -->
<div style="padding:22px 20px 18px;">
  <div style="display:flex; align-items:center; gap:7px; margin-bottom:13px; flex-wrap:wrap;">
    <span style="{{ topic.catBadgeStyle }}">{{ topic.category }}</span>
    <span style="{{ topic.statusBadgeStyle }}">
      <span style="{{ topic.statusDotStyle }}"></span>{{ topic.status }}
    </span>
    <span style="font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:1px; color:#A39C8E;">
      {{ headerMeta.updatedAt }}
    </span>
  </div>

  <h1 style="font-family:'Noto Serif TC',serif; font-weight:900; font-size:28px; line-height:1.32; letter-spacing:-0.3px; margin:0 0 14px; color:#17150F; text-wrap:balance;">
    {{ topic.title }}
  </h1>

  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:18px; font-family:'IBM Plex Mono',monospace; font-size:11px; color:#7C7567;">
    <sc-if value="{{ isHeaderVariantA }}">
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.sourceCount }}</span> 家來源</span>
      <span style="width:3px; height:3px; border-radius:50%; background:#CFC8BA;"></span>
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.reportCount }}</span> 篇報導</span>
      <span style="width:3px; height:3px; border-radius:50%; background:#CFC8BA;"></span>
      <span>高可信來源已標註</span>
    </sc-if>

    <sc-if value="{{ isHeaderVariantB }}">
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.followerCount }}</span> 人追蹤</span>
      <span style="width:3px; height:3px; border-radius:50%; background:#CFC8BA;"></span>
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.sourceCount }}</span> 家來源</span>
      <span style="width:3px; height:3px; border-radius:50%; background:#CFC8BA;"></span>
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.reportCount }}</span> 篇報導</span>
    </sc-if>

    <sc-if value="{{ isHeaderVariantC }}">
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.sourceCount }}</span> 家來源</span>
      <span style="width:3px; height:3px; border-radius:50%; background:#CFC8BA;"></span>
      <span><span style="color:#17150F; font-weight:600;">{{ headerMeta.followerCount }}</span> 人追蹤</span>
    </sc-if>
  </div>
</div>
```

---

## 7. `return` 需要新增的欄位

請在 `renderVals()` 的 `return { ... }` 裡加入：

```js
headerMeta,
isHeaderVariantA: headerMeta.variant === 'A',
isHeaderVariantB: headerMeta.variant === 'B',
isHeaderVariantC: headerMeta.variant === 'C',
```

---

## 8. 各議題預期顯示結果

### 8.1 運動 sports：方案 C

```txt
[運動] 後續觀察 · 2 小時前更新

高雄亞洲同志運動會爭議：
運動賽事、國安疑慮與城市治理交會

12 家來源 · 8.4k 人追蹤
```

### 8.2 財經 finance：方案 A

```txt
[財經] 持續發展 · 1 小時前更新

台股 AI 熱潮與劇烈波動：
一年飆漲後挑戰 4 萬點

16 家來源 · 142 篇報導 · 高可信來源已標註
```

### 8.3 娛樂 entertainment：方案 B

```txt
[娛樂] 典禮前熱議 · 30 分鐘前更新

第 37 屆金曲獎登場前熱議：
蔡依林 9 項入圍、台語與樂團作品受關注

21.3k 人追蹤 · 20 家來源 · 156 篇報導
```

### 8.4 公共政策 policy：方案 A

```txt
[公共政策] 持續發展 · 2 小時前更新

選罷法修正三讀：
緩刑者參選限制放寬，引發「高虹安條款」爭議

24 家來源 · 186 篇報導 · 高可信來源已標註
```

### 8.5 氣象 weather：方案 C

```txt
[氣象] 警戒中 · 10 分鐘前更新

0625 颱風外圍環流與西南風豪雨：
高雄多區淹水警戒

18 家來源 · 4.9k 人追蹤
```

---

## 9. 視覺與互動注意事項

### 9.1 IA 不變

本次只改 Title Section metadata 的排列，不要改動以下區塊順序：

```txt
Top Bar
Topic Header
AI Summary Card
Tabs
話題趨勢
議題時間軸
新聞來源
Bottom Nav
```

### 9.2 保持既有設計語言

請維持目前設計語言：

- 米白背景
- serif 大標題
- IBM Plex Mono 小字 metadata
- 圓角 pill / badge
- topic theme color
- 柔和低飽和邊框

不要新增過於現代 SaaS 感或 Material Design 感的元件。

### 9.3 不要讓 Header 過度增高

目前標題本身已經很大，Header metadata 要盡量輕。

注意：

- 第一排最多 3 個元素：類別、狀態、更新時間
- 第三排最多 3 個元素
- 手機版避免超過兩行 metadata
- 如果文字太長，優先縮短為：
  - `8.4k 人追蹤`
  - `12 家來源`
  - `2 小時前更新`

### 9.4 狀態與更新時間應該靠近

請避免再把「更新時間」放到第三排最後。  
更新時間和狀態應該放在同一排，因為它們共同回答：

```txt
這個議題現在是否還在變動？
```

---

## 10. 驗收標準

完成後請確認：

1. 五個議題都可以正常切換。
2. 每個議題的 Header 會依照 `headerVariant` 呈現不同 metadata。
3. sports 顯示方案 C。
4. finance 顯示方案 A。
5. entertainment 顯示方案 B。
6. policy 顯示方案 A。
7. weather 顯示方案 C。
8. 第一排不再顯示「追蹤 8,420 人」。
9. 更新時間移到第一排，顯示為「2 小時前更新」這種格式。
10. 方案 C 不顯示報導篇數。
11. 方案 A 顯示「高可信來源已標註」。
12. 方案 B 第一個 metadata 是追蹤人數。
13. AI Summary Card、Tabs、留言、Timeline、Sources 都不受影響。
14. Console 沒有錯誤。
15. 手機版 440px 寬度下 metadata 不嚴重擠壓或換行失控。

---

## 11. 可選加分項目

### 11.1 Header variant debug label

在 Demo 模式下，可以暫時顯示：

```txt
Header Variant A / B / C
```

但正式畫面不需要顯示。

### 11.2 報導篇數移到 AI 摘要卡片

若方案 C 移除報導數，可以在 AI Summary Card 右上角小字加：

```txt
由 AI 整理 · 整合 68 篇報導
```

但這不是本次必要項目。

### 11.3 新聞來源 tab 補足報導數

在新聞來源 tab 的標題下加一行：

```txt
整合 12 家來源、68 篇報導，並標註來源可信度。
```

這樣即使 Header 不顯示報導篇數，使用者仍然能在對的位置看到完整資訊。

---

## 12. 給 Gemini 3.1 Pro 的執行指令

請依照本計劃書修改：

```txt
/Users/hmingdesigner/Documents/Hming-AI-agent/400_Projects/ours/mockups-antigravity/index.html
```

重點是將 Topic Header metadata 改成三種 variant：

- 方案 A：新聞可信度優先
- 方案 B：社群參與優先
- 方案 C：新聞可信度＋社群討論混合版

並將五個議題分配如下：

```txt
sports -> C
finance -> A
entertainment -> B
policy -> A
weather -> C
```

請保留目前 IA、視覺語言、tabs、AI Summary、留言、Timeline、Sources 與 Bottom Nav，不要重構整個頁面。只調整 Title Section 的 metadata 資訊層級與顯示內容。
