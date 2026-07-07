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
  title: "Undergraduate in Information and Computing Science, Beijing University of Posts and Telecommunications",
  institution: "Queen Mary School, Hainan, BUPT",
  location: "Hainan, China",
  summary:
    "My current interests focus on AI for Science, AI agents, reinforcement learning, knowledge graphs, multimodal large language models, and graph foundation models, with an emphasis on building research ideas that are both verifiable and practically reusable.",
  statement:
    "I aim to build intelligent systems that combine theoretical value with practical impact on scientific workflows, especially in graph-language models, scholarly knowledge graphs, and automated scientific research.",
  email: "2023213779@bupt.cn",
  phone: "(+86) 18373149852",
  github: "https://github.com/gdshjzm",
  resumeHref: "/zhang-busheng-resume.pdf",
  interests: ["AI4S", "AI Agent", "Graph LLM", "Knowledge Graph", "Multimodal LLM"],
};

export const stats: StatItem[] = [
  {
    label: "Class Rank",
    value: "15 / 83",
    note: "Information and Computing Science",
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
    value: "National / Provincial Awards",
    note: "Physics experiment, robotics, and mathematical modeling competitions",
    accent: "green",
  },
  {
    label: "Research",
    value: "3+ Projects",
    note: "GraphLLM, Pix2Pix, and SciAtlas",
    accent: "orange",
  },
];

export const education: EducationItem[] = [
  {
    school: "Beijing University of Posts and Telecommunications, Queen Mary School, Hainan",
    location: "Hainan",
    program: "B.Sc. in Information and Computing Science, expected graduation in 2027",
    period: "2023.09 - 2027.06",
    highlights: [
      "Core coursework: Design & Build (100), Numerical Solutions of Differential Equations (98), Introduction to Artificial Intelligence (95), Mathematical Modeling (94), Probability and Statistics (93).",
      "Research internship mentors: Shi Chuan and Zhang Ningyu.",
      "Political affiliation: Probationary member of the Communist Party of China.",
      "Selected honors: University Second-Class Scholarship, National Second Prize in the National Physics Experiment Competition, National Second Prize in the China Robot and Artificial Intelligence Competition, and First Prize in the Hainan division of the National Mathematical Modeling Competition.",
    ],
  },
];

export const researchItems: ResearchItem[] = [
  {
    title: "Zero-Shot Adversarial Robustness Analysis for GraphLLMs",
    role: "Research Internship",
    period: "2024.07 - Present",
    organization: "GammaLab, Beijing University of Posts and Telecommunications",
    tags: ["GraphLLM", "Robustness", "Multimodal Defense"],
    bullets: [
      "Conducting research on adversarial robustness in graph-language models, with the goal of designing architectures that balance representation quality and defensive capability.",
      "Adapted defense strategies inspired by CLIP-style multimodal models, including methods such as TeCoA and PMG, into the graph-language modeling setting, achieving an improvement of about 21% over conventional baselines.",
      "Preliminary experiments have reduced attack success rates by roughly 15% on adversarial datasets, and the work is still ongoing.",
    ],
  },
  {
    title: "AI-Signaturer: AI Automatic Signature Generation Based on Pix2pix",
    role: "First Author · CMLAI 2025",
    period: "2024",
    organization: "AI Signature Generation Research",
    link: "https://discovery.researcher.life/article/ai-signaturer-ai-automatic-signature-generation-based-on-pix2pix/94cfc7f22fe4327cb6cec7f3e4a157b4",
    tags: ["Pix2Pix", "cGAN", "Computer Vision"],
    bullets: [
      "Designed an automatic Chinese signature generation framework based on Pix2pix-cGAN, supporting style transfer across Kai, Yahei, and Fangsong handwriting styles.",
      "Trained the model on around 900 signature samples and achieved an average accuracy of 76%.",
      "The paper was accepted by CMLAI 2025, and the generated signatures preserve key visual characteristics of Chinese handwriting.",
    ],
  },
  {
    title: "SciAtlas: A Large-Scale Knowledge Graph for Automated Scientific Research",
    role: "Co-Author",
    period: "2025",
    organization: "In collaboration with the ZJNLP Lab at Zhejiang University",
    link: "https://arxiv.org/abs/2605.22878",
    tags: ["Knowledge Graph", "Neuro-Symbolic Retrieval", "AI for Science"],
    bullets: [
      "Contributed to the construction of a large-scale, cross-disciplinary scholarly knowledge graph integrating 26 disciplines, more than 43 million papers, 157 million entities, and 3 billion triples.",
      "Helped develop a neuro-symbolic retrieval pipeline combining keyword matching, semantic vector retrieval, and graph propagation via Random Walk with Restart for collaborative recall and graph-based reranking.",
      "The technical report has been released on arXiv, and the open-source repository has earned more than 130 GitHub stars.",
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Contributions to the GammaGL Library",
    period: "2025.08 - Present",
    tags: ["Graph Learning", "Open Source", "GammaGL"],
    bullets: [
      "Contributed GraphLAMA-related algorithm support to the GammaGL graph learning library within Professor Shi Chuan's research group.",
      "The library supports a major project on intelligent analysis and large-scale applications for complex heterogeneous graph data, connecting academic research with industrial deployment.",
    ],
  },
  {
    title: "London Innovation Camp: Object-Aware Robotic Grasping",
    period: "2026.01 - 2026.02",
    tags: ["ROS", "Gazebo", "Robotics"],
    bullets: [
      "Selected for the university-funded Winterhack program and collaborated with students across London, Beijing, and Hainan on robotic system design.",
      "Used ROS and Gazebo to implement object recognition and intelligent grasping for robotic manipulation tasks.",
    ],
  },
  {
    title: "YOLO-Based Wildlife Recognition for Drones",
    period: "2025.07 - 2025.08",
    tags: ["YOLO", "SLAM", "Drone"],
    bullets: [
      "Participated in an electronics design competition project focused on simulated wildlife monitoring within a specified area.",
      "Built drone navigation and recognition control using Raspberry Pi, flight controller hardware, SLAM, and ROS, and won the Second Prize in the Beijing Electronics Design Competition.",
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
