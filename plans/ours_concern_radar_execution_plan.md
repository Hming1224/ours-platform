# Ours 議題頁：共識雷達元件修改執行計劃書

## 目標

請修改以下檔案：

```txt
/Users/hmingdesigner/Documents/Hming-AI-agent/400_Projects/ours/mockups-antigravity/index.html
```

將目前寫死的「B / 共識雷達」區塊，改成可依照五個議題模式動態顯示不同的關鍵詞資料。

目前頁面原本只有兩種模式：

```js
topicType: 'disputed' // 'disputed' | 'fact-only'
```

後續已規劃改成五個議題模式：

```js
topicType: 'sports' | 'finance' | 'entertainment' | 'policy' | 'weather'
```

本次任務聚焦在「跨立場都反覆提到的 6 個關鍵詞」這個 section，請將它改成可根據不同 `topicType` 顯示不同標題、關鍵詞與分數。

---

## 一、目前需要處理的區塊

目前在 HTML 中有這段寫死內容：

```html
<div>
  <div class="concern-proposal-tag">B / 共識雷達</div>
  <div class="concern-radar">
    <p class="concern-radar__title">跨立場都反覆提到的 6 個關鍵詞</p>
    <div class="concern-radar__row"><span>供電穩定</span><span class="concern-radar__track"><span class="concern-radar__fill" style="width:92%;"></span></span><span class="concern-radar__score">92</span></div>
    <div class="concern-radar__row"><span>核安風險</span><span class="concern-radar__track"><span class="concern-radar__fill" style="width:88%;"></span></span><span class="concern-radar__score">88</span></div>
    <div class="concern-radar__row"><span>電價負擔</span><span class="concern-radar__track"><span class="concern-radar__fill" style="width:76%;"></span></span><span class="concern-radar__score">76</span></div>
    <div class="concern-radar__row"><span>核廢處置</span><span class="concern-radar__track"><span class="concern-radar__fill" style="width:72%;"></span></span><span class="concern-radar__score">72</span></div>
    <div class="concern-radar__row"><span>2050 淨零</span><span class="concern-radar__track"><span class="concern-radar__fill" style="width:64%;"></span></span><span class="concern-radar__score">64</span></div>
    <div class="concern-radar__row"><span>資訊透明</span><span class="concern-radar__track"><span class="concern-radar__fill" style="width:58%;"></span></span><span class="concern-radar__score">58</span></div>
  </div>
</div>
```

請把這段改成使用 `sc-for` 動態渲染。

---

## 二、保留既有 CSS，不需要重寫樣式

目前 `index.html` 已經有以下 CSS class，請保留：

```css
.concern-radar
.concern-radar__title
.concern-radar__row
.concern-radar__track
.concern-radar__fill
.concern-radar__score
```

本次不需要新增新的 class，除非為了五議題切換需要微調顏色。

---

## 三、在 `renderVals()` 新增 radar 資料

請在 `renderVals()` 裡面，靠近其他議題資料區，例如 `rawComments`、`disputedNodes`、`factNodes` 前後，新增一個 `radarByTopic` 物件。

請加入以下資料：

```js
const radarByTopic = {
  sports: {
    tag: 'B / 共識雷達',
    title: '這場賽事爭議中，大家反覆提到的 6 個關鍵詞',
    items: [
      { label: '活動安全', score: 91 },
      { label: '報名審查', score: 86 },
      { label: '城市形象', score: 78 },
      { label: '多元平權', score: 74 },
      { label: '國安疑慮', score: 70 },
      { label: '主辦透明', score: 63 },
    ],
  },

  finance: {
    tag: 'B / 市場情緒雷達',
    title: '台股 AI 行情中，投資人最常討論的 6 個關鍵詞',
    items: [
      { label: 'AI 題材', score: 94 },
      { label: '台積電', score: 89 },
      { label: 'ETF 資金', score: 81 },
      { label: '外資動向', score: 77 },
      { label: '高點風險', score: 72 },
      { label: '利率變化', score: 65 },
    ],
  },

  entertainment: {
    tag: 'B / 討論熱詞雷達',
    title: '金曲獎討論中，樂迷反覆提到的 6 個關鍵詞',
    items: [
      { label: '蔡依林', score: 95 },
      { label: '入圍名單', score: 88 },
      { label: '台語音樂', score: 79 },
      { label: '獨立樂團', score: 73 },
      { label: '音樂性', score: 69 },
      { label: '典禮表演', score: 62 },
    ],
  },

  policy: {
    tag: 'B / 共識雷達',
    title: '選罷法爭議中，跨立場都反覆提到的 6 個關鍵詞',
    items: [
      { label: '參政權', score: 92 },
      { label: '修法時機', score: 88 },
      { label: '個案解套', score: 83 },
      { label: '比例原則', score: 74 },
      { label: '司法判決', score: 69 },
      { label: '政黨攻防', score: 64 },
    ],
  },

  weather: {
    tag: 'B / 災情關鍵雷達',
    title: '豪雨災情中，民眾最關心的 6 個資訊關鍵詞',
    items: [
      { label: '停班停課', score: 96 },
      { label: '淹水路段', score: 92 },
      { label: '雨量警戒', score: 87 },
      { label: '交通中斷', score: 79 },
      { label: '山區撤離', score: 72 },
      { label: '水庫蓄水', score: 61 },
    ],
  },
};
```

接著在 `renderVals()` 裡面建立目前議題對應的 radar 資料：

```js
const currentRadar = radarByTopic[s.topicType] || radarByTopic.policy;
```

---

## 四、在 `return` 裡加入 radar 資料

請在 `renderVals()` 的 `return { ... }` 裡加入：

```js
radarTag: currentRadar.tag,
radarTitle: currentRadar.title,
radarItems: currentRadar.items.map((item) => ({
  ...item,
  fillStyle: {
    width: `${item.score}%`,
  },
})),
```

這樣 HTML 裡就可以用：

```html
{{ radarTag }}
{{ radarTitle }}
{{ item.label }}
{{ item.score }}
{{ item.fillStyle }}
```

---

## 五、替換原本寫死的 HTML section

請找到原本這一段：

```html
<div>
  <div class="concern-proposal-tag">B / 共識雷達</div>
  <div class="concern-radar">
    <p class="concern-radar__title">跨立場都反覆提到的 6 個關鍵詞</p>
    ...
  </div>
</div>
```

把它完整替換成以下版本：

```html
<div>
  <div class="concern-proposal-tag">{{ radarTag }}</div>
  <div class="concern-radar">
    <p class="concern-radar__title">{{ radarTitle }}</p>

    <sc-for list="{{ radarItems }}" as="item" hint-placeholder-count="6">
      <div class="concern-radar__row">
        <span>{{ item.label }}</span>
        <span class="concern-radar__track">
          <span class="concern-radar__fill" style="{{ item.fillStyle }}"></span>
        </span>
        <span class="concern-radar__score">{{ item.score }}</span>
      </div>
    </sc-for>
  </div>
</div>
```

---

## 六、重要：weather 雖然是純事實型，也可以保留「災情關鍵雷達」

原本 UI 的設計邏輯是：

- 爭議型議題：有觀點光譜
- 純事實／淹水議題：沒有光譜，改成災情資訊流

但這次「共識雷達」本身不一定要等於「立場光譜」。  
因此在五議題模式中建議：

```txt
sports         可以顯示雷達：活動治理／審查／國安／平權
finance        可以顯示雷達：市場情緒／AI／ETF／風險
entertainment  可以顯示雷達：樂迷討論熱詞
policy         可以顯示雷達：公共政策爭點
weather        可以顯示雷達：民眾最關心的災情資訊
```

也就是說，`weather` 不做「支持／反對」光譜，但可以做「災情關鍵雷達」。

若目前 `weather` 模式預設不顯示 spectrum tab，請將這個雷達區塊放在 weather 的「災情資訊流」section 中，而不是放在「觀點光譜」tab。

---

## 七、如果目前還沒完成五模式切換，先保持相容

如果目前程式仍然是：

```js
topicType: 'disputed' | 'fact-only'
```

請先加一個相容 fallback：

```js
const normalizedTopicType =
  s.topicType === 'disputed' ? 'policy' :
  s.topicType === 'fact-only' ? 'weather' :
  s.topicType;

const currentRadar = radarByTopic[normalizedTopicType] || radarByTopic.policy;
```

這樣在尚未完成五模式切換前，也不會壞掉：

```txt
disputed  -> policy
fact-only -> weather
```

---

## 八、驗收標準

完成後請確認：

1. 頁面可以正常打開，console 沒有 syntax error。
2. `policy` 或原本 `disputed` 模式下，雷達顯示：
   - 參政權
   - 修法時機
   - 個案解套
   - 比例原則
   - 司法判決
   - 政黨攻防
3. `weather` 或原本 `fact-only` 模式下，雷達顯示：
   - 停班停課
   - 淹水路段
   - 雨量警戒
   - 交通中斷
   - 山區撤離
   - 水庫蓄水
4. 每個關鍵詞右側分數有正常顯示。
5. 每個 progress bar 寬度會依照分數變化。
6. 原本的 `.concern-radar` 視覺樣式維持不變。
7. 不要影響下方的「取捨橋接」、「立場分布」、「留言 Post」等 section。

---

## 九、建議修改順序

### Step 1：先找到 CSS，確認不要刪除

確認以下 class 還存在：

```css
.concern-radar
.concern-radar__title
.concern-radar__row
.concern-radar__track
.concern-radar__fill
.concern-radar__score
```

不要刪掉。

### Step 2：在 `renderVals()` 新增 `radarByTopic`

將 `radarByTopic` 放在 `const s = this.state;` 後面，或放在 comments / timeline data 前面。

### Step 3：建立 `normalizedTopicType` 與 `currentRadar`

加入：

```js
const normalizedTopicType =
  s.topicType === 'disputed' ? 'policy' :
  s.topicType === 'fact-only' ? 'weather' :
  s.topicType;

const currentRadar = radarByTopic[normalizedTopicType] || radarByTopic.policy;
```

### Step 4：在 `return` 加上 `radarTag`、`radarTitle`、`radarItems`

加入：

```js
radarTag: currentRadar.tag,
radarTitle: currentRadar.title,
radarItems: currentRadar.items.map((item) => ({
  ...item,
  fillStyle: {
    width: `${item.score}%`,
  },
})),
```

### Step 5：替換 HTML section

將原本寫死的 B / 共識雷達 HTML 替換為：

```html
<div>
  <div class="concern-proposal-tag">{{ radarTag }}</div>
  <div class="concern-radar">
    <p class="concern-radar__title">{{ radarTitle }}</p>

    <sc-for list="{{ radarItems }}" as="item" hint-placeholder-count="6">
      <div class="concern-radar__row">
        <span>{{ item.label }}</span>
        <span class="concern-radar__track">
          <span class="concern-radar__fill" style="{{ item.fillStyle }}"></span>
        </span>
        <span class="concern-radar__score">{{ item.score }}</span>
      </div>
    </sc-for>
  </div>
</div>
```

### Step 6：測試兩種舊模式

在目前還是雙模式時，請測試：

```js
topicType: 'disputed'
```

應顯示 policy 的雷達資料。

```js
topicType: 'fact-only'
```

應顯示 weather 的雷達資料。

### Step 7：之後接上五模式

等五模式切換完成後，直接讓：

```js
topicType: 'sports'
topicType: 'finance'
topicType: 'entertainment'
topicType: 'policy'
topicType: 'weather'
```

對應 `radarByTopic` 即可，不需要再改雷達元件本身。

---

## 十、最終預期結果

修改完成後，這個 section 不再是固定顯示：

```txt
供電穩定、核安風險、電價負擔、核廢處置、2050 淨零、資訊透明
```

而是會依照不同議題自動切換：

```txt
運動：活動安全、報名審查、城市形象、多元平權、國安疑慮、主辦透明
財經：AI 題材、台積電、ETF 資金、外資動向、高點風險、利率變化
娛樂：蔡依林、入圍名單、台語音樂、獨立樂團、音樂性、典禮表演
公共政策：參政權、修法時機、個案解套、比例原則、司法判決、政黨攻防
氣象：停班停課、淹水路段、雨量警戒、交通中斷、山區撤離、水庫蓄水
```

這樣後續五個議題模式可以共用同一個「共識雷達 / 關鍵雷達」元件，避免每個議題都重複寫死 HTML。
