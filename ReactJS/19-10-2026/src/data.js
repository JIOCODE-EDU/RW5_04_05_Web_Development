export const profile = {
  name:"Vivek Kachhadiya",
  role:"Full Stack And AI / ML Developer",
  email:"rw5.vivek.mk@gmail.com",
  links:[{label:"GitHub" , href:""} , {label:"LinkdIn" , href:""}],
}

export const slides = [
   {
    title: "Learn React JS",
    description: "Build Modern and interactive web application.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Master Css Styling",
    description: "Build Modern and interactive web application.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Become a Developer",
    description: "Build Modern and interactive web application.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
]

export const works = [
  {
    id: "1",
    title: "SaaS Analytics Dashboard",
    category: "Full-Stack Web Application",
    description: "A real-time data visualization dashboard built for SaaS startups to track user acquisition, MRR, churn rates, and Stripe billing metrics.",
    image: "/images/works/saas-dashboard.png",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://example-saas-analytics.com",
    githubUrl: "https://github.com/yourusername/saas-analytics",
    featured: true,
    highlights: [
      "Engineered real-time charts using Recharts handling over 100k data points smoothly.",
      "Integrated Stripe webhooks for automated subscription lifecycle management.",
      "Achieved a 98+ Lighthouse performance score through SSR and image optimization."
    ]
  },
  {
    id: "2",
    title: "AI Prompt Generator & Manager",
    category: "Artificial Intelligence",
    description: "An AI-powered web utility that helps content creators and developers test, refine, and organize prompt templates for LLMs like GPT-4 and Claude.",
    image: "/images/works/ai-prompt-tool.png",
    tags: ["Vue.js", "Nuxt 3", "OpenAI API", "Tailwind CSS", "Supabase"],
    liveUrl: "https://example-ai-prompts.com",
    githubUrl: "https://github.com/yourusername/ai-prompt-manager",
    featured: true,
    highlights: [
      "Implemented streaming responses for real-time prompt output generation.",
      "Built a robust tagging and search system with instant client-side filtering.",
      "Secured user data and API keys using Supabase Row Level Security (RLS)."
    ]
  },
  {
    id: "3",
    title: "E-Commerce Mobile App",
    category: "Mobile Application",
    description: "A cross-platform mobile shopping experience featuring sleek animations, secure local cart state management, and seamless checkout.",
    image: "/images/works/ecommerce-app.png",
    tags: ["React Native", "Expo", "Redux Toolkit", "Node.js", "MongoDB"],
    liveUrl: "https://example-shop-app.com",
    githubUrl: "https://github.com/yourusername/react-native-store",
    featured: false,
    highlights: [
      "Designed fluid gesture-based navigation and micro-interactions.",
      "Integrated Apple Pay and Google Pay gateway for one-click purchases.",
      "Optimized offline capabilities using AsyncStorage and local state caching."
    ]
  },
  {
    id: "4",
    title: "DevOps Automated CI/CD Pipeline",
    category: "Cloud & DevOps",
    description: "An open-source boilerplate and automated pipeline setup for deploying containerized microservices securely to AWS ECS.",
    image: "/images/works/devops-pipeline.png",
    tags: ["Docker", "AWS", "GitHub Actions", "Terraform", "Node.js"],
    liveUrl: "https://github.com/yourusername/aws-cicd-boilerplate",
    githubUrl: "https://github.com/yourusername/aws-cicd-boilerplate",
    featured: false,
    highlights: [
      "Automated testing, linting, and multi-environment staging deployments.",
      "Provisioned cloud infrastructure as code (IaC) utilizing Terraform.",
      "Reduced deployment downtime to zero with rolling updates."
    ]
  }
];