/*
TODO
Crop the image better
3d Effects
*/

export const data = {
  name: "Daanveer Singh",
  email: "dhveersandhu@gmail.com",
  phone: "+91 97815 99797",
  github: "https://github.com/Sandhu-97",
  linkedin: "https://linkedin.com/in/daanveer-singh",
  leetcode: "https://leetcode.com/u/dhveersandhu",

  roles: ["DSA Enthusiast.", "ML Engineer.", "Flutter Developer.", "."],

  stats: [
    { number: "8.97", label: "GPA / 10.0" },
    { number: "380+", label: "LeetCode Solved" },
    { number: "70+", label: "Real App Users" },
    { number: "4", label: "Projects Shipped" },
  ],

  badges: [
    { icon: "🏆", text: "AI Hackathon Runner-Up" },
    { icon: "⚡", text: "380+ LeetCode Problems" },
    { icon: "📱", text: "70+ Real-World App Users" },
  ],

  skills: [
    { group: "Languages", items: ["Python", "C/C++", "Java", "Dart", "JavaScript", "HTML/CSS"] },
    { group: "Frameworks", items: ["Flutter", "FastAPI", "Spring Boot", "AppWrite", "TkInter"] },
    { group: "ML / AI", items: ["XGBoost", "scikit-learn", "Pandas", "NumPy", "Gemini API"] },
    { group: "Tools", items: ["Microsoft Azure", "AWS", "Git/GitHub", "Docker", "Ubuntu", "SQL", "JSON", ] },
  ],

  education: {
    degree: "B.Tech in Computer Science & Engineering",
    university: "Lovely Professional University",
    location: "Phagwara, IN",
    expected: "July 2027",
    cgpa: 8.97,
    semesters: [
      { sem: "Sem 1", gpa: 9.23 },
      { sem: "Sem 2", gpa: 8.92 },
      { sem: "Sem 3", gpa: 9.00 },
      { sem: "Sem 4", gpa: 9.50 },
      { sem: "Sem 5", gpa: 8.14 },
    ],
  },

  featuredProject: {
    title: "Cold Store Management System",
    tag: "Mobile · Real World · AgriTech",
    description: "A full-featured mobile application that digitizes cold storage operations for an agricultural business in Punjab. Built in collaboration with a local business to solve real-world pain points — replacing pen-and-paper workflows with a clean mobile interface used by 70+ farmers and staff.",
    impact: [
      { metric: "90%", label: "reduction in manual input time" },
      { metric: "70+", label: "active users in the field" },
      { metric: "80%", label: "faster task completion in trials" },
    ],
    features: [
      "Farmer entry & withdrawal tracking",
      "Customer record management",
      "Secure authentication via AppWrite",
      "Real-time data syncing",
      "Optimized UI/UX for rural users",
    ],
    stack: ["Flutter", "AppWrite", "Dart"],
    github: "https://github.com/Sandhu-97/apptry",
  },

  projects: [
    {
      title: "Quick Gist",
      tag: "AI · Full Stack",
      description: "FastAPI backend integrated with Google Gemini API for real-time summarization of books and articles. Chatbot-style UI with multi-input session support and responsive design.",
      highlight: "📉 60-70% reduction in reading time",
      stack: ["FastAPI", "Gemini API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Sandhu-97/AI-Summarizer",
    },
    {
      title: "Diabetes Prediction",
      tag: "ML · Healthcare",
      description: "ML web app using FastAPI + XGBoost trained on 253,680+ medical records. Feature selection and hyperparameter tuning improved accuracy by 12%. Real-time risk predictions via responsive frontend.",
      highlight: "🏆 Hackathon Runner-Up · 250+ teams",
      stack: ["FastAPI", "XGBoost", "scikit-learn", "Python"],
      github: "https://github.com/Sandhu-97/diabetes-prediction",
    },
    {
      title: "CoC Discord Bot",
      tag: "Automation · Bot",
      description: "Python bots using Clash of Clans API to automate stats tracking. Google Sheets API for tournament leaderboards. Managed $10,000+ prize pool logistics.",
      highlight: "📊 80% reduction in manual tasks",
      stack: ["Python", "CoC API", "Google Sheets API"],
      github: "https://github.com/Sandhu-97/CWL-Bot",
    },
    {
      title: "Weather Pulse",
      tag: "App · Prediction · ",
      description: "A desktop weather application with a user-friendly GUI for real-time forecasts displays 6-day weather and astronomical data, including temperature, humidity, and moon phases",
      highlight: "🌤️ 6 day weather forecast",
      stack: ["Python", "Tkinter", "Visual Crossing API"],
      github: "https://github.com/Sandhu-97/WeatherPulse",
    },
  ],

  achievements: [
    { icon: "🥈", title: "AI Hackathon Runner-Up", sub: "Neural Nexus · LPU · Top 2 out of 250+ participants" },
    { icon: "⚡", title: "380+ LeetCode Problems", sub: "Consistent DSA practice — arrays, trees, graphs, DP" },
    { icon: "🎤", title: "College Event Organizer", sub: "Organized campus events featuring international guests" },
  ],

  certifications: [
    { issuer: "Microsoft", name: "Essentials with Azure Fundamentals" },
    { issuer: "Google", name: "The Bits and Bytes of Networking" },
    { issuer: "IBM", name: "Introduction to Hardware and OS" },
    { issuer: "NPTEL", name: "Compiler Design" },
    { issuer: "University of Colorado", name: "Computer Communications Specialization" },
    { issuer: "Universitat Autònoma de Barcelona", name: "Digital Systems: Logic Gates to Processors" },
  ],
}
