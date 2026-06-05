// ─── DATA RENDERING ──────────────────────────────────────────────
const skillsData = [
  {name:'HTML5', icon:'fab fa-html5', pct:95, color:'#e44d26', glowColor:'rgba(228,77,38,0.25)', glowSolid:'rgba(228,77,38,0.4)'},
  {name:'Tailwind', icon:'fab fa-css3-alt', pct:90, color:'#38bdf8', glowColor:'rgba(56,189,248,0.25)', glowSolid:'rgba(56,189,248,0.4)'},
  {name:'JavaScript', icon:'fab fa-js-square', pct:90, color:'#f0db4f', glowColor:'rgba(240,219,79,0.25)', glowSolid:'rgba(240,219,79,0.4)'},
  {name:'TypeScript', icon:'fas fa-code', pct:85, color:'#3178c6', glowColor:'rgba(49,120,198,0.25)', glowSolid:'rgba(49,120,198,0.4)'},
  {name:'React.js', icon:'fab fa-react', pct:88, color:'#61dafb', glowColor:'rgba(97,219,251,0.25)', glowSolid:'rgba(97,219,251,0.4)'},
  {name:'Node.js', icon:'fab fa-node-js', pct:85, color:'#68a063', glowColor:'rgba(104,160,99,0.25)', glowSolid:'rgba(104,160,99,0.4)'},
  {name:'MongoDB', icon:'fas fa-database', pct:82, color:'#47a248', glowColor:'rgba(71,162,72,0.25)', glowSolid:'rgba(71,162,72,0.4)'},
  {name:'Firebase', icon:'fas fa-fire', pct:80, color:'#ffca28', glowColor:'rgba(255,202,40,0.25)', glowSolid:'rgba(255,202,40,0.4)'},
  {name:'Python', icon:'fab fa-python', pct:75, color:'#3776ab', glowColor:'rgba(55,118,171,0.25)', glowSolid:'rgba(55,118,171,0.4)'},
  {name:'Git/GitHub', icon:'fab fa-github', pct:88, color:'#ffffff', glowColor:'rgba(255,255,255,0.15)', glowSolid:'rgba(255,255,255,0.3)'}
];

const projectsData = [
  {
    title:'Enterprise E-Commerce',
    desc:'A full-featured MERN Stack online store with secure payment, admin dashboard, and Redux state management.',
    tags:['web'],
    tagLabels:['React','Node.js','MongoDB','Redux'],
    color:'#1e3a5f',
    icon:'🛒',
    demo:'#', github:'#'
  },
  {
    title:'Next.js SaaS Platform',
    desc:'Modern Server-Side Rendered application using Next.js with localized layout configurations and custom styling.',
    tags:['web','ui'],
    tagLabels:['Next.js','Tailwind','TS'],
    color:'#1a1a2d',
    icon:'⚡',
    demo:'#', github:'#'
  },
  {
    title:'Real-time Chat Application',
    desc:'Instant communication application featuring WebSocket connections, individual/group chats, and status notifications.',
    tags:['app','web'],
    tagLabels:['Socket.io','Node.js','React'],
    color:'#1a2e1a',
    icon:'💬',
    demo:'#', github:'#'
  },
  {
    title:'AI Content Engine',
    desc:'Artificial Intelligence powered platform facilitating customizable automated content production systems.',
    tags:['app','web'],
    tagLabels:['Python','OpenAI API','Node'],
    color:'#2d1b4e',
    icon:'🤖',
    demo:'#', github:'#'
  },
  {
    title:'Portfolio Visualizer 3D',
    desc:'A high-end interface integrating advanced 3D shaders, customized particle physics, and fluid interactivity.',
    tags:['web','ui'],
    tagLabels:['React','Three.js','GLSL'],
    color:'#2a1a1a',
    icon:'📐',
    demo:'#', github:'#'
  },
  {
    title:'Task Management Board',
    desc:'Collaborative workspace featuring real-time data sync, dynamic drag-and-drop, and full progress tracking.',
    tags:['app','web'],
    tagLabels:['React','Firebase','CSS3'],
    color:'#2a1a3a',
    icon:'📋',
    demo:'#', github:'#'
  }
];

// Render dynamic elements
function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  if(!grid) return;
  grid.innerHTML = skillsData.map(s=>`
    <div class="skill-bubble reveal" style="--color-hover: ${s.color}; --color-glow: ${s.glowColor}; --color-glow-solid: ${s.glowSolid}">
      <div class="skill-bubble-icon" style="color: ${s.color}"><i class="${s.icon}"></i></div>
      <span class="skill-bubble-name">${s.name}</span>
      <span class="skill-bubble-pct" style="color: ${s.color}">${s.pct}%</span>
    </div>
  `).join('');
}

function renderProjects(filter='all'){
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  const filtered = filter==='all' ? projectsData : projectsData.filter(p=>p.tags.includes(filter));
  grid.innerHTML = filtered.map(p=>`
    <div class="project-card reveal">
      <div class="project-img">
        <div class="proj-placeholder" style="background:${p.color};height:100%">${p.icon}</div>
        <div class="project-overlay">
          <div class="project-tags">${p.tagLabels.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-links">
          <a href="${p.demo}" target="_blank" class="proj-btn proj-btn-demo"><i class="fas fa-external-link-alt"></i>Live Demo</a>
          <a href="${p.github}" target="_blank" class="proj-btn proj-btn-code"><i class="fab fa-github"></i>Code</a>
        </div>
      </div>
    </div>
  `).join('');
  initReveal();
}

// ─── TYPING EFFECT ────────────────────────────────────────────────
const typingTexts = ['Full-Stack Developer','Software Engineer','MERN Expert','UI/UX Designer','Problem Solver'];
let tIdx=0, cIdx=0, deleting=false;
function typeEffect(){
  const el=document.getElementById('typingEl');
  if(!el) return;
  const word=typingTexts[tIdx];
  if(deleting){
    el.textContent=word.substring(0,cIdx--);
    if(cIdx<0){deleting=false;tIdx=(tIdx+1)%typingTexts.length;setTimeout(typeEffect,400);return;}
    setTimeout(typeEffect,60);
  } else {
    el.textContent=word.substring(0,cIdx++);
    if(cIdx>word.length){deleting=true;setTimeout(typeEffect,1800);return;}
    setTimeout(typeEffect,90);
  }
}

// ─── COUNTERS ────────────────────────────────────────────────────
let countersStarted=false;
function startCounters(){
  if(countersStarted) return;
  countersStarted=true;
  document.querySelectorAll('.counter-num').forEach(el=>{
    const target=+el.dataset.target;
    let count=0;
    const step=Math.ceil(target/40);
    const timer=setInterval(()=>{
      count=Math.min(count+step,target);
      el.textContent=count+(el.dataset.suffix||'');
      if(count>=target) clearInterval(timer);
    },45);
  });
}

// ─── REVEAL ON SCROLL ─────────────────────────────────────────────
function initReveal(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        if(e.target.closest('#about')) startCounters();
      }
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>observer.observe(el));
}

// ─── HAMBURGER & MOBILE DRAWER ───────────────────────────────────
function closeMobileNav(){
  const hamburger=document.getElementById('hamburger');
  const mobileNav=document.getElementById('mobileNav');
  const navOverlay=document.getElementById('navOverlay');
  if(hamburger) hamburger.classList.remove('open');
  if(mobileNav) mobileNav.classList.remove('open');
  if(navOverlay) navOverlay.classList.remove('show');
}

// ─── PARTICLES BACKGROUND CANVAS ─────────────────────────────────
(function(){
  try {
    const canvas=document.getElementById('particles-canvas');
    if(!canvas) return;
    const ctx=canvas.getContext('2d');
    let W=canvas.width=window.innerWidth, H=canvas.height=window.innerHeight;
    window.addEventListener('resize',()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;});
    const dots=Array.from({length:50},()=>({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
      r:Math.random()*2+.5, a:Math.random()*.5+.1
    }));
    function draw(){
      ctx.clearRect(0,0,W,H);
      dots.forEach(d=>{
        d.x+=d.vx; d.y+=d.vy;
        if(d.x<0||d.x>W) d.vx*=-1;
        if(d.y<0||d.y>H) d.vy*=-1;
        ctx.beginPath();
        ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,94,0,${d.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  } catch(e){}
})();

// ─── TELEGRAM BOT MESSAGE DELIVERY ────────────────────────────────
async function submitForm(){
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const msg = document.getElementById('formMsg').value.trim();
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  
  document.getElementById('nameErr').style.display = name ? 'none' : 'block'; if(!name) valid = false;
  document.getElementById('emailErr').style.display = emailRx.test(email) ? 'none' : 'block'; if(!emailRx.test(email)) valid = false;
  document.getElementById('msgErr').style.display = msg ? 'none' : 'block'; if(!msg) valid = false;
  if(!valid) return;
  
  const btn = document.getElementById('submitBtn');
  btn.disabled = true; 
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
  
  /* 
     🔒 Real-World Proxy Strategy:
     जब आप वर्सेल पर लाइव करेंगे, तब डायरेक्ट फ़ेच को कमेंट कर के प्रॉक्सी रूट यूज़ कर सकते हैं:
     const targetUrl = "/api/send-message";
  */
  const botToken = "8848322473:AAFDrrwlvXpcC6f5hzkvvgqh1EAfK4wva0g";
  const chatId = "7326906197";
  const targetUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  const textPayload = `📩 <b>New Message from Portfolio!</b>\n\n` +
                      `👤 <b>Sender:</b> ${name}\n` +
                      `📧 <b>Email:</b> ${email}\n\n` +
                      `💬 <b>Message:</b>\n<i>${msg}</i>`;
  
  try {
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: textPayload,
        parse_mode: 'HTML'
      })
    });
    
    if (response.ok) {
      btn.style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
      document.getElementById('formName').value = '';
      document.getElementById('formEmail').value = '';
      document.getElementById('formMsg').value = '';
      playClick();
      setTimeout(() => {
        btn.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        document.getElementById('successMsg').style.display = 'none';
      }, 4000);
    } else {
      alert("Error transmitting form payload. Check credentials.");
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }
  } catch (error) {
    alert("Connection timeout. Check your network.");
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  }
}

// ─── COPY EMAIL ──────────────────────────────────────────────────
function copyEmail(){
  navigator.clipboard.writeText('officialdivyanshnishad@gmail.com').then(()=>{
    const btn = document.getElementById('copyBtnText');
    if(btn) {
      btn.textContent = 'Copied! ✓';
      setTimeout(()=>btn.textContent = 'Copy Email Address', 2000);
    }
    playClick();
  });
}

// ─── CV GENERATION ───────────────────────────────────────────────
function downloadCV(){
  const link = document.createElement('a');
  const content = `SANTOSH - FULL STACK DEVELOPER CV...`; // Keep original exact logic
  const blob = new Blob([content],{type:'text/plain'});
  link.href = URL.createObjectURL(blob);
  link.download = 'Santosh_CV.txt';
  link.click();
  playClick();
}

// ─── SOUND SYNTH ENGINE ──────────────────────────────────────────
let soundOn = localStorage.getItem('dd_sound')==='on';
function updateSoundUI(){
  const soundIcon = document.getElementById('soundIcon');
  const soundBtn = document.getElementById('sound-btn');
  if(soundIcon) soundIcon.className = soundOn?'fas fa-volume-up':'fas fa-volume-mute';
  if(soundBtn) soundBtn.className = soundOn?'on':'';
}
function toggleSound(){soundOn=!soundOn;localStorage.setItem('dd_sound',soundOn?'on':'off');updateSoundUI();}
function playClick(){
  if(!soundOn) return;
  try{
    const ctx2 = new(window.AudioContext||window.webkitAudioContext)();
    const osc = ctx2.createOscillator(), gain = ctx2.createGain();
    osc.connect(gain); gain.connect(ctx2.destination);
    osc.frequency.value = 880; gain.gain.setValueAtTime(.15,ctx2.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001,ctx2.currentTime+.08);
    osc.start(); osc.stop(ctx2.currentTime+.08);
  }catch(e){}
}

// ─── INIT EVENTS ─────────────────────────────────────────────────
window.addEventListener('load',()=>{
  const loader = document.getElementById('loader');
  if(loader) loader.classList.add('hide');
  typeEffect();
  initReveal();
  renderSkills();
  renderProjects();
  updateSoundUI();
});
