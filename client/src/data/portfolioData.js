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
      institution: "University of Technology",
      degree: "Master of Science",
      field: "Computer Science",
      startDate: "2020-09-01",
      endDate: "2022-05-15",
      cgpa: 3.8,
      description: "Specialized in Machine Learning and Artificial Intelligence. Completed thesis on 'Deep Learning Applications in Natural Language Processing'.",
      location: "New York, NY",
      current: false
    },
    {
      id: 2,
      institution: "State University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2016-09-01",
      endDate: "2020-05-15",
      cgpa: 3.7,
      description: "Graduated with honors. Active member of the Computer Science Club and participated in various hackathons.",
      location: "Boston, MA",
      current: false
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "2022-06-01",
      endDate: null,
      current: true,
      description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      startDate: "2020-06-01",
      endDate: "2022-05-31",
      current: false,
      description: "Developed and maintained multiple web applications. Worked closely with product managers and designers to deliver high-quality software.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      achievements: [
        "Built 3 major features from scratch",
        "Improved code quality by 25%",
        "Reduced bugs by 30%"
      ]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "BigTech Company",
      location: "Seattle, WA",
      startDate: "2019-06-01",
      endDate: "2019-08-31",
      current: false,
      description: "Worked on internal tools and automation scripts. Gained experience with large-scale software development practices.",
      technologies: ["Python", "JavaScript", "SQL", "Git"],
      achievements: [
        "Automated 5 manual processes",
        "Fixed 15+ bugs",
        "Received excellent performance review"
      ]
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023-03-15",
      expiryDate: "2026-03-15",
      credentialId: "AWS-123456",
      credentialUrl: "https://aws.amazon.com/verification",
      image: "/images/certifications/aws.png",
      description: "Demonstrates expertise in designing distributed systems on AWS."
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: "2022-11-20",
      expiryDate: "2025-11-20",
      credentialId: "GCP-789012",
      credentialUrl: "https://cloud.google.com/certification",
      image: "/images/certifications/gcp.png",
      description: "Validates ability to build and deploy applications on Google Cloud Platform."
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      issueDate: "2022-08-10",
      expiryDate: "2025-08-10",
      credentialId: "AZURE-345678",
      credentialUrl: "https://www.microsoft.com/en-us/learning",
      image: "/images/certifications/azure.png",
      description: "Proves skills in developing, testing, and maintaining cloud applications on Azure."
    },
    {
      id: 4,
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      issueDate: "2021-12-05",
      expiryDate: "2024-12-05",
      credentialId: "CSM-901234",
      credentialUrl: "https://www.scrumalliance.org",
      image: "/images/certifications/csm.png",
      description: "Demonstrates understanding of Scrum framework and agile methodologies."
    }
  ]
}; 