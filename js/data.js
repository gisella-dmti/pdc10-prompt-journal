// =========================================================
// ALL YOUR CONTENT LIVES HERE.
// Filled from "Conversational AI and Prompt Engineering:
// Compiled Lab Answers". Text in [square brackets] still
// needs your input.
// =========================================================

const profile = {
  name: "Gisella P. Dimitui",
  nickname: "Gigi",
  photo: "assets/gigi.jpg",
  cls: "BSIT 3-A · College of Computer Studies · Angeles University Foundation",
  course: "PDC10: Conversational AI and Prompt Engineering",
  intro:
    "I'm an aspiring web and mobile developer who loves UI/UX design. This journal shows how my prompts grew across PDC10, from vague one-line questions to structured prompts with a role, context, format and rules.",
  skills: ["React", "C#", "PHP", "Python", "Figma", "HTML5", "UI/UX Design"],
  certs: [
    { name: "CompTIA Tech+", issuer: "CompTIA", date: "Apr 2026", url: "" },
    { name: "Academic Awardee", issuer: "Angeles University Foundation", date: "Apr 2026", url: "" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", date: "Dec 2025", url: "" },
    { name: "Python Essentials 1", issuer: "Cisco Networking Academy", date: "Nov 2025", url: "" },
    { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "Jun 2025", url: "" }
  ],
  linkedin: "https://www.linkedin.com/in/gisella-dimitui-6413123b2/",
  // DRAFT built from your lab answers. Rewrite it in your own words.
  closing:
    "At the start of PDC10, my prompts were short questions like “Which one is better?”, and I let the AI guess what I meant. Across these activities I learned to give each prompt a role, context, an audience, a format and clear rules, and to test it until it passed. By the Prompt Vault, my RTCFC prompt with two examples beat the Final Master Vault on the first try. I also learned that a good answer still needs checking: I verified facts, references and my study agent's notes against the source. AI works best as a support tool, while the accuracy and judgment still have to come from me.",
  // Chapters shown on the "First vs Best prompt" page (1 = first chapter)
  firstPromptFrom: 2,
  bestPromptFrom: 5
};

// Tags for prompt parts. Each tag gets its own highlighter color:
// role · audience · task · context · format · constraint · example · tone

const chapters = [
  // ---------------- 1 ----------------
  {
    title: "Lab Exercise 1: Exploring and Comparing Modern Conversational AI Platforms",
    short: "Platforms",
    color: "#f7c6c7",
    type: "Individual lab",
    tools: ["Google Gemini", "Claude", "ChatGPT"],
    mission:
      "I explored the features of Gemini, Claude and ChatGPT, then gave all three the same prompts and scored them on accuracy, relevance, clarity, instruction following and completeness. I also compared a basic prompt with a detailed one.",
    stats: [["Claude", "25/25"], ["Gemini", "22/25"], ["ChatGPT", "21/25"], ["Best overall", "Claude"]],
    draftTitle: "Basic Prompt",
    draft: "Tell me about cybersecurity.",
    revisedTitle: "Detailed Prompt",
    revised: [
      ["role", "You are explaining cybersecurity"],
      ["audience", " to first-year IT students with no professional cybersecurity experience."],
      ["constraint", " In 200 words or fewer,"],
      ["task", " explain what cybersecurity is, give three common cybersecurity threats,"],
      ["example", " and provide one real-world example for each."],
      ["constraint", " Use simple language"],
      ["format", " and organize the answer using headings and bullet points."]
    ],
    after:
      "Using the same prompts on three platforms showed me that the answers had the same content, but each platform explained it differently. Claude was the best for me because its answers were precise, concise and easy to understand. The prompt experiment showed that naming the audience made the AI adjust to their level, and the word limit and formatting made the answer shorter and clearer.",
    lessons: [
      "Unclear prompts won't give the answer you want.",
      "Naming the audience changes the level of the answer.",
      "Word limits and formatting make answers clearer."
    ],
    notes: [
      { h: "Part B scores (out of 5)", t: [
        "Accuracy: Gemini 5 · Claude 5 · ChatGPT 5",
        "Relevance: Gemini 5 · Claude 5 · ChatGPT 5",
        "Clarity: Gemini 4 · Claude 5 · ChatGPT 3",
        "Instruction following: Gemini 5 · Claude 5 · ChatGPT 5",
        "Completeness: Gemini 3 · Claude 5 · ChatGPT 3"
      ]},
      { h: "Part A: notable finding", t: "All three need an account for full use. Gemini can be used without one, but you can't upload files or images." },
      { h: "Part C: basic vs detailed prompt", t: [
        "Detail: broad → easy to understand",
        "Organization: mostly organized → more organized",
        "Language: uncommon terms → audience friendly",
        "Examples: a lot → limited, as instructed",
        "Usefulness: somewhat useful → most details useful"
      ]},
      { h: "Part D: are all AI systems the same?", t: "In my view, conversational AI and search engines draw from the same pool of knowledge on the internet. The difference is mainly in how the information is packaged: AI gives a synthesized answer, while search engines show links and snippets." }
    ],
    evidence: [], // e.g. { img: "assets/ch1-1.webp", caption: "Part B scores" }
    link: ""
  },

  // ---------------- 2 ----------------
  {
    title: "Lab Exercise 2: Examining the Capabilities and Limitations of Conversational AI",
    short: "Capabilities",
    color: "#ffd6a5",
    type: "Individual lab",
    tools: ["Claude"],
    mission:
      "I tested what Claude does well (explaining, rewriting, summarizing, making tables) and where it can fail: vague prompts, false premises, made-up references, memory between chats, and life decisions.",
    stats: [["Real references", "3/3"], ["Part E score", "24/25"], ["Capability tests", "3 + 1 partial"]],
    draftTitle: "Vague Prompt",
    draft: "Which one is better?",
    revisedTitle: "Prompt with Context",
    revised: [
      ["task", "Which is better"],
      ["context", " for a small university website with mostly static pages:"],
      ["task", " a traditional content management system or a custom web application?"],
      ["constraint", " Consider cost, maintenance, and technical expertise."]
    ],
    after:
      "Conversational AI is a good tool, but only if you check what it gives you. Claude caught the false claim that Microsoft created Java, but I realized I might have believed it if it hadn't. Its table followed the format but used terms like “labeled data” without explaining them, and it forgot my “UniConnect” app in a new chat. AI works best as a support tool, while accuracy and critical thinking have to come from the person using it.",
    lessons: [
      "Clear, specific prompts beat vague ones.",
      "Verify every fact and reference.",
      "AI supports decisions; people make them."
    ],
    notes: [
      { h: "Part A: capability tests", t: [
        "Explanation: yes, stayed within 150 words with a dog-and-fruit analogy",
        "Text transformation: yes, kept the original meaning",
        "Summarization: yes, three accurate key points",
        "Structured information: partially, correct table but technical terms not simplified"
      ]},
      { h: "Part B: false premise", t: "“Explain why Java was created by Microsoft in 1991 and how it became part of Windows.” Claude corrected it: Java came from James Gosling's team at Sun Microsystems. I verified all 5 claims as correct." },
      { h: "Part C: hallucination check", t: "All 3 references were real, with correct authors and DOIs. The only error was a missing question mark in “ChatGPT for Good?”." },
      { h: "Part D: context", t: "Same chat: remembered “UniConnect” and its purpose. New chat: no memory, and it asked instead of guessing." },
      { h: "Part F: capability vs limitation", t: [
        "Clear explanations, but fluency isn't accuracy",
        "Follows instructions, but struggles with vague ones",
        "Keeps context, but only within one chat",
        "Academic-looking output, but details can be wrong",
        "Gives recommendations, but shouldn't make big decisions"
      ]}
    ],
    evidence: [],
    link: ""
  },

  // ---------------- 3 ----------------
  {
    title: "Lab Exercise 3: Convert a Simple Prompt into Prompt Engineering Frameworks",
    short: "Frameworks",
    color: "#fdffb6",
    type: "Individual lab",
    tools: ["RTCF", "COSTAR", "RISEN", "CRAFT", "RACE", "TRACE", "CRISPE"],
    mission:
      "I rewrote one simple prompt in seven prompt engineering frameworks. The topic for all of them was explaining subnetting to 2nd-year IT students in a 1-hour class.",
    stats: [["Frameworks", "7"], ["Topic", "Subnetting"], ["Class time", "1 hour"]],
    draftTitle: "Simple Prompt",
    draft: "Explain subnetting.",
    revisedTitle: "COSTAR Version",
    revised: [
      ["context", "A 2-B IT class is enrolled in a networking subject, specifically subnetting."],
      ["role", " As their professor,"],
      ["task", " you are tasked to help them understand what subnetting is"],
      ["format", " by giving instructions, examples and analogies that simplify the technical topic,"],
      ["tone", " in a friendly and patient manner,"],
      ["constraint", " with a limit of 1 hour."]
    ],
    after:
      "Writing the same request seven ways showed me that each framework is a different checklist for the same goal. Every version became clearer than the two-word prompt once it named who the AI is, who the students are, and how long the class runs.",
    lessons: [
      "Frameworks are checklists, not rules.",
      "Role, audience and limits make prompts clear."
    ],
    notes: [
      { h: "RTCF", t: "You are a professor who is explaining what subnetting is all about to 2nd-year college IT students, in an educational and understandable way, within 1 hour." },
      { h: "RISEN", t: "You are a college professor teaching a networking class, specifically about subnetting. You are instructed to explain it to 2-B IT students using a friendly, simple and practical example. Give instructions with a step-by-step example. Each student should be able to explain and understand subnetting within 1 hour." },
      { h: "CRAFT", t: "In a 1-hour class, you are an IT professor teaching subnetting basics with an analogy and an example, plus a short outline, so the students can understand the core idea." },
      { h: "RACE", t: "You are an IT professor explaining what subnetting is in a simple way to 2nd-year IT students within 1 hour, with a clear, easy-to-follow explanation and a relevant example." },
      { h: "TRACE", t: "You are explaining subnetting and making it simple and understandable for 2nd-year IT students, with a given definition, analogy and example." },
      { h: "CRISPE", t: "Subnetting is dividing a large network into smaller sub-networks by borrowing host bits, like splitting a big apartment building into separate floors so each floor manages its own set of units more efficiently." }
    ],
    evidence: [],
    link: ""
  },

  // ---------------- 4 ----------------
  {
    title: "Lab Quiz: The Broken Bot Labyrinth (Conversational UX)",
    short: "Labyrinth",
    color: "#caffbf",
    type: "Team escape game",
    tools: ["ChatGPT"],
    team: "elITe (IT-3A) · Gisella Dimitui, Eudelyn Saldevar",
    mission:
      "As a two-player team, we repaired a malfunctioning campus assistant using conversational UX and dialogue-design principles. We had to clear 6 levels and a Final Boss on a 1,200-token budget.",
    stats: [["Stages cleared", "7/7"], ["Tokens used", "~413"], ["Wallet left", "~787"], ["Hints", "0"]],
    draftTitle: "Opening Prompt",
    draft: "This is file contains a game and we are consist of 2 players, Saldevar and Dimitui please begin.",
    revised: [],
    showcase: {
      heading: "Our Repaired Bot Reply",
      text: "Got it — as a transferee, you'll need to submit your transcript for evaluation. I don't have the exact page on hand, so try searching “transcript submission” on the school website or check under Admissions/Enrollment. Still can't find it? Reach out to the registrar or admissions office in person or by phone — they can point you to the right spot. Next step: search the website first, then contact admissions if needed."
    },
    after:
      "We cleared all six levels and the Final Boss without using a hint, and finished with about 787 of our 1,200 tokens left. The repaired bot reply shows what a good assistant does: it confirms what the student needs, admits what it doesn't know, and gives a clear next step and a person to contact.",
    lessons: [
      "Admit what the bot doesn't know.",
      "Always give a next step.",
      "Point users to a human when needed."
    ],
    notes: [
      { h: "Results", t: ["Levels 1 to 6: passed", "Final Boss: passed", "Overall: victory, 7/7 stages cleared"] },
      { h: "Token accounting", t: ["Starting wallet: 1,200", "Estimated tokens used: ~413", "Wallet remaining: ~787", "Hints used: 0", "Ledger: finalized"] },
      { h: "Commands we used", t: ["START", "STATUS"] }
    ],
    evidence: [],
    link: "https://chatgpt.com/share/6a91317c-65cc-83ec-b662-e44760cd5b53",
    linkLabel: "Open our ChatGPT session"
  },

  // ---------------- 5 ----------------
  {
    title: "Lab Quiz: The Prompt Vault (Operation Six Locks)",
    short: "Prompt Vault",
    color: "#9bf6ff",
    type: "Team escape game",
    tools: ["ChatGPT"],
    team: "elITes (BSIT-3A) · Gisella Dimitui, Imma Pineda, Eudelyn Saldevar",
    mission:
      "Six prompting locks stood between our team and the exit: Zero-Shot, Few-Shot, Role, RTCFC, COSTAR and RACE. Each lock needed a working prompt, and the Final Master Vault tested everything together.",
    stats: [["Locks cleared", "6/6"], ["Final Boss", "1st try"], ["Exit code", "PROMPT"], ["Wallet left", "~754"]],
    draftTitle: "Opening Prompt",
    draft: "I am a BSIT student, I will be uploading the activity here. Once you finish reading it, start the activity.",
    revisedTitle: "Master Vault Prompt (P17)",
    revised: [
      ["role", "Role: You are a campus IT triage assistant classifying support tickets."],
      ["context", " Framework: RTCFC — Role, Task, Context, Format, Constraints."],
      ["task", " Task: Classify each ticket into ACCESS, NETWORK, HARDWARE, or OTHER."],
      ["example", " Examples: Ticket: “Can't log into student portal.” → ACCESS | Individual | Reset password. Ticket: “Entire building has no Wi-Fi.” → NETWORK | Campus-wide | Escalate to network team."],
      ["context", " Context: Tickets vary in scope from individual to campus-wide issues; classify accurately based on wording."],
      ["format", " Format: Output exactly: CATEGORY | SCOPE | NEXT ACTION"],
      ["constraint", " Constraints: Never request, repeat, or use passwords/authentication secrets. Never invent records, links, deadlines, or completed actions. Be concise."],
      ["task", " Now classify the ticket provided."]
    ],
    after:
      "Lock 1 was hard: our puzzle guesses failed and a rescue cost us 60 tokens. By the end, our Master Vault prompt defined all five RTCFC parts, gave two examples and set clear safety rules, and it beat the Final Master Vault on the first attempt.",
    lessons: [
      "Define every part of the framework.",
      "Examples show the AI the exact format.",
      "Never ask for passwords or invent records."
    ],
    notes: [
      { h: "Final ledger", t: [
        "Lock 1 Zero-Shot: cleared with help (P)",
        "Lock 2 Few-Shot: cleared (R)",
        "Lock 3 Role: cleared (O)",
        "Lock 4 RTCFC: cleared (M)",
        "Lock 5 COSTAR: cleared (P)",
        "Lock 6 RACE: cleared (T)",
        "Final Master Vault: defeated on attempt 1",
        "Final puzzle: UNLOCK: PROMPT → VAULT ESCAPED"
      ]},
      { h: "Boss gate check (all passed)", t: [
        "Campus IT triage role",
        "RTCFC with all 5 parts defined",
        "2 accurate few-shot examples",
        "Correct four-category classification and exact output format",
        "No passwords, no invented records, concise"
      ]},
      { h: "Token accounting", t: ["Starting wallet: 1,500", "Prompt tokens: ~686", "Rescue fees: 60", "Hints: 0", "Wallet remaining: ~754"] }
    ],
    evidence: [],
    link: "https://chatgpt.com/share/6a9a6042-76d8-83ec-8330-2fda8762fb00",
    linkLabel: "Open our ChatGPT session"
  },

  // ---------------- 6 ----------------
  {
    title: "Lab Quiz: The Context Archive",
    short: "Context Archive",
    color: "#bdb2ff",
    type: "Team escape game",
    tools: ["ChatGPT"],
    team: "elITe (BSIT-3A) · Gisella Dimitui, Eudelyn Saldevar",
    mission:
      "Our team unsealed an archive of six chambers, each testing a context skill: State Repair, Retrieval, Context Compression, Authority, Grounding Firewall and Citation Audit. We started with 1,000 tokens.",
    stats: [["Chambers", "6/6"], ["Failed attempts", "2"], ["Hints", "0"]],
    draftTitle: "Opening Prompt",
    draft: "I am an IT student so access it freely",
    revisedTitle: "Citation Audit Prompt (Chamber 6)",
    revised: [
      ["task", "CITATION AUDIT PROMPT: Audit each claim and citation pair given. Check three things for each pair: whether the claim is factually supported, whether the cited source actually entails the claim, and whether the underlying information is allowed to be disclosed."],
      ["format", " Produce a table with exactly these columns, in this order: PAIR, CLAIM SUPPORTED?, CITATION ENTAILS CLAIM?, ACCESS PERMITTED?, VERDICT, CORRECTED RESPONSE."],
      ["constraint", " Rules for filling the table: Mark CLAIM SUPPORTED as yes only if a valid source backs it. Mark CITATION ENTAILS CLAIM as no if the cited source is real but does not actually say what the claim states. Mark ACCESS PERMITTED as no if the source is restricted or private, and do not reveal its content anywhere in the table. VERDICT must be one of: supported, unsupported, citation mismatch, or restricted. CORRECTED RESPONSE must give the accurate short statement to replace the claim, or say evidence is insufficient, without exposing restricted content."],
      ["format", " Output only these headings, in order. AUDIT TABLE: The completed table for all pairs. SUMMARY: One line noting how many pairs were supported, mismatched, unsupported, or restricted."],
      ["constraint", " Base output strictly on the given pairs, add nothing invented, never disclose restricted content."]
    ],
    after:
      "Our first prompts only asked the archive to open, and that wasn't enough. By Chamber 6, our Citation Audit prompt set exact columns, rules for each column, allowed verdicts and an output format, and it passed. We cleared all six chambers with two failed attempts and no hints.",
    lessons: [
      "Check the claim, the citation and the access.",
      "Never reveal restricted content.",
      "Spell out the exact output format."
    ],
    notes: [
      { h: "Chambers", t: [
        "1. State Repair: complete",
        "2. Retrieval: complete",
        "3. Context Compression: complete",
        "4. Authority: complete",
        "5. Grounding Firewall: complete",
        "6. Citation Audit: complete"
      ]},
      { h: "Result", t: "CHAMBER 6: PASS. Archive status: FULLY UNSEALED." },
      { h: "Note on the wallet", t: "The transcript could not reliably calculate the final wallet because the visible conversation showed inconsistent values." }
    ],
    evidence: [],
    link: "https://chatgpt.com/share/6aa3a364-7ad8-83ec-a2ae-fb3335cb67ca",
    linkLabel: "Open our ChatGPT session"
  },

  // ---------------- 7 ----------------
  {
    title: "Lab: Claude Academic Workspace and Study Agent (Agentic AI)",
    short: "Study Agent",
    color: "#ffc6ff",
    type: "Individual lab",
    tools: ["Claude", "Custom Skill: academic-workspace-study-agent"],
    mission:
      "I built a Claude Skill that organizes my course files and turns lectures into grounded notes, review questions and a study index. It follows 10 safety rules and waits for my approval before changing any file.",
    stats: [["Judgment tests", "3/3"], ["Answer key", "10/10"], ["Note claims supported", "4/5"], ["Files organized", "3"]],
    draft: "",
    revisedTitle: "My Agent Commands",
    revised: [
      ["task", "ORGANIZE INBOX."],
      ["constraint", " Audit only."]
    ],
    showcase: {
      heading: "Then, after I check the plan",
      text: "APPROVE ORGANIZATION → the agent moves and renames files, writes an Organization Log and re-inspects. STUDY → notes with 10 sections, 10 review questions, a separate answer key and a Study Index update."
    },
    after:
      "A chatbot answers one prompt and stops, but my agent worked through a full cycle: it inspected the workspace, planned, waited for my approval, acted, and verified its own work with checksums and a log. When I checked five note claims against the slides, four were fully supported and one left out the lecture's assumptions, so I had it fix that in a new version. Each week I'll run “ORGANIZE INBOX. Audit only.” before approving moves, and still check a few claims myself.",
    lessons: [
      "Goals, rules and approvals make an agent.",
      "Approve before real files change.",
      "Check outputs against the source."
    ],
    notes: [
      { h: "The 10 safety rules", t: [
        "Inspect before acting",
        "Never delete a file or empty Trash",
        "Never overwrite; use a versioned filename",
        "Show the full plan and wait for APPROVE ORGANIZATION",
        "Move suspected duplicates only after approval",
        "Stop and ask when anything is uncertain",
        "Do not expose private information",
        "Separate source statements from the agent's own explanation",
        "Never invent quotes, page numbers, deadlines or answers",
        "Verify every created file before reporting"
      ]},
      { h: "Organization result", t: [
        "Context Management PDF → 01 Courses/PDC10",
        "Lesson VI Evaluation and Hallucination slides → 01 Courses/PDC10",
        "IAS10 notes → 01 Courses/IAS10"
      ]},
      { h: "Skill revision", t: "When I said “do not ask me a question,” the agent's wording was mixed. I added an example showing that safety rule 6 overrides that instruction. On the retest, it left the file unchanged and named the missing course, topic and date." }
    ],
    evidence: [], // you have 11 screenshots from Nov 3-4 in your Academic Agent zip
    link: ""
  }
];
