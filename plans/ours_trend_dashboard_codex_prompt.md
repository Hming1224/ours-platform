# Codex Prompt｜依目前 index.html 調整「話題趨勢」版型

請依照目前專案中的 `index.html` 版本修改，不要改成 standalone，也不要移除 `x-dc / sc-if / sc-for / dc-runtime` 架構。

目前 `index.html` 的結構是：

- 樣式由 `css/mockup.css` 載入
- 資料與 render values 由 `js/mockup-data.js` 的 `window.OursMockup.createRenderVals(this, this.state)` 產生
- `TAB: TREND` 目前順序大致是：
  1. `isDisasterTrend` 時顯示 `.disaster-question-section`「大家正在問」
  2. `showRadarInTrend` 顯示雷達
  3. `hasDistribution` 顯示立場 / 市場情緒 / 討論面向百分比分布
  4. 留言區
  5. 發 Post CTA

這次請重構「話題趨勢」第一模組，不要讓所有議題都套同一種分布條，也不要讓氣象議題優先顯示「大家正在問」。

---

## 1. 產品邏輯

「話題趨勢」不是固定呈現「大家在討論什麼」，而是根據議題類型，優先呈現使用者最需要追蹤、且後端可合法穩定取得的資訊。

分工如下：

```txt
30 秒快速看懂
= 幫使用者理解事件背景與重點

話題趨勢第一模組
= 依議題類型顯示最實用的追蹤資訊

共識 / 關鍵雷達
= 整理反覆出現的關鍵詞

留言 Post
= 看 Ours 站內使用者怎麼說
```

因此：

- 有立場對立的議題，才顯示「立場分布」。
- 有官方決策或客觀數據的議題，優先顯示 dashboard。
- 氣象 / 災害議題不要再優先顯示「大家正在問」，請改成「官方決策與警戒」儀表板。
- 財經議題不要預設做「市場情緒百分比」，請改成「市場追蹤」儀表板。
- 娛樂議題不要預設做「討論面向百分比」，請改成「典禮追蹤」卡。

---

## 2. 最終顯示規則

請讓五個 topic 的「話題趨勢」第一模組如下：

```txt
sports:
  第一模組 = 立場分布
  第二模組 = 共識雷達
  第三模組 = 不同立場怎麼說

policy:
  第一模組 = 立場分布
  第二模組 = 共識雷達
  第三模組 = 不同立場怎麼說

finance:
  第一模組 = 市場追蹤 dashboard
  第二模組 = 市場關鍵雷達
  第三模組 = 投資人怎麼看

entertainment:
  第一模組 = 典禮追蹤 dashboard
  第二模組 = 討論熱詞雷達
  第三模組 = 樂迷怎麼看

weather:
  第一模組 = 官方決策與警戒 dashboard
  第二模組 = 災情關鍵雷達
  第三模組 = 現場與提問
```

---

## 3. 請先修改 Trend tab 的 HTML 順序

請在 `index.html` 的 `<!-- ░░ TAB: TREND ░░ -->` 裡調整順序。

目前是：

```txt
isDisasterTrend / 大家正在問
showRadarInTrend / 雷達
hasDistribution / 分布條
comments
CTA
```

請改成：

```txt
hasTrendDashboard / dashboard
hasDistribution / 立場分布
showRadarInTrend / 雷達
comments
CTA
```

重點：

- 刪除或停止渲染目前的 `.disaster-question-section`「大家正在問」區塊。
- 不要讓 weather 顯示 `大家正在問` 作為第一模組。
- 不要讓 finance / entertainment 顯示百分比分布。
- `showRadarInTrend` 要在第一模組之後顯示。
- 留言區與 CTA 保持原本順序與樣式。

---

## 4. 新增 Dashboard HTML

請在 Trend tab 中、distribution 區塊之前加入：

```html
<sc-if value="{{ hasTrendDashboard }}" hint-placeholder-val="{{ false }}">
  <section class="trend-dashboard">
    <div class="trend-dashboard__head">
      <h2>{{ trendDashboard.title }}</h2>
      <span>{{ trendDashboard.sourceLabel }}</span>
    </div>

    <div class="trend-dashboard__grid">
      <sc-for list="{{ trendDashboard.cards }}" as="card" hint-placeholder-count="4">
        <article class="trend-metric-card {{ card.statusClass }}">
          <span class="trend-metric-card__label">{{ card.label }}</span>
          <strong class="trend-metric-card__value">{{ card.value }}</strong>
          <span class="trend-metric-card__source">來源：{{ card.source }}</span>
        </article>
      </sc-for>
    </div>
  </section>
</sc-if>
```

請注意：

- 這個 dashboard 是 finance / entertainment / weather 共用元件。
- sports / policy 不需要 dashboard。
- dashboard 下方接原本雷達區塊。
- 不要改動 30 秒快速看懂卡片。

---

## 5. 調整 Distribution HTML

目前 `hasDistribution` 區塊在雷達後方，請移到雷達前方，讓 sports / policy 的第一模組就是「立場分布」。

請保留現有分布條 UI，但只允許 sports / policy 顯示。

`hasDistribution` 的顯示條件請在 `js/mockup-data.js` 裡收斂成：

```js
const hasDistribution =
  ['sports', 'policy'].includes(topic.id) &&
  topic.distribution &&
  topic.distribution.length > 0;
```

如果目前是用 `trendLayout` 判斷，也可以寫成：

```js
const hasDistribution =
  topic.trendLayout === 'stance-distribution' &&
  topic.distribution &&
  topic.distribution.length > 0;
```

但請確認 finance / entertainment / weather 都不會進入 `hasDistribution`。

---

## 6. 修改 `js/mockup-data.js`

請在各 topic 裡新增或調整 `trendDashboard`。

### finance

```js
trendDashboard: {
  title: '市場追蹤',
  sourceLabel: '依官方市場資料與新聞整理',
  cards: [
    { label: '台股指數', value: '今日大幅波動', status: 'watching', source: '證交所' },
    { label: 'AI 供應鏈', value: '相關新聞升溫', status: 'info', source: '新聞整理' },
    { label: '外資動向', value: '觀察買賣超', status: 'info', source: '市場資料' },
    { label: '風險訊號', value: '利率／地緣政治', status: 'watching', source: '新聞整理' }
  ]
}
```

### entertainment

```js
trendDashboard: {
  title: '典禮追蹤',
  sourceLabel: '依官方入圍名單與新聞整理',
  cards: [
    { label: '頒獎時間', value: '6/27 台北小巨蛋', status: 'info', source: '金曲獎官方' },
    { label: '入圍焦點', value: '蔡依林 9 項入圍', status: 'info', source: '官方名單' },
    { label: '關注獎項', value: '年度專輯／年度歌曲', status: 'watching', source: '新聞整理' },
    { label: '討論焦點', value: '台語音樂、獨立樂團', status: 'info', source: '新聞整理' }
  ]
}
```

### weather

```js
trendDashboard: {
  title: '官方決策與警戒',
  sourceLabel: '依官方資料整理 · 10 分鐘前更新',
  cards: [
    { label: '停班停課', value: '高雄市：尚未發布', status: 'watching', source: '人事行政總處' },
    { label: '氣象警戒', value: '超大豪雨特報', status: 'alert', source: '中央氣象署' },
    { label: '主要影響', value: '高雄山區、低窪地區', status: 'info', source: '氣象署／地方政府' },
    { label: '道路與撤離', value: '部分路段封閉、山區撤離', status: 'info', source: '地方政府公告' }
  ]
}
```

sports / policy 不要加 `trendDashboard`，它們繼續使用 `distribution`。

---

## 7. 在 createRenderVals 中新增 processedTrendDashboard

請在 `window.OursMockup.createRenderVals` 或同等 render values 函式裡新增：

```js
const processedTrendDashboard = topic.trendDashboard
  ? {
      ...topic.trendDashboard,
      cards: topic.trendDashboard.cards.map((card) => ({
        ...card,
        statusClass: `trend-metric-card--${card.status || 'info'}`
      }))
    }
  : null;

const hasTrendDashboard =
  !!processedTrendDashboard &&
  processedTrendDashboard.cards &&
  processedTrendDashboard.cards.length > 0;
```

並在 return values 加入：

```js
trendDashboard: processedTrendDashboard,
hasTrendDashboard,
```

如果原本已經有 `isDisasterTrend` / `activeQuestions`，可以先保留資料，但不要再用它渲染 Trend 第一模組。

---

## 8. CSS 新增到 `css/mockup.css`

請新增以下 class，維持目前 Ours 的米白、低飽和、圓角卡片風格：

```css
.trend-dashboard {
  margin: 0 14px 16px;
  padding: 14px;
  border: 1px solid #E8DFCF;
  border-radius: 18px;
  background: #FFFDF8;
  box-shadow: 0 1px 3px rgba(40,35,28,0.03);
}

.trend-dashboard__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.trend-dashboard__head h2 {
  margin: 0;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.45;
  color: #17150F;
}

.trend-dashboard__head span {
  flex: 0 0 auto;
  max-width: 150px;
  text-align: right;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 9px;
  line-height: 1.45;
  letter-spacing: .6px;
  color: #A39C8E;
}

.trend-dashboard__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}

.trend-metric-card {
  min-height: 96px;
  padding: 11px;
  border-radius: 13px;
  border: 1px solid #E8DFCF;
  background: rgba(255,255,255,.62);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.trend-metric-card__label {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .6px;
  color: #A39C8E;
}

.trend-metric-card__value {
  margin: 8px 0;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.45;
  color: #17150F;
}

.trend-metric-card__source {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 10.5px;
  line-height: 1.4;
  color: #7C7567;
}

.trend-metric-card--alert {
  border-color: #F2C4C1;
  background: #FCECEB;
}

.trend-metric-card--watching {
  border-color: #EAD9B8;
  background: #FBF3E2;
}

.trend-metric-card--safe {
  border-color: #B8E0CA;
  background: #E8F4ED;
}

.trend-metric-card--info {
  border-color: #D9E0E3;
  background: #EEF3F5;
}
```

---

## 9. 來源標示規則

請在 UI 中明確標示第一模組資料來源，避免讓使用者誤會資料代表全網民意。

建議文字：

```txt
立場分布：依 Ours 留言整理
市場追蹤：依官方市場資料與新聞整理
典禮追蹤：依官方入圍名單與新聞整理
官方決策與警戒：依官方資料整理 · 10 分鐘前更新
```

不要使用：

```txt
全網民意
社群共識
網友都在說
```

除非真的有授權外部社群資料來源。

---

## 10. 驗收標準

完成後請確認：

1. `index.html` 仍維持 `x-dc / sc-if / sc-for / dc-runtime` 架構。
2. 不要轉成 standalone HTML。
3. Trend tab 第一模組順序正確：
   - dashboard 或 distribution
   - radar
   - comments
   - CTA
4. sports 顯示「立場分布」。
5. policy 顯示「立場分布」。
6. finance 顯示「市場追蹤」dashboard，不顯示市場情緒百分比分布。
7. entertainment 顯示「典禮追蹤」dashboard，不顯示討論面向百分比分布。
8. weather 顯示「官方決策與警戒」dashboard，不顯示「大家正在問」。
9. weather 的第一模組包含「停班停課」。
10. 雷達區塊仍顯示在第一模組下方。
11. 留言 Post 仍顯示在雷達下方。
12. 30 秒快速看懂完全不變。
13. Timeline / Sources / Bottom Nav 不被影響。
14. 手機版 440px 寬度下 dashboard 不爆版。
15. 不要出現大段空白。
16. 不要讓 hidden template / code 顯示在畫面上。
17. Console 沒有 JavaScript error。
