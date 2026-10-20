export type Locale = "en" | "zh";

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

export type Profile = {
  name: string;
  englishName: string;
  title: string;
  institution: string;
  location: string;
  summary: string;
  statement: string;
  email: string;
  phone: string;
  github: string;
  resumeHref: string;
  interests: string[];
};

export type SiteContent = {
  meta: {
    title: string;
  };
  nav: {
    brand: string;
    items: Array<{ label: string; href: string }>;
  };
  hero: {
    eyebrow: string;
    nameLabel: string;
    resumeLabel: string;
    githubLabel: string;
    contactLabel: string;
    sculpture: {
      headline: string;
      headlineAccent: string;
      backdropText: string;
      hint: string;
      hintTouch: string;
    };
  };
  overview: {
    items: Array<{ title: string; description: string }>;
  };
  sections: {
    overview: { index: string; title: string; description: string };
    education: { index: string; title: string; description: string };
    research: { index: string; title: string; description: string };
    projects: { index: string; title: string; description: string };
    skills: { index: string; title: string; description: string };
  };
  labels: {
    education: string;
    project: string;
    skillGroup: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    description: string;
    githubLabel: string;
  };
  profile: Profile;
  stats: StatItem[];
  education: EducationItem[];
  researchItems: ResearchItem[];
  projectItems: ProjectItem[];
  skillGroups: SkillGroup[];
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "Busheng Zhang | Academic Homepage",
    },
    nav: {
      brand: "Academic Profile",
      items: [
        { label: "Education", href: "#education" },
        { label: "Research", href: "#research" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "SELECTED ACADEMIC RESUME",
      nameLabel: "Native Name",
      resumeLabel: "View Resume",
      githubLabel: "GitHub",
      contactLabel: "Contact",
      sculpture: {
        headline: "Busheng\nZhang",
        headlineAccent: "Zhang",
        backdropText: "AI4S",
        hint: "Move across the form",
        hintTouch: "Touch the form",
      },
    },
    overview: {
      items: [
        {
          title: "Academic Training",
          description:
            "Built on mathematical foundations and systematic coursework for AI and graph learning research.",
        },
        {
          title: "Research Methodology",
          description:
            "Emphasizes problem formulation, experimental design, metric interpretation, and reproducibility.",
        },
        {
          title: "Technical Interests",
          description:
            "Focused on AI for Science, LLM agents, knowledge-augmented generation, and scholarly knowledge graphs.",
        },
        {
          title: "Long-Term Goal",
          description:
            "To explore intelligent systems that genuinely accelerate scientific discovery and reasoning.",
        },
      ],
    },
    sections: {
      overview: {
        index: "01",
        title: "Academic Snapshot",
        description:
          "A concise overview of metrics and focus areas that helps visitors understand my background at a glance.",
      },
      education: {
        index: "02",
        title: "Education",
        description:
          "Highlights academic training, core coursework, mentorship, and early-stage achievements.",
      },
      research: {
        index: "03",
        title: "Research Experience",
        description:
          "Focuses on research themes, collaborations, methodological contributions, and measurable outcomes.",
      },
      projects: {
        index: "04",
        title: "Project Experience",
        description:
          "Complements research with engineering implementation and competition-based execution.",
      },
      skills: {
        index: "05",
        title: "Skill Matrix",
        description:
          "Organizes strengths across programming, deep learning, graph learning, and engineering tools.",
      },
    },
    labels: {
      education: "EDUCATION",
      project: "Project Practice",
      skillGroup: "Skill Group",
    },
    footer: {
      eyebrow: "Contact",
      title: "Open to conversations on research and engineering collaboration.",
      description:
        "If you are interested in AI for Science, LLM agents, knowledge-augmented generation, or scholarly knowledge graphs, feel free to reach out by email or through GitHub.",
      githubLabel: "GitHub",
    },
    profile: {
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
    },
    stats: [
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
    ],
    education: [
      {
        school: "Zhejiang University",
        location: "Hangzhou",
        program: "Graduate student (admitted via the national recommendation system) — Advisor: Ningyu Zhang",
        period: "Starting 2027.09",
        highlights: [
          "Research directions: AI for Science (AI4S), LLM Agents, and knowledge-augmented generation.",
          "Internship availability: 5-6 months, on-site, up to 6 days per week.",
        ],
      },
      {
        school: "Beijing University of Posts and Telecommunications",
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
    ],
    researchItems: [
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
        link: "https://sciatlas.openkg.cn",
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
    ],
    projectItems: [
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
    ],
    skillGroups: [
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
    ],
  },
  zh: {
    meta: {
      title: "张卜升 | 学术主页",
    },
    nav: {
      brand: "学术主页",
      items: [
        { label: "教育背景", href: "#education" },
        { label: "科研经历", href: "#research" },
        { label: "项目经历", href: "#projects" },
        { label: "技能矩阵", href: "#skills" },
        { label: "联系方式", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "学术简历精选",
      nameLabel: "英文名",
      resumeLabel: "查看简历",
      githubLabel: "GitHub",
      contactLabel: "联系方式",
      sculpture: {
        headline: "张卜升",
        headlineAccent: "",
        backdropText: "AI4S",
        hint: "移动鼠标，拂过雕塑",
        hintTouch: "触摸雕塑试试",
      },
    },
    overview: {
      items: [
        {
          title: "学术训练",
          description: "以数学基础与系统课程为支撑，逐步进入 AI 与图学习研究。",
        },
        {
          title: "研究方法",
          description: "强调问题定义、实验设计、指标解释与可复现性。",
        },
        {
          title: "技术兴趣",
          description: "聚焦科学智能（AI4S）、LLM Agents、知识增强生成与学术知识图谱。",
        },
        {
          title: "长期目标",
          description: "探索真正能够加速科学发现与科研推理的智能系统。",
        },
      ],
    },
    sections: {
      overview: {
        index: "01",
        title: "学术概览",
        description: "通过关键指标与关注方向，帮助访问者快速理解我的背景。",
      },
      education: {
        index: "02",
        title: "教育背景",
        description: "概括学术训练、核心课程、导师经历与早期成果。",
      },
      research: {
        index: "03",
        title: "科研经历",
        description: "聚焦研究主题、合作背景、方法设计与阶段性产出。",
      },
      projects: {
        index: "04",
        title: "项目经历",
        description: "作为科研补充，展示工程实现、竞赛实践与系统落地能力。",
      },
      skills: {
        index: "05",
        title: "技能矩阵",
        description: "从编程、深度学习、图学习到工程工具，梳理当前能力结构。",
      },
    },
    labels: {
      education: "教育背景",
      project: "项目实践",
      skillGroup: "技能分组",
    },
    footer: {
      eyebrow: "联系我",
      title: "欢迎交流科研合作与工程实现。",
      description:
        "如果你对科学智能（AI4S）、LLM Agents、知识增强生成或学术知识图谱感兴趣，欢迎通过邮件或 GitHub 与我联系。",
      githubLabel: "GitHub",
    },
    profile: {
      name: "张卜升",
      englishName: "Busheng Zhang",
      title: "北京邮电大学玛丽女王海南学院信息与计算科学专业本科生 · 浙江大学保研录取（2027 年入学）",
      institution: "北京邮电大学玛丽女王海南学院",
      location: "中国·海南",
      summary:
        "已保研录取至浙江大学（导师：张宁豫）。我目前关注科学智能（AI4S）、LLM Agents、知识增强生成与学术知识图谱，希望把研究想法做成既可验证、又可复用的系统。",
      statement:
        "我希望构建兼具理论价值与实际影响的智能系统，服务科学研究工作流，尤其关注学术知识图谱、科研智能体与自动化科学发现。",
      email: "2023213779@bupt.cn",
      phone: "(+86) 18373149852",
      github: "https://github.com/gdshjzm",
      resumeHref: "/zhang-busheng-resume.pdf",
      interests: ["科学智能（AI4S）", "LLM Agents", "知识增强生成", "知识图谱", "AI Agent", "大模型"],
    },
    stats: [
      {
        label: "综合排名",
        value: "7 / 80",
        note: "Top 8%，加权均分 92.37/100，信息与计算科学专业",
        accent: "orange",
      },
      {
        label: "语言成绩",
        value: "IELTS 7.0",
        note: "CET6 517，CET4 580+",
        accent: "blue",
      },
      {
        label: "竞赛荣誉",
        value: "国家奖学金",
        note: "国家级奖项 4 项、省部级奖项 9 项，涵盖机器人、物理实验、数学建模、创新创业等方向",
        accent: "green",
      },
      {
        label: "科研成果",
        value: "3 篇论文",
        note: "Nature Computing Science 在投（共同一作）、arXiv 预印本（二作）、CMLAI 2025（一作）",
        accent: "orange",
      },
    ],
    education: [
      {
        school: "浙江大学",
        location: "杭州",
        program: "推免录取（保研）— 导师：张宁豫",
        period: "2027.09 入学",
        highlights: [
          "研究方向：科学智能（AI4S）/ LLM Agents / 知识增强生成。",
          "实习安排：可实习 5~6 个月，每周 6 天，接受线下实习。",
        ],
      },
      {
        school: "北京邮电大学",
        location: "海南",
        program: "信息与计算科学专业本科，预计 2027 年毕业",
        period: "2023.09 - 预计 2027.06",
        highlights: [
          "综合排名 7/80（Top 8%），加权均分 92.37/100。",
          "英语能力：IELTS 7.0，CET-6 517。",
          "政治面貌：中共预备党员。",
          "本科荣誉：国家奖学金，国家级奖项 4 项、省部级奖项 9 项。",
          "科研实习导师：石川（北邮 GammaLab）、张宁豫（浙大知识引擎实验室）。",
        ],
      },
    ],
    researchItems: [
      {
        title: "A Computable Atlas of Science as the Infrastructure for Machine Discovery",
        role: "共同一作 · Nature Computing Science 在投",
        period: "2025.12 - 至今",
        organization: "浙江大学知识引擎实验室 — 导师：张宁豫",
        tags: ["AI for Science", "Idea 生成", "知识图谱"],
        bullets: [
          "共同设计并实现 SciAtlas 的 scientific idea generation pipeline，将学术知识图谱检索、研究机理分析、文献检索与候选 idea 生成整合为统一流程。",
          "构建基于 Graph of Research 的研究机理表示与 grounding 流程，结合 SciAtlas / Semantic Scholar 检索，为 idea 生成提供结构化研究脉络与证据支持。",
          "在 LiveIdeaBench 上完成系统评测，相较 DeepReview、Chain-of-Idea 等基线方法平均相对提升 13.5%；论文在投于 Nature Computing Science。",
        ],
      },
      {
        title: "SciAtlas: A Large-Scale Knowledge Graph for Automated Scientific Research",
        role: "第二作者 · arXiv 预印本",
        period: "2025.12 - 至今",
        organization: "浙江大学知识引擎实验室 — 导师：张宁豫",
        tags: ["知识图谱", "Neo4j", "开源"],
        link: "https://sciatlas.openkg.cn",
        bullets: [
          "参与 SciAtlas 工程化与检索工具链建设，面向覆盖 26 个学科、4,300 万+ 论文的大规模学术知识图谱，完成 Neo4j 图数据库服务的部署与维护。",
          "开发并维护 SciAtlas 专属 CLI 工具，支持知识图谱检索与研究工作流调用，累计 100+ 用户使用与测试。",
          "该工作以技术报告发表于 arXiv（arXiv:2605.22878）并开源至 GitHub，获 200+ stars。",
        ],
      },
      {
        title: "AI-Signaturer: AI Automatic Signature Generation Based on Pix2pix",
        role: "第一作者 · CMLAI 2025",
        period: "2024.03 - 2025.12",
        organization: "北京邮电大学 GammaLab — 导师：石川",
        link: "https://discovery.researcher.life/article/ai-signaturer-ai-automatic-signature-generation-based-on-pix2pix/94cfc7f22fe4327cb6cec7f3e4a157b4",
        tags: ["Pix2Pix", "cGAN", "计算机视觉"],
        bullets: [
          "设计并训练基于 Pix2Pix/cGAN 的中文签名生成模型，使用约 9K 签名样本完成楷体、雅黑、仿宋三种字体到签名风格的图像转换。",
          "负责模型结构适配与超参数优化，分类器识别准确率达 76%；生成签名保持中文字形特征，项目开源至 GitHub。",
        ],
      },
    ],
    projectItems: [
      {
        title: "公派伦敦 WinterHack 科创营：基于目标识别的机器人抓取",
        period: "2026.01 - 2026.04",
        tags: ["ROS", "Gazebo", "机器人"],
        bullets: [
          "基于 ROS + Gazebo 搭建机器人仿真与控制流程，实现目标识别后的机器人智能抓取任务。",
          "以本专业 3/86 选拔比例入选 2026 年玛丽女王 WinterHack 项目赴伦敦研发，并代表学院向英方教师完成英文技术汇报。",
        ],
      },
      {
        title: "2025 北京电赛：基于无人机的目标识别和检测",
        period: "2025.09 - 2026.05",
        tags: ["YOLOv8-Nano", "树莓派", "无人机"],
        bullets: [
          "负责基于 YOLOv8-Nano 的目标检测模块，实现野生动物卡片识别，并完成模型在树莓派边缘设备上的部署与推理优化。",
          "设计树莓派与飞控板之间的通信协议并完成系统联调；团队获 2025 年全国大学生电子设计竞赛（北京市“TI 杯”）北京市三等奖。",
        ],
      },
    ],
    skillGroups: [
      {
        label: "编程与写作",
        description: "支持算法设计、软件开发与学术写作。",
        items: ["Python", "C++", "JavaScript", "HTML", "LaTeX", "Markdown"],
      },
      {
        label: "深度学习",
        description: "用于模型训练、实验验证与研究原型构建。",
        items: ["PyTorch", "TensorFlow", "模型调优", "实验设计"],
      },
      {
        label: "图学习与智能体",
        description: "聚焦图神经网络、图基础模型与研究型 Agent 系统。",
        items: ["dgl", "PyG", "GammaGL", "图大模型", "知识图谱", "AI Agent"],
      },
      {
        label: "工程工具",
        description: "支持可复现实验、系统搭建与算力环境管理。",
        items: ["Git", "Docker", "CUDA", "HPC", "ROS", "Gazebo"],
      },
    ],
  },
};
