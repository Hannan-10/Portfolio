export const portfolioData = {
  profile: {
    name: "Hannan Fareed",
    title: "Computer Scientist",
    profilePicture: "/images/Profile.jpeg",
    coverPhoto: "https://www.bigorange.com.hk/wp-content/uploads/2025/03/Hong-Kong-Web-Design-Company-Pioneering-Success-In-Eshop-Web-Development-800x425.jpg",
    email: "hannan11862@gmail.com",
    phone: "+92 3364611862",
    linkedin: "https://www.linkedin.com/in/hannan-fareed-22b660247/",
    github: "https://github.com/Hannan-10",
    cv: "/documents/cv.pdf",
    university: "FAST NUCES",
    dateOfBirth: "2004-01-25",
    cgpa: 2.96,
    about: "Proactive Computer Science student in the final year, with experience in software development, full-stack engineering, and system design. Proven ability to tackle challenges and adapt to new technologies in dynamic environments. Passionate about continuous learning and using technical expertise to solve practical problems.",
    location: "Davis Road, Lahore",
    skills: [
      "JavaScript", "React", "Node.js", "Python", "Machine Learning",
      "MongoDB", "Express.js", "HTML/CSS", "Git", "C++", "Flask", "MongoDB", "Bootstrap" ,
      "SQLlite", "PHP", "TensorFlow", "Keras"
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/hannanfareed/ecommerce",
      liveLink: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning algorithms. Can understand natural language and provide helpful responses for customer service.",
      image: "/images/projects/chatbot.jpg",
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "React"],
      githubLink: "https://github.com/hannanfareed/ai-chatbot",
      liveLink: "https://chatbot-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
      image: "/images/projects/taskapp.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubLink: "https://github.com/hannanfareed/task-manager",
      liveLink: "https://taskapp-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather and forecasts using multiple weather APIs and interactive charts.",
      image: "/images/projects/weather.jpg",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      githubLink: "https://github.com/hannanfareed/weather-dashboard",
      liveLink: "https://weather-demo.com",
      featured: false
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "Fast Nuces",
      degree: "Bachelors of Science",
      field: "Computer Science",
      startDate: "2021-08-16",
      endDate: "2025-05-17",
      cgpa: 2.96,
      description: "Specialized in Web Development,Machine Learning, Artificial Intelligence, Data Science, and Natural Language Processing.",
      location: "Lahore",
      current: false,
      image: "/images/education/fast.jpg"
    },
    {
      id: 2,
      institution: "Government College University",
      degree: "Intermediate",
      field: "FSc Pre-Engineering",
      startDate: "2019-09-01",
      endDate: "2021-05-15",
      Marks: "1052/1100",
      description: "Participated in speeches and multiple intercollegiate competitions, actively representing GCU in co-curricular events.",
      location: "Lahore",
      current: false,
      image: "/images/education/gcu.jpg"
    },
    {
      id: 3,
      institution: "Allied School",
      degree: "Matriculation",
      field: "Computer Science",
      startDate: "2017-03-01",
      endDate: "2019-05-15",
      Marks: "1060/1100",
      description: "Actively represented my school in programming and math competitions, as well as speeches and other co-curricular events.",
      location: "Lahore",
      current: false,
      image: "/images/education/allied.jpeg"
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Core PHP Developer",
      company: "Brains",
      location: "Lahore, Punjab",
      startDate: "2023-05-12",
      endDate: "2023-07-12",
      current: false,
      description: "Leading development of scalable web applications using modern technologies.",
      technologies: ["Html", "CSS", "Javascript", "Bootstrap", "JQuery","PHP","MySQL"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    }
    
  ],
  
  certifications: [
    {
      id: 1,
      name: "Core PHP Developer",
      issuer: "BRAINS Institute",
      issueDate: "2023-12-07",
      expiryDate: "",
      credentialId: "BIT-59411/00002374/7/12/2023",
      credentialUrl: "/images/certifications/Hannan.jpg",
      image: "/images/certifications/Hannan.jpg",
      description: "Successfully completed a 4-month workshop covering HTML, CSS, JavaScript, jQuery, Bootstrap, WordPress, PHP & MySQL."
    },
    {
      id: 2,
      name: "Introduction to Microsoft SQL Management Server",
      issuer: "Microsoft Learn Student Ambassadors",
      issueDate: "2023-10-01",
      expiryDate: "",
      credentialId: "MSA-SQL-2023",
      credentialUrl: "/documents/Hannan Fareed.pdf",
      image: "/images/certifications/Microsoft.png",
      description: "Awarded for attending and completing the workshop on Introduction to Microsoft SQL Management Server."
    },
    {
      id: 3,
      name: "ASP.NET API Developer",
      issuer: "Microsoft",
      issueDate: "2025-06-28",
      expiryDate: "",
      credentialId: "MSA-AMB-2023",
      credentialUrl: "/images/certifications/aspNet.PNG",
      image: "/images/certifications/aspNet.PNG",
      description: "Completed Microsoft Learn module on building RESTful APIs with ASP.NET Core, covering controller creation, routing, and service injection through hands-on projects."
    },
    {
      id: 4,
      name: "Introduction to C#",
      issuer: "Sololearn | Collaboration with Google",
      issueDate: "2025-06-28",
      expiryDate: "",
      credentialId: "CSHARP-2025",
      credentialUrl: "/images/certifications/Csharp.jpg",
      image: "/images/certifications/Csharp.jpg",
      description: "Completed a comprehensive course on C# programming, covering object-oriented concepts, .NET framework, and application development."
    },
    {
      id: 5,
      name: "Angular Development",
      issuer: "Sololearn | Collaboration with Google",
      issueDate: "2025-06-28",
      expiryDate: "",
      credentialId: "ANGULAR-2025",
      credentialUrl: "/images/certifications/Angular.jpg",
      image: "/images/certifications/Angular.jpg",
      description: "Completed a hands-on course on Angular, focusing on building dynamic web applications, components, and services."
    }
  ]
}; 