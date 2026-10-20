export type StatItem = {
  label: string;
  value: string;
  note: string;
  accent: "orange" | "blue" | "green";
};

export type EducationItem = {
  school: string;
  location: string;
  program: string;
  period: string;
  highlights: string[];
};

export type ResearchItem = {
  title: string;
  role: string;
  period: string;
  organization: string;
  tags: string[];
  link?: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  period: string;
  tags: string[];
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  description: string;
  items: string[];
};

export const profile = {
  name: "Zhang Busheng",
  englishName: "张卜升",
  title: "Undergraduate in Information and Computing Science, BUPT · Admitted to Zhejiang University via Recommendation (2027 enrollment)",
  institution: "Queen Mary School, Hainan, BUPT",
  location: "Hainan, China",
  summary:
    "Admitted to Zhejiang University through the national recommendation system (advisor: Ningyu Zhang). My current interests focus on AI for Science (AI4S), LLM agents, knowledge-augmented generation, and scholarly knowledge graphs, with an emphasis on building research ideas that are both verifiable and practically reusable.",
  statement:
    "I aim to build intelligent systems that combine theoretical value with practical impact on scientific workflows, especially in scholarly knowledge graphs, research agents, and automated scientific discovery.",
  email: "2023213779@bupt.cn",
  phone: "(+86) 18373149852",
  github: "https://github.com/gdshjzm",
  resumeHref: "/zhang-busheng-resume.pdf",
  interests: ["AI4S", "LLM Agents", "Knowledge-Augmented Generation", "Knowledge Graph", "AI Agent", "LLM"],
};

export const stats: StatItem[] = [
  {
    label: "Overall Rank",
    value: "7 / 80",
    note: "Top 8%, weighted average 92.37/100, Information and Computing Science",
    accent: "orange",
  },
  {
    label: "Language",
    value: "IELTS 7.0",
    note: "CET6 517, CET4 580+",
    accent: "blue",
  },
  {
    label: "Honors",
    value: "National Scholarship",
    note: "4 national and 9 provincial/ministerial awards across robotics, physics, math modeling, and innovation competitions",
    accent: "green",
  },
  {
    label: "Research",
    value: "3 Papers",
    note: "Nature Computing Science under review (co-first author), arXiv preprint (second author), CMLAI 2025 (first author)",
    accent: "orange",
  },
];

export const education: EducationItem[] = [
  {
    school: "Zhejiang University (985, C9 League)",
    location: "Hangzhou",
    program: "Graduate student (admitted via the national recommendation system) — Advisor: Ningyu Zhang",
    period: "Starting 2027.09",
    highlights: [
      "Research directions: AI for Science (AI4S), LLM Agents, and knowledge-augmented generation.",
      "Internship availability: 5-6 months, on-site, up to 6 days per week.",
    ],
  },
  {
    school: "Beijing University of Posts and Telecommunications, Queen Mary School, Hainan (211, Sino-foreign joint program)",
    location: "Hainan",
    program: "B.Sc. in Information and Computing Science, expected graduation in 2027",
    period: "2023.09 - 2027.06 (expected)",
    highlights: [
      "Overall rank: 7/80 (Top 8%); weighted average: 92.37/100.",
      "English proficiency: IELTS 7.0, CET-6 517.",
      "Political affiliation: Probationary member of the Communist Party of China.",
      "Honors: National Scholarship; 4 national-level and 9 provincial/ministerial-level awards.",
      "Research internship advisors: Shi Chuan (BUPT GammaLab) and Ningyu Zhang (ZJU Knowledge Engine Lab).",
    ],
  },
];

export const researchItems: ResearchItem[] = [
  {
    title: "A Computable Atlas of Science as the Infrastructure for Machine Discovery",
    role: "Co-first Author · Under Review at Nature Computing Science",
    period: "2025.12 - Present",
    organization: "Knowledge Engine Lab, Zhejiang University — Advisor: Ningyu Zhang",
    tags: ["AI for Science", "Idea Generation", "Knowledge Graph"],
    bullets: [
      "Co-designed and implemented the scientific idea generation pipeline of SciAtlas, integrating scholarly knowledge-graph retrieval, research-mechanism analysis, literature search, and candidate idea generation into a unified workflow.",
      "Built a Graph of Research-based representation and grounding pipeline for research mechanisms, combining SciAtlas and Semantic Scholar retrieval to provide structured research context and evidence for idea generation.",
      "Completed systematic evaluation on LiveIdeaBench, achieving an average relative improvement of 13.5% over baselines such as DeepReview and Chain-of-Idea; the paper is under review at Nature Computing Science.",
    ],
  },
  {
    title: "SciAtlas: A Large-Scale Knowledge Graph for Automated Scientific Research",
    role: "Second Author · arXiv Preprint",
    period: "2025.12 - Present",
    organization: "Knowledge Engine Lab, Zhejiang University — Advisor: Ningyu Zhang",
    tags: ["Knowledge Graph", "Neo4j", "Open Source"],
    bullets: [
      "Contributed to the engineering and retrieval toolchain of SciAtlas, a large-scale scholarly knowledge graph covering 26 disciplines and 43M+ papers; deployed and maintained the Neo4j graph database service.",
      "Developed and maintained the dedicated SciAtlas CLI for knowledge-graph retrieval and research-workflow invocation, used and tested by 100+ users.",
      "Released as a technical report on arXiv (arXiv:2605.22878) and open-sourced on GitHub with 200+ stars.",
    ],
  },
  {
    title: "AI-Signaturer: AI Automatic Signature Generation Based on Pix2pix",
    role: "First Author · CMLAI 2025",
    period: "2024.03 - 2025.12",
    organization: "GammaLab, Beijing University of Posts and Telecommunications — Advisor: Shi Chuan",
    link: "https://discovery.researcher.life/article/ai-signaturer-ai-automatic-signature-generation-based-on-pix2pix/94cfc7f22fe4327cb6cec7f3e4a157b4",
    tags: ["Pix2Pix", "cGAN", "Computer Vision"],
    bullets: [
      "Designed and trained a Chinese signature generation model based on Pix2Pix/cGAN, performing image translation from three fonts (Kai, Yahei, Fangsong) to signature styles using ~9K signature samples.",
      "Led model architecture adaptation and hyperparameter tuning, reaching a classifier recognition accuracy of 76%; the generated signatures preserve key Chinese glyph characteristics.",
      "The project is open-sourced on GitHub.",
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "London WinterHack: Object-Aware Robotic Grasping",
    period: "2026.01 - 2026.04",
    tags: ["ROS", "Gazebo", "Robotics"],
    bullets: [
      "Built a robot simulation and control pipeline with ROS and Gazebo, enabling intelligent robotic grasping after object recognition.",
      "Selected for the 2026 Queen Mary WinterHack program in London with university funding (3/86 selection ratio within the major), and delivered an English technical presentation to UK faculty on behalf of the school.",
    ],
  },
  {
    title: "2025 Beijing Electronics Design Contest: Drone-Based Object Recognition and Detection",
    period: "2025.09 - 2026.05",
    tags: ["YOLOv8-Nano", "Raspberry Pi", "Drone"],
    bullets: [
      "Responsible for the YOLOv8-Nano-based object detection module for wildlife card recognition, including deployment and inference optimization on Raspberry Pi edge devices.",
      "Designed the communication protocol between the Raspberry Pi and the flight controller and completed system integration; the team won the Beijing Third Prize in the 2025 National Undergraduate Electronics Design Contest (\"TI Cup\").",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming and Writing",
    description: "Tools for algorithm design, software development, and academic writing.",
    items: ["Python", "C++", "JavaScript", "HTML", "LaTeX", "Markdown"],
  },
  {
    label: "Deep Learning",
    description: "Used for model training, experimental validation, and rapid research prototyping.",
    items: ["PyTorch", "TensorFlow", "Model Tuning", "Experiment Design"],
  },
  {
    label: "Graph Learning and Agents",
    description: "Focused on graph neural networks, graph foundation models, and research-oriented agent systems.",
    items: ["dgl", "PyG", "GammaGL", "Graph LLM", "Knowledge Graph", "AI Agent"],
  },
  {
    label: "Engineering Tools",
    description: "Support reproducible experiments, system building, and compute environment management.",
    items: ["Git", "Docker", "CUDA", "HPC", "ROS", "Gazebo"],
  },
];
