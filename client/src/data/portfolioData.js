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
    university:"FAST NUCES",
    dateOfBirth:"2004-01-25",
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
      title: "Virtuel Elegance (Final Year Project)",
      description: "Engineered a mobile and web app using React Native and FERN stack, enabling users to virtually try on outfits based on real-time body data. Integrated pose estimation through OpenCV and MediaPipe for accurate measurements from live camera input. Implemented 3D clothing visualization using Unity for realistic virtual try-on experience.",
      technologies: ["Python", "OpenCV", "MediaPipe", "OpenPose", "ReactJS", "React Native", "NodeJS", "Firebase","Flask"],
      githubLink: "https://github.com/hannanfareed/virtuel-elegance",
      liveLink: "https://virtuel-elegance-demo.com",
      featured: true,
      startDate: "2024-08-01",
      endDate: "2025-05-01"
    },
    {
      id: 2,
      title: "Chatbot for Healthcare Queries (Healthcare AI)",
      description: "Designed and implemented an advanced NLP-based chatbot utilizing Retrieval-Augmented Generation (RAG) to deliver precise and trustworthy medical responses. Seamlessly integrated document retrieval with context-aware generation, ensuring highly accurate and contextually relevant healthcare guidance for users.",
      image: "/images/projects/chatbot.jpg",
      technologies: ["Python", "spaCY", "NLTK", "Flask", "React"],
      githubLink: "https://github.com/hannanfareed/healthcare-chatbot",
      liveLink: "https://healthcare-chatbot-demo.com",
      featured: false,
      startDate: "2025-01-01",
      endDate: "2025-05-01"
    },
    {
      id: 3,
      title: "GameBaazi (Online GameStore)",
      description: "Built a full-stack MERN platform for digital game and accessory sales with secure transactions and personalized user dashboards. Integrated real-time order tracking and seamless delivery system for both digital downloads and physical products.",
      image: "/images/projects/taskapp.jpg",
      technologies: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS"],
      githubLink: "https://github.com/hannanfareed/gamebaazi",
      liveLink: "https://gamebaazi-demo.com",
      featured: false,
      startDate: "2024-01-01",
      endDate: "2024-05-01"
    },
    {
      id: 4,
      title: "Cricket Bazaar (Cricket Analytics Platform)",
      description: "Developed predictive models using regression and classification to estimate IPL auction prices based on historical player data. Integrated the models into a responsive web app for interactive visualization and exploration of player insights and auction trends.",
      image: "/images/projects/weather.jpg",
      technologies: ["Python","Flask", "HTML", "CSS", "Bootstrap"],
      githubLink: "https://github.com/hannanfareed/cricket-bazaar",
      liveLink: "https://cricket-bazaar-demo.com",
      featured: false,
      startDate: "2023-09-01",
      endDate: "2024-01-01"
    },
    {
      id: 5,
      title: "Bijlee Sense (Energy Consumption Analysis)",
      description: "Built a predictive energy management system using Linear Regression and Neural Networks to forecast consumption patterns. Implemented data preprocessing, clustering, and interactive visualizations for data-driven energy optimization.",
      image: "/images/projects/energy.jpg",
      technologies: ["Python", "HTML", "CSS", "Github"],
      githubLink: "https://github.com/hannanfareed/energy-analysis",
      liveLink: "https://energy-analysis-demo.com",
      featured: false,
      startDate: "2022-08-01",
      endDate: "2022-12-01"
    },
    {
      id: 6,
      title: "Edit Pixel (Image Editor Mobile App)",
      description: "Developed a mobile image editor app using Kotlin and Jetpack Compose. Included features like real-time filters, cropping, and enhancement tools. Focused on responsive UI and smooth performance for an intuitive user experience.",
      image: "/images/projects/image-editor.jpg",
      technologies: ["Kotlin", "Jetpack Compose", "Jira","Github","Figma"],
      githubLink: "https://github.com/hannanfareed/image-editor",
      liveLink: "https://play.google.com/store/apps/details?id=com.hannanfareed.imageeditor",
      featured: false,
      startDate: "2023-01-01",
      endDate: "2023-12-01"
    },
    {
      id: 7,
      title: "Speedify (Courier Management System - CMS)",
      description: "Developed a desktop-based Courier Management System in Java using NetBeans to automate parcel delivery operations. Built core modules for user management, parcel booking/tracking, and admin reporting to optimize logistics workflows. Integrated delivery scheduling, inventory handling, and secure user authentication for a scalable and efficient system.",
      image: "/images/projects/courier.jpg",
      technologies: ["Java", "NetBeans", "MySQL", "Swing", "JDBC", "GitHub"],
      githubLink: "https://github.com/hannanfareed/speedify-cms",
      liveLink: "",
      featured: false,
      startDate: "2022-06-01",
      endDate: "2022-08-01"
    },
    {
      id: 8,
      title: "JPEG Compression System (Digital Image Processing Project)",
      description: "Developed a JPEG image compression system for grayscale images using Python and NumPy. Implemented encoding and decoding with DCT, quantization, and zig-zag scanning to achieve compression. Visualized each stage of the process using Matplotlib to demonstrate effectiveness and accuracy of reconstruction.",
      image: "/images/projects/jpeg-compression.jpg",
      technologies: ["Python", "NumPy", "SciPy", "PIL", "Matplotlib", "Jupyter Notebook", "GitHub"],
      githubLink: "https://github.com/hannanfareed/jpeg-compression",
      liveLink: "",
      featured: false,
      startDate: "2022-03-01",
      endDate: "2022-05-01"
    },
    {
      id: 9,
      title: "TechHaveli (E-commerce Application)",
      description: "Built a full-stack e-commerce platform using MERN stack for online electronics and gadgets sales. Implemented user authentication, product catalog, shopping cart, payment integration, and order management system. Developed responsive UI with real-time inventory tracking and secure payment processing for seamless shopping experience.",
      image: "/images/projects/techhaveli.jpg",
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux", "GitHub"],
      githubLink: "https://github.com/hannanfareed/techhaveli",
      liveLink: "",
      featured: false,
      startDate: "2023-08-01",
      endDate: "2023-12-01"
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
        "Refactored PHP and jQuery code for better performance and maintainability.",
        "Improved mobile responsiveness with Bootstrap and JavaScript.",
        "Optimized MySQL queries for faster data retrieval and lower server load."
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