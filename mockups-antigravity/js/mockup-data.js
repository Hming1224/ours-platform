"use strict";

window.OursMockup = (() => {
  function createRenderVals(component, state) {
    const s = state;
    const TOPICS = {
      sports: {
        id: 'sports', category: '運動', themeColor: '#C0432B', status: '後續觀察',
        title: '高雄亞洲同志運動會爭議：運動賽事、國安疑慮與城市治理交會',
        shortTitle: '亞洲同志運動會爭議', trackingCount: '8,420', mediaCount: 12, reportCount: 76,
        updatedAt: '更新於 2 小時前', summaryMode: 'debate', trendLayout: 'stance-spectrum',
        summaryBlocks: [
          { label: '發生什麼事', tone: 'neutral', text: '2026 亞洲同志運動會於 4/30–5/4 在高雄舉行，賽前爆出中國選手報名人數暴增，並傳出部分資料疑似異常。' },
          { label: '為什麼重要', tone: 'green', text: '原本屬於多元平權與運動交流的賽事，延伸成國安、入境審查、城市治理與活動透明度的討論。' },
          { label: '目前爭議', tone: 'red', text: '支持者擔心政治疑慮蓋過平權與體育交流；質疑方則認為大量報名與資料異常必須被嚴格審查。' },
          { label: '尚未釐清', tone: 'gray', text: '報名資料異常的實際比例、主辦單位審核流程、入境登錄暫緩後的後續處理仍需說明。' }
        ],
        hashtags: ['#亞洲同志運動會', '#高雄', '#運動賽事治理', '#國安疑慮', '#多元平權'],
        commonGround: {
          question: '各方都在問：如何在開放交流、賽事安全與城市治理之間取得平衡？',
          clusters: [
            { label: '賽事與城市形象', items: ['多元平權', '國際交流', '高雄城市品牌'] },
            { label: '安全與治理', items: ['入境審查', '報名資料真實性', '主辦透明度'] }
          ],
          takeaway: '分歧不在於是否支持運動和平權，而在於活動治理與安全審查是否足夠透明。'
        },
        distribution: [
          { label: '重視交流與平權', value: 38, color: '#B07A2E' },
          { label: '要求補充資訊', value: 27, color: '#6B7A85' },
          { label: '主張嚴格審查', value: 35, color: '#8158B0' }
        ],
        comments: [
          { stance: 'support', name: '高雄活動志工', handle: '@kaohsiung_vol', text: '支持平權賽事，也希望外界不要只用政治角度看待所有參賽者。但主辦單位確實要把報名審查說清楚。', likes: 824, replies: 36 },
          { stance: 'neutral', name: '城市觀察筆記', handle: '@city_note', text: '這件事真正需要討論的是大型活動治理：報名、身份確認、入境流程、地方政府監督，不能只停在口水戰。', likes: 512, replies: 18 },
          { stance: 'oppose', name: '資安小編', handle: '@sec_watch', text: '如果真的有大量資料異常，暫緩登錄是合理的。國際活動越開放，審核機制就越要可信。', likes: 690, replies: 44 }
        ],
        timeline: [
          { date: '2026.04.27', tag: '重大事件', title: '媒體報導中國選手報名人數暴增', desc: '報導指出中國選手報名達 834 人，約占總報名數四成以上，並傳出部分資料疑似異常。' },
          { date: '2026.04.27', tag: '政府回應', title: '高雄市運發局要求主辦單位說明', desc: '市府表示已要求主辦單位補充說明，並暫緩相關移民署登錄作業。' },
          { date: '2026.04.30', tag: '賽事開始', title: '亞洲同志運動會於高雄登場', desc: '賽事於 4/30–5/4 舉行，活動本身仍以多元平權與運動交流為主軸。' },
          { date: '後續觀察', tag: '待追蹤', title: '活動治理與入境審查流程檢討', desc: '後續可追蹤主辦單位報告、地方政府檢討與未來大型活動審核機制。' }
        ],
        sources: [
          { name: '中央社', mono: '央', cred: 'excellent', latest: '中國選手報名暴增，高雄市府要求主辦說明', count: 3, time: '2026/04/27' },
          { name: '高雄市政府／運發局', mono: '高', cred: 'official', latest: '市府說明活動審查與暫緩登錄作業', count: 1, time: '2026/04/27' },
          { name: '社群討論／Threads', mono: '社', cred: 'verify', latest: '網友討論活動治理、平權與國安疑慮', count: 20, time: '持續更新' }
        ]
      },
      finance: {
        id: 'finance', category: '財經', themeColor: '#B07A2E', status: '持續發展',
        title: '台股 AI 熱潮與劇烈波動：一年飆漲後挑戰 4 萬點',
        shortTitle: '台股 AI 行情', trackingCount: '15,860', mediaCount: 16, reportCount: 142,
        updatedAt: '更新於 1 小時前', summaryMode: 'market', trendLayout: 'market-sentiment',
        summaryBlocks: [
          { label: '發生什麼事', tone: 'neutral', text: '台股自 2025 年 4 月低點反彈至 2026 年 4 月高點，一年大漲超過 2 萬點，AI 供應鏈與 ETF 資金成為市場焦點。' },
          { label: '為什麼重要', tone: 'green', text: '台灣資本市場與半導體、AI 伺服器供應鏈高度連動，股市行情也影響散戶投資、退休金與 ETF 熱潮。' },
          { label: '目前爭議', tone: 'red', text: '樂觀派認為 AI 基本面仍強；保守派擔心漲幅過快、估值偏高，國際利率與地緣風險可能引發修正。' },
          { label: '尚未釐清', tone: 'gray', text: 'AI 需求能否持續、外資是否續買、Fed 利率政策與國際情勢，都會影響下半年走勢。' }
        ],
        hashtags: ['#台股', '#AI行情', '#主動式ETF', '#資金行情', '#投資風險'],
        commonGround: {
          question: '市場共同關注：AI 成長是真需求，還是資金行情推高估值？',
          clusters: [
            { label: '基本面', items: ['AI 伺服器需求', '半導體供應鏈', '企業財報'] },
            { label: '市場風險', items: ['外資動向', '利率政策', '地緣政治'] }
          ],
          takeaway: '分歧不在是否看好 AI，而在於目前價格是否已經提前反映太多樂觀預期。'
        },
        distribution: [
          { label: '偏多：AI 基本面續強', value: 46, color: '#B07A2E' },
          { label: '觀望：等財報與利率', value: 31, color: '#6B7A85' },
          { label: '偏空：估值與風險升高', value: 23, color: '#8158B0' }
        ],
        trendDashboard: {
          title: '市場追蹤',
          sourceLabel: '依官方市場資料與新聞整理 · 14:30 更新',
          cards: [
            {
              label: '加權指數',
              value: '23,418.72',
              delta: '+312.45 / +1.35%',
              status: 'safe',
              source: '證交所每日收盤行情',
              sparkline: [23120, 23084, 23176, 23288, 23190, 23342, 23418]
            },
            {
              label: '成交金額',
              value: '4,862 億',
              delta: '較 5 日均量 +18%',
              status: 'watching',
              source: '證交所大盤統計',
              sparkline: [3850, 4020, 3968, 4210, 4380, 4512, 4862]
            },
            {
              label: '法人動向',
              value: '外資 +186.4 億',
              delta: '連 3 買',
              status: 'safe',
              source: '三大法人買賣超日報',
              sparkline: [-42, 28, 76, 93, 112, 151, 186]
            },
            {
              label: '電子類股',
              value: '類股指數 +1.9%',
              delta: '半導體、伺服器供應鏈轉強',
              status: 'watching',
              source: '證交所類股資訊 / Ours 新聞整理',
              sparkline: [1328, 1335, 1322, 1348, 1356, 1361, 1368]
            }
          ]
        },
        comments: [
          { stance: 'support', name: 'ETF 定期定額派', handle: '@etf_monthly', text: 'AI 不是短線題材，台灣供應鏈真的吃得到訂單。只是現在追高要分批，不要一次 all in。', likes: 1320, replies: 58 },
          { stance: 'neutral', name: '財報派觀察', handle: '@earnings_watch', text: '先看下季財報和外資動向。現在市場太容易被一句利率或一則國際新聞影響。', likes: 746, replies: 22 },
          { stance: 'oppose', name: '韭菜保護協會', handle: '@risk_first', text: '一年漲一倍多，大家都說這次不一樣，但風險永遠都是在最熱的時候被忽略。', likes: 980, replies: 73 }
        ],
        timeline: [
          { date: '2025.04', tag: '市場低點', title: '台股受對等關稅衝擊回落', desc: '台股低點落在 17306.97 點，成為後續一年反彈的比較基準。' },
          { date: '2026.04.23', tag: '重大事件', title: '台股高點來到 38921.95 點', desc: '一年大漲超過 2 萬點，AI 供應鏈、ETF 資金與外資買盤成為市場主因。' },
          { date: '2026.06.12', tag: '市場波動', title: '台股單日大漲逾千點', desc: '受國際情勢與美股反彈激勵，台股終場大漲 1019.58 點。' },
          { date: '後續觀察', tag: '待追蹤', title: 'AI 財報、Fed 利率與地緣政治', desc: '下半年市場將持續關注 AI 需求能否支撐高估值。' }
        ],
        sources: [
          { name: '中央社財經', mono: '央', cred: 'excellent', latest: '台股一年大漲逾 2 萬點，AI 與資金行情推升', count: 8, time: '2026/04/23' },
          { name: '證交所／櫃買中心', mono: '證', cred: 'official', latest: '市場成交量、指數與類股資料', count: 4, time: '持續更新' },
          { name: '法人投顧分析', mono: '法', cred: 'stance', latest: 'AI 供應鏈仍具長期成長動能', count: 12, time: '2026/06' },
          { name: '社群投資討論', mono: '社', cred: 'verify', latest: 'ETF、AI 股與高價股成為散戶討論焦點', count: 50, time: '持續更新' }
        ]
      },
      entertainment: {
        id: 'entertainment', category: '娛樂', themeColor: '#8158B0', status: '典禮前熱議',
        title: '第 37 屆金曲獎登場前熱議：蔡依林 9 項入圍、台語與樂團作品受關注',
        shortTitle: '第 37 屆金曲獎', trackingCount: '21,300', mediaCount: 20, reportCount: 156,
        updatedAt: '更新於 30 分鐘前', summaryMode: 'culture', trendLayout: 'culture-clusters',
        summaryBlocks: [
          { label: '發生什麼事', tone: 'neutral', text: '第 37 屆金曲獎將於 2026/06/27 在台北小巨蛋登場，入圍名單於 5 月公布，蔡依林以 9 項入圍成為焦點。' },
          { label: '為什麼重要', tone: 'green', text: '金曲獎不只是娛樂典禮，也常成為台灣流行音樂、台語創作、獨立樂團與文化認同的討論場。' },
          { label: '目前討論', tone: 'purple', text: '樂迷關注蔡依林能否大滿貫，也有人討論金曲獎應更重視傳唱度、音樂性，或扶植多語言與獨立音樂。' },
          { label: '後續觀察', tone: 'gray', text: '典禮得獎結果、表演舞台、得獎感言與社群二創，將在典禮當晚帶動第二波討論。' }
        ],
        hashtags: ['#金曲獎', '#蔡依林', '#台灣流行音樂', '#台語音樂', '#獨立樂團'],
        commonGround: {
          question: '樂迷共同關注：金曲獎應該獎勵傳唱度、音樂性，還是文化代表性？',
          clusters: [
            { label: '典禮與明星', items: ['入圍名單', '得獎預測', '舞台表演'] },
            { label: '音樂與文化', items: ['音樂性', '台語創作', '獨立樂團'] }
          ],
          takeaway: '娛樂討論的分歧不在喜不喜歡金曲獎，而在於大家期待它代表主流流行、專業評選，還是文化多樣性。'
        },
        distribution: [
          { label: '主流歌手與獎項預測', value: 44, color: '#B07A2E' },
          { label: '音樂性與評審標準', value: 28, color: '#6B7A85' },
          { label: '台語／獨立音樂能見度', value: 28, color: '#8158B0' }
        ],
        trendDashboard: {
          title: '典禮追蹤',
          sourceLabel: '依官方入圍名單與新聞整理',
          cards: [
            {
              label: '典禮時間',
              value: '6/27 19:00',
              delta: '台北小巨蛋',
              status: 'info',
              source: '金曲獎官方'
            },
            {
              label: '目前階段',
              value: '入圍公布',
              delta: '頒獎典禮倒數中',
              status: 'watching',
              source: '金曲獎官方'
            },
            {
              label: '入圍焦點',
              value: '蔡依林 9 項',
              delta: '年度專輯 / 年度歌曲皆入圍',
              status: 'watching',
              source: '官方入圍名單'
            },
            {
              label: '主要獎項',
              value: '4 個重點獎項',
              delta: '年度專輯、年度歌曲、最佳華語專輯、最佳男女歌手',
              status: 'info',
              source: '官方獎項資料'
            }
          ]
        },
        comments: [
          { stance: 'support', name: 'Jolin 粉但理性', handle: '@pop_stage', text: '蔡依林 9 項入圍真的不意外，作品完整度跟舞台概念都很強，但也希望其他類型音樂被看見。', likes: 2420, replies: 180 },
          { stance: 'neutral', name: '耳機派樂評', handle: '@music_review', text: '金曲獎每年都在吵傳唱度和音樂性，其實這也是它有趣的地方：它不是人氣榜，而是文化現場。', likes: 1180, replies: 64 },
          { stance: 'oppose', name: '獨立場館常客', handle: '@livehouse_kid', text: '希望大家不要只看大咖。台語、樂團、獨立音樂那幾個獎項，常常才是台灣音樂真正有生命力的地方。', likes: 960, replies: 39 }
        ],
        timeline: [
          { date: '2026.04.29', tag: '典禮資訊', title: '金曲獎公布典禮時間、地點與主視覺', desc: '第 37 屆金曲獎確定於台北小巨蛋舉行，主視覺與典禮資訊陸續公開。' },
          { date: '2026.05.13', tag: '重大事件', title: '第 37 屆金曲獎入圍名單公布', desc: '蔡依林以 9 項入圍成為焦點，Tizzy Bac、告五人、蕭煌奇等音樂人也受關注。' },
          { date: '2026.06.10', tag: '人物報導', title: '入圍音樂人訪問帶動第二波討論', desc: '多位入圍者受訪，延伸出創作背景、語言文化與音樂產業討論。' },
          { date: '2026.06.27', tag: '待發生', title: '金曲獎於台北小巨蛋登場', desc: '得獎結果、舞台演出與社群討論將成為典禮當晚焦點。' }
        ],
        sources: [
          { name: '金曲獎官方／文化部', mono: '金', cred: 'official', latest: '第 37 屆金曲獎典禮資訊與入圍名單', count: 5, time: '2026/05–06' },
          { name: '中央社影劇', mono: '央', latest: '蔡依林 9 項入圍，金曲獎入圍名單公布', count: 10, time: '2026/05/13' },
          { name: '娛樂媒體／樂評專欄', mono: '評', cred: 'stance', latest: '入圍預測、得獎呼聲與音樂性分析', count: 18, time: '持續更新' },
          { name: '粉絲社群', mono: '粉', cred: 'verify', latest: '入圍名單、舞台期待與應援討論', count: 80, time: '持續更新' }
        ]
      },
      policy: {
        id: 'policy', category: '公共政策', themeColor: '#3F6F9F', status: '持續發展',
        title: '選罷法修正三讀：緩刑者參選限制放寬，引發「高虹安條款」爭議',
        shortTitle: '選罷法修正爭議', trackingCount: '18,640', mediaCount: 24, reportCount: 186,
        updatedAt: '更新於 2 小時前', summaryMode: 'policy', trendLayout: 'stance-spectrum',
        summaryBlocks: [
          { label: '發生什麼事', tone: 'neutral', text: '立法院於 2026/06/12 三讀修正《公職人員選舉罷免法》，放寬部分遭宣告緩刑或得易服社會勞動者的參選資格限制。' },
          { label: '為什麼重要', tone: 'green', text: '修法牽涉人民參政權、候選人資格、司法判決與選舉公平性，是制度設計與政治信任問題。' },
          { label: '目前爭議', tone: 'red', text: '支持者認為應保障參政權；反對者質疑修法時間點敏感，可能是為特定政治人物解套。' },
          { label: '尚未釐清', tone: 'gray', text: '法案實際適用範圍、是否影響特定個案、未來是否引發釋憲或再次修法，仍待觀察。' }
        ],
        hashtags: ['#選罷法', '#參選資格', '#高虹安條款', '#立法院', '#公共政策'],
        commonGround: {
          question: '各方都在問：參政權保障與候選人資格限制，界線應該畫在哪裡？',
          clusters: [
            { label: '制度原則', items: ['參政權', '比例原則', '法律明確性'] },
            { label: '政治信任', items: ['修法時機', '個案疑慮', '選舉公平'] }
          ],
          takeaway: '分歧不只在法條內容，也在於社會是否相信這不是為特定個案服務。'
        },
        distribution: [
          { label: '支持修法', value: 32, color: '#B07A2E' },
          { label: '要求補充說明', value: 24, color: '#6B7A85' },
          { label: '質疑個案修法', value: 44, color: '#8158B0' }
        ],
        comments: [
          { stance: 'support', name: '法律系路人', handle: '@law_citizen', text: '緩刑和重罪不能混在一起看，參政權是基本權利，限制資格應該符合比例原則。', likes: 760, replies: 52 },
          { stance: 'neutral', name: '法案追蹤器', handle: '@bill_tracker', text: '問題不只在修不修，而是條文適用範圍、修法理由和時間點都要說清楚，不然一定會被政治化。', likes: 980, replies: 48 },
          { stance: 'oppose', name: '新竹觀察', handle: '@hsinchu_watch', text: '如果不是為特定人，為什麼剛好現在修？公共政策最怕看起來像個案服務。', likes: 1540, replies: 130 }
        ],
        timeline: [
          { date: '2026.06.12', tag: '重大事件', title: '立法院三讀修正選罷法', desc: '修法放寬部分遭宣告緩刑或得易服社會勞動者的候選人資格限制。' },
          { date: '2026.06.12', tag: '當事人回應', title: '高虹安回應外界質疑', desc: '高虹安受訪時呼籲外界勿過度政治解讀。' }
        ],
        sources: [
          { name: '中央社', mono: '央', cred: 'excellent', latest: '立院三讀選罷法修正案', count: 18, time: '2026/06/12' },
          { name: '立法院', mono: '立', cred: 'official', latest: '三讀通過法案條文對照表', count: 2, time: '2026/06/12' }
        ]
      },
      weather: {
        id: 'weather', category: '氣象', themeColor: '#2F8F5B', status: '警戒中',
        title: '0625 颱風外圍環流與西南風豪雨：高雄多區淹水警戒',
        shortTitle: '豪雨災情', trackingCount: '4,890', mediaCount: 18, reportCount: 92,
        updatedAt: '更新於 10 分鐘前', summaryMode: 'disaster', trendLayout: 'default',
        summaryBlocks: [
          { label: '最新狀況', tone: 'orange', text: '颱風外圍環流帶來超大豪雨，高雄山區及低窪地區累積雨量突破 1000 毫米，市區多處積淹水。' },
          { label: '災情統計', tone: 'red', text: '截至今日下午 3 點，已造成 2 死、數百戶停電，多條道路與橋樑預警性封閉。' },
          { label: '官方應變', tone: 'green', text: '市政府已提升為一級開設，並針對部分低窪地區民眾進行預警性撤離。' },
          { label: '安全提醒', tone: 'neutral', text: '呼籲市民避免前往山區、河川及海邊，隨時注意沙包與抽水機部署狀況。' }
        ],
        hashtags: ['#凱米颱風', '#高雄災情', '#淹水警戒', '#防災應變'],
        commonGround: null,
        distribution: [],
        activeQuestions: [
          { question: '明天會停班停課嗎？', detail: '最多人追蹤學校、公司與通勤安排是否需要調整。' },
          { question: '哪些路段已經積淹水或封閉？', detail: '在地回報集中在低窪道路、地下道與山區聯外道路。' },
          { question: '需要準備撤離或沙包嗎？', detail: '住在河川、山坡地與易淹水區的民眾正在確認避難資訊。' },
        ],
        trendDashboard: {
          title: '官方決策與警戒',
          sourceLabel: '依官方資料整理 · 10 分鐘前更新',
          cards: [
            {
              label: '停班停課',
              value: '高雄市：尚未發布',
              delta: '晚間 20:00 前可能更新',
              status: 'watching',
              source: '人事行政總處 / 各縣市政府'
            },
            {
              label: '氣象警戒',
              value: '超大豪雨特報',
              delta: '山區累積雨量仍偏高',
              status: 'alert',
              source: '中央氣象署'
            },
            {
              label: '水情警戒',
              value: '低窪地區防積淹水',
              delta: '河川、水庫警戒同步觀察',
              status: 'alert',
              source: '水利署防災資訊服務網'
            },
            {
              label: '道路與撤離',
              value: '山區道路管制',
              delta: '河川周邊避免進入',
              status: 'watching',
              source: '地方政府公告'
            }
          ]
        },
        comments: [
          { stance: 'neutral', name: '防災中心', handle: '@disaster_center', text: '請民眾注意自身安全，避免外出。', likes: 1024, replies: 12 },
          { stance: 'neutral', name: '在地小農', handle: '@kaohsiung_farmer', text: '雨量真的很大，這幾天採收的心血可能都要泡湯了，希望排水系統能撐住！', likes: 450, replies: 28 },
          { stance: 'neutral', name: '通勤族日常', handle: '@commuter_life', text: '請問明天停班停課的機率大嗎？有些低窪路段現在已經無法通行了，非常擔心明天的交通狀況。', likes: 890, replies: 156 }
        ],
        timeline: [
          { date: '06.24 10:00', tag: '重大事件', title: '氣象署發布豪雨特報', desc: '針對南部發布超大豪雨特報。' },
          { date: '06.25 09:00', tag: '重大事件', title: '降雨集中，多區發布淹水一級警戒', desc: '市區時雨量突破 100 毫米，多處道路水深及膝。' }
        ],
        sources: [
          { name: '中央社', mono: '央', latest: '高雄多區發布一級淹水警戒，山區進行預警性撤離', count: 12, time: '5 分鐘前' },
          { name: '災害應變中心', mono: '消', latest: '最新全台防汛與道路封閉、橋樑預警管制彙整', count: 6, time: '20 分鐘前' }
        ]
      }
    };

    const topic = TOPICS[s.activeTopicId];

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
      category: topic.category,
      status: topic.status,
      updatedAt: cleanUpdatedAt,
      sourceCount: topic.mediaCount,
      reportCount: topic.reportCount,
      followerCount: compactFollowerCount,
    };

    const postCtaByTopic = {
      sports: { title: '你怎麼看這場賽事爭議？', desc: '分享你對平權賽事、報名審查或城市治理的看法。' },
      finance: { title: '你現在怎麼看台股 AI 行情？', desc: '分享你的投資觀察、風險提醒或市場情緒。' },
      entertainment: { title: '你心中的金曲獎焦點是誰？', desc: '聊聊你看好的入圍者、表演舞台或台灣音樂觀察。' },
      policy: { title: '你支持這次選罷法修正嗎？', desc: '分享你對參政權、修法時機或個案疑慮的看法。' },
      weather: { title: '你所在地的狀況如何？', desc: '回報淹水、交通、停班停課或防災資訊，幫助更多人掌握現況。' },
    };
    const currentPostCta = postCtaByTopic[topic.id] || postCtaByTopic.policy;

    const summaryLabelMap = {
      sports: '爭點摘要', finance: '市場摘要', entertainment: '娛樂摘要', policy: '政策摘要', weather: '災情速報'
    };
    const currentSummaryLabel = summaryLabelMap[topic.id] || '爭點摘要';

    const commentSectionTitleMap = {
      sports: '社群怎麼看', finance: '投資人怎麼看', entertainment: '樂迷怎麼看', policy: '不同立場怎麼說', weather: '現場與提問'
    };
    const currentCommentSectionTitle = commentSectionTitleMap[topic.id] || '社群怎麼看';

    const radarByTopic = {
      sports: {
        tag: '共識雷達',
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
        tag: '市場情緒雷達',
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
        tag: '討論熱詞雷達',
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
        tag: '共識雷達',
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
        tag: '災情關鍵雷達',
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
    const currentRadar = radarByTopic[s.activeTopicId] || radarByTopic.policy;
    const radarRankColors = ['#B79655', '#C5A763', '#D0B982', '#D9C89D', '#E4D8BB', '#EEE8DA'];

    // ---- topic chips ----
    const topicChips = Object.values(TOPICS).map(t => {
      const active = t.id === s.activeTopicId;
      return {
        id: t.id,
        label: t.category,
        onClick: () => component.setState({ activeTopicId: t.id, tab: 'trend' }),
        style: `flex-shrink:0; border:none; border-radius:20px; padding:6px 14px; cursor:pointer; font-weight:600; font-family:'Noto Sans TC'; font-size:12.5px; transition:all .2s; background: ${active ? t.themeColor : '#F1ECE2'}; color: ${active ? '#FFF' : '#7C7567'}; box-shadow: ${active ? '0 2px 6px rgba(0,0,0,0.1)' : 'none'}`
      };
    });

    // ---- tab styles ----
    const ACTIVE = topic.themeColor;
    const tabBase = { flex: '1', textAlign: 'center', padding: '14px 4px', fontSize: '13.5px', fontFamily: "'Noto Sans TC'", cursor: 'pointer', transition: 'color .2s', position: 'relative', border: '0', background: 'transparent' };
    const mkTab = (on) => ({
      ...tabBase,
      color: on ? '#17150F' : '#A39C8E',
      fontWeight: on ? 700 : 400,
      borderBottom: on ? `2px solid ${ACTIVE}` : '2px solid transparent',
      marginBottom: '-1px',
    });

    // ui mapping for block tags
    const toneMap = {
      'neutral': { bg: '#EFECE6', color: '#5D5950' },
      'green': { bg: '#E8F4ED', color: '#2F6B48' },
      'red': { bg: '#FDEEEF', color: '#A13D3D' },
      'gray': { bg: '#F5F2EA', color: '#6F6859' },
      'orange': { bg: '#FBF3E2', color: '#B07A2E' },
      'purple': { bg: '#F4EEFB', color: '#8158B0' },
    };

    const processedBlocks = (topic.summaryBlocks || []).map(b => {
      const tone = toneMap[b.tone] || toneMap.neutral;
      return {
        ...b,
        labelStyle: `font-size:11px; font-weight:600; color:${tone.color}; background:${tone.bg}; border-radius:4px; padding:3px 6px; font-family:'Noto Sans TC';`
      };
    });

    // stance colors
    const stanceMeta = {
      support: { label: '支持', color: '#B07A2E', bg: '#FBF3E2', bd: '#EAD9B8' },
      neutral: { label: '中立', color: '#6B7A85', bg: '#EEF1F3', bd: '#D9E0E3' },
      oppose: { label: '反對', color: '#8158B0', bg: '#F4EEFB', bd: '#E2D5F2' },
    };

    const processedComments = (topic.comments || []).map(c => {
      const st = stanceMeta[c.stance] || stanceMeta.neutral;
      let label = st.label;
      if (topic.id === 'finance') {
        if (c.stance === 'support') label = '偏多';
        else if (c.stance === 'neutral') label = '觀望';
        else if (c.stance === 'oppose') label = '偏空';
      } else if (topic.id === 'entertainment') {
        if (c.stance === 'support') label = '主流焦點';
        else if (c.stance === 'neutral') label = '評審標準';
        else if (c.stance === 'oppose') label = '獨立音樂';
      }
      return {
        ...c,
        hasStance: false,
        stanceLabel: label,
        stanceStyle: `color:${st.color}; background:${st.bg}; border:1px solid ${st.bd};`
      };
    });

    const isGroupedComments = topic.id === 'sports' || topic.id === 'policy';
    const isFeedComments = !isGroupedComments;

    const commentGroupConfigByTopic = {
      sports: [
        { stance: 'support', label: '重視交流與平權', color: '#B07A2E', bg: '#FBF3E2', bd: '#EAD9B8' },
        { stance: 'neutral', label: '要求補充資訊', color: '#6B7A85', bg: '#EEF3F5', bd: '#D9E0E3' },
        { stance: 'oppose', label: '主張嚴格審查', color: '#8158B0', bg: '#F4EEFB', bd: '#E2D5F2' },
      ],
      policy: [
        { stance: 'support', label: '支持修法', color: '#B07A2E', bg: '#FBF3E2', bd: '#EAD9B8' },
        { stance: 'neutral', label: '要求補充說明', color: '#6B7A85', bg: '#EEF3F5', bd: '#D9E0E3' },
        { stance: 'oppose', label: '質疑個案修法', color: '#8158B0', bg: '#F4EEFB', bd: '#E2D5F2' },
      ],
    };

    const commentGroups = (commentGroupConfigByTopic[topic.id] || []).map(group => ({
      ...group,
      comments: processedComments.filter(c => c.stance === group.stance),
      wrapStyle: `background:${group.bg};`,
      tagStyle: `color:${group.color}; border-color:${group.bd}; background:rgba(255,255,255,.48);`,
    })).filter(group => group.comments.length > 0);

    const commentFilterLabelMap = {
      finance: 'AI 基本面續強',
      entertainment: '典禮前熱議',
      weather: '即時災情回報',
    };
    const currentCommentFilterLabel = commentFilterLabelMap[topic.id] || '熱門討論';

    const processedTimeline = (topic.timeline || []).map(n => {
      const isMajor = n.tag === '重大事件' || n.tag === '重大進展';
      const dotSize = isMajor ? 18 : 12;
      const dotColor = isMajor ? topic.themeColor : '#CFC8BA';
      return {
        ...n,
        dotStyle: `position:absolute; left:${8 - dotSize/2 + 0.5}px; top:16px; width:${dotSize}px; height:${dotSize}px; border-radius:50%; background:${dotColor}; border:3px solid #FBF9F5; box-shadow:${isMajor ? '0 0 0 2px '+topic.themeColor+'33' : 'none'}`,
        tagStyle: isMajor ? `font-family:'Noto Sans TC',sans-serif; font-size:9px; font-weight:600; letter-spacing:0.5px; color:${topic.themeColor}; background:${topic.themeColor}15; border:1px solid ${topic.themeColor}33; border-radius:4px; padding:2px 7px;` : `font-family:'Noto Sans TC',sans-serif; font-size:9px; letter-spacing:0.5px; color:#A39C8E; background:#F2EEE4; border-radius:4px; padding:2px 7px;`
      };
    });

    const processedSources = (topic.sources || []).map(x => ({
      ...x,
      showFactCheckBadge: x.cred === 'excellent',
    }));
    const hasExcellentSource = processedSources.some(source => source.cred === 'excellent');
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

    const hasTrendDashboard = !!(topic.trendDashboard
      && topic.trendDashboard.cards
      && topic.trendDashboard.cards.length > 0);
    const processedTrendDashboard = hasTrendDashboard
      ? {
          ...topic.trendDashboard,
          cards: topic.trendDashboard.cards.map((card) => ({
            ...card,
            statusClass: `trend-metric-card--${card.status || 'info'}`,
            hasSparkline: Array.isArray(card.sparkline) && card.sparkline.length > 1,
            sparklinePoints: Array.isArray(card.sparkline)
              ? buildSparklinePoints(card.sparkline)
              : '',
          })),
        }
      : null;
    const hasDistribution = !hasTrendDashboard
      && topic.distribution
      && topic.distribution.length > 0;

    return {
      headerMeta,
      hasExcellentSource,
      trendDashboard: processedTrendDashboard,
      hasTrendDashboard,
      topicChips,
      topic: {
        ...topic,
        summaryBlocks: processedBlocks,
        comments: processedComments,
        timeline: processedTimeline,
        sources: processedSources,
        trendDashboard: processedTrendDashboard,
        hasTrendDashboard,
        statusDotStyle: `background:${topic.themeColor};`,
        summaryLabel: currentSummaryLabel
      },
      postCtaTitle: currentPostCta.title,
      postCtaDesc: currentPostCta.desc,
      commentSectionTitle: currentCommentSectionTitle,
      isGroupedComments,
      isFeedComments,
      commentGroups,
      commentFilterLabel: currentCommentFilterLabel,
      commentFilterStyle: `border-color:${topic.themeColor}33; color:${topic.themeColor}; background:${topic.themeColor}10;`,
      hasCommonGround: !!topic.commonGround,
      hasTrend: topic.trendLayout !== 'none',
      isStanceSpectrum: topic.trendLayout === 'stance-spectrum',
      isMarketSentiment: topic.trendLayout === 'market-sentiment',
      isCultureClusters: topic.trendLayout === 'culture-clusters',
      isDisasterTrend: topic.id === 'weather',
      hasDistribution,
      radarTag: currentRadar.tag,
      radarTitle: currentRadar.title,
      radarItems: [...currentRadar.items]
        .sort((a, b) => b.score - a.score)
        .map((item, index) => ({
          ...item,
          fillStyle: `width: ${item.score}%; background:${radarRankColors[index] || radarRankColors[radarRankColors.length - 1]};`,
        })),
      showRadarInTrend: true,
      showRadarInTimeline: false,
      isTrend: s.tab === 'trend',
      isTimeline: s.tab === 'timeline',
      isSources: s.tab === 'sources',
      setTrend: () => component.setState({ tab: 'trend' }),
      setTimeline: () => component.setState({ tab: 'timeline' }),
      setSources: () => component.setState({ tab: 'sources' }),
      tabTrendStyle: mkTab(s.tab === 'trend'),
      tabTimelineStyle: mkTab(s.tab === 'timeline'),
      tabSourcesStyle: mkTab(s.tab === 'sources'),
      toggleBookmark: () => component.setState((st) => ({ bookmarked: !st.bookmarked })),
      bmFill: s.bookmarked ? topic.themeColor : 'none',
    };
  }

  return { createRenderVals };
})();
