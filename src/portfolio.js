/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhruva's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Dhruva Bhattacharya Portfolio",
    type: "website",
    url: "http://dhruvabhattacharya130102.xyz/",
  },
};

//Home Page
const greeting = {
  title: "Dhruva Bhattacharya",
  logo_name: "Dhruva Bhattacharya",
  nickname: "AI-Enthusiast",
  subTitle:
    "A passionate individual who always thrives to work on end to end products in machine learning and AI which develop sustainable and scalable social and technical systems to create impact. I am just another guy who wanna add value to the future.",
  resumeLink:
    "https://drive.google.com/file/d/1iB2p9ZSbc6MTO4cdusoOHfrVyJ396WSL/view?usp=sharing",
  portfolio_repository: "https://github.com/dhruvaop/twitter_analyzer-",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/dhruvaop",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "dhruvabhattacharya130102@gmail.com",
  // gitlab: "https://gitlab.com/dhruvaop",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/dhruvabhattacharya/"

  {
    name: "Github",
    link: "https://github.com/dhruvaop",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhruva-bhattacharya/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCx4o0mGSyBHIzsQMG3zHj7Q/videos",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "dhruvabhattacharya130102@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/DhruvaBhattach2",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dhruva130102",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bhattacharyadhruva/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "🤖 Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "🤖 Experience of working with Computer Vision and NLP projects",
        "🤖 Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "skitlearn",
          fontAwesomeClassname: "ion-logo-scikit-learn",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🌐 Building resposive website front end using React-Redux",
        "🌐 Developing web apps using MERN stack development",
        "🌐 Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angularjs",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "☁️ Experience working on multiple cloud platforms",
        "☁️ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "☁️ Deploying deep learning models on cloud to use on web applications",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "🐱‍💻 Designing highly attractive user interface for mobile and web applications",
        "🐱‍💻 Customizing logo designs and building logos from scratch",
        "🐱‍💻 Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/dhruvabhattacha1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/dhruvaop",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/dhruvaop",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.hackerearth.com/@dhruvabhattacharya130102",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gyan Ganga Institute of Technology and Science Jabalpur",
      subtitle:
        "B.Tech. in Computer Engineering with specialisation in Artificial Intelligence and Machine Learning",
      logo_path: "gyanganga.png",
      alt_name: "GGITS Jabalpur",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied software engineering subjects like Data Structures, Algorithms, DBMS, OS, CA, AI and ML, etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected as a contributor in GWOC 2021.",
      ],
      website_link: "http://ggits.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Apsara Clouder",
      subtitle: "Alibaba Cloud",
      logo_path: "alib.png",
      certificate_link:
        "https://drive.google.com/file/d/1xxJOKX9jJysY7Nz_c2wA8m6WX-BnJ96o/view",
      alt_name: "Alibabacloud",
      color_code: "#8C151599",
    },
    {
      title: "Responsive Web Design",
      subtitle: "free Code Camp",
      logo_path: "1-removebg-preview.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc004f0a81-ae3a-4691-911e-3c18608002ca/responsive-web-design",
      alt_name: "freecodecamp.com",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Data Studio",
      subtitle: "Google Analytics",
      logo_path: "google_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/oJhfCaUiREGXaq9QZY_11w",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Python For Beginners",
      subtitle: "- Kiran Gavali",
      logo_path: "udemy-1-logo-png-transparent.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5487b348-de51-40bf-b20f-e7a490bda5c1/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "GCP BIG DATA AND ML FUNDAMENTALS",
      subtitle: "Bart Verlaat",
      logo_path: "binix.png",
      certificate_link:
        "https://drive.google.com/file/d/15O3gxg4UUND_C8aavGuVCkyvSDTxbXBf/view",
      alt_name: "Binix.io",
      color_code: "#D83B0199",
    },
    {
      title: "Engineering Virtual Program",
      subtitle: "Goldman Sachs",
      logo_path: "gold.png",
      certificate_link:
        "https://drive.google.com/file/d/1gJQaKtgMCmyXtS1MlZLB2eDKzUmhIaYZ/view?usp=sharing",
      alt_name: "Goldman Sachs",
      color_code: "#1F70C199",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "Google Digital Unlocked",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/123VBvDox3JjOBJGdn_uK4dBg8IEjwXM9/view",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Digital Skills: Artificial Intelligence",
      subtitle: "Accenture",
      logo_path: "assc.png",
      certificate_link: "https://www.futurelearn.com/certificates/8eqrce2",
      alt_name: "Accenture",
      color_code: "#00000099",
    },
    {
      title: "Hydrollogical Modelling",
      subtitle: "ISRO",
      logo_path: "isro.png",
      certificate_link:
        "https://drive.google.com/file/d/1DLBB4HnhL5TXbR3N5WF1pm7UaC6HGfhL/view",
      alt_name: "Indian Space Research Organization",
      color_code: "#2A73CC",
    },
    {
      title: "IBM Cloud Essentials - V3",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/2ed2bb31f1cd4afe892e695fc245aeac",
      alt_name: "IBM Developer Skills Network",
      color_code: "#4285F499",
    },
    {
      title: "CPA: Programming Essentials in C++",
      subtitle: "CISCO",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1LrI7h04fvUWYvcvp9onnsxssTTbc9WD9/view",
      alt_name: "netacad",
      color_code: "#FFBB0099",
    },
    {
      title: "SC400T00: Microsoft Information Protection Administrator",
      subtitle: "- Russell Sarder",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.netcomlearning.com/lib/fpdf17/cc.phtml?enc=1&CallerID=MTk2MTcyMA&sid=OTMxNzU",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have been doing internship work with many evolving startups as ML and DL Developer, Designer and Software Architect. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  /*I have also worked with some well established companies mostly as AI Developer.*/
  header_image_path: "experience.svg",
  sections: [
    /*{
      title: "Work",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },*/
    {
      title: "Internships",
      experiences: [
        {
          title: "IoT and Computer Vision",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "the.png",
          duration: "May 2021 - Jul 2021",
          location: "Work Forom Home",
          description:
            "I have worked on project on training a machine learning model based on previous data available. There were two objectives: (1) To train a model that detect human face. (2) To embed feature in the model which can decide whether the person is wearing a mask or not. I have closely worked with deep learning models in combination with statistical methods to create solution for this.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Intern",
          company: "SmartKnower",
          company_url: "https://www.smartknower.com/",
          logo_path: "smart.png",
          duration: "May 2021 - Jul 2021",
          location: "Work From Home",
          description:
            "This is Edutech Company. I have made Supervised Learning model for twitter which can perform sentiment analysis on perticular tweet and decide whether its affermative or a negative tweet.",
          color: "#008000",
        },
        {
          title: "Web Development Intern",
          company: "Let's Grow More",
          company_url: "https://letsgrowmore.in",
          logo_path: "lgm.jpg",
          duration: "Aug 2021 - Oct 2021",
          location: "Work From Home",
          description:
            "This is Company is a ground-based organization that aims at building the future through nourishing the present. I have made web application using react and angular and customised with scss syntax.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: " Indigo Squad Member at Mood Indigo",
          company: "Mood Indigo IIT Bombay",
          company_url: "https://www.moodi.org",
          logo_path: "Mood.png",
          duration: "Aug 2021 - Sep 2021",
          location: "Work From Home",
          description: "Campus Ambassador Intern at Mood Indigo IIT Bombay",
          color: "#4285F4",
        },
        {
          title: "Contributor",
          company: "Girl Script Winter of Code 2021",
          company_url: "https://www.microsoft.com/",
          logo_path: "girl.png",
          duration: "Aug 2021",
          location: "Work From Home",
          description:
            "Girl Script Winter of Code 2021 is a program for university students to lead the awareness and use to open source contribution especially in the development of their projects and startups. Under this program, I have attended hands on workshops and seminars in Cloud Computing and Full Stack Development.",
          color: "#D83B01",
        },
        {
          title: "Internshala Student Partner (ISP-23)",
          company: "Internshala",
          company_url: "https://internshala.com",
          logo_path: "internshala.png",
          duration: "Jun 2021 - Aug 2021",
          location: "Work From Home",
          description:
            "My responsibility for this program was to promote and develop awareness of internship in my college. We have organised many talk shows multiple online events on the problems of building good resume.",
          color: "#4B0082",
        },
        {
          title: "Github Student Developer",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Aug 2021",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Kong, NativeScript, Microsoft. These contributions include bug fixes, feature requests and formulating proper documentation for project. We have build opensource community of our own college. The community is available at AskforTrain on github.",
          color: "#181717",
        },
        {
          title: "Campus Ambassador",
          company: "TechLearn.live",
          company_url: "https://www.techlearn.live/",
          logo_path: "tech.jpg",
          duration: "Jul 2021 - Sep 2021",
          location: "Work From Home",
          description:
            "My responsibility for this program was to promote and develop awareness of internship in my college.",
          color: "#3C99DC",
        },

        {
          title: "Campus Ambassador (Ninja Entrepreneur)",
          company: "Coding Ninjas",
          company_url: "https://www.codingninjas.com/?referralCode=ETWCY",
          logo_path: "coding.jpg",
          duration: "Jul 2021 - Sep 2021",
          location: "Work From Home",
          description:
            "My responsibility for this program was to promote and develop awareness of internship in my college and to develop a coding exposure in college through courses and training.",
          color: "#FFA500",
        },
        {
          title: "Campus Ambassador",
          company: "Lyriclious - Learn with us",
          company_url: "https://www.lyriclious.com/",
          logo_path: "lyricious.jpg",
          duration: "Jul 2021 - Aug 2021",
          location: "Work From Home",
          description:
            "My responsibility for this program was to promote and marketing for company in college.",
          color: "#800080",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projectmanager.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1629907160864.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link:
      "https://cleanprogrammerdhruva.hashnode.dev/rediscover-microsoft-by-satya-nadella",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Shiv Nagar, Damoh-Naka, behind water tank, Jabalpur, Madhya Pradesh - 482002",
    avatar_image_path: "video-calling.png",
    location_map_link: "https://goo.gl/maps/XSgdQPwW3xciFEYL9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7223089620",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
