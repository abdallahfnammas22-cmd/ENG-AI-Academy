const questionBank = [
  {
    id: 'vocabulary',
    title: 'المفردات',
    description: '20 سؤالًا لتقوية الكلمات والمعاني والاستخدام داخل الجملة.',
    questions: [
      'What does the word "improve" mean in Arabic?',
      'Use the word "practice" in a simple sentence.',
      'Choose the correct meaning of "confident".',
      'Write a synonym for "big".',
      'Write an antonym for "easy".',
      'Complete the sentence: I ___ English every evening.',
      'What is the plural of "child"?',
      'Give one classroom object in English.',
      'What does "listen carefully" mean?',
      'Use the word "teacher" in a sentence.',
      'Choose the correct word: book / run / happy — which one is a noun?',
      'Write two words related to school.',
      'What does the word "answer" mean?',
      'Complete: My favorite subject is ___.',
      'Write one food item in English.',
      'What is the opposite of "hot"?',
      'What is the opposite of "fast"?',
      'Choose the correct spelling: becuse / because / becaus.',
      'Write one word for a family member in English.',
      'Use the word "help" in a short sentence.'
    ]
  },
  {
    id: 'grammar',
    title: 'القواعد',
    description: '20 سؤالًا حول الأزمنة، الضمائر، والتراكيب الأساسية.',
    questions: [
      'Choose the correct sentence: He go to school / He goes to school.',
      'Complete: I ___ reading now. (am / is / are)',
      'Correct the mistake: She have a pen.',
      'Choose the right pronoun for Ahmad: he / she / it.',
      'Complete: They ___ happy yesterday. (was / were)',
      'Turn into negative: I like milk.',
      'Turn into question: You play football.',
      'Choose the correct article: a apple / an apple.',
      'Complete: There ___ two books on the table. (is / are)',
      'Choose the correct form: We was / We were late.',
      'Write one sentence in the present simple.',
      'Write one sentence in the present continuous.',
      'Choose the correct possessive: This is ___ book. (my / me)',
      'Complete: She can ___ English. (speak / speaks)',
      'Correct the sentence: They is in class.',
      'Choose the correct preposition: The pen is ___ the bag. (in / on)',
      'Complete: My father ___ at 7 every day. (work / works)',
      'Make a question using "Where".',
      'Turn into past simple: We visit our teacher.',
      'Choose the correct conjunction: I studied hard, ___ I passed. (so / but)'
    ]
  },
  {
    id: 'reading',
    title: 'القراءة',
    description: '20 سؤالًا لتنمية فهم المقروء وتحديد الفكرة العامة والتفاصيل.',
    questions: [
      'Read a short paragraph and identify the main idea.',
      'Who is the speaker in the text?',
      'Where does the story happen?',
      'Why did the student feel happy?',
      'Find one adjective in the paragraph.',
      'Find one verb in the paragraph.',
      'Choose the best title for the text.',
      'What happened first in the story?',
      'What happened at the end?',
      'Write one true statement from the text.',
      'Write one false statement from the text.',
      'What is the meaning of the word from context?',
      'Who helped the main character?',
      'What was the problem in the text?',
      'What was the solution?',
      'Underline the sentence that shows the main event.',
      'What lesson can we learn from the reading?',
      'Choose the correct answer based on detail.',
      'Is the text about school, family, or travel?',
      'Write one question you can ask about the text.'
    ]
  },
  {
    id: 'writing',
    title: 'الكتابة والمحادثة',
    description: '20 سؤالًا ومهام قصيرة لتشجيع التعبير الشفهي والكتابي.',
    questions: [
      'Introduce yourself in 4 simple sentences.',
      'Describe your classroom in English.',
      'Write a short message to your teacher.',
      'Talk about your favorite hobby.',
      'Write 5 sentences about your daily routine.',
      'Ask your friend three questions about school.',
      'Write a sentence using "because".',
      'Describe your best friend in 4 sentences.',
      'Write a short paragraph about technology.',
      'Talk about how you learn new words.',
      'Write a polite request in English.',
      'Say what you like and do not like.',
      'Write a short email opening line.',
      'Give advice to a classmate who wants to improve English.',
      'Write a sentence in the past about yesterday.',
      'Write a sentence about tomorrow using will.',
      'Ask a question using "How often".',
      'Describe a picture in three sentences.',
      'Write a goal for this month in English.',
      'Tell a short story in 5 simple sentences.'
    ]
  }
];

const worksheets = [
  { title: 'ورقة عمل 1 — مفردات المدرسة', level: 'أساسي', skill: 'Vocabulary', tasks: ['طابق 10 كلمات مع المعنى العربي.', 'اكتب 5 جمل قصيرة باستخدام الكلمات.', 'صنّف الكلمات إلى places / people / objects.'] },
  { title: 'ورقة عمل 2 — Present Simple', level: 'أساسي', skill: 'Grammar', tasks: ['أكمل 12 فراغًا بالفعل الصحيح.', 'حوّل 5 جمل إلى صيغة النفي.', 'كوّن 5 أسئلة قصيرة.'] },
  { title: 'ورقة عمل 3 — Present Continuous', level: 'أساسي / متوسط', skill: 'Grammar', tasks: ['اختر الصياغة الصحيحة.', 'صف 4 صور بجمل في الحاضر المستمر.', 'صحح 5 أخطاء لغوية.'] },
  { title: 'ورقة عمل 4 — Reading Comprehension', level: 'متوسط', skill: 'Reading', tasks: ['اقرأ فقرة قصيرة.', 'أجب عن 6 أسئلة فهم.', 'استخرج 4 كلمات جديدة من النص.'] },
  { title: 'ورقة عمل 5 — Daily Routine Writing', level: 'أساسي', skill: 'Writing', tasks: ['رتب أفكار اليوم الدراسي.', 'اكتب 6–8 جمل عن روتينك اليومي.', 'اطلب من الذكاء الاصطناعي تصحيح المسودة.'] },
  { title: 'ورقة عمل 6 — AI Conversation Cards', level: 'أساسي / متوسط', skill: 'Speaking', tasks: ['اختر بطاقة سؤال.', 'أجب بجملة كاملة.', 'كرر الإجابة بعد تحسينها.'] },
  { title: 'ورقة عمل 7 — Email Basics', level: 'متوسط', skill: 'Writing', tasks: ['اكتب تحية مناسبة.', 'كوّن 3 جمل لطلب مساعدة.', 'اكتب جملة ختامية مؤدبة.'] },
  { title: 'ورقة عمل 8 — Describing Pictures', level: 'أساسي / متوسط', skill: 'Speaking / Writing', tasks: ['اكتب أسماء 8 عناصر في الصورة.', 'كوّن 4 جمل وصفية.', 'استخدم there is / there are.'] },
  { title: 'ورقة عمل 9 — Synonyms and Antonyms', level: 'متوسط', skill: 'Vocabulary', tasks: ['اكتب المترادف أو الضد.', 'اكمل جملًا من سياق مناسب.', 'استخدم 5 كلمات في فقرة قصيرة.'] },
  { title: 'ورقة عمل 10 — Revision Sheet', level: 'جميع المستويات', skill: 'Mixed Skills', tasks: ['5 مفردات.', '5 أسئلة قواعد.', 'فقرة قصيرة وأسئلة فهم.', 'مهمة كتابة قصيرة.'] }
];

const flashcards = [
  { word: 'Improve', ar: 'يطوّر / يحسّن', example: 'I want to improve my English.' },
  { word: 'Practice', ar: 'يتدرّب', example: 'Practice every day to get better.' },
  { word: 'Correct', ar: 'يصحح / صحيح', example: 'Please correct my sentence.' },
  { word: 'Answer', ar: 'إجابة / يجيب', example: 'Answer in a full sentence.' }
];

const categoryContainer = document.getElementById('questionCategories');
const worksheetContainer = document.getElementById('worksheetGrid');
const searchInput = document.getElementById('siteSearch');
const navSearch = document.getElementById('navSearch');
const searchStatus = document.getElementById('searchStatus');
const clearSearchBtn = document.getElementById('clearSearch');
let activeFilter = 'all';

function renderQuestions() {
  if (!categoryContainer) return;
  categoryContainer.innerHTML = questionBank.map(category => `
    <article class="category-card" data-category="${category.id}">
      <header>
        <div>
          <h3>${category.title}</h3>
          <p>${category.description}</p>
        </div>
        <span class="badge">20 سؤال</span>
      </header>
      <ol class="question-list">
        ${category.questions.map((question, index) => `
          <li class="question-item" data-search="${category.title} ${question}">
            <strong>سؤال ${index + 1}</strong>
            <span>${question}</span>
            <small>الفئة: ${category.title}</small>
          </li>
        `).join('')}
      </ol>
    </article>`).join('');
}

function renderWorksheets() {
  if (!worksheetContainer) return;
  worksheetContainer.innerHTML = worksheets.map((sheet, index) => `
    <article class="worksheet-card" data-search="${sheet.title} ${sheet.level} ${sheet.skill} ${sheet.tasks.join(' ')}">
      <h3>${index + 1}. ${sheet.title}</h3>
      <div class="worksheet-meta"><span>${sheet.level}</span><span>${sheet.skill}</span></div>
      <ol class="worksheet-tasks">${sheet.tasks.map(task => `<li>${task}</li>`).join('')}</ol>
    </article>`).join('');
}

function applySearchAndFilter(termSource = searchInput?.value || '') {
  const term = termSource.trim().toLowerCase();
  let visibleQuestions = 0;
  let visibleWorksheets = 0;

  document.querySelectorAll('.category-card').forEach(card => {
    const category = card.dataset.category;
    const categoryMatches = activeFilter === 'all' || activeFilter === category;
    let cardHasVisibleItem = false;

    card.querySelectorAll('.question-item').forEach(item => {
      const text = item.dataset.search.toLowerCase();
      const matchesSearch = !term || text.includes(term);
      const shouldShow = categoryMatches && matchesSearch;
      item.classList.toggle('hidden', !shouldShow);
      if (shouldShow) {
        cardHasVisibleItem = true;
        visibleQuestions += 1;
      }
    });

    card.classList.toggle('hidden', !cardHasVisibleItem);
  });

  document.querySelectorAll('.worksheet-card').forEach(card => {
    const text = card.dataset.search.toLowerCase();
    const matchesSearch = !term || text.includes(term);
    card.classList.toggle('hidden', !matchesSearch);
    if (matchesSearch) visibleWorksheets += 1;
  });

  if (!term && activeFilter === 'all') searchStatus.textContent = 'يعرض الموقع الآن جميع الأسئلة والأوراق المتاحة.';
  else searchStatus.textContent = `تم العثور على ${visibleQuestions} سؤالًا و ${visibleWorksheets} ورقة عمل مطابقة.`;
}

function syncSearch(value) {
  if (searchInput) searchInput.value = value;
  if (navSearch) navSearch.value = value;
  applySearchAndFilter(value);
}

renderQuestions();
renderWorksheets();
searchInput?.addEventListener('input', e => syncSearch(e.target.value));
navSearch?.addEventListener('input', e => syncSearch(e.target.value));
clearSearchBtn?.addEventListener('click', () => syncSearch(''));

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applySearchAndFilter(searchInput?.value || '');
  });
});

const fc = document.getElementById('flashcards');
if (fc) {
  flashcards.forEach(cardData => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'flashcard';
    let flipped = false;
    card.innerHTML = `<strong>${cardData.word}</strong><span>${cardData.ar}</span>`;
    card.addEventListener('click', () => {
      flipped = !flipped;
      card.innerHTML = flipped
        ? `<strong>${cardData.ar}</strong><span>${cardData.example}</span>`
        : `<strong>${cardData.word}</strong><span>${cardData.ar}</span>`;
    });
    fc.appendChild(card);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

const assistantInput = document.getElementById('assistantInput');
const assistantMode = document.getElementById('assistantMode');
const generateAnswer = document.getElementById('generateAnswer');
const chatWindow = document.getElementById('chatWindow');

function addMessage(type, text) {
  const wrapper = document.createElement('div');
  wrapper.className = `message ${type}`;
  wrapper.innerHTML = `<div class="bubble">${text.replace(/\n/g, '<br>')}</div>`;
  chatWindow.appendChild(wrapper);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function buildAssistantReply(prompt, mode) {
  const clean = prompt.trim();
  if (!clean) return 'اكتب سؤالك أولًا.';

  const replies = {
    arabic_explain: `شرح مبسط:\n- المطلوب هنا هو فهم الفكرة الأساسية في: ${clean}\n- حاول أولًا تحديد الكلمات المهمة.\n- ثم اكتب مثالًا بسيطًا من عندك.`,
    correct: `تصحيح مباشر:\n- راجع الفعل والفاعل في الجملة: ${clean}\n- تأكد من إضافة s مع He / She / It في الحاضر البسيط عند الحاجة.\n- اكتب الجملة مرة أخرى بعد التصحيح.`,
    questions: `أسئلة تدريبية:\n1) What do you mean by this topic?\n2) Write one correct sentence about it.\n3) Ask one question about it.\n4) Give one example from school life.\n5) Translate one key word to Arabic.`,
    paragraph: `فقرة قصيرة نموذجية:\nI am learning English step by step. ${clean} is important for me because it helps me speak and write better. I practice every day with simple sentences and short activities.`,
    speaking: `محادثة قصيرة:\nA: What do you think about ${clean}?\nB: I think it is useful and interesting.\nA: How do you practice it?\nB: I practice it every day with short answers.`
  };

  return replies[mode] || replies.arabic_explain;
}

function runAssistant() {
  const prompt = assistantInput.value.trim();
  if (!prompt) return;
  addMessage('user', prompt);
  addMessage('bot', buildAssistantReply(prompt, assistantMode.value));
  assistantInput.value = '';
}

generateAnswer?.addEventListener('click', runAssistant);
assistantInput?.addEventListener('keydown', e => {
  if (e.key === 'Enter') runAssistant();
});

document.querySelectorAll('[data-suggest]').forEach(btn => {
  btn.addEventListener('click', () => {
    assistantInput.value = btn.dataset.suggest;
    runAssistant();
  });
});

document.querySelectorAll('[data-prompt]').forEach(btn => {
  btn.addEventListener('click', () => {
    assistantInput.value = btn.dataset.prompt;
    document.getElementById('assistant')?.scrollIntoView({ behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');
mobileToggle?.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    sidebar.classList.remove('open');
  });
});

applySearchAndFilter();
