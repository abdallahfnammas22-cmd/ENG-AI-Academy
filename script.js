// ===== DATA =====
const QUESTIONS = [
  // Vocabulary
  {cat:'vocab',q:'What is the meaning of the word "Enormous"?',a:'Enormous means very large in size. Example: The elephant is enormous.'},
  {cat:'vocab',q:'Give 3 synonyms for the word "Happy".',a:'Synonyms: joyful, cheerful, delighted. Example: She felt delighted after the test.'},
  {cat:'vocab',q:'Fill in the blank: The dog _____ loudly at night. (bark/barked)',a:'The correct answer is "barked" (past tense). The dog barked loudly at night.'},
  {cat:'vocab',q:'What is the opposite of "Ancient"?',a:'The opposite of Ancient is Modern. Example: Modern technology helps students learn.'},
  {cat:'vocab',q:'Use "However" in a meaningful sentence.',a:'Example: I studied hard. However, the exam was very difficult.'},
  {cat:'vocab',q:'What does "Curious" mean? Use it in a sentence.',a:'Curious means eager to know or learn. Example: The curious student asked many questions.'},
  {cat:'vocab',q:'Find the odd one out: apple, mango, carrot, banana.',a:'Carrot — because it is a vegetable, not a fruit.'},
  {cat:'vocab',q:'What is the plural of "Child"?',a:'The plural of child is children. Example: The children are playing in the park.'},

  // Grammar
  {cat:'grammar',q:'Write the present continuous of: (He / study / now)',a:'He is studying now. — Present continuous = subject + is/am/are + verb+ing.'},
  {cat:'grammar',q:'Change to passive voice: "The teacher corrects the homework."',a:'The homework is corrected by the teacher. — Passive: object + is/are + past participle + by + subject.'},
  {cat:'grammar',q:'Correct this sentence: "She don\'t like cold weather."',a:'Correct: She doesn\'t like cold weather. — Use "doesn\'t" with he/she/it in negative present simple.'},
  {cat:'grammar',q:'What is the past tense of "Go", "See", and "Write"?',a:'Go → Went | See → Saw | Write → Wrote. These are irregular verbs.'},
  {cat:'grammar',q:'Write a question in past simple about a school trip.',a:'Example: Did you enjoy the school trip? / Where did the students go on the trip?'},
  {cat:'grammar',q:'Explain the difference between "Since" and "For".',a:'"Since" = a point in time (since 2020). "For" = a period of time (for 3 years). Example: I have lived here for 5 years / since 2019.'},
  {cat:'grammar',q:'Use a relative clause: "The book _____ I bought yesterday is interesting."',a:'The book that/which I bought yesterday is interesting. — Use "that" or "which" for things.'},
  {cat:'grammar',q:'Convert to reported speech: She said, "I am tired."',a:'She said that she was tired. — In reported speech, change "am" → "was" and "I" → "she".'},

  // Reading
  {cat:'reading',q:'Read: "Zaid loves football. He plays every Friday." — What does Zaid love?',a:'Zaid loves football. He plays it every Friday. This is a comprehension question — always find evidence in the text.'},
  {cat:'reading',q:'What does the word "exhausted" mean in context: "After the long run, she felt exhausted."',a:'Exhausted means extremely tired. Context clue: "after the long run" suggests tiredness.'},
  {cat:'reading',q:'What is the main idea of a paragraph that talks about the benefits of reading?',a:'The main idea is: Reading has many benefits. A main idea is the most important point the writer wants to make.'},
  {cat:'reading',q:'What is the difference between "skimming" and "scanning" a text?',a:'Skimming = reading quickly for the general idea. Scanning = reading quickly to find specific information (a name, date, number).'},
  {cat:'reading',q:'How do you identify the author\'s purpose in a text?',a:'Ask: Is the author trying to inform, persuade, entertain, or describe? Look for key words and the overall message.'},
  {cat:'reading',q:'What inference can you make: "The streets were wet and everyone carried umbrellas."',a:'Inference: It was raining or had recently rained. Inferences use clues + background knowledge.'},

  // Writing & Speaking
  {cat:'writing',q:'Write an introduction paragraph about the importance of learning English.',a:'Example: English is one of the most important languages in the world. It opens doors to education, jobs, and communication with people from all cultures. Learning English helps us understand the world better and gives us more opportunities in life.'},
  {cat:'writing',q:'How do you start and end a formal email to a teacher?',a:'Start: Dear Mr./Ms. [Name], I hope this email finds you well. | End: Thank you for your time. I look forward to hearing from you. Yours sincerely, [Your Name]'},
  {cat:'writing',q:'Describe your school in 5 sentences.',a:'Example: My school is located in Zarqa. It has 30 classrooms and a large library. The teachers are very helpful and professional. We have a sports field where students play football. I love my school because it has a friendly environment.'},
  {cat:'writing',q:'What are linking words used for in writing?',a:'Linking words connect ideas. Examples: Addition (also, furthermore, in addition) | Contrast (however, but, although) | Cause/Effect (because, therefore, as a result) | Sequence (first, then, finally)'},
  {cat:'writing',q:'Give speaking questions about technology in education.',a:'1. How does technology help you study? 2. What apps do you use for learning? 3. Is online learning better than classroom learning? 4. What are the disadvantages of using phones in class? 5. How will AI change education in the future?'},
  {cat:'writing',q:'Write a short opinion paragraph about social media.',a:'Social media has both positive and negative effects. On one hand, it helps people stay connected and share information quickly. On the other hand, it can be addictive and spread fake news. In my opinion, students should use social media wisely and limit their screen time.'},
];

const WORKSHEETS = [
  {icon:'📝',title:'المضارع البسيط',desc:'تدريبات على فعل المضارع البسيط — التصريف، النفي، الاستفهام.',content:'**Present Simple Worksheet**\n\n1. She ___ (go) to school every day.\n2. They ___ (not/eat) meat.\n3. ___ he ___ (study) English?\n4. Write 3 sentences about your daily routine.\n5. Convert to negative: "I like coffee."'},
  {icon:'📘',title:'المفردات — الحياة اليومية',desc:'مفردات الحياة اليومية مع الأمثلة والتدريبات.',content:'**Daily Life Vocabulary Worksheet**\n\nMatch the words with their Arabic meanings:\n1. Exhausted - 2. Curious - 3. Enormous - 4. Ancient - 5. Generous\n\nUse 3 words in sentences of your own.'},
  {icon:'📗',title:'القراءة والاستيعاب',desc:'نص قرائي مع أسئلة استيعاب متنوعة.',content:'**Reading Comprehension Worksheet**\n\nRead the passage and answer the questions:\n"Rania is a 14-year-old student who loves science. Every day after school, she reads books about space and planets. She dreams of becoming an astronaut."\n\n1. How old is Rania?\n2. What does she read about?\n3. What is her dream job?\n4. Find a word that means "heavenly bodies".'},
  {icon:'📙',title:'الكتابة — رسالة رسمية',desc:'نموذج كتابة رسالة رسمية مع التعليمات.',content:'**Formal Letter Writing Worksheet**\n\nWrite a formal letter to your school principal asking for a school trip. Include:\n- Proper greeting\n- Reason for writing\n- Details of your request\n- Polite closing\n\nRemember to use: I am writing to request / I would be grateful if / I look forward to your response.'},
  {icon:'📕',title:'المحادثة — التعريف بالنفس',desc:'حوارات ونماذج للتدرب على المحادثة.',content:'**Speaking Worksheet — Introducing Yourself**\n\nPractice this dialogue:\nA: Hello! My name is Ahmad. What\'s your name?\nB: Hi, I\'m Sara. Nice to meet you.\nA: Where are you from?\nB: I\'m from Zarqa. And you?\nA: I\'m from Amman. What are your hobbies?\nB: I love reading and playing basketball.\n\nNow write your own introduction (5-7 sentences).'},
  {icon:'📓',title:'زمن الماضي البسيط',desc:'تدريبات شاملة على الماضي البسيط المنتظم وغير المنتظم.',content:'**Past Simple Worksheet**\n\n1. Write the past tense: go, see, eat, buy, make\n2. Correct: Yesterday I goed to the market.\n3. Write 5 sentences about what you did last weekend.\n4. Convert to question: "She visited her grandmother."\n5. Negative: "They played football." → ___'},
  {icon:'📒',title:'المستقبل — will / going to',desc:'الفرق بين will و going to مع أمثلة وتمارين.',content:'**Future Tense Worksheet**\n\nExplain the difference:\n- "I will help you." (sudden decision / promise)\n- "I am going to study tonight." (plan)\n\nExercises:\n1. Complete: She ___ (travel) to London next month.\n2. Use "will" to make a promise.\n3. Write your plans for the weekend using "going to".'},
  {icon:'📑',title:'الاسم الموصول',desc:'تدريبات على who, which, that, where.',content:'**Relative Clauses Worksheet**\n\nWho = people | Which/That = things | Where = places\n\n1. The teacher ___ taught us was excellent.\n2. The book ___ I read was interesting.\n3. The city ___ I was born is Zarqa.\n4. Combine: "I know a boy. The boy speaks 3 languages."\n5. Write 3 sentences using relative clauses.'},
  {icon:'📋',title:'الكلمات الرابطة',desc:'استخدام الكلمات الرابطة في الكتابة.',content:'**Linking Words Worksheet**\n\nCategories:\nAddition: also, furthermore, in addition\nContrast: however, but, although, on the other hand\nCause/Effect: because, therefore, as a result\nSequence: first, then, finally\n\nExercises:\n1. Join: "I like English. It is difficult for me." → (however)\n2. Complete: I study hard ___ I want to succeed.\n3. Write a paragraph using 5 different linking words.'},
  {icon:'📜',title:'الاستماع والمحادثة',desc:'سيناريوهات للتدرب على الاستماع والحوار.',content:'**Listening & Speaking Worksheet**\n\nRole-Play Scenarios:\n\nScenario A — At the School Library:\nStudent asks the librarian for a book about science.\n\nScenario B — Talking to a New Student:\nWelcome a new classmate and show them around the school.\n\nScenario C — Discussing Homework:\nTwo students compare their answers and explain their thinking.\n\nPractice each scenario with a partner for 3 minutes.'},
];

const FLASHCARDS = [
  {front:'Curious',back:'فضولي — eager to know or learn'},
  {front:'Enormous',back:'ضخم جداً — very large in size'},
  {front:'Ancient',back:'قديم — very old, from long ago'},
  {front:'Exhausted',back:'منهك — extremely tired'},
  {front:'Generous',back:'كريم — willing to give and share'},
  {front:'Ambitious',back:'طموح — having strong desires to succeed'},
  {front:'Frequent',back:'متكرر — happening often'},
  {front:'Efficient',back:'فعّال — doing things well without waste'},
  {front:'Accomplish',back:'ينجز / يحقق — to successfully complete something'},
  {front:'Significant',back:'مهم / ذو أهمية — important, meaningful'},
];

const GRAMMAR_CARDS = [
  {title:'Present Simple',rule:'Subject + verb (add s/es for he/she/it)',ex:'She plays football every day.'},
  {title:'Present Continuous',rule:'Subject + is/am/are + verb-ing',ex:'He is studying right now.'},
  {title:'Past Simple',rule:'Subject + verb2 (or verb+ed for regular)',ex:'They went to the library yesterday.'},
  {title:'Future (will)',rule:'Subject + will + base verb',ex:'I will help you tomorrow.'},
  {title:'Future (going to)',rule:'Subject + is/am/are + going to + base verb',ex:'She is going to visit her family.'},
  {title:'Present Perfect',rule:'Subject + has/have + past participle',ex:'I have already finished my homework.'},
];

const SPEAKING_QUESTIONS = [
  ['Talk about your daily routine in the morning.','Describe your favourite teacher and explain why you like them.','What is your favourite subject and why?','What do you do in your free time?','Describe your school.'],
  ['Do you think technology helps students learn? Why?','What are the advantages and disadvantages of social media?','How do you think AI will change education?','Should students have mobile phones in class? Give reasons.','What is your dream job and why?'],
  ['Describe a memorable trip or experience.','What is the most important skill a person can have?','Talk about a book, film, or TV show you enjoyed.','If you could live anywhere in the world, where would it be?','What do you think makes a good friend?'],
];

const WRITING_PROMPTS = [
  'Write 6 sentences about how technology helps you learn English. Use "because", "also", and "however".',
  'Write a paragraph about your favourite hobby. Include what it is, when you do it, and why you enjoy it.',
  'Write a formal email to your English teacher asking for extra homework to prepare for an exam.',
  'Describe the advantages and disadvantages of online learning in a short paragraph.',
  'Write about a challenge you faced and how you overcame it. Use past tense throughout.',
];

// ===== STATE =====
let currentMode = 'explain';
let currentCat = 'all';
let currentFcIndex = 0;
let fcFlipped = false;
let speakingSet = 0;
let writingIndex = 0;

// ===== INIT =====
window.onload = function(){
  renderQuestions();
  renderWorksheets();
  renderGrammarCards();
  renderSpeaking();
  renderWriting();
  renderFlashcard();
};

// ===== SIDEBAR =====
function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
}

// ===== MODE =====
function setMode(el, mode){
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  currentMode = mode;
}

function fillPrompt(text){
  document.getElementById('assistantInput').value = text;
}

function setAssistantPrompt(text){
  document.getElementById('assistantInput').value = text;
  document.getElementById('assistant').scrollIntoView({behavior:'smooth'});
  closeSidebar();
}

// ===== ASSISTANT =====
const RESPONSES = {
  explain:{
    'present simple':'**المضارع البسيط (Present Simple):**\n\n✅ الاستخدام: للحديث عن العادات والحقائق.\n\n📌 القاعدة:\n- I/You/We/They + فعل أساسي\n- He/She/It + فعل + s/es\n\n✍️ أمثلة:\n• I study English every day.\n• She goes to school at 7 AM.\n• They don\'t like cold weather.\n\n❓ السؤال: Do/Does + subject + verb?\n• Does she play football?',
    default:'**شرح القاعدة:**\n\nاخترت وضع الشرح بالعربي. سأوضح الموضوع بطريقة مبسطة.\n\n📚 المفهوم: ما تسأل عنه يشمل قاعدة أساسية في اللغة الإنجليزية.\n\n💡 نصيحة: ابدأ بالأمثلة ثم تعلم القاعدة — هذا أسهل للفهم!\n\nاكتب موضوعاً محدداً مثل: "present simple" أو "passive voice" للحصول على شرح تفصيلي.',
  },
  correct:{
    default:'**تصحيح الجملة:**\n\n🔴 الخطأ الشائع في جملتك:\nتحقق من:\n• تصريف الفعل مع الضمير\n• استخدام does/do في النفي والسؤال\n• إضافة s/es مع he/she/it\n\n✅ الصواب: أعد كتابة الجملة مع انتباهك لهذه النقاط.\n\n💡 مثال: She don\'t like → She doesn\'t like ✔',
  },
  quiz:{
    default:'**أسئلة تدريبية:**\n\n1️⃣ Fill in: She ___ (go) to school every day.\n2️⃣ Correct: They was very tired yesterday.\n3️⃣ Convert to question: "He likes football."\n4️⃣ Write the past tense of: see / eat / make\n5️⃣ Use "however" in a meaningful sentence.\n\n📝 بعد الإجابة، راجع القاعدة لمقارنة إجاباتك!',
  },
  paragraph:{
    default:'**فقرة نموذجية:**\n\nTechnology and Education\n\nTechnology has changed the way students learn. Nowadays, students can use smartphones and tablets to access information quickly. Moreover, online platforms offer interactive lessons and videos that make learning more enjoyable. However, students should be careful not to rely on technology too much. In conclusion, technology is a powerful tool when used wisely.\n\n📌 لاحظ استخدام: Moreover / However / In conclusion (كلمات رابطة)',
  },
  speaking:{
    default:'**أسئلة للمحادثة:**\n\n🗣️ تدرب على هذه الأسئلة:\n\n1. "Tell me about yourself."\n→ My name is ___, I\'m ___ years old, and I study at ___.\n\n2. "What do you enjoy doing in your free time?"\n→ In my free time, I enjoy ___ because ___.\n\n3. "Describe your school."\n→ My school is ___, it has ___, and I love it because ___.\n\n💡 نصيحة: تحدث لمدة دقيقة كاملة عن كل سؤال!',
  },
};

function askAssistant(){
  const input = document.getElementById('assistantInput').value.trim();
  if(!input){showToast('⚠️ الرجاء كتابة سؤالك أولاً');return;}
  const out = document.getElementById('assistantOutput');
  out.classList.add('loading');
  out.textContent = '';
  setTimeout(()=>{
    out.classList.remove('loading');
    const modeData = RESPONSES[currentMode] || RESPONSES.explain;
    let response = modeData.default;
    const inputLower = input.toLowerCase();
    for(const key in modeData){
      if(key!=='default' && inputLower.includes(key)){response=modeData[key];break;}
    }
    out.innerHTML = formatResponse(response);
  }, 900);
}

function formatResponse(text){
  return text
    .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .replace(/\n/g,'<br/>')
    .replace(/^(✅|📌|💡|📚|🗣️|📝|❓|✍️|🔴|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣)/gm,'$1');
}

// ===== QUESTIONS =====
function renderQuestions(){
  const grid = document.getElementById('questionsGrid');
  const search = document.getElementById('qSearch').value.toLowerCase();
  const filtered = QUESTIONS.filter(q=>{
    const catOk = currentCat==='all' || q.cat===currentCat;
    const searchOk = !search || q.q.toLowerCase().includes(search) || q.a.toLowerCase().includes(search);
    return catOk && searchOk;
  });
  if(filtered.length===0){
    grid.innerHTML='<div class="no-results">🔍 لم يتم العثور على نتائج. جرب كلمة بحث أخرى.</div>';
    return;
  }
  const catLabels={vocab:'📘 مفردات',grammar:'📗 قواعد',reading:'📙 قراءة',writing:'📕 كتابة'};
  grid.innerHTML = filtered.map((q,i)=>`
    <div class="q-card ${q.cat}">
      <div class="q-meta">
        <span class="q-tag ${q.cat}">${catLabels[q.cat]}</span>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="q-actions">
        <button class="q-btn" onclick="toggleAnswer('qa-${i}',this)">👁️ عرض الإجابة</button>
        <button class="q-btn" onclick="openModal(${JSON.stringify(q.q).replace(/'/g,"&#39;")},${JSON.stringify(q.a).replace(/'/g,"&#39;")})">🔍 تفاصيل</button>
        <button class="q-btn" onclick="sendToAssistant(${JSON.stringify(q.q).replace(/'/g,"&#39;")})">🤖 اسأل المساعد</button>
      </div>
      <div class="q-answer" id="qa-${i}">${q.a}</div>
    </div>
  `).join('');
}

function toggleAnswer(id, btn){
  const el = document.getElementById(id);
  el.classList.toggle('show');
  btn.textContent = el.classList.contains('show') ? '🙈 إخفاء الإجابة' : '👁️ عرض الإجابة';
}

function filterCat(btn, cat){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = cat;
  renderQuestions();
}

function filterQuestions(){renderQuestions();}

function clearQSearch(){
  document.getElementById('qSearch').value='';
  filterQuestions();
}

function sidebarSearchFn(val){
  document.getElementById('qSearch').value=val;
  document.getElementById('question-bank').scrollIntoView({behavior:'smooth'});
  filterQuestions();
  closeSidebar();
}

function sendToAssistant(q){
  document.getElementById('assistantInput').value=q;
  document.getElementById('assistant').scrollIntoView({behavior:'smooth'});
  showToast('✅ تم إرسال السؤال للمساعد الذكي');
}

// ===== WORKSHEETS =====
function renderWorksheets(){
  document.getElementById('worksheetsGrid').innerHTML = WORKSHEETS.map((w,i)=>`
    <div class="ws-card">
      <div class="ws-icon">${w.icon}</div>
      <div class="ws-title">${w.title}</div>
      <div class="ws-desc">${w.desc}</div>
      <div class="ws-footer">
        <button class="ws-btn ws-btn-view" onclick="viewWorksheet(${i})">👁️ عرض</button>
        <button class="ws-btn ws-btn-dl" onclick="downloadWorksheet(${i})">⬇️ حفظ</button>
      </div>
    </div>
  `).join('');
}

function viewWorksheet(i){
  const w = WORKSHEETS[i];
  openModal(w.title, w.content.replace(/\n/g,'<br/>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>'));
}

function downloadWorksheet(i){
  const w = WORKSHEETS[i];
  const blob = new Blob([w.title+'\n\n'+w.content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href=url; a.download=w.title+'.txt'; a.click();
  URL.revokeObjectURL(url);
  showToast('⬇️ تم تحميل ورقة العمل');
}

// ===== LAB =====
function switchLab(btn, panel){
  document.querySelectorAll('.lab-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.lab-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-'+panel).classList.add('active');
}

function renderGrammarCards(){
  document.getElementById('grammarCards').innerHTML = GRAMMAR_CARDS.map(g=>`
    <div class="gram-card">
      <h4>${g.title}</h4>
      <p style="font-size:0.85rem;color:var(--muted);">${g.rule}</p>
      <div class="example">✍️ ${g.ex}</div>
    </div>
  `).join('');
}

function renderFlashcard(){
  const card = FLASHCARDS[currentFcIndex];
  document.getElementById('fcFront').textContent = card.front;
  document.getElementById('fcBack').textContent = card.back;
  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
  fcFlipped = false;
  document.getElementById('fcProgress').style.width = ((currentFcIndex+1)/FLASHCARDS.length*100)+'%';
}

function flipCard(){
  fcFlipped=!fcFlipped;
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard(dir){
  currentFcIndex = (currentFcIndex+dir+FLASHCARDS.length)%FLASHCARDS.length;
  renderFlashcard();
}

function renderSpeaking(){
  const qs = SPEAKING_QUESTIONS[speakingSet % SPEAKING_QUESTIONS.length];
  document.getElementById('speakingList').innerHTML = qs.map(q=>`<li>${q}</li>`).join('');
}

function refreshSpeaking(){
  speakingSet++;
  renderSpeaking();
  showToast('🔄 تم تحديث الأسئلة');
}

function renderWriting(){
  document.getElementById('writingPrompt').innerHTML = '✍️ ' + WRITING_PROMPTS[writingIndex % WRITING_PROMPTS.length];
}

function refreshWriting(){
  writingIndex++;
  renderWriting();
  showToast('🔄 تحدٍ جديد!');
}

// ===== CONTACT =====
function submitContact(){
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value;
  const msg = document.getElementById('cf-msg').value.trim();
  if(!name||!email||!subject||!msg){
    showToast('⚠️ الرجاء ملء جميع الحقول المطلوبة');
    return;
  }
  if(!email.includes('@')){
    showToast('⚠️ الرجاء إدخال بريد إلكتروني صحيح');
    return;
  }
  document.getElementById('formSuccess').classList.add('show');
  document.getElementById('cf-name').value='';
  document.getElementById('cf-email').value='';
  document.getElementById('cf-subject').value='';
  document.getElementById('cf-msg').value='';
  document.getElementById('cf-role').value='';
  showToast('✅ تم إرسال رسالتك بنجاح!');
}

// ===== MODAL =====
function openModal(title, body){
  document.getElementById('modalTitle').innerHTML = title;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modal').classList.add('open');
}
function closeModal(){
  document.getElementById('modal').classList.remove('open');
}
document.getElementById('modal').addEventListener('click',function(e){
  if(e.target===this) closeModal();
});

// ===== TOAST =====
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

// ===== SMOOTH NAV HIGHLIGHT =====
window.addEventListener('scroll',()=>{
  const sections=['top','assistant','question-bank','worksheets','lab','contact'];
  const navLinks=document.querySelectorAll('.topbar-nav a');
  let current='top';
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&window.scrollY>=el.offsetTop-100) current=id;
  });
  navLinks.forEach(a=>{
    a.classList.remove('active');
    if(a.getAttribute('href')==='#'+current) a.classList.add('active');
  });
});