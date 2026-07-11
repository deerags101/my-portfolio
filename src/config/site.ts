// ============================================================
// SITE CONFIG — edit this ONE file to make the portfolio yours
// ============================================================
// Every personal detail on the site (name, bio, links, contact
// info) lives here. Nothing else in the codebase needs touching
// unless you want to change the design itself.
// ============================================================

export const siteConfig = {
  // Shown in browser tab / SEO
  meta: {
    title: "Deepanshu Raghuvanshi",
    description: "Portfolio of Your Name — Frontend Developer",
  },

  // Navbar brand text (bottom-left "logo") + welcome screen domain pill
  brand: {
    navbarText: "yourname.dev",
    domainText: "www.yourname.vercel.app",
  },

  // Hero section (the big landing text)
  hero: {
    line1: "Frontend", // big heading line 1
    line2: "Developer", // big heading line 2
    roles: ["Junior Programmer", "Fresh Graduate", "Happy coding!"], // typing animation
    skills: ["Typescript", "React.js", "Tailwind"], // pill badges
    description:
      "Creating modern websites with a clean, responsive, and elegant look. Turning ideas and designs into engaging, easy-to-use digital experiences.",
    availableForWork: true,
  },

  // About section
  about: {
    // each string renders on its own line, e.g. first / middle / last name
    nameLines: ["Your", "First", "Name"],
    bio:
      "Fresh graduate with a passion for frontend development and modern UI. Focused on building clean, responsive websites with a strong visual identity to deliver the best digital experience.",
    quote: "Turning ideas into clean, modern, and meaningful digital experiences.",
    cvUrl: "https://drive.google.com/your-cv-link-here",
    profileImage: "/assets/PP.png",
  },

  // Contact section
  contact: {
    heading: "Contact Me",
    subheading: "Let's build something great together.",
    formIntroTitle: "Contact Me",
    formIntroText:
      "Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.",
  },

  // Social links (shown in Contact section)
  socials: {
    linkedin: "https://www.linkedin.com/in/your-username/",
    instagram: "https://www.instagram.com/your-username",
    youtube: "https://youtube.com/@your-username",
    github: "https://github.com/your-username",
    tiktok: "https://www.tiktok.com/@your-username",
  },

  // Footer
  footer: {
    copyrightName: "Your Name",
    year: 2026,
  },
} as const;
