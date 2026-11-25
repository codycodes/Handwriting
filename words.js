/* Hindi & Marathi words for Penmanship Pad: levels, meanings, transliteration and sound.
 *
 * Each word is [devanagari, languages, meaning] where languages is "hi", "mr" or "hi mr".
 * When a word means different things in Hindi and Marathi, meaning is {hi: '...', mr: '...'}.
 * An optional 4th item overrides the automatic transliteration.
 *
 * Levels follow the order Devanagari is usually taught: letters with no vowel signs first,
 * then one vowel sign at a time, then nasal marks, then joined letters (conjuncts).
 */
(function (g) {
  const LEVELS = [
    { id: 'l1', name: 'Level 1 · no vowel signs', hint: 'Only the inherent "a" sound: plain letters side by side.', words: [
      ['घर', 'hi mr', 'house, home'], ['जल', 'hi mr', 'water (formal)'], ['मन', 'hi mr', 'mind, heart'],
      ['वन', 'hi mr', 'forest'], ['धन', 'hi mr', 'wealth'], ['कमल', 'hi mr', 'lotus'],
      ['नगर', 'hi mr', 'town, city'], ['शहर', 'hi mr', 'city'], ['रथ', 'hi mr', 'chariot'],
      ['चमक', 'hi mr', 'shine, sparkle'], ['कलम', 'hi mr', 'pen; (in law) a section or clause'],
      ['बदल', 'hi mr', { hi: 'change (verb stem: बदलना, to change)', mr: 'change (noun)' }],
      ['बस', 'hi mr', { hi: 'enough!; bus', mr: 'sit (command); bus' }],
      ['सण', 'mr', 'festival'], ['कळस', 'mr', 'temple spire; climax'],
      ['हम', 'hi', 'we'], ['सब', 'hi', 'all, everyone'], ['अब', 'hi', 'now'], ['जब', 'hi', 'when'],
      ['तब', 'hi', 'then'], ['कल', 'hi', 'yesterday; tomorrow'], ['डर', 'hi', 'fear'],
      ['नमक', 'hi', 'salt'], ['मगर', 'hi', 'crocodile; but'], ['अगर', 'hi', 'if'],
    ] },
    { id: 'l2', name: 'Level 2 · ा (ā)', hint: 'Adds the ā sign: a vertical line after the letter.', words: [
      ['काम', 'hi mr', 'work'], ['आज', 'hi mr', 'today'], ['नाक', 'hi mr', 'nose'], ['कान', 'hi mr', 'ear'],
      ['राजा', 'hi mr', 'king'], ['माता', 'hi mr', 'mother'], ['मामा', 'hi mr', "uncle (mother's brother)"],
      ['बाजार', 'hi mr', 'market'], ['आग', 'hi mr', 'fire'], ['चार', 'hi mr', 'four'], ['सात', 'hi mr', 'seven'], ['आठ', 'hi mr', 'eight'],
      ['दादा', 'hi mr', { hi: "grandfather (father's father)", mr: 'elder brother' }],
      ['बाबा', 'hi mr', { hi: 'father; old man; holy man', mr: 'father, dad' }],
      ['आता', 'hi mr', { hi: 'comes (आना, to come)', mr: 'now' }],
      ['नाव', 'hi mr', { hi: 'boat', mr: 'name' }],
      ['नाम', 'hi', 'name'], ['हाथ', 'hi', 'hand'], ['खाना', 'hi', 'food; to eat'], ['जाना', 'hi', 'to go'],
      ['साल', 'hi', 'year'], ['पापा', 'hi', 'dad'], ['आम', 'hi', 'mango; common'],
      ['हात', 'mr', 'hand'], ['गाव', 'mr', 'village'], ['पाय', 'mr', 'foot, leg'], ['काका', 'mr', "uncle (father's brother)"],
      ['शाळा', 'mr', 'school'], ['डाळ', 'mr', 'lentils (dal)'],
    ] },
    { id: 'l3', name: 'Level 3 · ि ी (i, ī)', hint: 'Short ि is written before the letter; long ी after it.', words: [
      ['नदी', 'hi mr', 'river'], ['तीन', 'hi mr', 'three'], ['पिता', 'hi mr', 'father'], ['जीवन', 'hi mr', 'life'],
      ['दिवस', 'hi mr', 'day'], ['गरीब', 'hi mr', 'poor'],
      ['पानी', 'hi', 'water'], ['दिन', 'hi', 'day'], ['किताब', 'hi', 'book'], ['दिल', 'hi', 'heart'],
      ['दीदी', 'hi', 'elder sister'], ['चीनी', 'hi', 'sugar; Chinese'], ['मीठा', 'hi', 'sweet'],
      ['पाणी', 'mr', 'water'], ['आई', 'mr', 'mother'], ['ताई', 'mr', 'elder sister'], ['मीठ', 'mr', 'salt'],
      ['बहीण', 'mr', 'sister'], ['गाडी', 'mr', 'car, vehicle'], ['नाही', 'mr', 'no, not'], ['मिरची', 'mr', 'chilli'],
    ] },
    { id: 'l4', name: 'Level 4 · ु ू (u, ū)', hint: 'Both hang below the letter: ु curls one way, ू the other.', words: [
      ['फूल', 'hi mr', 'flower'], ['दूध', 'hi mr', 'milk'], ['गुरु', 'hi mr', 'teacher'], ['दुकान', 'hi mr', 'shop'],
      ['गुलाब', 'hi mr', 'rose'], ['तू', 'hi mr', 'you (informal)'],
      ['ऊन', 'hi mr', { hi: 'wool', mr: 'sunshine' }],
      ['सूरज', 'hi', 'sun'], ['सुबह', 'hi', 'morning'], ['भूख', 'hi', 'hunger'], ['चूहा', 'hi', 'mouse, rat'],
      ['खुश', 'hi', 'happy'], ['पुल', 'hi', 'bridge'],
      ['मुलगा', 'mr', 'boy, son'], ['मुलगी', 'mr', 'girl, daughter'], ['पूल', 'mr', 'bridge'], ['सून', 'mr', 'daughter-in-law'],
    ] },
    { id: 'l5', name: 'Level 5 · े ै ो ौ (e, ai, o, au)', hint: 'Signs on top of the headline, and ो ौ after the letter.', words: [
      ['मोर', 'hi mr', 'peacock'], ['तेल', 'hi mr', 'oil'], ['देश', 'hi mr', 'country'], ['बोल', 'hi mr', 'speak (command)'],
      ['पैसा', 'hi mr', 'money'], ['मैदान', 'hi mr', 'open ground, field'], ['नौका', 'hi mr', 'boat'], ['एक', 'hi mr', 'one'],
      ['लोक', 'hi mr', { hi: 'world, realm; folk', mr: 'people' }],
      ['हो', 'hi mr', { hi: 'are; be (होना, to be)', mr: 'yes' }],
      ['सोना', 'hi', 'gold; to sleep'], ['लोग', 'hi', 'people'], ['और', 'hi', 'and'], ['सौ', 'hi', 'hundred'],
      ['दो', 'hi', 'two'], ['नौ', 'hi', 'nine'], ['बेटा', 'hi', 'son'], ['केला', 'hi', 'banana'], ['रोटी', 'hi', 'flatbread (roti)'],
      ['मेज', 'hi', 'table'], ['खेल', 'hi', 'game, sport'], ['पेड़', 'hi', 'tree'], ['घोड़ा', 'hi', 'horse'],
      ['दोन', 'mr', 'two'], ['खेळ', 'mr', 'game, sport'], ['पोळी', 'mr', 'flatbread (chapati)'], ['झाड', 'mr', 'tree'],
      ['घोडा', 'mr', 'horse'], ['केळे', 'mr', 'banana'], ['लिहिणे', 'mr', 'to write'], ['नऊ', 'mr', 'nine'],
    ] },
    { id: 'l6', name: 'Level 6 · ं ँ ः (nasal sounds)', hint: 'A dot (anusvara) or moon-dot (chandrabindu) above for a nasal sound; ः for a breath.', words: [
      ['रंग', 'hi mr', 'colour'], ['सुंदर', 'hi mr', 'beautiful'], ['संगीत', 'hi mr', 'music'], ['पंखा', 'hi mr', 'fan'],
      ['हिंदी', 'hi mr', 'Hindi (the language)'], ['दुःख', 'hi mr', 'sorrow, pain'], ['मुंबई', 'hi mr', 'Mumbai'],
      ['मैं', 'hi', 'I'], ['हाँ', 'hi', 'yes'], ['नहीं', 'hi', 'no, not'], ['गाँव', 'hi', 'village'], ['चाँद', 'hi', 'moon'],
      ['पाँच', 'hi', 'five'], ['अंडा', 'hi', 'egg'],
      ['आंबा', 'mr', 'mango'], ['शंभर', 'mr', 'hundred'], ['मांजर', 'mr', 'cat'], ['चांगला', 'mr', 'good'], ['पाच', 'mr', 'five'],
    ] },
    { id: 'l7', name: 'Level 7 · joined letters', hint: 'Conjuncts: two consonants written together, the first one often loses its vertical line.', words: [
      ['नमस्ते', 'hi mr', 'hello (greeting)'], ['नमस्कार', 'hi mr', 'hello (formal greeting)'], ['धन्यवाद', 'hi mr', 'thank you'],
      ['पुस्तक', 'hi mr', 'book'], ['मित्र', 'hi mr', 'friend'], ['प्रेम', 'hi mr', 'love'], ['स्वागत', 'hi mr', 'welcome'],
      ['कृपया', 'hi mr', 'please', 'kṛpayā'], ['क्षमा', 'hi mr', 'forgiveness'], ['विद्यार्थी', 'hi mr', 'student'],
      ['ज्ञान', 'hi mr', 'knowledge (Hindi says "gyān", Marathi says "dnyān")', 'gyān / dnyān'],
      ['दोस्त', 'hi', 'friend'], ['कुत्ता', 'hi', 'dog'], ['बिल्ली', 'hi', 'cat'], ['प्यार', 'hi', 'love'], ['अच्छा', 'hi', 'good; okay'],
      ['कुत्रा', 'mr', 'dog'], ['आम्ही', 'mr', 'we'], ['तुम्ही', 'mr', 'you (plural, polite)'],
    ] },
    { id: 'num', name: 'Numbers 1–10', hint: 'Number words. Several differ between Hindi and Marathi.', words: [
      ['एक', 'hi mr', 'one'], ['दो', 'hi', 'two'], ['दोन', 'mr', 'two'], ['तीन', 'hi mr', 'three'], ['चार', 'hi mr', 'four'],
      ['पाँच', 'hi', 'five'], ['पाच', 'mr', 'five'], ['छह', 'hi', 'six'], ['सहा', 'mr', 'six'], ['सात', 'hi mr', 'seven'],
      ['आठ', 'hi mr', 'eight'], ['नौ', 'hi', 'nine'], ['नऊ', 'mr', 'nine'], ['दस', 'hi', 'ten'], ['दहा', 'mr', 'ten'],
    ] },
    { id: 'phr', name: 'Everyday phrases', hint: 'Short sentences to write in one go.', words: [
      ['मैं ठीक हूँ', 'hi', 'I am fine'], ['मी ठीक आहे', 'mr', 'I am fine'],
      ['आप कैसे हैं', 'hi', 'How are you? (polite)'], ['तुम्ही कसे आहात', 'mr', 'How are you? (polite)'],
      ['मेरा नाम', 'hi', 'my name (मेरा नाम … है: my name is …)'], ['माझे नाव', 'mr', 'my name (माझे नाव … आहे: my name is …)'],
      ['सुप्रभात', 'hi mr', 'good morning'], ['शुभ रात्रि', 'hi', 'good night'], ['शुभ रात्री', 'mr', 'good night'],
      ['फिर मिलेंगे', 'hi', 'see you again'], ['पुन्हा भेटू', 'mr', 'see you again'],
      ['पानी दीजिए', 'hi', 'please give (me) water'], ['पाणी द्या', 'mr', 'please give (me) water'],
      ['आभारी आहे', 'mr', 'thank you (I am grateful)'],
    ] },
    { id: 'bw', name: 'Bollywood dialogues', hint: 'Famous film lines. Each one says which film it is from.', words: [
      ['कितने आदमी थे', 'hi', 'How many men were there? (Gabbar Singh, Sholay, 1975)'],
      ['मेरे पास माँ है', 'hi', 'I have Mother. (Deewaar, 1975)'],
      ['मोगैम्बो खुश हुआ', 'hi', 'Mogambo is pleased. (Mr. India, 1987)'],
      ['ये दोस्ती हम नहीं तोड़ेंगे', 'hi', 'We will never break this friendship. (song, Sholay, 1975)'],
      ['तारीख़ पे तारीख़', 'hi', 'Date after date (court case delays). (Damini, 1993)'],
      ['ऑल इज़ वेल', 'hi', 'All is well. (3 Idiots, 2009)'],
      ['हाउ इज़ द जोश', 'hi', "How's the josh (spirit)? (Uri, 2019)", 'hāu iz the joś'],
      ['जा सिमरन जा, जी ले अपनी ज़िंदगी', 'hi', 'Go Simran, go live your life. (Dilwale Dulhania Le Jayenge, 1995)'],
      ['डॉन को पकड़ना मुश्किल ही नहीं, नामुमकिन है', 'hi', "Catching Don isn't just hard, it's impossible. (Don, 1978)"],
      ['बाबूमोशाय, ज़िंदगी बड़ी होनी चाहिए, लंबी नहीं', 'hi', 'Babumoshai, life should be big, not long. (Anand, 1971)'],
      ['कभी कभी कुछ जीतने के लिए कुछ हारना पड़ता है', 'hi', 'Sometimes you have to lose something to win something. (Baazigar, 1993)'],
      ['आता माझी सटकली', 'mr', "Now I've lost my temper! (Singham, 2011: a Marathi line in a Hindi film)"],
      ['झिंग झिंग झिंगाट', 'mr', 'Zing zing zingaat: the hit dance song from Sairat (Marathi, 2016)'],
    ] },
    { id: 'cul', name: 'Festivals & sayings', hint: 'Greetings for festivals, and sayings you will see and hear everywhere.', words: [
      ['शुभ दीपावली', 'hi mr', 'Happy Diwali'],
      ['दिवाली की शुभकामनाएँ', 'hi', 'Best wishes for Diwali'],
      ['दिवाळीच्या हार्दिक शुभेच्छा', 'mr', 'Warm wishes for Diwali'],
      ['बुरा न मानो, होली है', 'hi', "Don't mind, it's Holi! (said while throwing colour)"],
      ['गणपती बाप्पा मोरया', 'mr', 'Hail Lord Ganesha! (the Ganeshotsav chant)', 'gaṇpatī bāppā moryā'],
      ['पुढच्या वर्षी लवकर या', 'mr', 'Come back early next year (said to Ganesha at the end of the festival)', 'puḍhchyā varṣī lavkar yā'],
      ['तिळगूळ घ्या, गोड गोड बोला', 'mr', 'Take this sesame-jaggery sweet and speak sweetly (Makar Sankranti)'],
      ['नवीन वर्षाच्या शुभेच्छा', 'mr', 'Happy New Year'],
      ['नए साल की शुभकामनाएँ', 'hi', 'Happy New Year'],
      ['जय महाराष्ट्र', 'mr', 'Hail Maharashtra (a greeting)'],
      ['जय हिंद', 'hi mr', 'Victory to India (a greeting)'],
      ['राम राम', 'hi', 'Hello (a village greeting in North India)'],
      ['अतिथि देवो भव', 'hi mr', 'The guest is God (Sanskrit saying)'],
      ['सत्यमेव जयते', 'hi mr', "Truth alone triumphs (India's national motto, from Sanskrit)"],
      ['वसुधैव कुटुम्बकम्', 'hi mr', 'The whole world is one family (Sanskrit saying)'],
    ] },
  ];

  // The learning path: letters first, then words, then films and culture. Each step is done once
  // most of its items are mastered (see index.html); the next one is suggested after that.
  const PATH = [
    { id: 'letters', name: 'Letters', steps: [
      { id: 'swar', name: 'स्वर · vowels', tutor: 'swar' },
      { id: 'vyanjan', name: 'व्यंजन · consonants', tutor: 'vyanjan' },
      { id: 'ank', name: 'अंक · numerals', tutor: 'ank' },
    ] },
    { id: 'words', name: 'Words', steps: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'num'].map((id) => ({ id, level: id })) },
    { id: 'culture', name: 'Bollywood & culture', steps: ['phr', 'cul', 'bw'].map((id) => ({ id, level: id })) },
  ];

  // Words used elsewhere in the app (example texts) that aren't in a level.
  const EXTRA = [
    ['कोडी', 'hi mr', 'Cody (the name, written in Devanagari)'], ['कोड्स', 'hi mr', 'codes (English "codes" written in Devanagari)'],
    ['कूल', 'hi mr', 'cool (English loanword)'], ['मराठी', 'hi mr', 'Marathi (the language)'], ['भाषा', 'hi mr', 'language'],
  ];

  const LANG_NAME = { hi: 'Hindi', mr: 'Marathi' };
  const DICT = new Map();
  const entry = (w) => ({ w: w[0], langs: w[1].split(' '), m: w[2], tr: w[3] || null });
  for (const lv of LEVELS) lv.words = lv.words.map((w) => { const e = entry(w); if (!DICT.has(e.w)) DICT.set(e.w, e); return e; });
  for (const w of EXTRA) { const e = entry(w); if (!DICT.has(e.w)) DICT.set(e.w, e); }

  /* ---------- Transliteration (IAST-style, with the silent "a" dropped as Hindi and Marathi speak it) ---------- */
  const CONS = {
    'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ', 'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
    'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
    'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ल': 'l', 'ळ': 'ḷ', 'व': 'v',
    'श': 'ś', 'ष': 'ṣ', 'स': 's', 'ह': 'h',
  };
  const NUKTA = { 'क': 'q', 'ख': 'x', 'ग': 'ġ', 'ज': 'z', 'ड': 'ṛ', 'ढ': 'ṛh', 'फ': 'f', 'य': 'y' };
  const VOWEL = { 'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ṛ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au', 'ऍ': 'ê', 'ऑ': 'ô', 'ॲ': 'æ' };
  const SIGN = { 'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ṛ', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ॅ': 'ê', 'ॉ': 'ô' };
  const DIGIT = '०१२३४५६७८९';
  const NASAL_BEFORE = [['कखगघङ', 'ṅ'], ['चछजझञ', 'ñ'], ['टठडढण', 'ṇ'], ['तथदधन', 'n'], ['पफबभम', 'm']];

  // Split a word into units: consonants (with their vowel), vowels, marks.
  function units(word) {
    const out = [];
    const s = word.normalize('NFD');
    for (let i = 0; i < s.length; i++) {
      let ch = s[i];
      if (CONS[ch]) {
        let r = CONS[ch];
        if (s[i + 1] === '़') { r = NUKTA[ch] || r; i++; }
        const u = { c: r, dev: ch, v: 'a', inherent: true };
        const nx = s[i + 1];
        if (nx === '्') { u.v = ''; u.inherent = false; i++; }
        else if (SIGN[nx]) { u.v = SIGN[nx]; u.inherent = false; i++; }
        out.push(u);
      } else if (VOWEL[ch]) out.push({ c: '', v: VOWEL[ch], inherent: false });
      else if (ch === 'ं') out.push({ mark: 'anusvara' });
      else if (ch === 'ँ') out.push({ mark: 'chandrabindu' });
      else if (ch === 'ः') out.push({ mark: 'visarga' });
      else if (DIGIT.includes(ch)) out.push({ lit: String(DIGIT.indexOf(ch)) });
      else if (ch === '।') out.push({ lit: '.' });
      else out.push({ lit: ch });
    }
    return out;
  }
  const isCons = (u) => u && u.c !== undefined && u.c !== '';
  const hasVowel = (u) => u && u.v !== undefined && u.v !== '' && !u.deleted;

  // Schwa deletion: the inherent "a" is silent at the end of a word (unless after a joined letter),
  // and inside a word between vowel+consonant and consonant+vowel (kamal, samajhnā, mulgā).
  function dropSchwa(us) {
    const L = us.filter((u) => u.v !== undefined);
    const last = L[L.length - 1];
    if (last && last.inherent && isCons(last) && L.length > 1) {
      const prev = L[L.length - 2];
      // After a joined letter ending in र, य or व (मित्र mitra) the "a" is still said.
      if (!(isCons(prev) && prev.v === '' && 'रयव'.includes(last.dev))) last.deleted = true;
    }
    for (let i = L.length - 2; i >= 1; i--) {
      const u = L[i];
      if (!u.inherent || u.deleted || !isCons(u)) continue;
      const prev = L[i - 1], next = L[i + 1];
      if (!hasVowel(prev) || !isCons(next) || !hasVowel(next)) continue;
      // Not if a joined letter sits on either side (that would make three consonants in a row).
      if (i >= 2 && isCons(L[i - 2]) && L[i - 2].v === '' ) continue;
      if (next.v === '' ) continue;
      u.deleted = true;
      i--; // the vowel before stays: don't delete two in a row
    }
  }

  function translitWord(word) {
    const us = units(word);
    dropSchwa(us);
    return render(us);
  }
  // Romanize units from..to (the next unit still decides how a nasal dot sounds).
  function render(us, from = 0, to = us.length) {
    let out = '';
    for (let i = from; i < to; i++) {
      const u = us[i];
      if (u.lit !== undefined) { out += u.lit; continue; }
      if (u.mark === 'visarga') { out += 'ḥ'; continue; }
      if (u.mark === 'chandrabindu') { out += '̃'; continue; }
      if (u.mark === 'anusvara') {
        const nx = us[i + 1], nd = nx && nx.dev;
        const hit = nd && NASAL_BEFORE.find(([set]) => set.includes(nd));
        out += hit ? hit[1] : 'ṃ';
        continue;
      }
      out += (u.c || '') + (u.deleted ? '' : u.v);
    }
    return out.normalize('NFC');
  }

  /* ---------- How each sound is said ---------- */
  const HOW = {
    // Vowels: the letter on its own and its sign after a consonant say the same sound.
    'अ': '"a" in about: short and relaxed', 'आ': '"a" in father', 'इ': '"i" in bit', 'ई': '"ee" in see',
    'उ': '"u" in put', 'ऊ': '"oo" in food', 'ऋ': '"ri" (Hindi) or "ru" (Marathi)', 'ए': '"a" in cake, without sliding into "ee"',
    'ऐ': '"a" in cat (Hindi); "ai" in aisle (Marathi)', 'ओ': '"o" in go, without sliding into "oo"',
    'औ': '"aw" in saw (Hindi); "ow" in cow (Marathi)', 'ऍ': '"a" in cat (English words)', 'ऑ': '"o" in hot (English words)',
    'क': '"k" in skip: no puff of air', 'ख': '"k" with a puff of air, as in kite', 'ग': '"g" in go', 'घ': '"g" with a breathy puff, like "dog-house" said fast',
    'ङ': '"ng" in sing', 'च': '"ch" in church, no puff of air (Marathi also says "ts" before a, o, u)', 'छ': '"ch" with a strong puff of air',
    'ज': '"j" in jam (Marathi also says "dz" before a, o, u)', 'झ': '"j" with a breathy puff', 'ञ': '"ny" in canyon',
    'ट': '"t" with the tongue tip curled back to the roof of the mouth', 'ठ': 'ट with a puff of air', 'ड': '"d" with the tongue tip curled back',
    'ढ': 'ड with a breathy puff', 'ण': '"n" with the tongue tip curled back',
    'त': '"t" with the tongue against the back of the top teeth, like Spanish "t"', 'थ': 'त with a puff of air (not "th" in think)',
    'द': '"d" with the tongue against the top teeth, like Spanish "d"', 'ध': 'द with a breathy puff (not "th" in this)', 'न': '"n" in no',
    'प': '"p" in spin: no puff of air', 'फ': '"p" with a puff of air, as in pin (many people say "f")', 'ब': '"b" in bat',
    'भ': '"b" with a breathy puff, like "club-house" said fast', 'म': '"m" in man', 'य': '"y" in yes',
    'र': 'a light tapped "r", like the "tt" in American "butter"', 'ल': '"l" in leaf', 'ळ': '"l" with the tongue tip curled back (Marathi)',
    'व': 'between "v" and "w"', 'श': '"sh" in shoe', 'ष': '"sh" with the tongue curled back (most people say it like श)', 'स': '"s" in sun', 'ह': '"h" in hat',
    'क़': '"k" from deep in the throat (Urdu and Persian words)', 'ख़': '"ch" in Scottish "loch"', 'ग़': 'a gargled "g", like French "r"',
    'ज़': '"z" in zoo', 'ड़': 'tongue curled back, then flicked forward: a flapped "r"', 'ढ़': 'ड़ with a breathy puff', 'फ़': '"f" in fan',
  };
  const SIGN_OF = { 'ा': 'आ', 'ि': 'इ', 'ी': 'ई', 'ु': 'उ', 'ू': 'ऊ', 'ृ': 'ऋ', 'े': 'ए', 'ै': 'ऐ', 'ो': 'ओ', 'ौ': 'औ', 'ॅ': 'ऍ', 'ॉ': 'ऑ' };
  const SPECIAL = {
    'क्ष': '"ksh": क and ष together', 'ज्ञ': '"gy" in Hindi, "dny" in Marathi (said as one sound)', 'त्र': '"tr": त and र together', 'श्र': '"shr": श and र together',
  };
  // Each part of a letter, explained: consonants first, then the vowel, then any nasal or breath mark.
  function howToSay(ak, silentA) {
    const out = [], t = ak.normalize('NFC');
    const sp = Object.keys(SPECIAL).find((k) => t.startsWith(k));
    let rest = t;
    if (sp) { out.push([sp, SPECIAL[sp]]); rest = t.slice(sp.length); }
    let vowel = null, cons = !!sp;
    for (let i = 0; i < rest.length; i++) {
      let ch = rest[i];
      if (rest[i + 1] === '़') { ch += '़'; i++; }
      if (ch === '्') continue;
      if (HOW[ch] && CONS[ch[0]]) { out.push([ch, HOW[ch]]); cons = true; }
      else if (HOW[ch]) vowel = ch;
      else if (SIGN_OF[ch]) vowel = SIGN_OF[ch];
      else if (ch === 'ं') out.push(['ं', 'nasal dot: an "n" or "m" before the next letter, or the vowel said through the nose']);
      else if (ch === 'ँ') out.push(['ँ', 'moon dot: the vowel is said through the nose']);
      else if (ch === 'ः') out.push(['ः', 'a soft "h" breath after the vowel']);
    }
    const endsBare = t.endsWith('्');
    if (vowel) out.splice(out.findIndex((x) => /^[ंँः]$/.test(x[0])) >= 0 ? out.findIndex((x) => /^[ंँः]$/.test(x[0])) : out.length, 0, [vowel, HOW[vowel]]);
    else if (cons && !endsBare) out.push(['अ', silentA ? 'the "a" after it is silent here' : HOW['अ'] + ' (every consonant has it unless a sign changes it)']);
    return out;
  }
  // A word split into letters, each with its sound in this word and on its own.
  function letterParts(word) {
    const parts = letters(word).filter((x) => DEVA.test(x));
    const us = units(word.replace(/[^\u0900-\u097F]/g, '')); dropSchwa(us);
    let i = 0;
    return parts.map((ak) => {
      const n = units(ak).length, from = i; i += n;
      const silentA = us.slice(from, i).some((u) => u.deleted);
      // On its own a letter keeps its "a" (क is "ka"), even where a word drops it.
      return { ak, tr: render(us, from, i), alone: render(units(ak)), silentA, how: howToSay(ak, silentA) };
    });
  }
  function translit(text) {
    const known = DICT.get(text);
    if (known && known.tr) return known.tr;
    return text.split(/(\s+)/).map((p) => (/\s/.test(p) ? p : (DICT.get(p)?.tr || translitWord(p)))).join('');
  }

  /* ---------- Splitting text into letters (aksharas) and words ---------- */
  // A Devanagari "letter" as written: consonants joined by virama, then a vowel sign and nasal marks.
  const AKSHARA = /(?:[क-हक़-य़ॸ-ॿ]़?्‍?)*[क-हक़-य़ॸ-ॿ]़?(?:[ा-ौॢॣ]|्)?[ऀ-ः]*|[ऄ-औॠॡॲ-ॷ][ऀ-ः]*|./gsu;
  const DEVA = /[ऀ-ॿ]/;
  function letters(text) {
    if (DEVA.test(text)) return text.normalize('NFC').match(AKSHARA) || [];
    if (typeof Intl !== 'undefined' && Intl.Segmenter) return Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), (x) => x.segment);
    return Array.from(text);
  }

  /* ---------- Meanings: built-in first, then Wiktionary ---------- */
  const CACHE_KEY = 'penmanship-pad:lookup';
  let cache = {}; try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') || {}; } catch (_) {}
  const saveCache = () => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (_) {} };
  const stripHtml = (h) => { const d = document.createElement('div'); d.innerHTML = h; return (d.textContent || '').replace(/\s+/g, ' ').trim(); };
  const custom = () => { try { return JSON.parse(localStorage.getItem('penmanship-pad:lists') || '[]') || []; } catch (_) { return []; } };

  function local(word) {
    const e = DICT.get(word);
    if (e) return { w: word, langs: e.langs, m: e.m, src: 'built-in' };
    for (const l of custom()) { const x = l.words.find((y) => y.w === word); if (x && x.m) return { w: word, langs: x.langs || [], m: x.m, src: l.name }; }
    const c = cache['def:' + word];
    if (c) return c.none ? null : c;
    return undefined; // not looked up yet
  }
  const pending = new Map();
  async function lookup(word) {
    const l = local(word);
    if (l !== undefined) return l;
    if (pending.has(word)) return pending.get(word);
    const p = (async () => {
      try {
        const r = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`);
        if (r.status === 404) { cache['def:' + word] = { none: true }; saveCache(); return null; }
        if (!r.ok) return null;
        const j = await r.json(), m = {}, langs = [];
        for (const code of ['hi', 'mr']) {
          const defs = (j[code] || []).flatMap((pos) => (pos.definitions || []).map((d) => stripHtml(d.definition || ''))).filter(Boolean);
          if (defs.length) { langs.push(code); m[code] = defs.slice(0, 3).join('; '); }
        }
        if (!langs.length) { cache['def:' + word] = { none: true }; saveCache(); return null; }
        const res = { w: word, langs, m: langs.length === 1 ? m[langs[0]] : m, src: 'Wiktionary' };
        cache['def:' + word] = res; saveCache();
        return res;
      } catch (_) { return null; } finally { pending.delete(word); }
    })();
    pending.set(word, p);
    return p;
  }
  function meaningText(e) {
    if (!e || !e.m) return '';
    if (typeof e.m === 'string') return e.m;
    return Object.entries(e.m).map(([k, v]) => `${LANG_NAME[k] || k}: ${v}`).join(' · ');
  }
  const langText = (langs) => (langs || []).map((l) => LANG_NAME[l] || l).join(' & ');

  /* ---------- Sound ---------- */
  // 1. Lingua Libre recordings saved in this repo: audio/index.json maps each word to its files,
  //    one per language, with the speaker (made by tools/fetch-lingualibre.py, no keys needed).
  // 2. For words that aren't in the lists (your own text, Anki lists): Lingua Libre, searched live.
  // 3. The device's Hindi or Marathi voice.
  const QID = { hi: 'Q1568 (hin)', mr: 'Q1571 (mar)' };
  let manifest = null;
  const manifestP = fetch('audio/index.json').then((r) => (r.ok ? r.json() : {})).catch(() => ({})).then((m) => (manifest = m || {}));

  const credit = (lang, speaker, license) => `${LANG_NAME[lang] || ''} recording by ${speaker} · Lingua Libre · ${license || 'CC BY-SA 4.0'}`.trim();
  // Marathi-only words try the Marathi recording first; everything else tries Hindi first.
  const langOrder = (langs) => (langs && langs.length === 1 && langs[0] === 'mr' ? ['mr', 'hi'] : ['hi', 'mr']);
  function fromManifest(word, langs) {
    const list = manifest[word];
    if (!Array.isArray(list)) return typeof list === 'string' ? { url: 'audio/' + list, src: 'Recording' } : undefined;
    for (const l of langOrder(langs)) {
      const r = list.find((x) => x.lang === l);
      if (r) return { url: 'audio/' + r.f, src: credit(r.lang, r.speaker, r.license), page: r.page };
    }
    // No recording of the whole phrase: play its words one after another, if each has one.
    const parts = word.split(/\s+/).map((w) => w.replace(/[^\p{L}\p{M}\p{N}]+/gu, '')).filter(Boolean);
    if (parts.length > 1) {
      const recs = parts.map((w) => fromManifest(w, langs));
      if (recs.every((r) => r && r.url)) return { urls: recs.map((r) => r.url), src: `Word by word: ${[...new Set(recs.map((r) => r.src.replace(/ · Lingua Libre.*/, '')))].join(', ')} · Lingua Libre` };
    }
    return null; // searched already: Lingua Libre has none
  }

  async function findRecording(word, langs) {
    await manifestP;
    const saved = fromManifest(word, langs);
    if (saved !== undefined) return saved;
    const key = 'rec:' + word;
    if (cache[key] !== undefined) return cache[key];
    const order = langOrder(langs);
    try {
      for (const l of order) {
        const q = `intitle:"LL-${QID[l]}" intitle:"${word}"`;
        const u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=20'
          + '&prop=imageinfo&iiprop=url&gsrsearch=' + encodeURIComponent(q);
        const r = await fetch(u); if (!r.ok) continue;
        const j = await r.json();
        const pages = Object.values((j.query && j.query.pages) || {});
        const want = word.normalize('NFC');
        const hit = pages.find((p) => {
          const t = (p.title || '').normalize('NFC');
          return t.startsWith(`File:LL-${QID[l]}-`) && /\.(wav|ogg|oga|mp3|flac)$/i.test(t) && t.replace(/\.[a-z0-9]+$/i, '').endsWith('-' + want);
        });
        if (hit && hit.imageinfo && hit.imageinfo[0]) {
          const speaker = hit.title.slice(`File:LL-${QID[l]}-`.length, -(want.length + 1 + hit.title.split('.').pop().length + 1));
          const res = { url: hit.imageinfo[0].url, src: credit(l, speaker), page: hit.imageinfo[0].descriptionurl };
          cache[key] = res; saveCache(); return res;
        }
      }
      cache[key] = null; saveCache(); return null;
    } catch (_) { return null; }
  }

  const player = new Audio();
  player.preload = 'auto';
  let playSeq = [];   // the rest of a phrase played word by word
  player.addEventListener('ended', () => { if (playSeq.length) { player.src = playSeq.shift(); player.play().catch(() => {}); } });
  const SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YQAAAAA=';
  // iPad only lets a page play sound from a tap; touching the player and the voice inside the
  // tap keeps them allowed after the lookup finishes.
  function unlock() {
    try { if (!player.src || player.src === SILENT) { player.src = SILENT; player.play().catch(() => {}); } } catch (_) {}
    // A silent space (an empty one can leave Safari's speech stuck).
    try { if (g.speechSynthesis && !unlock.done) { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; keep = u; g.speechSynthesis.speak(u); unlock.done = true; } } catch (_) {}
  }
  function voiceFor(langs) {
    if (!g.speechSynthesis) return null;
    const vs = g.speechSynthesis.getVoices();
    const want = (langs && langs.length === 1 && langs[0] === 'mr') ? ['mr', 'hi'] : ['hi', 'mr'];
    for (const l of want) {
      const all = vs.filter((v) => v.lang.toLowerCase().replace('_', '-').startsWith(l));
      // Prefer the better downloadable voices (Enhanced / Premium on iPad).
      const best = all.find((v) => /premium/i.test(v.name)) || all.find((v) => /enhanced|neural|natural/i.test(v.name)) || all[0];
      if (best) return best;
    }
    return null;
  }
  // Speaks with the device's voice; resolves with a note once it has really started (or why it didn't).
  // Safari's speech goes quiet in a few known ways, each handled here:
  //  - speaking straight after cancel() is often dropped: wait a moment after cancelling
  //  - an utterance nobody holds on to can be thrown away before it plays: keep a reference
  //  - after switching apps it can stay paused: resume() first
  //  - a recording still playing can block it: pause the player
  //  - if it still hasn't started after 1.5s, try once more, then say so (Silent Mode mutes it)
  let keep = null;
  const SILENT_NOTE = 'The iPad voice didn\u2019t start. If Silent Mode is on (Control Center → bell), the voice is muted; recordings still play.';
  function speakTTS(text, langs, rate = 0.8) {
    const ss = g.speechSynthesis;
    if (!ss) return Promise.resolve(null);
    if (!voiceFor(langs) && voicesKnown()) return Promise.resolve(null);   // no Hindi or Marathi voice: an English one would just mumble
    try { if (!player.paused) player.pause(); } catch (_) {}
    playSeq = [];
    return new Promise((resolve) => {
      let done = false;
      const finish = (note) => { if (!done) { done = true; resolve(note); } };
      const attempt = (n) => {
        const v = voiceFor(langs);   // look it up fresh: Safari replaces its voice objects now and then
        const u = new SpeechSynthesisUtterance(text);
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = langs && langs[0] === 'mr' ? 'mr-IN' : 'hi-IN';
        u.rate = rate; keep = u;
        const label = v ? `Device voice: ${v.name} (${v.lang})` : 'Device voice';
        u.onstart = () => finish(label);
        u.onerror = (e) => { if (e.error === 'interrupted' || e.error === 'canceled') return; if (n === 0) retry(); else finish(SILENT_NOTE); };
        const go = () => { try { if (ss.paused) ss.resume(); ss.speak(u); } catch (_) { finish(null); } };
        if (ss.speaking || ss.pending) { ss.cancel(); setTimeout(go, 90); } else go();
        const timer = setTimeout(() => { if (!done) (n === 0 ? retry() : finish(SILENT_NOTE)); }, 1500);
        u.onend = () => { clearTimeout(timer); finish(label); };
        let retried = false;
        function retry() { if (retried || done) return; retried = true; clearTimeout(timer); try { ss.cancel(); ss.resume(); } catch (_) {} setTimeout(() => attempt(1), 120); }
      };
      attempt(0);
    });
  }
  // Coming back to the app: Safari can leave speech paused.
  try { document.addEventListener('visibilitychange', () => { if (!document.hidden && g.speechSynthesis && g.speechSynthesis.paused) g.speechSynthesis.resume(); }); } catch (_) {}

  /* ---------- Is there a sound for this? (decided before the tap, so it can play right away) ---------- */
  // Safari lists its voices a moment after the page loads; until then we can't tell, so we allow it.
  const voicesKnown = () => !!g.speechSynthesis && g.speechSynthesis.getVoices().length > 0;
  const hasVoice = (langs) => !!g.speechSynthesis && (!voicesKnown() || !!voiceFor(langs));
  const listeners = [];
  const changed = () => listeners.forEach((f) => { try { f(); } catch (_) {} });
  try { g.speechSynthesis && g.speechSynthesis.addEventListener('voiceschanged', changed); } catch (_) {}
  manifestP.then(changed);
  // What a tap will play: {rec} a recording, {voice} the device voice, {lookup} search Lingua Libre first, or null.
  function soundFor(word, langs, opts = {}) {
    if (!opts.voiceOnly && manifest) {
      const r = fromManifest(word, langs);
      if (r) return { rec: r };
      if (r === undefined) {   // not in the saved lists: maybe found live (custom words)
        const c = cache['rec:' + word];
        if (c) return { rec: c };
        if (c === undefined) return { lookup: true };
      }
    }
    return hasVoice(langs) ? { voice: true } : null;
  }
  const canPlay = (word, langs, opts) => !!soundFor(word, langs, opts);
  // Starts the sound inside the tap itself (iPad blocks sound started later); resolves with its source.
  function playNow(word, langs, opts = {}) {
    const s0 = soundFor(word, langs, opts);
    if (!s0) return Promise.resolve(null);
    if (s0.lookup) return play(word, langs, opts);
    if (s0.rec) {
      const urls = s0.rec.urls || [s0.rec.url];
      playSeq = urls.slice(1); player.src = urls[0];
      return player.play().then(() => s0.rec.src, () => speakTTS(word, langs, opts.rate));
    }
    return Promise.resolve(speakTTS(word, langs, opts.rate));
  }
  // Plays the word; resolves with a note about where the sound came from.
  async function play(word, langs, opts = {}) {
    unlock();
    if (!opts.voiceOnly) {
      const rec = await findRecording(word, langs);
      if (rec) {
        try {
          const urls = rec.urls || [rec.url];
          playSeq = urls.slice(1); player.src = urls[0]; await player.play(); return rec.src;
        } catch (_) {}
      }
    }
    return speakTTS(word, langs, opts.rate);
  }

  g.WORDS = { letterParts, howToSay, LEVELS, PATH, DICT, LANG_NAME, translit, translitWord, letters, local, lookup, meaningText, langText, play, findRecording, custom, isDeva: (t) => DEVA.test(t), playNow, canPlay, onSoundChange: (f) => listeners.push(f) };
})(window);
