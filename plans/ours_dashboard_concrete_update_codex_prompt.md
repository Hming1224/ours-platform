# Codex 執行 Prompt：根據目前版本補強 Trend Dashboard 內容與排版

請根據目前專案中的 `index.html`、`css/mockup.css`、`js/mockup-data.js` 進行修改。

## 0. 目前狀態與限制

目前版本已經有以下進度，請不要重做或退回舊版：

1. 專案仍使用 `x-dc / sc-if / sc-for / dc-runtime` 架構。
2. `index.html` 由 `js/mockup-data.js` 提供 render values。
3. 「話題趨勢」中，**共識雷達 / 關鍵雷達已經是第一模組**。
4. dashboard 目前出現在雷達之後。
5. `市場追蹤 / 典禮追蹤 / 官方決策與警戒` 的標題樣式問題已修正。
6. 請保留以下 CSS selector 邏輯，不要改回錯誤版本：

```css
.trend-dashboard__head h2 span {
  font: inherit;
  color: inherit;
  font-weight: inherit;
  line-height: inherit;
}

.trend-dashboard__head > span {
  flex: 0 0 auto;
  max-width: 150px;
  text-align: right;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 10px;
  line-height: 1.45;
  color: #A39C8E;
}
```

原因：`dc-runtime` 會把 `{{ topic.trendDashboard.title }}` 包成內層 `span`。如果使用 `.trend-dashboard__head span`，會誤傷 h2 裡的 title，讓 `市場追蹤 / 典禮追蹤` 變小、變灰。

---

## 1. 本次任務目標

目前 dashboard 內容仍偏籠統，例如：

- 今日大幅波動
- 相關新聞升溫
- 觀察買賣超
- 利率 / 地緣政治

請改成更具體的 dashboard 內容，讓使用者一眼看懂：

1. 現在數字是多少
2. 相比前一段時間是上升、下降、持平還是警戒
3. 這個資訊從哪裡來
4. 財經 dashboard 要有可視覺化的小波動圖 sparkline
5. 其他 dashboard 也要有具體狀態，不要只寫抽象分類

---

## 2. 話題趨勢正確順序

請確認所有 topic 的 Trend tab 都是：

```txt
第一模組：共識雷達 / 關鍵雷達
第二模組：立場分布或 Dashboard
第三模組：留言 / Post
```

五種議題應顯示為：

```txt
sports:
  1. 共識雷達
  2. 立場分布
  3. 不同立場怎麼說

policy:
  1. 共識雷達
  2. 立場分布
  3. 不同立場怎麼說

finance:
  1. 市場關鍵雷達
  2. 市場追蹤 Dashboard
  3. 投資人怎麼看

entertainment:
  1. 討論熱詞雷達
  2. 典禮追蹤 Dashboard
  3. 樂迷怎麼看

weather:
  1. 災情關鍵雷達
  2. 官方決策與警戒 Dashboard
  3. 現場與提問
```

---

## 3. `js/mockup-data.js`：新增 / 更新具體 dashboard 假資料

請在對應 topic 中更新 `trendDashboard`。

### 3.1 finance：市場追蹤 Dashboard

請用以下具體假資料，不要使用「今日大幅波動」這類空泛文字。

```js
trendDashboard: {
  title: '市場追蹤',
  sourceLabel: '依官方市場資料與新聞整理 · 14:30 更新',
  cards: [
    {
      label: '加權指數',
      value: '23,418.72',
      delta: '+312.45 / +1.35%',
      status: 'safe',
      source: '證交所盤後資訊',
      sparkline: [23120, 23084, 23176, 23288, 23190, 23342, 23418]
    },
    {
      label: '成交量',
      value: '4,862 億',
      delta: '較 5 日均量 +18%',
      status: 'watching',
      source: '證交所市場統計',
      sparkline: [3850, 4020, 3968, 4210, 4380, 4512, 4862]
    },
    {
      label: '外資買賣超',
      value: '+186.4 億',
      delta: '連 3 買',
      status: 'safe',
      source: '三大法人統計',
      sparkline: [-42, 28, 76, 93, 112, 151, 186]
    },
    {
      label: 'AI 概念股',
      value: '9 檔漲逾 3%',
      delta: '伺服器 / 散熱 / IC 設計轉強',
      status: 'watching',
      source: '新聞與類股整理',
      sparkline: [3, 4, 4, 5, 7, 8, 9]
    }
  ]
}
```

Finance 顯示重點：

- 每張卡都要有數字。
- 每張卡都要有趨勢或比較基準。
- 每張卡都要有來源。
- 每張卡都要顯示 sparkline。

---

### 3.2 entertainment：典禮追蹤 Dashboard

```js
trendDashboard: {
  title: '典禮追蹤',
  sourceLabel: '依官方入圍名單與新聞整理',
  cards: [
    {
      label: '頒獎時間',
      value: '6/27 19:00',
      delta: '台北小巨蛋，星光大道 17:00 開始',
      status: 'info',
      source: '金曲獎官方'
    },
    {
      label: '入圍焦點',
      value: '蔡依林 9 項',
      delta: '年度專輯 / 年度歌曲 / 最佳女歌手皆入圍',
      status: 'watching',
      source: '官方入圍名單'
    },
    {
      label: '關注獎項',
      value: '4 個主要獎項',
      delta: '年度專輯、年度歌曲、最佳華語專輯、最佳女歌手',
      status: 'info',
      source: '新聞整理'
    },
    {
      label: '討論焦點',
      value: '台語音樂升溫',
      delta: '台語作品、獨立樂團、評審標準被反覆提到',
      status: 'watching',
      source: '新聞與 Ours 留言'
    }
  ]
}
```

Entertainment 顯示重點：

- 不要做假百分比。
- 不要硬做「立場分布」。
- 使用者最想知道的是典禮時間、入圍焦點、關注獎項、討論焦點。

---

### 3.3 weather：官方決策與警戒 Dashboard

```js
trendDashboard: {
  title: '官方決策與警戒',
  sourceLabel: '依官方資料整理 · 10 分鐘前更新',
  cards: [
    {
      label: '停班停課',
      value: '高雄市：尚未發布',
      delta: '晚間 20:00 前可能更新',
      status: 'watching',
      source: '人事行政總處 / 地方政府'
    },
    {
      label: '氣象警戒',
      value: '超大豪雨特報',
      delta: '山區累積雨量仍偏高',
      status: 'alert',
      source: '中央氣象署'
    },
    {
      label: '主要影響',
      value: '山區、低窪地區',
      delta: '旗山、美濃、六龜需留意',
      status: 'alert',
      source: '氣象署 / 地方政府'
    },
    {
      label: '道路與撤離',
      value: '部分路段封閉',
      delta: '山區道路與河川周邊管制',
      status: 'watching',
      source: '地方政府公告'
    }
  ]
}
```

Weather 顯示重點：

- 停班停課是官方決策，不應該放在「大家正在問」裡。
- weather 不要顯示「大家正在問」作為第一模組。
- weather 的第二模組應該是官方狀態 dashboard。
- 使用者最想先看到停班停課、警戒、影響區域、道路與撤離。

---

## 4. `createRenderVals()`：確認 dashboard 資料處理

如果目前已經有 `hasTrendDashboard` 與 `processedTrendDashboard`，請檢查是否包含以下內容。

如果沒有，請補上。

```js
function buildSparklinePoints(values) {
  if (!Array.isArray(values) || values.length < 2) return '';

  const width = 100;
  const height = 28;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}
```

```js
const hasTrendDashboard =
  topic.trendDashboard &&
  topic.trendDashboard.cards &&
  topic.trendDashboard.cards.length > 0;

const processedTrendDashboard = hasTrendDashboard
  ? {
      ...topic.trendDashboard,
      cards: topic.trendDashboard.cards.map(card => ({
        ...card,
        statusClass: `trend-metric-card--${card.status || 'info'}`,
        hasSparkline: Array.isArray(card.sparkline) && card.sparkline.length > 1,
        sparklinePoints: Array.isArray(card.sparkline)
          ? buildSparklinePoints(card.sparkline)
          : ''
      }))
    }
  : null;
```

`return` 內需要包含：

```js
hasTrendDashboard,
trendDashboard: processedTrendDashboard,
```

`hasDistribution` 請確認：

```js
const hasDistribution =
  !hasTrendDashboard &&
  topic.distribution &&
  topic.distribution.length > 0;
```

目的：

- sports / policy 沒有 dashboard，所以保留立場分布。
- finance / entertainment / weather 有 dashboard，所以不要顯示舊的 distribution bar。

---

## 5. `index.html`：Trend tab 順序確認

請確認 `<!-- ░░ TAB: TREND ░░ -->` 內的順序是：

```html
<!-- 1. 雷達區塊：第一模組 -->
<sc-if value="{{ showRadarInTrend }}" hint-placeholder-val="{{ true }}">
  ... concern-radar ...
</sc-if>

<!-- 2A. Dashboard：finance / entertainment / weather -->
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
          <p class="trend-metric-card__delta">{{ card.delta }}</p>

          <sc-if value="{{ card.hasSparkline }}" hint-placeholder-val="{{ false }}">
            <svg class="trend-sparkline" viewBox="0 0 100 28" preserveAspectRatio="none">
              <polyline points="{{ card.sparklinePoints }}"></polyline>
            </svg>
          </sc-if>

          <span class="trend-metric-card__source">來源：{{ card.source }}</span>
        </article>
      </sc-for>
    </div>
  </section>
</sc-if>

<!-- 2B. Distribution：sports / policy -->
<sc-if value="{{ hasDistribution }}" hint-placeholder-val="{{ true }}">
  ... existing distribution bar ...
</sc-if>

<!-- 3. Comments -->
... existing grouped / feed comments ...
```

請移除或停用 weather 的舊區塊：

```html
<sc-if value="{{ isDisasterTrend }}" hint-placeholder-val="{{ false }}">
  <section class="disaster-question-section">
    <h2 class="disaster-question-title">大家正在問</h2>
    ...
  </section>
</sc-if>
```

Weather 不要再出現「大家正在問」作為 Trend 的第一或第二模組。

---

## 6. `css/mockup.css`：保留並補強 dashboard CSS

請確認 dashboard CSS 至少有以下內容。

重點：`.trend-dashboard__head > span` 只能套右側 sourceLabel；`.trend-dashboard__head h2 span` 要繼承 h2。

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
  font-family: 'Noto Serif TC', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.45;
  color: #17150F;
}

.trend-dashboard__head h2 span {
  font: inherit;
  color: inherit;
  font-weight: inherit;
  line-height: inherit;
}

.trend-dashboard__head > span {
  flex: 0 0 auto;
  max-width: 150px;
  text-align: right;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 10px;
  line-height: 1.45;
  color: #A39C8E;
}

.trend-dashboard__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}

.trend-metric-card {
  min-height: 132px;
  padding: 11px;
  border-radius: 14px;
  border: 1px solid #E8DFCF;
  background: rgba(255,255,255,.72);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.trend-metric-card__label {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #7C7567;
}

.trend-metric-card__value {
  font-family: 'Noto Serif TC', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  color: #17150F;
}

.trend-metric-card__delta {
  margin: 0;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 11.5px;
  line-height: 1.45;
  color: #5D5950;
}

.trend-metric-card__source {
  margin-top: auto;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 10px;
  line-height: 1.4;
  color: #9B9385;
}

.trend-sparkline {
  width: 100%;
  height: 28px;
  margin: 2px 0 0;
  overflow: visible;
}

.trend-sparkline polyline {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.trend-metric-card--alert {
  border-color: #F2C4C1;
  background: #FCECEB;
  color: #B84A42;
}

.trend-metric-card--watching {
  border-color: #EAD9B8;
  background: #FBF3E2;
  color: #B07A2E;
}

.trend-metric-card--safe {
  border-color: #B8E0CA;
  background: #E8F4ED;
  color: #2F8F5B;
}

.trend-metric-card--info {
  border-color: #D9E0E3;
  background: #EEF3F5;
  color: #4A6B82;
}
```

---

## 7. 驗收標準

完成後請檢查：

1. 雷達仍是所有議題的 Trend 第一模組。
2. sports：雷達後面接立場分布。
3. policy：雷達後面接立場分布。
4. finance：雷達後面接「市場追蹤」dashboard。
5. finance dashboard 有 4 張具體數據卡，且每張都有 sparkline。
6. finance dashboard 不出現「今日大幅波動」、「觀察買賣超」這種空泛文案。
7. entertainment：雷達後面接「典禮追蹤」dashboard。
8. entertainment dashboard 有典禮時間、入圍焦點、關注獎項、討論焦點。
9. weather：雷達後面接「官方決策與警戒」dashboard。
10. weather dashboard 有停班停課、氣象警戒、主要影響、道路與撤離。
11. weather 不再顯示「大家正在問」。
12. dashboard 標題 `市場追蹤 / 典禮追蹤 / 官方決策與警戒` 必須是 16px、深色、700 weight。
13. 右側 sourceLabel 才是 10px 小灰字。
14. 手機寬度 440px 不爆版。
15. Console 沒有 JavaScript error。
16. 不要出現 hidden template 或白色 code。
17. 不要移除 `x-dc / sc-if / sc-for / dc-runtime` 架構。
