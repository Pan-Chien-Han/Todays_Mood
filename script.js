// 更新後的 script.js

const quotes = {
  happy: [
    "快樂不是擁有最多，而是感激你所擁有的。",
    "微笑是最快的療癒良藥。",
    "幸福就是心靈的陽光，讓你無所畏懼。"
  ],
  calm: [
    "平靜的心是最大的力量。",
    "放下紛擾，讓心靈安然如水。",
    "寧靜是生活中最美的旋律。"
  ],
  neutral: [
    "今天是新的開始，平凡也值得珍惜。",
    "接受現實，並且微笑前行。"
  ],
  sad: [
    "眼淚是心靈的釋放，別害怕去感受。",
    "黑暗過後，總會有光明。",
    "悲傷是成長的必經之路，讓它成為力量。"
  ]
};

const songs = {
  happy: [
    { title: "Ed Sheeran - Shivers (2021)", url: "https://www.youtube.com/watch?v=Il0S8BoucSA" },
    { title: "IU - Eight (Prod.&Feat. SUGA of BTS) (2020)", url: "https://www.youtube.com/watch?v=TgOu00Mf3kI" },
    { title: "DEAN - Put My Hands On You (2022)", url: "https://www.youtube.com/watch?v=jlM8zQ2PwbM" },
    { title: "Adele - Easy On Me (2021)", url: "https://www.youtube.com/watch?v=ffcitRgiNDs" },
    { title: "Heize - You, Clouds, Rain (2017)", url: "https://www.youtube.com/watch?v=afxLaQiLu-o" }
  ],
  calm: [
    { title: "Lauv - Modern Loneliness (2020)", url: "https://www.youtube.com/watch?v=bDidwMxir4o" },
    { title: "Crush - Sometimes (2018)", url: "https://www.youtube.com/watch?v=EcLWpIt3bag" },
    { title: "Baekhyun - UN Village (2019)", url: "https://www.youtube.com/watch?v=-EfjXQgE1e8" },
    { title: "Sam Smith - Diamonds (2020)", url: "https://www.youtube.com/watch?v=8RvAKRoIDqU" },
    { title: "Zion.T - No Make Up (2018)", url: "https://www.youtube.com/watch?v=eqcte1r3aiQ" }
  ],
  neutral: [
    { title: "Olivia Rodrigo - good 4 u (2021)", url: "https://www.youtube.com/watch?v=gNi_6U5Pm_o" },
    { title: "The Weeknd - Blinding Lights (2019)", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" }
  ],
  sad: [
    { title: "BTS - Spring Day (2017)", url: "https://www.youtube.com/watch?v=xEeFrLSkMm8" },
    { title: "IU - Through the Night (2017)", url: "https://www.youtube.com/watch?v=BzYnNdJhZQw" },
    { title: "Taeyeon - Fine (2017)", url: "https://www.youtube.com/watch?v=NHXUM-6a3dU" },
    { title: "Sam Smith - Too Good At Goodbyes (2017)", url: "https://www.youtube.com/watch?v=J_ub7Etch2U" },
    { title: "Taemin - Advice (2021)", url: "https://www.youtube.com/watch?v=sQg4VCB3bYw" }
  ]
};

const backgroundImages = {
  happy: [
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80"
  ],
  calm: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
  ],
  neutral: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1470&q=80"
  ],
  sad: [
    "https://images.unsplash.com/photo-1513759565288-6a1158f6a1b6?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1470&q=80"
  ]
};

// 歡迎詞陣列，可自行增減
const welcomeMessages = [
  "願你今天擁有溫暖的心情與美好的時光。",
  "每一天都是新的開始，祝你心情愉快！",
  "用音樂和文字療癒自己，享受屬於你的片刻。",
  "無論晴天或雨天，記得善待自己的心。",
  "謝謝你來到這裡，讓我們一起關心今日的心情。"
];

const guideMessages = [
  "請依照每個問題調整滑桿分數，<br>分數會即時顯示。<br>全部調整完畢後，點擊「分析心情」按鈕，即可獲得今日心情分析、勵志語錄與推薦歌曲！",
  "拖曳每個滑桿，根據你現在的感受給分。<br>完成後按下「分析心情」，享受專屬於你的溫馨建議與音樂推薦。"
];

// 顯示歡迎詞
function showWelcome() {
  const msg = randomItem(welcomeMessages);
  document.getElementById('welcome-message').textContent = msg;
  document.getElementById('welcome-modal').style.opacity = '1';
  document.getElementById('welcome-modal').style.display = 'flex';
}

// 關閉歡迎視窗
function closeWelcome() {
  const modal = document.getElementById('welcome-modal');
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
    showGuide();
  }, 500);
}

function showGuide() {
  const msg = randomItem(guideMessages);
  document.getElementById('guide-message').innerHTML = msg;
  const modal = document.getElementById('guide-modal');
  modal.style.display = 'flex';
  setTimeout(() => { modal.style.opacity = '1'; }, 10);
}

function closeGuide() {
  const modal = document.getElementById('guide-modal');
  modal.style.opacity = '0';
  setTimeout(() => { modal.style.display = 'none'; }, 500);
}

function updateValue(rangeInput) {
  rangeInput.previousElementSibling.querySelector(".value").textContent = rangeInput.value;
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setRandomBackground(moodCategory) {
  const images = backgroundImages[moodCategory];
  // 修正：若找不到對應圖片，預設用 neutral
  const fallbackImages = backgroundImages["neutral"];
  const imgArr = (images && images.length > 0) ? images : fallbackImages;
  const randomImg = randomItem(imgArr);
  document.body.style.backgroundImage = `url('${randomImg}')`;
}

function analyzeMood() {
  const inputs = Array.from(document.querySelectorAll("input[type=range]"));
  const values = inputs.map(i => parseInt(i.value));
  // 題目順序: 精力, 快樂, 焦慮, 平靜, 壓力, 自信, 疲憊, 想社交
  const [energy, happy, anxious, calm, stress, confidence, tired, social] = values;

  // 正向題目: energy, happy, calm, confidence, social
  const positiveArr = [energy, happy, calm, confidence, social];
  // 負向題目: anxious, stress, tired
  const negativeArr = [anxious, stress, tired];

  // 正向平均(1~10)，負向平均(1~10)
  const positiveAvg = positiveArr.reduce((a, b) => a + b, 0) / positiveArr.length;
  const negativeAvg = negativeArr.reduce((a, b) => a + b, 0) / negativeArr.length;

  // 標準化負向分數（10-負向平均，讓高分代表負面低）
  const negativeScore = 11 - negativeAvg;

  // 綜合分數（正向平均 + 標準化負向分數）/ 2
  const moodScore = (positiveAvg + negativeScore) / 2;

  let moodCategory = "neutral";
  let moodDescription = "普通平穩";

  if (moodScore >= 8.5) {
    moodCategory = "happy";
    moodDescription = "快樂有活力";
  } else if (moodScore >= 7) {
    moodCategory = "calm";
    moodDescription = "平靜放鬆";
  } else if (moodScore >= 5.5) {
    moodCategory = "neutral";
    moodDescription = "普通平穩";
  } else {
    moodCategory = "sad";
    moodDescription = "情緒低落";
  }

  setRandomBackground(moodCategory);

  const quote = randomItem(quotes[moodCategory]);
  const song = randomItem(songs[moodCategory]);

  const result = document.getElementById("result");
  result.style.display = "block";

  document.getElementById("quote").innerHTML =
    `<strong>分析結果：</strong>你的今日心情屬於「${moodDescription}」。<br>心靈雞湯：${quote}`;

  const songLink = document.getElementById("songLink");
  songLink.textContent = `推薦歌曲：${song.title}`;
  songLink.href = song.url;
  songLink.target = "_blank";
  songLink.rel = "noopener noreferrer";

  // === 新增：儲存每日心情紀錄到 Firebase ===
  try {
    const uid = getUid();
    const dt = new Date();
    const dateKey = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
    const record = {
      timestamp: dt.toISOString(),
      moodScore,
      moodCategory,
      moodDescription,
      values: { energy, happy, anxious, calm, stress, confidence, tired, social },
      quote,
      song
    };
    db.ref(`moodRecords/${uid}/${dateKey}`).set(record);
  } catch (e) {
    // 若 firebase 尚未初始化或出錯則忽略
    // console.error(e);
  }
}

// 日期時間顯示（分成兩行顯示）
function updateDateTime() {
  const dt = new Date();
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  const h = String(dt.getHours()).padStart(2, '0');
  const min = String(dt.getMinutes()).padStart(2, '0');
  const s = String(dt.getSeconds()).padStart(2, '0');
  document.getElementById('datetime').innerHTML =
    `${y}/${m}/${d}<br>${h}:${min}:${s}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 泡泡動畫
(function bubbleBackground() {
  const canvas = document.getElementById('bg-bubbles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let bubbles = [];
  let W = window.innerWidth;
  let H = window.innerHeight;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }
  window.addEventListener('resize', resize);
  resize();

  function randomBubble() {
    const colors = [
      'rgba(255,183,77,0.18)',
      'rgba(255,213,128,0.13)',
      'rgba(255,236,179,0.15)',
      'rgba(255,152,0,0.12)',
      'rgba(255,255,255,0.10)'
    ];
    return {
      x: Math.random() * W,
      y: H + 20 + Math.random() * 40,
      r: 16 + Math.random() * 32,
      speed: 0.5 + Math.random() * 1.2,
      drift: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.5 + Math.random() * 0.4
    };
  }

  function createBubbles(n) {
    bubbles = [];
    for (let i = 0; i < n; i++) {
      bubbles.push(randomBubble());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (let b of bubbles) {
      ctx.save();
      ctx.globalAlpha = b.alpha;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.shadowColor = "#fffde7";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();

      b.y -= b.speed;
      b.x += b.drift;
      if (b.y + b.r < 0 || b.x < -b.r || b.x > W + b.r) {
        // 重生
        Object.assign(b, randomBubble());
        b.y = H + b.r;
      }
    }
    requestAnimationFrame(animate);
  }

  createBubbles(Math.max(18, Math.floor(W / 70)));
  animate();
  window.addEventListener('resize', () => {
    createBubbles(Math.max(18, Math.floor(window.innerWidth / 70)));
  });
})();

// === Firebase 在線人數統計 ===
const firebaseConfig = {
  apiKey: "AIzaSyA5S_yvoofLb8LUCSR36B_69wUVn0IvM5E",
  authDomain: "todays-mood-3ef47.firebaseapp.com",
  projectId: "todays-mood-3ef47",
  storageBucket: "todays-mood-3ef47.firebasestorage.app",
  messagingSenderId: "418044127716",
  appId: "1:418044127716:web:af0c48eb12710a75f07ff1"
};
// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const onlineRef = db.ref("onlineUsers");

// 產生唯一ID，並存在 localStorage
function getUid() {
  if (!window._uid) {
    let uid = localStorage.getItem('tmood_uid');
    if (!uid) {
      uid = `${Date.now()}_${Math.random().toString(36).slice(2,10)}`;
      localStorage.setItem('tmood_uid', uid);
      // 新訪客，累積訪客數+1
      incrementTotalVisitors();
    }
    window._uid = uid;
  }
  return window._uid;
}

// 累積訪客數+1（只在新訪客時呼叫）
function incrementTotalVisitors() {
  const ref = db.ref('totalVisitors');
  ref.transaction(current => (current || 0) + 1);
}

// 監聽累積訪客數
function listenTotalVisitorCount() {
  db.ref('totalVisitors').on('value', snap => {
    document.getElementById('total-visitor-count').textContent = snap.val() || 0;
  });
}

// 加入在線人數
function joinOnline() {
  const uid = getUid();
  const userRef = onlineRef.child(uid);
  userRef.set(true);
  userRef.onDisconnect().remove();
}

// 監聽在線人數變化
function listenOnlineCount() {
  onlineRef.on("value", snap => {
    const count = snap.numChildren();
    document.getElementById("online-count").textContent = count;
  });
}

// 頁面載入時加入在線人數並監聽
window.addEventListener('DOMContentLoaded', () => {
  showWelcome();
  joinOnline();
  listenOnlineCount();
  listenTotalVisitorCount(); // 新增這行
});
