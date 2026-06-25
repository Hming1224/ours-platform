# Ours 議題頁 UI 設計規格：由雙模式改為五議題模式

> 目的：根據目前 HTML / DC Prototype code，將原本的「爭議型 / 純事實型」雙模式，改成 **五個台灣相關重大議題模式**。  
> 使用對象：設計 Agent、前端 Agent、UI Prototype Agent。  
> 時間範圍：2026/04–2026/06。  
> 設計方向：保留目前 Ours 議題頁的視覺語言、手機版框架、Top Summary Card、三個 Tabs、Timeline、Sources、社群留言，但把資料與互動邏輯改為五議題資料驅動。

---

## 1. 目前 Prototype 的核心問題

目前 code 是以：

```js
topicType: 'disputed' // 'disputed' | 'fact-only'
```

控制兩種 demo 狀態：

1. **爭議爭點 / 有光譜**：核三重啟公投。
2. **純事實 / 無光譜**：凱米颱風淹水。

但現在需求要改成：

```js
activeTopicId: 'sports' | 'finance' | 'entertainment' | 'policy' | 'weather'
```

也就是 **五個議題模式**，每個模式都要有完整議題頁內容，而不是只用 `disputed` 和 `fact-only` 決定畫面。

---

## 2. 五個模式總覽

| Mode | 議題類型 | 議題名稱 | 建議 UI 類型 | 是否使用立場光譜 |
|---|---|---|---|---|
| `sports` | 運動 | 高雄亞洲同志運動會爭議 | 多方觀點 / 治理爭議 | 是 |
| `finance` | 財經 | 台股 AI 熱潮與劇烈波動 | 市場情緒 / 風險觀點 | 不用傳統支持反對，改市場情緒 |
| `entertainment` | 娛樂 | 第 37 屆金曲獎入圍熱議 | 文化討論 / 樂迷觀點 | 不用政治光譜，改討論面向 |
| `policy` | 公共政策 | 選罷法修正三讀爭議 | 政策立場光譜 | 是 |
| `weather` | 氣象 | 0625 颱風外圍環流與西南風豪雨 | 災情資訊流 | 否 |

---

## 3. Demo Controller 改版方向

### 3.1 原本雙按鈕

目前是：

```html
<button>🔴 爭議爭點 (有光譜)</button>
<button>🟢 純事實/淹水 (無光譜)</button>
```

### 3.2 改成五個議題切換 chips

建議改為橫向 scroll chips：

```text
Demo 模擬切換：
[運動] [財經] [娛樂] [公共政策] [氣象]
```

視覺建議：

- 保留目前 controller 白底、圓角、陰影。
- 五個 chips 可橫向滑動，避免手機寬度不足。
- Active chip 使用該議題主色。
- 每個議題對應不同 category color，但整體仍維持 Ours 暖色系。

### 3.3 建議色彩

```js
const topicTheme = {
  sports: '#C0432B',        // 紅棕：爭議、國安、活動治理
  finance: '#B07A2E',       // 金棕：市場、資金、投資
  entertainment: '#8158B0', // 紫色：文化、娛樂、獎項
  policy: '#3F6F9F',        // 藍色：制度、法案、公共政策
  weather: '#2F8F5B'        // 綠色：防災、即時資訊
};
```

---

## 4. State 結構調整建議

### 4.1 原本 state

```js
state = {
  tab: 'spectrum',
  sourceFilter: 'all',
  topicType: 'disputed',
  open: { n5: true, n104: true },
};
```

### 4.2 改成五議題 state

```js
state = {
  activeTopicId: 'policy',
  tab: 'trend',
  sourceFilter: 'all',
  open: {},
  bookmarked: false,
  following: false,
};
```

### 4.3 Tabs 命名建議

目前 code 使用：

```js
tab: 'spectrum' | 'timeline' | 'sources'
```

建議改為語意更通用：

```js
tab: 'trend' | 'timeline' | 'sources'
```

因為五個議題不是每個都適合叫「觀點光譜」。

對應中文：

```text
trend = 話題趨勢
timeline = 議題時間軸
sources = 新聞來源
```

---

## 5. 五議題資料結構設計

建議把所有內容集中成：

```js
const TOPICS = {
  sports: {...},
  finance: {...},
  entertainment: {...},
  policy: {...},
  weather: {...}
};
```

每個 topic 建議包含：

```js
{
  id: 'sports',
  category: '運動',
  themeColor: '#C0432B',
  status: '後續觀察',
  title: '高雄亞洲同志運動會爭議：運動賽事、國安疑慮與城市治理交會',
  shortTitle: '亞洲同志運動會爭議',
  trackingCount: '8,420',
  mediaCount: 12,
  reportCount: 68,
  updatedAt: '更新於 2 小時前',
  summaryMode: 'debate' | 'market' | 'culture' | 'policy' | 'disaster',
  summaryBlocks: [...],
  hashtags: [...],
  trend: {...},
  timeline: [...],
  sources: [...],
  comments: [...]
}
```

---

# 6. 五個議題完整 UI 內容

---

## 6.1 Mode：sports｜運動

### Top Bar

```js
category: '運動'
shortTitle: '亞洲同志運動會爭議'
status: '後續觀察'
statusColor: '#C0432B'
```

### Top Summary Card

```js
title: '高雄亞洲同志運動會爭議：運動賽事、國安疑慮與城市治理交會'
trackingCount: '8,420'
mediaCount: 12
reportCount: 68
updatedAt: '更新於 2 小時前'
```

### 30 秒快速看懂

```js
summaryBlocks: [
  {
    label: '發生什麼事',
    tone: 'neutral',
    text: '2026 亞洲同志運動會於 4/30–5/4 在高雄舉行，賽前爆出中國選手報名人數暴增，並傳出部分資料疑似異常。'
  },
  {
    label: '為什麼重要',
    tone: 'green',
    text: '原本屬於多元平權與運動交流的賽事，延伸成國安、入境審查、城市治理與活動透明度的討論。'
  },
  {
    label: '目前爭議',
    tone: 'red',
    text: '支持者擔心政治疑慮蓋過平權與體育交流；質疑方則認為大量報名與資料異常必須被嚴格審查。'
  },
  {
    label: '尚未釐清',
    tone: 'gray',
    text: '報名資料異常的實際比例、主辦單位審核流程、入境登錄暫緩後的後續處理仍需說明。'
  }
]
```

### Hashtags

```js
hashtags: ['#亞洲同志運動會', '#高雄', '#運動賽事治理', '#國安疑慮', '#多元平權']
```

### 話題趨勢 UI 類型

使用 `trendLayout: 'stance-spectrum'`。

### 各方共同在乎的事

```js
commonGround: {
  question: '各方都在問：如何在開放交流、賽事安全與城市治理之間取得平衡？',
  clusters: [
    {
      label: '賽事與城市形象',
      items: ['多元平權', '國際交流', '高雄城市品牌']
    },
    {
      label: '安全與治理',
      items: ['入境審查', '報名資料真實性', '主辦透明度']
    }
  ],
  takeaway: '分歧不在於是否支持運動和平權，而在於活動治理與安全審查是否足夠透明。'
}
```

### 立場分布

```js
stanceDistribution: [
  { label: '重視交流與平權', value: 38, color: '#B07A2E' },
  { label: '要求補充資訊', value: 27, color: '#6B7A85' },
  { label: '主張嚴格審查', value: 35, color: '#8158B0' }
]
```

### 分類留言

```js
comments: [
  {
    stance: 'support',
    name: '高雄活動志工',
    handle: '@kaohsiung_vol',
    text: '支持平權賽事，也希望外界不要只用政治角度看待所有參賽者。但主辦單位確實要把報名審查說清楚。',
    likes: 824,
    replies: 36
  },
  {
    stance: 'neutral',
    name: '城市觀察筆記',
    handle: '@city_note',
    text: '這件事真正需要討論的是大型活動治理：報名、身份確認、入境流程、地方政府監督，不能只停在口水戰。',
    likes: 512,
    replies: 18
  },
  {
    stance: 'oppose',
    name: '資安小編',
    handle: '@sec_watch',
    text: '如果真的有大量資料異常，暫緩登錄是合理的。國際活動越開放，審核機制就越要可信。',
    likes: 690,
    replies: 44
  }
]
```

### Timeline

```js
timeline: [
  {
    date: '2026.04.27',
    tag: '重大事件',
    title: '媒體報導中國選手報名人數暴增',
    desc: '報導指出中國選手報名達 834 人，約占總報名數四成以上，並傳出部分資料疑似異常。'
  },
  {
    date: '2026.04.27',
    tag: '政府回應',
    title: '高雄市運發局要求主辦單位說明',
    desc: '市府表示已要求主辦單位補充說明，並暫緩相關移民署登錄作業。'
  },
  {
    date: '2026.04.30',
    tag: '賽事開始',
    title: '亞洲同志運動會於高雄登場',
    desc: '賽事於 4/30–5/4 舉行，活動本身仍以多元平權與運動交流為主軸。'
  },
  {
    date: '後續觀察',
    tag: '待追蹤',
    title: '活動治理與入境審查流程檢討',
    desc: '後續可追蹤主辦單位報告、地方政府檢討與未來大型活動審核機制。'
  }
]
```

### Sources

```js
sources: [
  { name: '中央社', mono: '央', stance: 'neutral', cred: 'excellent', latest: '中國選手報名暴增，高雄市府要求主辦說明', count: 3, time: '2026/04/27' },
  { name: '高雄市政府／運發局', mono: '高', stance: 'neutral', cred: 'official', latest: '市府說明活動審查與暫緩登錄作業', count: 1, time: '2026/04/27' },
  { name: '社群討論／Threads', mono: '社', stance: 'neutral', cred: 'verify', latest: '網友討論活動治理、平權與國安疑慮', count: 20, time: '持續更新' }
]
```

---

## 6.2 Mode：finance｜財經

### Top Bar

```js
category: '財經'
shortTitle: '台股 AI 行情'
status: '持續發展'
statusColor: '#B07A2E'
```

### Top Summary Card

```js
title: '台股 AI 熱潮與劇烈波動：一年飆漲後挑戰 4 萬點'
trackingCount: '15,860'
mediaCount: 16
reportCount: 142
updatedAt: '更新於 1 小時前'
```

### 30 秒快速看懂

```js
summaryBlocks: [
  {
    label: '發生什麼事',
    tone: 'neutral',
    text: '台股自 2025 年 4 月低點反彈至 2026 年 4 月高點，一年大漲超過 2 萬點，AI 供應鏈與 ETF 資金成為市場焦點。'
  },
  {
    label: '為什麼重要',
    tone: 'green',
    text: '台灣資本市場與半導體、AI 伺服器供應鏈高度連動，股市行情也影響散戶投資、退休金與 ETF 熱潮。'
  },
  {
    label: '目前爭議',
    tone: 'red',
    text: '樂觀派認為 AI 基本面仍強；保守派擔心漲幅過快、估值偏高，國際利率與地緣風險可能引發修正。'
  },
  {
    label: '尚未釐清',
    tone: 'gray',
    text: 'AI 需求能否持續、外資是否續買、Fed 利率政策與國際情勢，都會影響下半年走勢。'
  }
]
```

### Hashtags

```js
hashtags: ['#台股', '#AI行情', '#主動式ETF', '#資金行情', '#投資風險']
```

### 話題趨勢 UI 類型

使用 `trendLayout: 'market-sentiment'`。

不要顯示「支持 / 反對」，改成：

```js
sentimentDistribution: [
  { label: '偏多：AI 基本面續強', value: 46, color: '#B07A2E' },
  { label: '觀望：等財報與利率', value: 31, color: '#6B7A85' },
  { label: '偏空：估值與風險升高', value: 23, color: '#8158B0' }
]
```

### 共通關切

```js
commonGround: {
  question: '市場共同關注：AI 成長是真需求，還是資金行情推高估值？',
  clusters: [
    {
      label: '基本面',
      items: ['AI 伺服器需求', '半導體供應鏈', '企業財報']
    },
    {
      label: '市場風險',
      items: ['外資動向', '利率政策', '地緣政治']
    }
  ],
  takeaway: '分歧不在是否看好 AI，而在於目前價格是否已經提前反映太多樂觀預期。'
}
```

### 熱門留言

```js
comments: [
  {
    stance: 'support',
    name: 'ETF 定期定額派',
    handle: '@etf_monthly',
    text: 'AI 不是短線題材，台灣供應鏈真的吃得到訂單。只是現在追高要分批，不要一次 all in。',
    likes: 1320,
    replies: 58
  },
  {
    stance: 'neutral',
    name: '財報派觀察',
    handle: '@earnings_watch',
    text: '先看下季財報和外資動向。現在市場太容易被一句利率或一則國際新聞影響。',
    likes: 746,
    replies: 22
  },
  {
    stance: 'oppose',
    name: '韭菜保護協會',
    handle: '@risk_first',
    text: '一年漲一倍多，大家都說這次不一樣，但風險永遠都是在最熱的時候被忽略。',
    likes: 980,
    replies: 73
  }
]
```

### Timeline

```js
timeline: [
  {
    date: '2025.04',
    tag: '市場低點',
    title: '台股受對等關稅衝擊回落',
    desc: '台股低點落在 17306.97 點，成為後續一年反彈的比較基準。'
  },
  {
    date: '2026.04.23',
    tag: '重大事件',
    title: '台股高點來到 38921.95 點',
    desc: '一年大漲超過 2 萬點，AI 供應鏈、ETF 資金與外資買盤成為市場主因。'
  },
  {
    date: '2026.06.12',
    tag: '市場波動',
    title: '台股單日大漲逾千點',
    desc: '受國際情勢與美股反彈激勵，台股終場大漲 1019.58 點。'
  },
  {
    date: '後續觀察',
    tag: '待追蹤',
    title: 'AI 財報、Fed 利率與地緣政治',
    desc: '下半年市場將持續關注 AI 需求能否支撐高估值。'
  }
]
```

### Sources

```js
sources: [
  { name: '中央社財經', mono: '央', stance: 'neutral', cred: 'excellent', latest: '台股一年大漲逾 2 萬點，AI 與資金行情推升', count: 8, time: '2026/04/23' },
  { name: '證交所／櫃買中心', mono: '證', stance: 'neutral', cred: 'official', latest: '市場成交量、指數與類股資料', count: 4, time: '持續更新' },
  { name: '法人投顧分析', mono: '法', stance: 'support', cred: 'stance', latest: 'AI 供應鏈仍具長期成長動能', count: 12, time: '2026/06' },
  { name: '社群投資討論', mono: '社', stance: 'neutral', cred: 'verify', latest: 'ETF、AI 股與高價股成為散戶討論焦點', count: 50, time: '持續更新' }
]
```

---

## 6.3 Mode：entertainment｜娛樂

### Top Bar

```js
category: '娛樂'
shortTitle: '第 37 屆金曲獎'
status: '典禮前熱議'
statusColor: '#8158B0'
```

### Top Summary Card

```js
title: '第 37 屆金曲獎登場前熱議：蔡依林 9 項入圍、台語與樂團作品受關注'
trackingCount: '21,300'
mediaCount: 20
reportCount: 156
updatedAt: '更新於 30 分鐘前'
```

### 30 秒快速看懂

```js
summaryBlocks: [
  {
    label: '發生什麼事',
    tone: 'neutral',
    text: '第 37 屆金曲獎將於 2026/06/27 在台北小巨蛋登場，入圍名單於 5 月公布，蔡依林以 9 項入圍成為焦點。'
  },
  {
    label: '為什麼重要',
    tone: 'green',
    text: '金曲獎不只是娛樂典禮，也常成為台灣流行音樂、台語創作、獨立樂團與文化認同的討論場。'
  },
  {
    label: '目前討論',
    tone: 'purple',
    text: '樂迷關注蔡依林能否大滿貫，也有人討論金曲獎應更重視傳唱度、音樂性，或扶植多語言與獨立音樂。'
  },
  {
    label: '後續觀察',
    tone: 'gray',
    text: '典禮得獎結果、表演舞台、得獎感言與社群二創，將在典禮當晚帶動第二波討論。'
  }
]
```

### Hashtags

```js
hashtags: ['#金曲獎', '#蔡依林', '#台灣流行音樂', '#台語音樂', '#獨立樂團']
```

### 話題趨勢 UI 類型

使用 `trendLayout: 'culture-clusters'`。

不要用支持反對，而是用文化討論分群：

```js
cultureDistribution: [
  { label: '主流歌手與獎項預測', value: 44, color: '#B07A2E' },
  { label: '音樂性與評審標準', value: 28, color: '#6B7A85' },
  { label: '台語／獨立音樂能見度', value: 28, color: '#8158B0' }
]
```

### 共通關切

```js
commonGround: {
  question: '樂迷共同關注：金曲獎應該獎勵傳唱度、音樂性，還是文化代表性？',
  clusters: [
    {
      label: '典禮與明星',
      items: ['入圍名單', '得獎預測', '舞台表演']
    },
    {
      label: '音樂與文化',
      items: ['音樂性', '台語創作', '獨立樂團']
    }
  ],
  takeaway: '娛樂討論的分歧不在喜不喜歡金曲獎，而在於大家期待它代表主流流行、專業評選，還是文化多樣性。'
}
```

### 熱門留言

```js
comments: [
  {
    stance: 'support',
    name: 'Jolin 粉但理性',
    handle: '@pop_stage',
    text: '蔡依林 9 項入圍真的不意外，作品完整度跟舞台概念都很強，但也希望其他類型音樂被看見。',
    likes: 2420,
    replies: 180
  },
  {
    stance: 'neutral',
    name: '耳機派樂評',
    handle: '@music_review',
    text: '金曲獎每年都在吵傳唱度和音樂性，其實這也是它有趣的地方：它不是人氣榜，而是文化現場。',
    likes: 1180,
    replies: 64
  },
  {
    stance: 'oppose',
    name: '獨立場館常客',
    handle: '@livehouse_kid',
    text: '希望大家不要只看大咖。台語、樂團、獨立音樂那幾個獎項，常常才是台灣音樂真正有生命力的地方。',
    likes: 960,
    replies: 39
  }
]
```

### Timeline

```js
timeline: [
  {
    date: '2026.04.29',
    tag: '典禮資訊',
    title: '金曲獎公布典禮時間、地點與主視覺',
    desc: '第 37 屆金曲獎確定於台北小巨蛋舉行，主視覺與典禮資訊陸續公開。'
  },
  {
    date: '2026.05.13',
    tag: '重大事件',
    title: '第 37 屆金曲獎入圍名單公布',
    desc: '蔡依林以 9 項入圍成為焦點，Tizzy Bac、告五人、蕭煌奇等音樂人也受關注。'
  },
  {
    date: '2026.06.10–06.12',
    tag: '人物報導',
    title: '入圍音樂人訪問帶動第二波討論',
    desc: '多位入圍者受訪，延伸出創作背景、語言文化與音樂產業討論。'
  },
  {
    date: '2026.06.27',
    tag: '待發生',
    title: '金曲獎於台北小巨蛋登場',
    desc: '得獎結果、舞台演出與社群討論將成為典禮當晚焦點。'
  }
]
```

### Sources

```js
sources: [
  { name: '金曲獎官方／文化部', mono: '金', stance: 'neutral', cred: 'official', latest: '第 37 屆金曲獎典禮資訊與入圍名單', count: 5, time: '2026/05–06' },
  { name: '中央社影劇', mono: '央', stance: 'neutral', cred: 'excellent', latest: '蔡依林 9 項入圍，金曲獎入圍名單公布', count: 10, time: '2026/05/13' },
  { name: '娛樂媒體／樂評專欄', mono: '評', stance: 'neutral', cred: 'stance', latest: '入圍預測、得獎呼聲與音樂性分析', count: 18, time: '持續更新' },
  { name: '粉絲社群', mono: '粉', stance: 'neutral', cred: 'verify', latest: '入圍名單、舞台期待與應援討論', count: 80, time: '持續更新' }
]
```

---

## 6.4 Mode：policy｜公共政策

### Top Bar

```js
category: '公共政策'
shortTitle: '選罷法修正爭議'
status: '持續發展'
statusColor: '#3F6F9F'
```

### Top Summary Card

```js
title: '選罷法修正三讀：緩刑者參選限制放寬，引發「高虹安條款」爭議'
trackingCount: '18,640'
mediaCount: 24
reportCount: 186
updatedAt: '更新於 2 小時前'
```

### 30 秒快速看懂

```js
summaryBlocks: [
  {
    label: '發生什麼事',
    tone: 'neutral',
    text: '立法院於 2026/06/12 三讀修正《公職人員選舉罷免法》，放寬部分遭宣告緩刑或得易服社會勞動者的參選資格限制。'
  },
  {
    label: '為什麼重要',
    tone: 'green',
    text: '修法牽涉人民參政權、候選人資格、司法判決與選舉公平性，是制度設計與政治信任問題。'
  },
  {
    label: '目前爭議',
    tone: 'red',
    text: '支持者認為應保障參政權；反對者質疑修法時間點敏感，可能是為特定政治人物解套。'
  },
  {
    label: '尚未釐清',
    tone: 'gray',
    text: '法案實際適用範圍、是否影響特定個案、未來是否引發釋憲或再次修法，仍待觀察。'
  }
]
```

### Hashtags

```js
hashtags: ['#選罷法', '#參選資格', '#高虹安條款', '#立法院', '#公共政策']
```

### 話題趨勢 UI 類型

使用 `trendLayout: 'stance-spectrum'`。

### 共通關切

```js
commonGround: {
  question: '各方都在問：參政權保障與候選人資格限制，界線應該畫在哪裡？',
  clusters: [
    {
      label: '制度原則',
      items: ['參政權', '比例原則', '法律明確性']
    },
    {
      label: '政治信任',
      items: ['修法時機', '個案疑慮', '選舉公平']
    }
  ],
  takeaway: '分歧不只在法條內容，也在於社會是否相信這不是為特定個案服務。'
}
```

### 立場分布

```js
stanceDistribution: [
  { label: '支持修法', value: 32, color: '#B07A2E' },
  { label: '要求補充說明', value: 24, color: '#6B7A85' },
  { label: '質疑個案修法', value: 44, color: '#8158B0' }
]
```

### 熱門留言

```js
comments: [
  {
    stance: 'support',
    name: '法律系路人',
    handle: '@law_citizen',
    text: '緩刑和重罪不能混在一起看，參政權是基本權利，限制資格應該符合比例原則。',
    likes: 760,
    replies: 52
  },
  {
    stance: 'neutral',
    name: '法案追蹤器',
    handle: '@bill_tracker',
    text: '問題不只在修不修，而是條文適用範圍、修法理由和時間點都要說清楚，不然一定會被政治化。',
    likes: 980,
    replies: 48
  },
  {
    stance: 'oppose',
    name: '新竹觀察',
    handle: '@hsinchu_watch',
    text: '如果不是為特定人，為什麼剛好現在修？公共政策最怕看起來像個案服務。',
    likes: 1540,
    replies: 130
  }
]
```

### Timeline

```js
timeline: [
  {
    date: '2026.06.12',
    tag: '重大事件',
    title: '立法院三讀修正選罷法',
    desc: '修法放寬部分遭宣告緩刑或得易服社會勞動者的候選人資格限制。'
  },
  {
    date: '2026.06.12',
    tag: '當事人回應',
    title: '高虹安回應外界質疑',
    desc: '高虹安受訪時呼籲外界勿過度政治解讀。'
  },
  {
    date: '2026.06.13',
    tag: '政黨攻防',
    title: '民進黨質疑，民眾黨稱必要改革',
    desc: '民進黨質疑修法為特定人士；民眾黨則表示這是必要改革。'
  },
  {
    date: '後續觀察',
    tag: '待追蹤',
    title: '修法適用案例與可能法律爭議',
    desc: '後續需觀察是否引發釋憲、再次修法或選舉資格爭議。'
  }
]
```

### Sources

```js
sources: [
  { name: '中央社政治', mono: '央', stance: 'neutral', cred: 'excellent', latest: '立法院三讀修正選罷法，高虹安籲勿政治解讀', count: 6, time: '2026/06/12' },
  { name: '立法院議事資料', mono: '立', stance: 'neutral', cred: 'official', latest: '選罷法修正條文與三讀紀錄', count: 2, time: '2026/06/12' },
  { name: '政黨聲明', mono: '黨', stance: 'neutral', cred: 'stance', latest: '各黨針對修法提出不同立場', count: 8, time: '2026/06/13' },
  { name: '社群討論', mono: '社', stance: 'neutral', cred: 'verify', latest: '網友聚焦是否為特定人士量身打造', count: 60, time: '持續更新' }
]
```

---

## 6.5 Mode：weather｜氣象

### Top Bar

```js
category: '防災與即時災情'
shortTitle: '0625 豪雨事件'
status: '警戒中'
statusColor: '#2F8F5B'
```

### Top Summary Card

```js
title: '0625 颱風外圍環流與西南風豪雨：屏東 3 天雨量上看 800 毫米'
trackingCount: '9,760'
mediaCount: 18
reportCount: 92
updatedAt: '更新於 10 分鐘前'
```

### 30 秒快速看懂

```js
summaryBlocks: [
  {
    label: '最新狀況',
    tone: 'yellow',
    text: '中央氣象署因應 2026/06/25 颱風外圍環流及西南風豪雨事件，啟動劇烈豪雨作業。'
  },
  {
    label: '雨量預估',
    tone: 'red',
    text: '高屏山區未來 24 小時雨量可達 200–340 毫米，屏東縣平地未來 3 天總雨量上看 800 毫米。'
  },
  {
    label: '官方應變',
    tone: 'green',
    text: '地方政府需即時發布停班停課、道路封閉、山區警戒、撤離與淹水資訊。'
  },
  {
    label: '安全提醒',
    tone: 'gray',
    text: '避免前往山區溪流與低窪地區，留意長輩、兒童、寵物與通勤安全。'
  }
]
```

### Hashtags

```js
hashtags: ['#豪雨', '#颱風外圍環流', '#西南風', '#屏東', '#防災資訊']
```

### 話題趨勢 UI 類型

使用 `trendLayout: 'disaster-feed'`。

**不要顯示立場光譜、支持反對、立場分布。**

改成四個災情資訊區塊：

```js
disasterBlocks: [
  {
    label: '官方警戒',
    items: ['氣象署豪雨特報', '地方政府停班停課', '災害應變中心資訊']
  },
  {
    label: '即時災情',
    items: ['淹水路段', '道路封閉', '土石流警戒', '撤離資訊']
  },
  {
    label: '民眾提問',
    items: ['是否停班停課', '哪裡淹水', '交通是否正常']
  },
  {
    label: '防災提醒',
    items: ['避免前往山區溪流', '低窪地區注意積水', '留意長輩與寵物安全']
  }
]
```

### 現場留言

```js
comments: [
  {
    type: '現場回報',
    name: '屏東居民',
    handle: '@pt_local',
    text: '市區雨勢一陣一陣變很大，低窪路段已經開始積水，大家騎車真的要慢。',
    likes: 186,
    replies: 22
  },
  {
    type: '交通提醒',
    name: '通勤車友',
    handle: '@road_watch',
    text: '往山區方向部分路段已經開始管制，建議不要硬開上去，等官方公告比較安全。',
    likes: 154,
    replies: 16
  },
  {
    type: '資訊彙整',
    name: '家長群整理',
    handle: '@school_parent',
    text: '很多人都在問明天停班停課，建議直接看縣市政府公告，不要只看社群截圖。',
    likes: 201,
    replies: 31
  }
]
```

### Timeline

```js
timeline: [
  {
    date: '2026.05.31',
    tag: '天氣趨勢',
    title: '氣象署預估 6/4 起西南風增強',
    desc: '預估降雨可能持續至 6 月中旬，提醒中南部留意長時間降雨。'
  },
  {
    date: '2026.06.25 11:00',
    tag: '重大事件',
    title: '中央氣象署啟動劇烈豪雨作業',
    desc: '因應颱風外圍環流及西南風豪雨事件，氣象署啟動劇烈豪雨作業。'
  },
  {
    date: '2026.06.25',
    tag: '高風險區',
    title: '高屏山區與屏東平地列高雨量風險',
    desc: '高屏山區 24 小時雨量可達 200–340 毫米，屏東平地 3 天總雨量上看 800 毫米。'
  },
  {
    date: '後續觀察',
    tag: '待追蹤',
    title: '淹水、土石流、道路中斷與農損',
    desc: '後續需追蹤災情回報、水庫蓄水、山區道路與農業損失。'
  }
]
```

### Sources

```js
sources: [
  { name: '中央氣象署', mono: '氣', stance: 'neutral', cred: 'official', latest: '劇烈豪雨作業、雨量預估與豪雨特報', count: 6, time: '2026/06/25' },
  { name: '中央社生活', mono: '央', stance: 'neutral', cred: 'excellent', latest: '屏東 3 天雨量上看 800 毫米，高屏山區豪雨警戒', count: 5, time: '2026/06/25' },
  { name: '地方政府公告', mono: '府', stance: 'neutral', cred: 'official', latest: '停班停課、道路封閉、撤離與災防資訊', count: 10, time: '持續更新' },
  { name: '民眾回報／社群貼文', mono: '社', stance: 'neutral', cred: 'verify', latest: '淹水路段與現場狀況回報，需交叉查證', count: 40, time: '即時更新' }
]
```

---

# 7. Render 邏輯修改建議

## 7.1 取得目前議題

在 `renderVals()` 一開始加入：

```js
const topic = TOPICS[s.activeTopicId];
const theme = topic.themeColor;
```

所有原本寫死的：

```js
isDisputedType
isFactOnlyType
```

改為根據：

```js
topic.trendLayout
```

決定 UI。

---

## 7.2 Tabs 顯示邏輯

五個議題都保留三個 Tabs：

```text
話題趨勢｜議題時間軸｜新聞來源
```

不要再針對 fact-only 隱藏第一個 tab。  
氣象議題的第一個 tab 仍然叫「話題趨勢」，但內容顯示「災情資訊流＋現場留言」。

```js
isTrend: s.tab === 'trend'
isTimeline: s.tab === 'timeline'
isSources: s.tab === 'sources'
```

---

## 7.3 話題趨勢內部 layout 判斷

```js
if (topic.trendLayout === 'stance-spectrum') {
  render commonGround + stanceDistribution + stanceComments
}

if (topic.trendLayout === 'market-sentiment') {
  render commonGround + sentimentDistribution + marketComments
}

if (topic.trendLayout === 'culture-clusters') {
  render commonGround + cultureDistribution + cultureComments
}

if (topic.trendLayout === 'disaster-feed') {
  render disasterBlocks + liveComments
}
```

---

# 8. 需要替換的 UI 文案

## 8.1 Tab 名稱

原本：

```html
觀點光譜｜議題時間軸｜新聞來源
```

改為：

```html
話題趨勢｜議題時間軸｜新聞來源
```

原因：五個模式不是每個都有光譜，使用「話題趨勢」較通用。

---

## 8.2 AI Summary Badge

原本依照 disputed / fact-only 顯示：

```text
由 AI 整理 · 觀點共識
由 AI 整理 · 災情速報
```

改成資料驅動：

```js
summaryBadge: {
  sports: '由 AI 整理 · 多方觀點',
  finance: '由 AI 整理 · 市場情緒',
  entertainment: '由 AI 整理 · 娛樂熱議',
  policy: '由 AI 整理 · 政策爭點',
  weather: '由 AI 整理 · 災情速報'
}
```

---

## 8.3 Sources 篩選 chip

### 政策、運動：可用立場篩選

```text
全部｜支持／重視交流｜中立／要求說明｜反對／嚴格審查
```

### 財經：改市場情緒篩選

```text
全部｜偏多｜觀望｜偏空
```

### 娛樂：改討論面向篩選

```text
全部｜主流歌手｜音樂性｜台語／獨立
```

### 氣象：只保留來源類型篩選

```text
全部｜官方｜媒體｜民眾回報
```

---

# 9. Agent 實作指令

請前端 / 設計 Agent 依照以下方向修改目前 Prototype：

1. **保留現有整體視覺風格**：暖米色背景、Noto Serif TC 標題、Noto Sans TC 內文、IBM Plex Mono metadata、圓角卡片、手機版容器。
2. **將 Demo Controller 從雙按鈕改為五個議題 chips**：運動、財經、娛樂、公共政策、氣象。
3. **移除 `topicType: disputed | fact-only` 的概念**，改成 `activeTopicId` 對應五個 topic data。
4. **將第一個 tab 從「觀點光譜」改名為「話題趨勢」**，讓所有議題都能共用。
5. **每個議題都共用三個 tabs**：話題趨勢、議題時間軸、新聞來源。
6. **話題趨勢內容依 `trendLayout` 變化**：
   - `stance-spectrum`：運動、公共政策。
   - `market-sentiment`：財經。
   - `culture-clusters`：娛樂。
   - `disaster-feed`：氣象。
7. **Top Summary Card 所有資料都從 topic data 讀取**：標題、分類、摘要四格、hashtags、追蹤人數、媒體數、報導數、更新時間。
8. **Timeline 改為讀取 `topic.timeline`**，每個議題都有自己的事件節點。
9. **Sources 改為讀取 `topic.sources`**，並根據不同議題顯示不同可信度與分類篩選。
10. **Comments 改為讀取 `topic.comments`**，氣象議題使用「現場留言」而不是立場分類留言。
11. **保留互動效果**：tab 切換、timeline 展開、收藏、來源篩選。
12. **不要再顯示核三公投與凱米颱風示範資料**，全部替換為本文件的五個台灣議題資料。

---

# 10. 建議資料命名範例

```js
const TOPICS = {
  sports: SPORTS_TOPIC,
  finance: FINANCE_TOPIC,
  entertainment: ENTERTAINMENT_TOPIC,
  policy: POLICY_TOPIC,
  weather: WEATHER_TOPIC,
};
```

每個 topic 至少包含：

```js
{
  id,
  category,
  shortTitle,
  title,
  themeColor,
  status,
  trackingCount,
  mediaCount,
  reportCount,
  updatedAt,
  summaryBadge,
  summaryBlocks,
  hashtags,
  trendLayout,
  commonGround,
  distribution,
  disasterBlocks,
  comments,
  timeline,
  sources,
  sourceFilters
}
```

---

# 11. 可信度標籤設計

```js
const credibilityMeta = {
  official: {
    label: '官方來源',
    color: '#2F8F5B',
    bg: '#E8F4ED',
    bd: '#B8E0CA'
  },
  excellent: {
    label: '可信度高',
    color: '#2F8F5B',
    bg: '#E8F4ED',
    bd: '#B8E0CA'
  },
  stance: {
    label: '立場／觀點報導',
    color: '#B07A2E',
    bg: '#FBF3E2',
    bd: '#EAD9B8'
  },
  verify: {
    label: '待交叉查證',
    color: '#E05A47',
    bg: '#FCECEB',
    bd: '#F2C4C1'
  }
};
```

---

# 12. 設計注意事項

## 12.1 氣象議題不要硬做光譜

氣象災害不是價值爭議，重點是：

- 官方資訊是否即時。
- 災情回報是否可信。
- 使用者所在區域是否安全。
- 交通、停班停課、撤離資訊是否清楚。

因此氣象模式請使用「資訊流」而不是「支持 / 反對」。

## 12.2 財經議題不要用政治立場

財經議題更適合：

- 偏多。
- 觀望。
- 偏空。

留言分類也應該是投資情緒，而不是支持或反對。

## 12.3 娛樂議題適合輕量化

娛樂議題的社群互動通常更高，但嚴肅性較低。建議：

- 留言區可以更像 Threads / 粉絲社群。
- 多用「得獎預測」、「舞台期待」、「樂迷觀點」。
- Sources 可呈現官方、新聞、樂評、粉絲討論的差異。

## 12.4 公共政策與運動爭議要注意中立呈現

這兩類容易引發立場對立，因此：

- 不要讓 UI 看起來偏向某一方。
- 顏色不要使用過度政黨化的配色。
- 文案用「支持修法／質疑修法」而不是「正確／錯誤」。
- 社群留言要標示「AI assisted」或「依主要立場分類」。

---

# 13. 最終畫面應呈現的五種狀態

```text
[運動]
高雄亞洲同志運動會爭議
話題趨勢：多元平權 vs 國安審查 vs 活動治理

[財經]
台股 AI 熱潮與劇烈波動
話題趨勢：偏多 / 觀望 / 偏空市場情緒

[娛樂]
第 37 屆金曲獎登場前熱議
話題趨勢：主流歌手 / 音樂性 / 台語與獨立音樂

[公共政策]
選罷法修正三讀爭議
話題趨勢：支持修法 / 要求補充說明 / 質疑個案修法

[氣象]
0625 颱風外圍環流與西南風豪雨
話題趨勢：官方警戒 / 即時災情 / 民眾提問 / 防災提醒
```

---

# 14. 給 Agent 的一句話任務

請將目前 Ours 議題頁 prototype 從「爭議型 / 純事實型」雙模式，重構為「五個台灣議題模式」：運動、財經、娛樂、公共政策、氣象。保留既有視覺風格與三 tabs 架構，但將所有標題、摘要、hashtags、話題趨勢、留言、時間軸與新聞來源改成資料驅動，並依各議題特性切換話題趨勢 layout。
