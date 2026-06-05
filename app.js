// ─── TECHNICAL ARSENAL DATA ─────────────────────────────────────
const skillsData = [
  {name:'React & Next', icon:'fab fa-react', pct:95, color:'#61dafb', glowColor:'rgba(97,219,251,0.25)', glowSolid:'rgba(97,219,251,0.4)'},
  {name:'TypeScript', icon:'fas fa-code', pct:90, color:'#3178c6', glowColor:'rgba(49,120,198,0.25)', glowSolid:'rgba(49,120,198,0.4)'},
  {name:'Tailwind CSS', icon:'fab fa-css3-alt', pct:92, color:'#38bdf8', glowColor:'rgba(56,189,248,0.25)', glowSolid:'rgba(56,189,248,0.4)'},
  {name:'Node & Express', icon:'fab fa-node-js', pct:88, color:'#68a063', glowColor:'rgba(104,160,99,0.25)', glowSolid:'rgba(104,160,99,0.4)'},
  {name:'Flutter & Dart', icon:'fas fa-mobile-alt', pct:82, color:'#02569b', glowColor:'rgba(2,86,155,0.25)', glowSolid:'rgba(2,86,155,0.4)'},
  {name:'Firebase', icon:'fas fa-fire', pct:90, color:'#ffca28', glowColor:'rgba(255,202,40,0.25)', glowSolid:'rgba(255,202,40,0.4)'},
  {name:'MongoDB / SQL', icon:'fas fa-database', pct:85, color:'#47a248', glowColor:'rgba(71,162,72,0.25)', glowSolid:'rgba(71,162,72,0.4)'},
  {name:'Docker / K8s', icon:'fab fa-docker', pct:78, color:'#2496ed', glowColor:'rgba(36,150,237,0.25)', glowSolid:'rgba(36,150,237,0.4)'},
  {name:'AWS Cloud', icon:'fab fa-aws', pct:80, color:'#ff9900', glowColor:'rgba(255,153,0,0.25)', glowSolid:'rgba(255,153,0,0.4)'},
  {name:'Microservices', icon:'fas fa-project-diagram', pct:85, color:'#ff5e00', glowColor:'rgba(255,94,0,0.25)', glowSolid:'rgba(255,94,0,0.4)'},
  {name:'GraphQL/Redis', icon:'fas fa-bolt', pct:82, color:'#e10098', glowColor:'rgba(225,0,152,0.25)', glowSolid:'rgba(225,0,152,0.4)'},
  {name:'CI/CD Pipeline', icon:'fas fa-server', pct:85, color:'#4285f4', glowColor:'rgba(66,133,244,0.25)', glowSolid:'rgba(66,133,244,0.4)'},
  {name:'AI/LLM Integr.', icon:'fas fa-robot', pct:88, color:'#9b51e0', glowColor:'rgba(155,81,224,0.25)', glowSolid:'rgba(155,81,224,0.4)'}
];

// Fallback/Default Portfolio Projects Data
const projectsData = [
  {
    title:'E-Commerce Platform',
    desc:'Full-featured online store with payment gateway and admin dashboard.',
    tags:['web'],
    tagLabels:['React','Node','MongoDB','Redux'],
    color:'#1e3a5f',
    icon:'🛒',
    demo:'#', github:'#'
  },
  {
    title:'Fitness Tracker App',
    desc:'Voice-powered fitness app with AI content generation features.',
    tags:['app','web'],
    tagLabels:['React Native','Node','Firebase'],
    color:'#1a2e1a',
    icon:'💪',
    demo:'#', github:'#'
  },
  {
    title:'AI Content Generator',
    desc:'AI-powered content creation tool with multiple output formats.',
    tags:['app','web'],
    tagLabels:['Python','OpenAI API','Tailwind'],
    color:'#2d1b4e',
    icon:'🤖',
    demo:'#', github:'#'
  },
  {
    title:'Crypto Dashboard',
    desc:'Real-time cryptocurrency tracking and portfolio management system.',
    tags:['web','ui'],
    tagLabels:['React','APIs','D3.js'],
    color:'#1a2d1a',
    icon:'📊',
    demo:'#', github:'#'
  },
  {
    title:'Task Management App',
    desc:'Collaborative task management with real-time team sync features.',
    tags:['app','web'],
    tagLabels:['React','Firebase Database'],
    color:'#2a1a1a',
    icon:'✅',
    demo:'#', github:'#'
  },
  {
    title:'Real Estate Platform',
    desc:'Property listing platform with map integration and booking system.',
    tags:['web','ui'],
    tagLabels:['React','Node','Maps API'],
    color:'#1a1a2d',
    icon:'🏠',
    demo:'#', github:'#'
  }
];

// Interactive features & pricing matrix
const featuresData = [
  { name: "Premium Interactive UI/UX", price: 250, selected: true },
  { name: "Complete Backend & REST API", price: 400, selected: false },
  { name: "Telegram Bot Dispatcher", price: 150, selected: false },
  { name: "Firebase Real-time Integration", price: 300, selected: false },
  { name: "Microservices Architecture", price: 500, selected: false },
  { name: "Docker/K8s Orchestration Setup", price: 350, selected: false }
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

function renderFeatures() {
  const grid = document.getElementById('dynamic-features-grid');
  if(!grid) return;
  grid.innerHTML = featuresData.map(f => `
    <label class="feature-label">
      <input type="checkbox" class="feature-cb" value="${f.price}" ${f.selected?'checked':''}>
      ${f.name} (+$${f.price})
    </label>
  `).join('');

  const checkboxes = document.querySelectorAll('.feature-cb');
  function calcCost() {
    let total = 0;
    checkboxes.forEach(cb => { if(cb.checked) total += parseInt(cb.value); });
    document.getElementById('total-cost').innerText = `$${total}`;
  }
  checkboxes.forEach(cb => cb.addEventListener('change', calcCost));
  calcCost();
}

// ─── TYPING EFFECT ────────────────────────────────────────────────
const typingTexts = ['Senior Full Stack Engineer', 'Cloud & DevOps Architect', 'Web3 Developer'];
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
  document.querySelectorAll('.counter').forEach(el=>{
    const target=+el.dataset.target;
    let count=0;
    const step=Math.ceil(target/40);
    const timer=setInterval(()=>{
      count=Math.min(count+step,target);
      el.textContent=count+(el.dataset.suffix||'');
      if(count>=target) {
        clearInterval(timer);
        el.innerHTML = `${target}<span>${el.innerHTML.includes('+')?'+':'%'}</span>`;
      }
    },45);
  });
}

// ─── REVEAL ON SCROLL ─────────────────────────────────────────────
function initReveal(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        if(e.target.closest('#stats')) startCounters();
      }
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.hidden').forEach(el=>observer.observe(el));

  const statsSec = document.getElementById('stats');
  if(statsSec) {
    const sObs = new IntersectionObserver(ents => { ents.forEach(e => { if(e.isIntersecting) startCounters(); }); }, {threshold: .2});
    sObs.observe(statsSec);
  }
}

// ─── SUBMIT FORM LOGIC (🔒 TARGETS BACK-END PROXY SECURELY) ──────
async function submitForm(){
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const refUrl = document.getElementById('formRef').value.trim();
  const msg = document.getElementById('formMsg').value.trim();
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  
  document.getElementById('nameErr').style.display = name ? 'none' : 'block'; if(!name) valid = false;
  document.getElementById('emailErr').style.display = email ? 'none' : 'block'; if(!email) valid = false;
  document.getElementById('msgErr').style.display = msg ? 'none' : 'block'; if(!msg) valid = false;
  if(!valid) return;
  
  const btn = document.getElementById('submitBtn');
  btn.disabled = true; 
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
  
  let selectedFeatures = [];
  document.querySelectorAll('.feature-cb:checked').forEach(cb => {
    selectedFeatures.push(cb.parentElement.innerText.trim());
  });
  const totalBudget = document.getElementById('total-cost').innerText;

  // 🛡️ Vercel Secure Serverless Function Proxy Call [1]
  const proxyUrl = "/api/send-message"; 
  
  try {
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        refUrl: refUrl,
        msg: msg,
        features: selectedFeatures,
        budget: totalBudget
      })
    });
    
    if (response.ok) {
      btn.style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
      document.getElementById('formName').value = '';
      document.getElementById('formEmail').value = '';
      document.getElementById('formRef').value = '';
      document.getElementById('formMsg').value = '';
      playClick();
      setTimeout(() => {
        btn.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-server"></i> Submit Project Proposal';
        document.getElementById('successMsg').style.display = 'none';
      }, 4000);
    } else {
      alert("Proxy Server dispatch error. Make sure Vercel Env variables are configured.");
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-server"></i> Submit Project Proposal';
    }
  } catch (error) {
    console.error("Connection error: ", error);
    alert("Connection timeout. Make sure you are deploying on Vercel to access backend proxy routes.");
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-server"></i> Submit Project Proposal';
  }
}

// ─── WHATSAPP INTEGRATION ────────────────────────────────────────
function updateQuickWhatsAppLink() {
  const myNumber = "919561160799";
  const btn = document.getElementById('quick-whatsapp-btn');
  if(!btn) return;
  
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim() || "A Client";
    const contact = document.getElementById('formEmail').value.trim() || "Not provided";
    const ref = document.getElementById('formRef').value.trim() || "None";
    const msg = document.getElementById('formMsg').value.trim() || "No detailed requirements.";
    let selectedFeats = [];
    document.querySelectorAll('.feature-cb:checked').forEach(cb => {
      selectedFeats.push(cb.parentElement.innerText.trim());
    });
    const budget = document.getElementById('total-cost').innerText;

    const formattedMsg = `Hello Santosh! I am interested in launching a project.%0A%0A` +
                         `👤 Name: ${name}%0A` +
                         `📱 Contact: ${contact}%0A` +
                         `🔗 Ref: ${ref}%0A` +
                         `💬 Message: ${msg}%0A` +
                         `🛠️ Features: ${selectedFeats.join(', ')}%0A` +
                         `💰 Estimated Setup: ${budget}`;
                         
    window.open(`https://wa.me/${myNumber}?text=${formattedMsg}`, '_blank');
  });
}

// ─── COPY EMAIL ──────────────────────────────────────────────────
function copyEmail(){
  navigator.clipboard.writeText('santosh2grt@gmail.com').then(()=>{
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
  const content = `SANTOSH
Senior Full Stack Engineer | Cloud & DevOps Architect
===================================================
Email: santosh2grt@gmail.com
WhatsApp: +91 95611 60799
Location: Pune Maharashtra, India

TECHNICAL ARSENAL
-----------------
React & Next.js, TypeScript, Tailwind CSS, Node & Express, Flutter & Dart, Firebase,
MongoDB/SQL, Docker/K8s, AWS Cloud, Microservices, GraphQL/Redis, CI/CD, AI/LLM.

EXPERIENCE & STATS
------------------
5+ Years Experience | 50+ Projects Completed | 30+ Happy Clients`;
  const blob = new Blob([content],{type:'text/plain'});
  link.href = URL.createObjectURL(blob);
  link.download = 'Santosh_FullStack_CV.txt';
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

// ─── CURSOR PARTICLES CANVAS ─────────────────────────────────────
(function(){
  try {
    const canvas=document.getElementById('particles-canvas');
    if(!canvas) return;
    const ctx=canvas.getContext('2d');
    let W=canvas.width=window.innerWidth, H=canvas.height=window.innerHeight;
    window.addEventListener('resize',()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;});
    const dots=Array.from({length:40},()=>({
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

// ─── INITIALIZATION ON WINDOW LOAD ───────────────────────────────
window.addEventListener('load',()=>{
  const loader = document.getElementById('loader');
  if(loader) loader.classList.add('hide');
  typeEffect();
  initReveal();
  renderSkills();
  renderProjects();
  renderFeatures();
  updateQuickWhatsAppLink();
  updateSoundUI();
});

// Cursor drag logic & click ripple animations
document.addEventListener('click',e=>{
  playClick();
  const ripple=document.createElement('div');
  ripple.style.cssText=`position:fixed;width:20px;height:20px;background:rgba(255,94,0,.4);border-radius:50%;pointer-events:none;z-index:9999;left:${e.clientX-10}px;top:${e.clientY-10}px;animation:rippleAnim .5s ease forwards;`;
  document.body.appendChild(ripple);
  setTimeout(()=>ripple.remove(),500);
});
const rippleStyle=document.createElement('style');
rippleStyle.textContent=`@keyframes rippleAnim{to{transform:scale(4);opacity:0}}`;
document.head.appendChild(rippleStyle);
