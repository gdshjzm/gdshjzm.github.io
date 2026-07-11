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
  passwordGate: {
    eyebrow: string;
    title: string;
    helperText: string;
    fieldLabel: string;
    placeholder: string;
    successHint: string;
    errorText: string;
    buttonLabel: string;
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
            "Focused on graph LLMs, scholarly knowledge graphs, AI agents, and AI for Science.",
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
        "If you are interested in graph-language models, scholarly knowledge graphs, AI for Science, or intelligent agent systems, feel free to reach out by email or through GitHub.",
      githubLabel: "GitHub",
    },
    passwordGate: {
      eyebrow: "Protected Access",
      title: "This homepage is password protected",
      helperText: "Please enter the access password to continue.",
      fieldLabel: "Access Password",
      placeholder: "Enter password",
      successHint: "The full homepage is shown only after successful authentication.",
      errorText: "Incorrect password. Please try again.",
      buttonLabel: "Enter Homepage",
    },
    profile: {
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
      interests: ["AI4S", "AI Agent", "Reinforcement Learning", "Knowledge Graph", "Multimodal LLM", "Graph Foundation Model", "LLM"],
    },
    stats: [
      {
        label: "Class Rank",
        value: "15 / 83",
        note: "Weighted GPA 87.6, Information and Computing Science",
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
        value: "16+ Awards",
        note: "3 national, 8 provincial — including robotics, physics, math modeling, and innovation competitions",
        accent: "green",
      },
      {
        label: "Research",
        value: "4 Publications",
        note: "Nature sub-journal (under review), CMLAI, arXiv preprint, and ongoing GraphLLM work",
        accent: "orange",
      },
    ],
    education: [
      {
        school: "Beijing University of Posts and Telecommunications, Queen Mary School, Hainan",
        location: "Hainan",
        program: "B.Sc. in Information and Computing Science, expected graduation in 2027",
        period: "2023.09 - 2027.06",
        highlights: [
          "Class rank: 15/83, weighted GPA: 87.6. Core coursework: Design & Build (100), Numerical Solutions of Differential Equations (98), Introduction to Artificial Intelligence (95), Mathematical Modeling (94), Probability and Statistics (93).",
          "Research internship mentors: Shi Chuan and Zhang Ningyu.",
          "Political affiliation: Probationary member of the Communist Party of China.",
          "Selected honors: University Second-Class Scholarship, National Second Prize in the National Physics Experiment Competition, National Second Prize in the China Robot and Artificial Intelligence Competition, and First Prize in the Hainan division of the National Mathematical Modeling Competition.",
        ],
      },
    ],
    researchItems: [
      {
        title: "Knowledge-Engine Lab Internship: SciAtlas & Computable Atlas of Science",
        role: "Second Author · Research Intern",
        period: "2025.12 - Present",
        organization: "Knowledge Engine Lab, Zhejiang University — Advisor: Zhang Ningyu",
        tags: ["Knowledge Graph", "AI for Science", "Neuro-Symbolic"],
        bullets: [
          "Participating in the construction of SciAtlas, a large-scale, cross-disciplinary scholarly knowledge graph integrating 26+ disciplines, 43M+ papers, 157M entities, and 3B triples. The technical report is on arXiv (arXiv:2605.22878) with 130+ GitHub stars.",
          "Co-developing the idea-generation pipeline atop SciAtlas, achieving 10% higher performance than comparable methods on LiveIdeaBench.",
          "Co-authoring 'A Computable Atlas of Science as the Infrastructure for Machine Discovery,' currently under review at a Nature sub-journal.",
        ],
      },
      {
        title: "AI-Signaturer: AI Automatic Signature Generation Based on Pix2pix",
        role: "First Author · CMLAI 2025",
        period: "2024",
        organization: "GammaLab, Beijing University of Posts and Telecommunications — Advisor: Shi Chuan",
        link: "https://discovery.researcher.life/article/ai-signaturer-ai-automatic-signature-generation-based-on-pix2pix/94cfc7f22fe4327cb6cec7f3e4a157b4",
        tags: ["Pix2Pix", "cGAN", "Computer Vision"],
        bullets: [
          "Designed an automatic Chinese signature generation framework based on Pix2pix-cGAN, supporting style transfer across Kai, Yahei, and Fangsong handwriting styles.",
          "Trained the model on 900+ signature samples and achieved an average accuracy of 76%.",
          "The paper was accepted by CMLAI 2025, and the generated signatures preserve key visual characteristics of Chinese handwriting.",
        ],
      },
      {
        title: "Zero-Shot Adversarial Robustness Analysis for GraphLLMs",
        role: "Research Internship",
        period: "2024.03 - 2025.12",
        organization: "GammaLab, Beijing University of Posts and Telecommunications — Advisor: Shi Chuan",
        tags: ["GraphLLM", "Robustness", "Multimodal Defense"],
        bullets: [
          "Conducted research on adversarial robustness in graph-language models, aiming to design architectures that balance representation quality and defensive capability.",
          "Adapted defense strategies inspired by CLIP-style multimodal models (TeCoA, PMG) into the graph-language modeling setting, achieving a ~21% improvement over conventional baselines.",
          "Preliminary experiments reduced attack success rates by ~15% on adversarial datasets.",
        ],
      },
    ],
    projectItems: [
      {
        title: "London WinterHack: Object-Aware Robotic Grasping",
        period: "2026.01 - 2026.02",
        tags: ["ROS", "Gazebo", "Robotics"],
        bullets: [
          "Selected for the university-funded Winterhack program (3/86 selection ratio) and collaborated with students across London, Beijing, and Hainan on robotic system design.",
          "Used ROS and Gazebo to implement object recognition and intelligent grasping for robotic manipulation tasks.",
        ],
      },
      {
        title: "Contributions to the GammaGL Library",
        period: "2025.08 - 2025.10",
        tags: ["Graph Learning", "Open Source", "GammaGL"],
        bullets: [
          "Contributed GraphLAMA-related algorithm support to the GammaGL graph learning library within Professor Shi Chuan's research group.",
          "The library supports a major project on intelligent analysis and large-scale applications for complex heterogeneous graph data, connecting academic research with industrial deployment.",
        ],
      },
      {
        title: "YOLO-Based Wildlife Recognition for Drones",
        period: "2025.07 - 2025.08",
        tags: ["YOLO", "SLAM", "Drone"],
        bullets: [
          "Participated in the 2025 National Electronics Design Competition, implementing simulated wildlife monitoring within a specified area.",
          "Built drone navigation and recognition control using Raspberry Pi, flight controller hardware, SLAM, and ROS, and won the Second Prize in the Beijing Electronics Design Competition.",
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
          description: "聚焦图大模型、学术知识图谱、AI Agent 与 AI for Science。",
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
        "如果你对图语言模型、学术知识图谱、AI for Science 或智能体系统感兴趣，欢迎通过邮件或 GitHub 与我联系。",
      githubLabel: "GitHub",
    },
    passwordGate: {
      eyebrow: "访问保护",
      title: "该主页当前受密码保护",
      helperText: "请输入访问密码后继续浏览。",
      fieldLabel: "访问密码",
      placeholder: "请输入密码",
      successHint: "通过验证后即可查看完整主页内容。",
      errorText: "密码错误，请重试。",
      buttonLabel: "进入主页",
    },
    profile: {
      name: "张卜升",
      englishName: "Busheng Zhang",
      title: "北京邮电大学玛丽女王海南学院信息与计算科学专业本科生",
      institution: "北京邮电大学玛丽女王海南学院",
      location: "中国·海南",
      summary:
        "我目前关注 AI for Science、AI Agent、强化学习、知识图谱、多模态大模型与图基础模型，希望把研究想法做成既可验证、又可复用的系统。",
      statement:
        "我希望构建兼具理论价值与实际影响的智能系统，服务科学研究工作流，尤其关注图文融合模型、学术知识图谱与自动化科研。",
      email: "2023213779@bupt.cn",
      phone: "(+86) 18373149852",
      github: "https://github.com/gdshjzm",
      resumeHref: "/zhang-busheng-resume.pdf",
      interests: ["AI for Science", "AI Agent", "强化学习", "知识图谱", "多模态大模型", "图基础模型", "大模型"],
    },
    stats: [
      {
        label: "专业排名",
        value: "15 / 83",
        note: "加权均分 87.6，信息与计算科学专业",
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
        value: "16+ 项奖项",
        note: "国家级 3 项、省部级 8 项 — 涵盖机器人、物理实验、数学建模、创新创业等方向",
        accent: "green",
      },
      {
        label: "科研成果",
        value: "4 篇/项",
        note: "Nature 子刊在投、CMLAI 发表、arXiv 预印本及在研 GraphLLM 工作",
        accent: "orange",
      },
    ],
    education: [
      {
        school: "北京邮电大学玛丽女王海南学院",
        location: "海南",
        program: "信息与计算科学专业本科，预计 2027 年毕业",
        period: "2023.09 - 2027.06",
        highlights: [
          "专业排名 15/83，加权均分 87.6。核心课程：Design & Build（100）、Numerical Solutions of Differential Equations（98）、Introduction to Artificial Intelligence（95）、Mathematical Modeling（94）、Probability and Statistics（93）。",
          "科研实习导师：石川、张宁豫。",
          "政治面貌：中共预备党员。",
          "代表性荣誉：校二等奖学金、全国大学生物理实验竞赛国家二等奖、中国机器人及人工智能大赛国家二等奖、全国大学生数学建模竞赛海南赛区一等奖。",
        ],
      },
    ],
    researchItems: [
      {
        title: "知识引擎实验室科研实习：SciAtlas 大规模学术知识图谱与可计算科学图谱",
        role: "第二作者 · 科研实习",
        period: "2025.12 - 至今",
        organization: "浙江大学知识引擎实验室 — 导师：张宁豫",
        tags: ["知识图谱", "AI for Science", "神经符号检索"],
        bullets: [
          "参与构建 SciAtlas 大规模跨学科学术知识图谱，覆盖 26+ 学科、4300 余万篇论文、1.57 亿实体与 30 亿三元组，技术报告已发布于 arXiv（arXiv:2605.22878），GitHub 累计 130+ stars。",
          "参与搭建 SciAtlas 的 idea 生成子任务 pipeline，在 LiveIdeaBench 上比同类方法高出 10%。",
          "以第二作者参与撰写《A Computable Atlas of Science as the Infrastructure for Machine Discovery》，已投至 Nature 子刊。",
        ],
      },
      {
        title: "AI-Signaturer: AI Automatic Signature Generation Based on Pix2pix",
        role: "一作 · CMLAI 2025",
        period: "2024",
        organization: "北京邮电大学 GammaLab — 导师：石川",
        link: "https://discovery.researcher.life/article/ai-signaturer-ai-automatic-signature-generation-based-on-pix2pix/94cfc7f22fe4327cb6cec7f3e4a157b4",
        tags: ["Pix2Pix", "cGAN", "计算机视觉"],
        bullets: [
          "设计了基于 Pix2pix-cGAN 的中文签名自动生成框架，支持楷体、雅黑、仿宋等风格迁移。",
          "基于约 900 个签名样本完成训练，平均准确率达到 76%。",
          "论文已被 CMLAI 2025 接收，生成结果能够较好保留中文手写签名的关键视觉特征。",
        ],
      },
      {
        title: "基于 GraphLLM 的零样本对抗鲁棒性分析",
        role: "科研实习",
        period: "2024.03 - 2025.12",
        organization: "北京邮电大学 GammaLab — 导师：石川",
        tags: ["GraphLLM", "鲁棒性", "多模态防御"],
        bullets: [
          "围绕图语言模型的对抗鲁棒性开展研究，目标是在表示能力与防御能力之间取得平衡。",
          "将受 CLIP 类多模态模型启发的防御策略（TeCoA、PMG 等）引入图语言模型场景，相比传统基线取得约 21% 的提升。",
          "在对抗数据集上的初步实验已将攻击成功率降低约 15%。",
        ],
      },
    ],
    projectItems: [
      {
        title: "伦敦 WinterHack 创新营：面向目标感知的机械臂抓取",
        period: "2026.01 - 2026.02",
        tags: ["ROS", "Gazebo", "机器人"],
        bullets: [
          "入选学校公费 Winterhack 项目（3/86 选拔比例），与伦敦、北京、海南多地同学协作完成机器人系统设计。",
          "使用 ROS 与 Gazebo 实现目标识别与智能抓取。",
        ],
      },
      {
        title: "GammaGL 图学习库贡献",
        period: "2025.08 - 2025.10",
        tags: ["图学习", "开源", "GammaGL"],
        bullets: [
          "在石川老师课题组内为 GammaGL 图学习库贡献 GraphLAMA 相关算法支持。",
          "该库服务于复杂异构图数据智能分析与大规模应用项目，连接学术研究与工业部署。",
        ],
      },
      {
        title: "基于 YOLO 的无人机野生动物识别",
        period: "2025.07 - 2025.08",
        tags: ["YOLO", "SLAM", "无人机"],
        bullets: [
          "参与 2025 年全国电子设计竞赛，面向指定区域内的模拟野生动物监测任务。",
          "使用树莓派、飞控硬件、SLAM 与 ROS 构建无人机导航与识别控制系统，获北京市电子设计竞赛二等奖。",
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
