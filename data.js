/* =========================================================
   Datele testului: filosofi, întrebări și textele interfeței.
   Pentru a modifica o întrebare sau un text, editează aici.
   Fiecare text are două variante: ro (română) și en (engleză).
   ========================================================= */

const KEYS = ["socrates", "plato", "aristotle", "diogenes", "epicurus", "zeno"];

const ICONS = {
  // Cupa (kylix)
  socrates: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 22h48c0 12-10 20-24 20S8 34 8 22z"/><path d="M8 24c-6 0-7 7-1 8M56 24c6 0 7 7 1 8"/><path d="M32 42v10M22 56h20"/></svg>',
  // Peștera și lumina
  plato: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 56V36a24 24 0 0 1 48 0v20"/><circle cx="32" cy="40" r="6"/><path d="M32 28v-5M41 31l3-3M23 31l-3-3M44 40h5M15 40h5"/><path d="M2 56h60"/></svg>',
  // Sulul
  aristotle: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M18 12h30v40H18z"/><path d="M14 12a4 4 0 0 1 8 0M44 52a4 4 0 0 0 8 0"/><path d="M24 22h18M24 30h18M24 38h12"/></svg>',
  // Felinarul
  diogenes: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 4v6M27 10h10v6H27z"/><path d="M24 16h16l4 6v22l-4 6H24l-4-6V22z"/><path d="M32 26c-4 5-4 10 0 12 4-2 4-7 0-12z"/><path d="M26 56h12"/></svg>',
  // Ramura de măslin
  epicurus: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 56C22 42 36 26 54 8"/><path d="M22 43c-8-1-12-6-12-6s6-3 12 0M30 34c1-8 6-12 6-12s3 6 0 12M38 26c-8-1-12-6-12-6s6-3 12 0M45 18c1-7 5-10 5-10s3 5 0 10"/></svg>',
  // Coloana (stoa)
  zeno: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 10h40M16 15h32M16 50h32M12 55h40M8 60h48"/><path d="M22 15v35M28 15v35M36 15v35M42 15v35"/></svg>'
};

const PROFILES = {
  socrates: {
    name: { ro: "Socrate", en: "Socrates" },
    years: { ro: "c. 470–399 î.Hr.", en: "c. 470–399 BC" },
    tagline: { ro: "Cel care pune întrebări", en: "The questioner" },
    description: {
      ro: "Ești curios și nu te mulțumești cu răspunsuri gata făcute. Preferi să recunoști că nu știi decât să pretinzi că știi, iar cele mai bune idei îți vin în discuții cu alții. Pentru tine, cunoașterea de sine stă la baza unei vieți bune.",
      en: "You’re curious and never settle for ready-made answers. You’d rather admit you don’t know than pretend you do, and your best ideas come from talking things through with others. For you, knowing yourself is the foundation of a good life."
    },
    ideas: {
      ro: [
        "Maieutica: adevărul se „naște” prin întrebări și dialog.",
        "„Știu că nu știu nimic”: înțelepciunea începe cu recunoașterea propriei ignoranțe.",
        "Virtutea este cunoaștere: cine știe ce e binele, face binele."
      ],
      en: [
        "Maieutics: truth is “delivered” through questions and dialogue.",
        "“I know that I know nothing”: wisdom begins with admitting your own ignorance.",
        "Virtue is knowledge: whoever truly knows the good will do the good."
      ]
    },
    quote: { ro: "O viață necercetată nu merită trăită.", en: "The unexamined life is not worth living." },
    fact: {
      ro: "Socrate n-a scris nimic. Tot ce știm despre el vine de la elevii lui, mai ales de la Platon și Xenofon. În 399 î.Hr. a fost condamnat la moarte de atenieni și a băut cucută.",
      en: "Socrates never wrote anything down. Everything we know about him comes from his students, mainly Plato and Xenophon. In 399 BC the Athenians sentenced him to death and he drank hemlock."
    }
  },

  plato: {
    name: { ro: "Platon", en: "Plato" },
    years: { ro: "c. 428–348 î.Hr.", en: "c. 428–348 BC" },
    tagline: { ro: "Idealistul", en: "The idealist" },
    description: {
      ro: "Crezi că dincolo de lumea pe care o vezi există ceva mai perfect și mai adevărat. Te atrag frumusețea, dreptatea și ideile mari, și visezi la o lume organizată după ele. Uneori pari cu capul în nori, dar tocmai de acolo vezi mai departe.",
      en: "You believe that beyond the world you see lies something more perfect and more true. Beauty, justice and big ideas draw you in, and you dream of a world built around them. You may seem to have your head in the clouds, but that’s exactly why you see further."
    },
    ideas: {
      ro: [
        "Lumea Ideilor: lucrurile din jur sunt doar copii imperfecte ale unor forme eterne.",
        "Mitul peșterii: majoritatea oamenilor confundă umbrele cu realitatea.",
        "Statul ideal ar trebui condus de filosofi."
      ],
      en: [
        "The world of Forms: the things around us are imperfect copies of eternal Forms.",
        "The allegory of the cave: most people mistake shadows for reality.",
        "The ideal state should be ruled by philosophers."
      ]
    },
    quote: { ro: "Începutul este partea cea mai importantă a lucrării.", en: "The beginning is the most important part of the work." },
    fact: {
      ro: "În jurul anului 387 î.Hr. a fondat Academia din Atena, una dintre primele școli de învățământ superior din lume. Aproape toate operele lui sunt dialoguri, iar personajul principal e de obicei profesorul lui, Socrate.",
      en: "Around 387 BC he founded the Academy in Athens, one of the first institutions of higher learning in the world. Almost all of his works are dialogues, usually starring his teacher, Socrates."
    }
  },

  aristotle: {
    name: { ro: "Aristotel", en: "Aristotle" },
    years: { ro: "384–322 î.Hr.", en: "384–322 BC" },
    tagline: { ro: "Omul echilibrului", en: "The balanced mind" },
    description: {
      ro: "Ești practic, organizat și analitic. Vrei să înțelegi lucrurile observându-le, comparându-le și punându-le în ordine. În viață cauți calea de mijloc: nici prea mult, nici prea puțin.",
      en: "You’re practical, organised and analytical. You want to understand things by observing them, comparing them and putting them in order. In life you look for the middle way: neither too much nor too little."
    },
    ideas: {
      ro: [
        "Virtutea este media dintre două extreme: curajul stă între lașitate și nesăbuință.",
        "Logica: a pus bazele raționamentului corect, prin silogism.",
        "Scopul vieții este eudaimonia, o viață împlinită, trăită după rațiune."
      ],
      en: [
        "Virtue is the mean between two extremes: courage lies between cowardice and recklessness.",
        "Logic: he laid the foundations of correct reasoning with the syllogism.",
        "The goal of life is eudaimonia, a flourishing life guided by reason."
      ]
    },
    quote: { ro: "Omul este prin natura sa o ființă socială.", en: "Man is by nature a social animal." },
    fact: {
      ro: "A fost elevul lui Platon aproape 20 de ani, apoi profesorul lui Alexandru cel Mare. Mai târziu și-a deschis propria școală la Atena, Liceul (Lykeion).",
      en: "He studied under Plato for almost 20 years and later tutored Alexander the Great. He then opened his own school in Athens, the Lyceum."
    }
  },

  diogenes: {
    name: { ro: "Diogene", en: "Diogenes" },
    years: { ro: "c. 412–323 î.Hr.", en: "c. 412–323 BC" },
    tagline: { ro: "Rebelul", en: "The rebel" },
    description: {
      ro: "Nu-ți pasă de convenții, de bani sau de ce cred alții. Spui lucrurilor pe nume, chiar dacă deranjează, și știi că ai nevoie de foarte puțin ca să fii liber. Pentru tine, cele mai multe reguli sociale sunt doar teatru.",
      en: "You don’t care about conventions, money or what other people think. You call things by their name, even when it bothers people, and you know you need very little to be free. To you, most social rules are just theatre."
    },
    ideas: {
      ro: [
        "Cinismul: o viață simplă, în acord cu natura, fără lux.",
        "Normele sociale, averea și statutul nu au valoare în sine.",
        "Libertatea vine din a avea nevoie de cât mai puțin."
      ],
      en: [
        "Cynicism: a simple life in agreement with nature, free of luxury.",
        "Social norms, wealth and status have no value in themselves.",
        "Freedom comes from needing as little as possible."
      ]
    },
    quote: { ro: "Sunt cetățean al lumii.", en: "I am a citizen of the world." },
    fact: {
      ro: "Locuia într-un vas mare de lut în Atena și umbla ziua cu un felinar aprins, spunând că „caută un om”. Când Alexandru cel Mare l-a întrebat ce își dorește, i-a cerut doar să se dea la o parte din soare.",
      en: "He lived in a large clay jar in Athens and walked around in daylight with a lit lantern, saying he was “looking for a human being”. When Alexander the Great asked what he wanted, he only asked him to stand out of his sunlight."
    }
  },

  epicurus: {
    name: { ro: "Epicur", en: "Epicurus" },
    years: { ro: "341–270 î.Hr.", en: "341–270 BC" },
    tagline: { ro: "Căutătorul liniștii", en: "The seeker of calm" },
    description: {
      ro: "Pentru tine fericirea înseamnă prieteni buni, plăceri simple și o minte fără griji. Nu alergi după faimă sau bani și eviți agitația inutilă. Știi să te bucuri de o cină lungă, o conversație bună și o după-amiază liniștită.",
      en: "For you, happiness means good friends, simple pleasures and a mind free of worry. You don’t chase fame or money, and you avoid needless stress. You know how to enjoy a long dinner, a good conversation and a quiet afternoon."
    },
    ideas: {
      ro: [
        "Plăcerea înseamnă absența durerii și a neliniștii (ataraxia), nu excesul.",
        "Prietenia este unul dintre cele mai mari bunuri ale vieții.",
        "Frica de moarte și de zei ne strică viața fără motiv."
      ],
      en: [
        "Pleasure means the absence of pain and anxiety (ataraxia), not excess.",
        "Friendship is one of the greatest goods in life.",
        "Fear of death and of the gods spoils our lives for no reason."
      ]
    },
    quote: { ro: "Moartea nu este nimic pentru noi.", en: "Death is nothing to us." },
    fact: {
      ro: "Școala lui din Atena se numea „Grădina” și, neobișnuit pentru acea vreme, primea și femei, și sclavi. Deși azi „epicurian” sună a petrecere, el trăia foarte simplu, mai mult cu pâine și apă.",
      en: "His school in Athens was called “the Garden” and, unusually for the time, welcomed women and slaves. Although “epicurean” sounds like feasting today, he lived very simply, mostly on bread and water."
    }
  },

  zeno: {
    name: { ro: "Zenon din Kition", en: "Zeno of Citium" },
    years: { ro: "c. 334–262 î.Hr.", en: "c. 334–262 BC" },
    tagline: { ro: "Stoicul", en: "The stoic" },
    description: {
      ro: "Rămâi calm când alții intră în panică. Îți controlezi emoțiile, accepți ce nu poți schimba și te concentrezi pe ce depinde de tine. Ai simțul datoriei, iar oamenii se bazează pe tine când e greu.",
      en: "You stay calm when others panic. You keep your emotions in check, accept what you can’t change and focus on what’s up to you. You have a strong sense of duty, and people rely on you when things get hard."
    },
    ideas: {
      ro: [
        "Stoicismul: a trăi în acord cu natura și cu rațiunea.",
        "Unele lucruri depind de noi, altele nu, iar liniștea vine din a face diferența.",
        "Virtutea este singurul bine adevărat; restul sunt lucruri „indiferente”."
      ],
      en: [
        "Stoicism: living in agreement with nature and reason.",
        "Some things are up to us and some are not, and peace comes from knowing the difference.",
        "Virtue is the only true good; everything else is “indifferent”."
      ]
    },
    quote: { ro: "Scopul vieții este să trăiești în acord cu natura.", en: "The goal of life is to live in agreement with nature." },
    fact: {
      ro: "Era negustor și a ajuns la Atena după un naufragiu. Preda sub Stoa Poikile („porticul pictat”), iar de la acest portic vine numele de „stoicism”.",
      en: "He was a merchant who ended up in Athens after a shipwreck. He taught under the Stoa Poikile (“the painted porch”), which gave stoicism its name."
    }
  }
};

const QUESTIONS = [
  {
    q: { ro: "Ai o problemă grea în viață. Ce faci?", en: "You’re facing a hard problem in life. What do you do?" },
    a: {
      socrates: { ro: "Îmi pun întrebări până ajung la rădăcina ei.", en: "I ask myself questions until I reach its root." },
      plato: { ro: "Mă gândesc cum ar arăta situația ideală și pornesc de acolo.", en: "I picture the ideal outcome and work back from there." },
      aristotle: { ro: "Analizez logic opțiunile și aleg calea de mijloc.", en: "I weigh the options logically and pick the middle way." },
      diogenes: { ro: "Nu mă stresez. Majoritatea problemelor sunt inventate de societate.", en: "I don’t stress. Most problems are made up by society." },
      epicurus: { ro: "Caut liniștea și mă sfătuiesc cu prietenii apropiați.", en: "I look for calm and talk it over with close friends." },
      zeno: { ro: "Accept ce nu pot schimba și acționez asupra a ce pot.", en: "I accept what I can’t change and act on what I can." }
    }
  },
  {
    q: { ro: "Ce înseamnă fericirea pentru tine?", en: "What does happiness mean to you?" },
    a: {
      socrates: { ro: "Să mă cunosc cu adevărat pe mine însumi.", en: "Truly knowing myself." },
      plato: { ro: "Să ating ceva perfect, frumos și adevărat.", en: "Reaching something perfect, beautiful and true." },
      aristotle: { ro: "Să-mi ating potențialul și să trăiesc împlinit.", en: "Reaching my potential and living a fulfilled life." },
      diogenes: { ro: "Să fiu liber de orice constrângere.", en: "Being free of every constraint." },
      epicurus: { ro: "Să nu am griji, dureri sau frici.", en: "Having no worries, pain or fear." },
      zeno: { ro: "Să trăiesc corect, orice s-ar întâmpla.", en: "Living rightly, whatever happens." }
    }
  },
  {
    q: { ro: "Câștigi un milion de lei. Ce faci cu banii?", en: "You win a million. What do you do with the money?" },
    a: {
      socrates: { ro: "Mă întreb mai întâi dacă banii mă fac un om mai bun.", en: "First I ask whether money makes me a better person." },
      plato: { ro: "Îi investesc într-un proiect care schimbă societatea.", en: "I invest it in a project that changes society." },
      aristotle: { ro: "Îi împart cu chibzuință: economii, educație și puțină plăcere.", en: "I split it wisely: savings, education and a bit of fun." },
      diogenes: { ro: "Îi dau altora. N-am nevoie de ei.", en: "I give it away. I don’t need it." },
      epicurus: { ro: "Îmi iau o casă liniștită, cu grădină, unde să-mi chem prietenii.", en: "I buy a quiet house with a garden for my friends." },
      zeno: { ro: "Viața mea rămâne aceeași. Banii nu mă definesc.", en: "My life stays the same. Money doesn’t define me." }
    }
  },
  {
    q: { ro: "Cum privești moartea?", en: "How do you see death?" },
    a: {
      socrates: { ro: "Nu știm ce e. Poate fi chiar ceva bun.", en: "We don’t know what it is. It might even be good." },
      plato: { ro: "Sufletul e nemuritor și se întoarce acolo de unde a venit.", en: "The soul is immortal and returns to where it came from." },
      aristotle: { ro: "E sfârșitul firesc al unui ciclu natural.", en: "It’s the natural end of a natural cycle." },
      diogenes: { ro: "Nu mă preocupă deloc.", en: "It doesn’t concern me at all." },
      epicurus: { ro: "Cât timp exist eu, ea nu există, deci n-are rost să mă tem.", en: "While I exist, it doesn’t, so there’s no point fearing it." },
      zeno: { ro: "Face parte din ordinea naturii, iar eu o accept.", en: "It’s part of the order of nature, and I accept it." }
    }
  },
  {
    q: { ro: "Ce rol ai într-un grup de prieteni?", en: "What role do you play in a group of friends?" },
    a: {
      socrates: { ro: "Cel care întreabă mereu „de ce?”.", en: "The one who always asks “why?”." },
      plato: { ro: "Visătorul cu planuri mari.", en: "The dreamer with big plans." },
      aristotle: { ro: "Organizatorul care le pune pe toate în ordine.", en: "The organiser who puts everything in order." },
      diogenes: { ro: "Cel care spune lucrurilor pe nume.", en: "The one who says it like it is." },
      epicurus: { ro: "Cel care face atmosfera relaxată.", en: "The one who keeps the mood relaxed." },
      zeno: { ro: "Cel pe care se bazează toți când e greu.", en: "The one everyone relies on when things get hard." }
    }
  },
  {
    q: { ro: "Ți se cere să respecți o regulă care ți se pare absurdă.", en: "You’re told to follow a rule that seems absurd to you." },
    a: {
      socrates: { ro: "Întreb de ce există și discut până ne lămurim.", en: "I ask why it exists and discuss it until it’s clear." },
      plato: { ro: "Mă gândesc cum ar arăta o regulă cu adevărat dreaptă.", en: "I think about what a truly just rule would look like." },
      aristotle: { ro: "O respect dacă e utilă comunității, altfel propun o schimbare.", en: "I follow it if it helps the community, otherwise I propose a change." },
      diogenes: { ro: "O ignor fără nicio remușcare.", en: "I ignore it without any regret." },
      epicurus: { ro: "O ocolesc discret. Nu merită un conflict.", en: "I quietly work around it. It’s not worth a fight." },
      zeno: { ro: "O respect. Supărarea nu schimbă nimic.", en: "I follow it. Getting upset changes nothing." }
    }
  },
  {
    q: { ro: "Cineva te critică dur în fața altora.", en: "Someone criticises you harshly in front of others." },
    a: {
      socrates: { ro: "Îl întreb ce vrea să spună exact. Poate are dreptate.", en: "I ask what exactly they mean. They might be right." },
      plato: { ro: "Mă întreb dacă e adevăr sau doar o părere.", en: "I ask myself whether it’s truth or just opinion." },
      aristotle: { ro: "Analizez critica și păstrez doar ce e util.", en: "I analyse the criticism and keep only what’s useful." },
      diogenes: { ro: "Îi răspund pe loc, cu ironie.", en: "I answer on the spot, with irony." },
      epicurus: { ro: "Plec și mă întorc la oamenii care țin la mine.", en: "I leave and go back to the people who care about me." },
      zeno: { ro: "Rămân calm. Părerea lui nu depinde de mine.", en: "I stay calm. Their opinion isn’t up to me." }
    }
  },
  {
    q: { ro: "Ce carieră ți s-ar potrivi?", en: "Which career would suit you?" },
    a: {
      socrates: { ro: "Profesor sau jurnalist, ca să pun întrebări toată ziua.", en: "Teacher or journalist, asking questions all day." },
      plato: { ro: "Arhitect sau lider cu o viziune mare.", en: "Architect or a leader with a big vision." },
      aristotle: { ro: "Om de știință sau medic.", en: "Scientist or doctor." },
      diogenes: { ro: "Artist liber, fără șef și fără program.", en: "Free artist, with no boss and no schedule." },
      epicurus: { ro: "Ceva liniștit: bucătar, grădinar, scriitor.", en: "Something calm: cook, gardener, writer." },
      zeno: { ro: "Judecător, pilot sau salvator.", en: "Judge, pilot or rescuer." }
    }
  },
  {
    q: { ro: "Ești foarte supărat. Ce faci cu emoția?", en: "You’re really upset. What do you do with the feeling?" },
    a: {
      socrates: { ro: "Mă întreb de unde vine de fapt supărarea.", en: "I ask myself where the anger really comes from." },
      plato: { ro: "Las rațiunea să conducă, așa cum un vizitiu își strunește caii.", en: "I let reason take the reins, like a charioteer guiding horses." },
      aristotle: { ro: "Supărarea e bună în măsura potrivită, față de cine trebuie.", en: "Anger is fine in the right amount, towards the right person." },
      diogenes: { ro: "O spun pe față. Nu ascund nimic.", en: "I say it openly. I hide nothing." },
      epicurus: { ro: "Mă retrag și mă liniștesc cu ceva plăcut.", en: "I step away and calm down with something pleasant." },
      zeno: { ro: "Îmi amintesc că emoția vine din felul în care judec situația.", en: "I remind myself the feeling comes from how I judge the situation." }
    }
  },
  {
    q: { ro: "Ce contează cel mai mult pentru tine?", en: "What matters most to you?" },
    a: {
      socrates: { ro: "Adevărul, chiar dacă e incomod.", en: "The truth, even when it’s uncomfortable." },
      plato: { ro: "Binele și frumosul.", en: "The good and the beautiful." },
      aristotle: { ro: "Echilibrul și măsura în toate.", en: "Balance and moderation in everything." },
      diogenes: { ro: "Libertatea.", en: "Freedom." },
      epicurus: { ro: "Liniștea și prietenia.", en: "Peace of mind and friendship." },
      zeno: { ro: "Datoria și caracterul.", en: "Duty and character." }
    }
  },
  {
    q: { ro: "Cum arată weekendul tău ideal?", en: "What does your ideal weekend look like?" },
    a: {
      socrates: { ro: "Discuții lungi în oraș, cu oricine are o părere.", en: "Long talks in town with anyone who has an opinion." },
      plato: { ro: "Un muzeu, un concert și o carte bună.", en: "A museum, a concert and a good book." },
      aristotle: { ro: "Un documentar, apoi îmi planific săptămâna.", en: "A documentary, then planning my week." },
      diogenes: { ro: "Hoinăresc fără niciun plan.", en: "Wandering around with no plan at all." },
      epicurus: { ro: "O cină lungă cu prietenii apropiați, în grădină.", en: "A long dinner in the garden with close friends." },
      zeno: { ro: "Sport dimineața devreme, apoi puțină lectură.", en: "Early-morning exercise, then some reading." }
    }
  },
  {
    q: { ro: "Ce înseamnă să știi cu adevărat ceva?", en: "What does it mean to truly know something?" },
    a: {
      socrates: { ro: "Să recunoști cât de puțin știi.", en: "Admitting how little you know." },
      plato: { ro: "Să vezi dincolo de aparențe, la esența lucrurilor.", en: "Seeing past appearances to the essence of things." },
      aristotle: { ro: "Să observi lumea și să tragi concluzii logice.", en: "Observing the world and drawing logical conclusions." },
      diogenes: { ro: "Să trăiești, nu să teoretizezi.", en: "Living it, not theorising about it." },
      epicurus: { ro: "Să ai încredere în ce simți și experimentezi.", en: "Trusting what you feel and experience." },
      zeno: { ro: "Să judeci corect tot ce ți se întâmplă.", en: "Judging everything that happens to you correctly." }
    }
  }
];

// Întrebare de departajare, afișată doar dacă există egalitate
const TIEBREAKER = {
  q: { ro: "Egalitate! Alege simbolul care ți se potrivește cel mai bine.", en: "It’s a tie! Pick the symbol that suits you best." },
  a: {
    socrates: { ro: "O cupă și o conversație până dimineața", en: "A cup and a conversation until dawn" },
    plato: { ro: "Lumina de la ieșirea din peșteră", en: "The light at the mouth of the cave" },
    aristotle: { ro: "Un sul cu notițe despre tot ce există", en: "A scroll of notes on everything that exists" },
    diogenes: { ro: "Un felinar aprins în plină zi", en: "A lantern lit in broad daylight" },
    epicurus: { ro: "O ramură de măslin dintr-o grădină cu prieteni", en: "An olive branch from a garden full of friends" },
    zeno: { ro: "O coloană care rămâne în picioare orice ar fi", en: "A column that stands whatever happens" }
  }
};

const UI = {
  ro: {
    pageTitle: "Ce filosof antic ești?",
    brand: "Agora",
    navGallery: "Filosofii",
    title: "Ce filosof antic ești?",
    intro: "12 întrebări despre fericire, adevăr, bani și moarte. La final afli cu care dintre cei șase gânditori ai Greciei antice semeni cel mai mult.",
    duration: "Durează în jur de 4 minute.",
    start: "Începe testul",
    questionOf: (a, b) => `Întrebarea ${a} din ${b}`,
    back: "Întrebarea anterioară",
    youAre: "Ești",
    keyIdeas: "Ideile principale",
    didYouKnow: "Știai că…",
    scores: "Cât de mult semeni cu fiecare",
    alsoSome: (n, p) => `Ai și ceva din ${n} (${p}%).`,
    restart: "Refă testul",
    share: "Distribuie rezultatul",
    seeAll: "Vezi toți filosofii",
    galleryTitle: "Cei șase filosofi",
    galleryIntro: "Fiecare a răspuns altfel la aceeași întrebare: cum ar trebui să trăim?",
    takeTest: "Fă testul",
    copied: "Linkul a fost copiat.",
    shareText: (n) => `Am făcut testul „Ce filosof antic ești?” și semăn cu ${n}. Tu cu cine semeni?`,
    footer: "Proiect pentru cursul de filosofie",
    footerQr: "Cod QR pentru acces",
    qrTitle: "Cod QR pentru acces",
    qrIntro: "Pune linkul public al site-ului și codul se generează automat. Îl poți descărca sau tipări, ca toți colegii să deschidă testul de pe telefon.",
    qrLabel: "Linkul site-ului",
    qrLocal: "Site-ul e deschis acum de pe calculatorul tău, așa că acest link nu va merge pe alte telefoane. Publică-l întâi pe GitHub Pages și pune aici linkul primit.",
    qrScan: "Scanează cu camera telefonului",
    qrDownload: "Descarcă imaginea",
    qrPrint: "Tipărește",
    qrNoLib: "Generatorul de cod QR nu s-a încărcat. Verifică conexiunea la internet și reîncarcă pagina.",
    qrBack: "Înapoi la test"
  },
  en: {
    pageTitle: "Which ancient philosopher are you?",
    brand: "Agora",
    navGallery: "Philosophers",
    title: "Which ancient philosopher are you?",
    intro: "12 questions about happiness, truth, money and death. At the end you’ll find out which of six thinkers of ancient Greece you resemble most.",
    duration: "Takes about 4 minutes.",
    start: "Start the quiz",
    questionOf: (a, b) => `Question ${a} of ${b}`,
    back: "Previous question",
    youAre: "You are",
    keyIdeas: "Key ideas",
    didYouKnow: "Did you know…",
    scores: "How much you resemble each one",
    alsoSome: (n, p) => `You also have a bit of ${n} (${p}%).`,
    restart: "Retake the quiz",
    share: "Share your result",
    seeAll: "See all philosophers",
    galleryTitle: "The six philosophers",
    galleryIntro: "Each gave a different answer to the same question: how should we live?",
    takeTest: "Take the quiz",
    copied: "Link copied.",
    shareText: (n) => `I took the “Which ancient philosopher are you?” quiz and I’m ${n}. Who are you?`,
    footer: "A project for the philosophy course",
    footerQr: "QR code for access",
    qrTitle: "QR code for access",
    qrIntro: "Enter the site’s public link and the code is generated automatically. Download or print it so everyone can open the quiz on their phone.",
    qrLabel: "Site link",
    qrLocal: "The site is currently open from your own computer, so this link won’t work on other phones. Publish it on GitHub Pages first and paste the link you get here.",
    qrScan: "Scan with your phone camera",
    qrDownload: "Download image",
    qrPrint: "Print",
    qrNoLib: "The QR generator didn’t load. Check your internet connection and reload the page.",
    qrBack: "Back to the quiz"
  }
};

/* Limba: salvată în browser, implicit română */
function getLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ro" || saved === "en") return saved;
  } catch (e) { /* stocarea poate fi indisponibilă */ }
  return "ro";
}
function saveLang(lang) {
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignorăm */ }
}
