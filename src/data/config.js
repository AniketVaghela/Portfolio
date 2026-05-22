const config = {
  name: "Vaghela Aniket",
  enrollment: "12302040701211",
  college: "Madhuben and Bhanubhai Patel Institute of Technology (MBIT)",
  degree: "B.Tech in Computer Engineering",
  location: "Gujarat, India",
  email: "vaghelaaniket148@gmail.com",
  phone: "+91 9427849876",
  github: "https://github.com/AniketVaghela",
  linkedin: "https://www.linkedin.com/in/vaghela-aniket-55aa41305/",
  resume: "/ANIKET_VAGHELA_RESUME_.pdf",

  roles: [
    "Data Analyst",
    "Power BI Developer",
  ],

  about: `I'm Aniket Vaghela, a 4th-year B.Tech Computer Engineering student at MBIT with hands-on experience in data analysis, visualization and programming. I completed a 4-week Microsoft Power BI internship through Microsoft Elevate X AICTE and a 4-week on-site Data Analysis internship at Jinarth Info Tech, where I worked with Python and Excel on real business datasets. I hold certifications from CISCO Networking Academy and Forage in Data Science and Data Visualization. Outside academics I'm into reading, swimming and trekking.`,

  stats: [
    { value: "4th", label: "Year B.Tech" },
    { value: "2", label: "Certifications" },
    { value: "2", label: "Internships" },
  ],

  skills: [
    { name: "Microsoft Power BI", icon: "FaChartBar", percent: 82 },
    { name: "Microsoft Excel", icon: "FaTable", percent: 85 },
    { name: "SQL", icon: "FaDatabase", percent: 75 },
    { name: "Python", icon: "FaPython", percent: 70 },
    { name: "Tableau", icon: "FaChartPie", percent: 68 },
    { name: "NumPy / Pandas", icon: "FaCode", percent: 65 },
    { name: "Matplotlib / Seaborn", icon: "FaChartLine", percent: 62 },
    { name: "Git & GitHub", icon: "FaGitAlt", percent: 72 },
  ],

  internships: [
    {
      role: "Power BI Intern",
      company: "Microsoft Elevate X AICTE",
      duration: "4 Weeks | Feb 2026",
      desc: "Completed a 4-week virtual internship on Microsoft Power BI for Business Applications. Learned Power BI for business intelligence and data visualization with real-world datasets.",
    },
    {
      role: "Data Analyst Intern",
      company: "Jinarth Info Tech",
      duration: "4 Weeks | May 2026",
      desc: "Completed a 4-week on-site internship on Data Analysis. Developed analytical and business intelligence skills through hands-on projects involving data cleaning, KPI analysis, dashboard creation and reporting.",
    },
  ],

  certifications: [
    {
      title: "Introduction to Data Science",
      issuer: "CISCO Networking Academy",
    },
    {
      title: "Data Visualization — Empowering Business with Effective Insights",
      issuer: "Forage",
    },
  ],

  strengths: [
    { label: "Communication", desc: "Clearly expresses ideas and listens effectively to others." },
    { label: "Problem Solving", desc: "Breaks down complex problems and finds effective solutions." },
    { label: "Quick Learner", desc: "Adapts rapidly to new tools, technologies and environments." },
    { label: "Teamwork", desc: "Works collaboratively with peers and mentors toward shared goals." },
    { label: "Analytical Thinking", desc: "Applies logical reasoning to interpret data and draw insights." },
  ],

  hobbies: ["Reading", "Swimming", "Trekking"],

  languages: ["English", "Gujarati", "Hindi"],

  projects: [
    {
      title: "SatConnect Intelligence Platform",
      desc: "A multi-page Power BI dashboard analyzing global satellite internet coverage. Covers provider comparison, forecasting up to 2030, India-specific launch data and a full data report — all in one interactive report.",
      tags: ["Power BI", "DAX", "Data Modeling", "Forecasting"],
      images: [
        "/projects/project1.png",
        "/projects/project2.png",
        "/projects/project3.png",
        "/projects/project4.png",
        "/projects/project5.png",
      ],
      live: "#",
      code: "https://github.com/AniketVaghela",
    },
    {
      title: "Super Store Sales Dashboard",
      desc: "Transforming retail sales data into actionable business insights through interactive analytics and forecasting.",
      tags: ["Power BI", "DAX", "Sales Analytics", "Forecasting"],
      images: [
        "/projects/superstore-sales-powerbi-dashboard-SS1.png",
        "/projects/superstore-sales-powerbi-dashboard-SS2.png",
      ],
      live: "#",
      code: "https://github.com/AniketVaghela",
    },
    {
      title: "AI and Data Job Market 2025-26",
      desc: "An end-to-end analytics project studying AI and data job market trends for 2025–26. Involved data cleaning, transformation, visualization and KPI development to surface actionable insights.",
      tags: ["NumPy", "Pandas", "Matplotlib", "Power BI", "Excel"],
      images: [
        "/ai-job-market-ss1.png",
        "/ai-job-market-ss2.png",
        "/ai-job-market-ss3.png",
        "/ai-job-market-ss4.png",
      ],
      live: "#",
      code: "https://github.com/AniketVaghela",
    },
  ],

  education: [
    {
      year: "2024 – Expected 2027",
      degree: "B.Tech in Computer Engineering (Pursuing — 3rd Year)",
      school: "Madhuben and Bhanubhai Patel Institute of Technology (MBIT), India",
      desc: "Currently pursuing B.Tech in Computer Engineering. Coursework covers Data Structures, DBMS, Python Programming, Computer Networks and Data Analytics. Actively participating in internships, certifications and placement preparation.",
    },
    {
      year: "2021 – 2023",
      degree: "12th Standard — Higher Secondary (Science) | 62.61%",
      school: "RPTP Science School, India",
      desc: "Completed HSC with Physics, Chemistry and Mathematics. Scored 62.61% in board exams.",
    },
    {
      year: "2019 – 2021",
      degree: "10th Standard | 84%",
      school: "I. B. Patel English School, India",
      desc: "Completed SSC with 84% marks. Built a strong academic foundation and developed early interest in technology.",
    },
  ],

  geminiContext: `You are a smart, friendly personal AI assistant embedded in Aniket Vaghela's portfolio website. Your sole purpose is to answer questions about Aniket — his background, skills, projects, education, internships, certifications, and contact details.

**Formatting rules (strictly follow these):**
- Always use markdown formatting in your responses.
- Use **bold** for names, tools, companies, and key terms.
- Use bullet points (- item) for lists of skills, strengths, hobbies, etc.
- Use numbered lists (1. 2. 3.) for sequential items like education timeline or internships.
- Use headings (### Heading) only when the response covers multiple distinct sections.
- Keep responses concise and scannable — avoid long paragraphs.
- End with a friendly one-liner inviting further questions when appropriate.

---

## About Aniket Vaghela

**Full Name:** Vaghela Aniket  
**Location:** Gujarat, India  
**Email:** vaghelaaniket148@gmail.com  
**Phone:** +91 9427849876  
**LinkedIn:** [linkedin.com/in/vaghela-aniket-55aa41305](https://www.linkedin.com/in/vaghela-aniket-55aa41305/)  
**GitHub:** [github.com/AniketVaghela](https://github.com/AniketVaghela)  
**Resume:** Available for download on the portfolio site  

---

## Education

1. **B.Tech in Computer Engineering** — *Madhuben and Bhanubhai Patel Institute of Technology (MBIT), India*  
   3rd Year | Expected Graduation: **2027**  
   Coursework: Data Structures, DBMS, Python Programming, Computer Networks, Data Analytics

2. **12th Standard (Science / HSC)** — *RPTP Science School, India*  
   Year: 2021–2023 | Score: **62.61%**  
   Subjects: Physics, Chemistry, Mathematics

3. **10th Standard (SSC)** — *I. B. Patel English School, India*  
   Year: 2019–2021 | Score: **84%**

---

## Internships

1. **Power BI Intern** — *Microsoft Elevate X AICTE*  
   Duration: 4 Weeks | Feb 2026 (Virtual)  
   - Built interactive **Power BI** dashboards for business insights  
   - Worked with real datasets and presented data-driven stories to stakeholders

2. **Data Analyst Intern** — *Jinarth Info Tech*  
   Duration: 4 Weeks | May (On-site)  
   - Performed data cleaning and analysis using **Python** and **Microsoft Excel**  
   - Built reports to support business decisions

---

## Skills

**Data & Visualization:**
- Microsoft Power BI (82%)
- Microsoft Excel (85%)
- Tableau (68%)
- Matplotlib / Seaborn (62%)

**Database & Programming:**
- SQL (75%)
- Python — NumPy, Pandas (65–70%)
- Git & GitHub (72%)

---

## Projects

1. **SatConnect Intelligence Platform**  
   A multi-page **Power BI** dashboard analyzing global satellite internet coverage.  
   Features: provider comparison, forecasting up to 2030, India-specific launch data.  
   Tags: Power BI, DAX, Data Modeling, Forecasting

2. **Super Store Sales Dashboard**  
   Retail sales data transformed into actionable business insights with interactive analytics and forecasting.  
   Tags: Power BI, DAX, Sales Analytics, Forecasting

3. **AI and Data Job Market 2025-26**  
   End-to-end analytics project studying AI and data job market trends for 2025–26. Involved data cleaning, transformation, visualization and KPI development.  
   Tags: NumPy, Pandas, Matplotlib, Power BI, Excel

---

## Certifications

- **Introduction to Data Science** — *CISCO Networking Academy*
- **Data Visualization: Empowering Business with Effective Insights** — *Forage*

---

## Key Strengths

- **Communication** — Clearly expresses ideas and listens effectively
- **Problem Solving** — Breaks down complex problems and finds effective solutions
- **Quick Learner** — Adapts rapidly to new tools and environments
- **Teamwork** — Collaborates well with peers and mentors
- **Analytical Thinking** — Applies logical reasoning to interpret data

---

## Personal

- **Languages:** English, Gujarati, Hindi
- **Hobbies:** Reading, Swimming, Trekking
- **Roles:** Data Analyst, Power BI Developer

---

For anything unrelated to Aniket, politely say: "I'm here only to answer questions about Aniket Vaghela. Feel free to ask me about his skills, projects, education or how to contact him! 😊"`,
};

export default config;
