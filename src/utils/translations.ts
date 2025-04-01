type TranslationKey =
  | "about"
  | "aboutMe"
  | "aboutDescription"
  | "skills"
  | "experience"
  | "education"
  | "languages"
  | "contact"
  | "downloadCV"
  | "sendMessage"
  | "personalInfo"
  | "location"
  | "phone"
  | "email"
  | "linkedin"
  | "github"
  | "followMe"
  | "name"
  | "subject"
  | "message"
  | "sending"
  | "messageSent"
  | "contactDescription"
  | "yourName"
  | "yourEmail"
  | "messageSubject"
  | "yourMessage"
  | "skillsAreas"
  | "technologiesTools"
  | "languagesFrameworks"
  | "cloudDevOps"
  | "databasesOthers"
  | "experienceTitle"
  | "educationTitle"
  | "languagesTitle"
  | "languageLevel"
  | "native"
  | "fluent"
  | "basic"
  | "errorDivisionByZero"
  | "fullStackDev"
  | "allRightsReserved"
  | "home"
  | "accessCertificates"
  | "contactIntro"
  | "hybridRemote"
  | "cvInteractive"
  | "experienceFullStackDesc1"
  | "experienceFullStackDesc2"
  | "experienceFullStackDesc3"
  | "experienceFullStackDesc4"
  | "experienceInternDesc1"
  | "experienceInternDesc2"
  | "experienceInternDesc3"
  | "experienceInternDesc4"
  | "experienceSeniorSupportDesc1"
  | "experienceSeniorSupportDesc2"
  | "experienceSeniorSupportDesc3"
  | "experienceSeniorSupportDesc4"
  | "experienceSystemsAnalyst1Desc1"
  | "experienceSystemsAnalyst1Desc2"
  | "experienceSystemsAnalyst1Desc3"
  | "experienceSystemsAnalyst1Desc4"
  | "experienceSystemsAnalyst2Desc1"
  | "experienceSystemsAnalyst2Desc2"
  | "experienceSystemsAnalyst2Desc3"
  | "experienceSystemsAnalyst2Desc4"
  | "internDev"
  | "seniorSupportAnalyst"
  | "systemsAnalyst";

export const translations: Record<TranslationKey, { "pt-BR": string; en: string }> = {
  home: {
    "pt-BR": "Início",
    en: "Home"
  },
  about: {
    "pt-BR": "Sobre",
    en: "About"
  },
  aboutMe: {
    "pt-BR": "Sobre Mim",
    en: "About Me"
  },
  aboutDescription: {
    "pt-BR": "Sou desenvolvedor focado em Backend com Python e Java, com mais de 10 anos de experiência em TI e sólida formação em Análise de Sistemas e Engenharia de Software. \n\nPossuo experiência em desenvolvimento de software utilizando linguagens como Java, Python, JavaScript, Golang, React e TypeScript.\n\nTenho conhecimento em Cloud Computing (AWS, Azure, Google Cloud), APIs RESTful, e gerenciamento de contêineres com Docker. Também implementei pipelines completos de CI/CD, garantindo integração contínua e entrega contínua de projetos críticos.\n\nAlém disso, tenho experiência com metodologias ágeis e já atuei brevemente como Product Owner, o que me proporcionou uma visão abrangente do ciclo de desenvolvimento de software e da comunicação eficaz com stakeholders.\n\nEstou focado em oportunidades como Desenvolvedor Backend (Python ou Java) ou Full Stack, onde eu possa aplicar minhas habilidades para entregar soluções robustas, escaláveis e eficientes.",
    en: "I am a developer focused on Backend with Python and Java, with more than 10 years of experience in IT and a solid background in Systems Analysis and Software Engineering. \n\nI have experience in software development using languages such as Java, Python, JavaScript, Golang, React and TypeScript.\n\nI have knowledge of Cloud Computing (AWS, Azure, Google Cloud), RESTful APIs, and container management with Docker. I have also implemented complete CI/CD pipelines, ensuring continuous integration and continuous delivery of critical projects.\n\nIn addition, I have experience with agile methodologies and have worked briefly as a Product Owner, which has given me a comprehensive view of the software development cycle and effective communication with stakeholders.\n\nI am focused on opportunities as a Backend Developer (Python or Java) or Full Stack, where I can apply my skills to deliver robust, scalable and efficient solutions."
  },
  skills: {
    "pt-BR": "Habilidades",
    en: "Skills"
  },
  experience: {
    "pt-BR": "Experiência",
    en: "Experience"
  },
  // Full Stack Developer
  experienceFullStackDesc1: {
    "pt-BR": "Após três meses como estagiário, fui promovido a Desenvolvedor Full Stack. Passei a trabalhar por mais tempo, melhorando a qualidade das entregas e reduzindo o tempo de produção. Além disso, comecei a atuar como techlead, ajudando um colega de equipe a evoluir tecnicamente em Python e outras áreas.",
    en: "After three months as an intern, I was promoted to Full Stack Developer. I started working longer hours, improving delivery quality and reducing production time. Additionally, I began acting as a tech lead, helping a team member evolve technically in Python and other areas."
  },
  experienceFullStackDesc2: {
    "pt-BR": "Meu foco principal era trabalhar com Python, JavaScript e PostgreSQL, além de participar de uma migração importante do Google Cloud para a AWS. Também fiquei responsável por concluir um projeto estratégico que estava parado há quase um ano.",
    en: "My main focus was working with Python, JavaScript, and PostgreSQL, while also participating in a major migration from Google Cloud to AWS. I was also responsible for completing a strategic project that had been stalled for almost a year."
  },
  experienceFullStackDesc3: {
    "pt-BR": "Usei Python, JavaScript e PostgreSQL para desenvolver funcionalidades e fazer melhorias no código. Apliquei práticas de Clean Code e CI/CD, e garanti que as entregas fossem contínuas e bem organizadas.",
    en: "I used Python, JavaScript, and PostgreSQL to develop features and make code improvements. I applied Clean Code and CI/CD practices, ensuring continuous and well-organized deliveries."
  },
  experienceFullStackDesc4: {
    "pt-BR": "Conseguimos manter um ritmo constante de entregas, com código bem estruturado e limpo. Isso melhorou a produtividade e reduziu o tempo necessário para desenvolver e entregar novas funcionalidades. A conclusão do projeto que estava parado há um ano gerou satisfação tanto na equipe quanto nos stakeholders.",
    en: "We maintained a constant delivery pace with well-structured and clean code. This improved productivity and reduced the time needed to develop and deliver new features. The completion of the project that had been stalled for a year generated satisfaction for both the team and stakeholders."
  },

  // Intern
  experienceInternDesc1: {
    "pt-BR": "Na Mercedes-Benz, o principal desafio era automatizar processos manuais relacionados à importação e exportação de dados, que eram feitos principalmente no Access. Isso tomava muito tempo e limitava a produtividade da equipe.",
    en: "At Mercedes-Benz, the main challenge was to automate manual processes related to data import and export, which were mainly done in Access. This was time-consuming and limited team productivity."
  },
  experienceInternDesc2: {
    "pt-BR": "Desenvolver automações, aprimorar consultas SQL, gerenciar backups e produzir relatórios detalhados usando ferramentas de BI para um controle mais eficiente dos KPIs.",
    en: "Develop automations, improve SQL queries, manage backups, and produce detailed reports using BI tools for more efficient KPI control."
  },
  experienceInternDesc3: {
    "pt-BR": "Usei Python para automações, SQL para otimizar consultas e Java para implementar rotinas de backup. Também fiz análises com debugers e criei relatórios mais precisos e ágeis com ferramentas de BI.",
    en: "I used Python for automations, SQL to optimize queries, and Java to implement backup routines. I also performed analyses with debuggers and created more accurate and agile reports using BI tools."
  },
  experienceInternDesc4: {
    "pt-BR": "Consegui reduzir tarefas que levavam semanas para serem concluídas para apenas um dia, liberando a equipe para trabalhar em atividades mais estratégicas.",
    en: "I managed to reduce tasks that took weeks to complete to just one day, freeing up the team to work on more strategic activities."
  },

  // Senior Support Analyst
  experienceSeniorSupportDesc1: {
    "pt-BR": "Contratado para assumir toda a parte de TI da Sópneus, meu objetivo era implementar melhorias em processos, segurança de rede e infraestrutura geral, além de reduzir custos e garantir o bom funcionamento dos sistemas.",
    en: "Hired to take over all IT operations at Sópneus, my goal was to implement improvements in processes, network security, and general infrastructure, while reducing costs and ensuring proper system operation."
  },
  experienceSeniorSupportDesc2: {
    "pt-BR": "Desenvolver automações, aprimorar consultas SQL, gerenciar backups e produzir relatórios detalhados usando ferramentas de BI para um controle mais eficiente dos KPIs.",
    en: "Develop automations, improve SQL queries, manage backups, and produce detailed reports using BI tools for more efficient KPI control."
  },
  experienceSeniorSupportDesc3: {
    "pt-BR": "Usei Python para automações, SQL para otimizar consultas e Java para implementar rotinas de backup. Também fiz análises com debugers e criei relatórios mais precisos e ágeis com ferramentas de BI.",
    en: "I used Python for automations, SQL to optimize queries, and Java to implement backup routines. I also performed analyses with debuggers and created more accurate and agile reports using BI tools."
  },
  experienceSeniorSupportDesc4: {
    "pt-BR": "Consegui reduzir tarefas que levavam semanas para serem concluídas para apenas um dia, liberando a equipe para trabalhar em atividades mais estratégicas.",
    en: "I managed to reduce tasks that took weeks to complete to just one day, freeing up the team to work on more strategic activities."
  },

  // Systems Analyst 1
  experienceSystemsAnalyst1Desc1: {
    "pt-BR": "Contratado para assumir toda a parte de TI da Sópneus, meu objetivo era implementar melhorias em processos, segurança de rede e infraestrutura geral, além de reduzir custos e garantir o bom funcionamento dos sistemas.",
    en: "Hired to take over all IT operations at Sópneus, my goal was to implement improvements in processes, network security, and general infrastructure, while reducing costs and ensuring proper system operation."
  },
  experienceSystemsAnalyst1Desc2: {
    "pt-BR": "Monitorar e garantir a estabilidade dos sistemas, cuidar de consultas no Oracle Cloud, fazer manutenção de hardware e melhorar a segurança da rede.",
    en: "Monitor and ensure system stability, handle Oracle Cloud queries, perform hardware maintenance, and improve network security."
  },
  experienceSystemsAnalyst1Desc3: {
    "pt-BR": "Implementei gerenciadores de impressão, rotinas de backup e melhorias na segurança da rede. Também gerenciei inventários e realizei manutenções tanto presencialmente quanto remotamente.",
    en: "I implemented print managers, backup routines, and network security improvements. I also managed inventories and performed maintenance both on-site and remotely."
  },
  experienceSystemsAnalyst1Desc4: {
    "pt-BR": "As melhorias implantadas resultaram em uma infraestrutura mais segura, organizada e eficiente, com um registro mais preciso dos ativos da empresa.",
    en: "The implemented improvements resulted in a more secure, organized, and efficient infrastructure, with more accurate tracking of company assets."
  },

  // Systems Analyst 2
  experienceSystemsAnalyst2Desc1: {
    "pt-BR": "Meu primeiro trabalho na área de TI, onde atuei em várias frentes: monitoramento de rede, implantação de sistemas, migração de banco de dados e suporte ao ERP.",
    en: "My first job in IT, where I worked on various fronts: network monitoring, system implementation, database migration, and ERP support."
  },
  experienceSystemsAnalyst2Desc2: {
    "pt-BR": "Garantir o funcionamento dos servidores físicos e em nuvem, otimizar o banco de dados para consultas rápidas, configurar e manter o ERP e assegurar a estabilidade operacional.",
    en: "Ensure the operation of physical and cloud servers, optimize the database for quick queries, configure and maintain the ERP, and ensure operational stability."
  },
  experienceSystemsAnalyst2Desc3: {
    "pt-BR": "Trabalhei com Grafana para monitoramento, ferramentas da Oracle para banco de dados e scripts de backup periódicos em servidores CentOS.",
    en: "I worked with Grafana for monitoring, Oracle tools for database management, and periodic backup scripts on CentOS servers."
  },
  experienceSystemsAnalyst2Desc4: {
    "pt-BR": "Mantive a infraestrutura estável e com alta performance, reduzi custos com mão de obra especializada e melhorei a eficiência das operações.",
    en: "I maintained stable and high-performance infrastructure, reduced costs with specialized labor, and improved operational efficiency."
  },
  internDev: {
    "pt-BR": "Estágio Desenvolvedor",
    en: "Developer Intern"
  },
  seniorSupportAnalyst: {
    "pt-BR": "Analista de Suporte Sênior",
    en: "Senior Support Analyst"
  },
  systemsAnalyst: {
    "pt-BR": "Analista de Sistemas",
    en: "Systems Analyst"
  },
  education: {
    "pt-BR": "Formação",
    en: "Education"
  },
  languages: {
    "pt-BR": "Idiomas",
    en: "Languages"
  },
  contact: {
    "pt-BR": "Contato",
    en: "Contact"
  },
  downloadCV: {
    "pt-BR": "Baixar CV",
    en: "Download CV"
  },
  cvInteractive: {
    "pt-BR": "Curriculo Interativo",
    en: "Interactive Resume"
  },
  sendMessage: {
    "pt-BR": "Enviar Mensagem",
    en: "Send Message"
  },
  personalInfo: {
    "pt-BR": "Informações Pessoais",
    en: "Personal Information"
  },
  location: {
    "pt-BR": "Localização",
    en: "Location"
  },
  phone: {
    "pt-BR": "Telefone",
    en: "Phone"
  },
  email: {
    "pt-BR": "Email",
    en: "Email"
  },
  linkedin: {
    "pt-BR": "LinkedIn",
    en: "LinkedIn"
  },
  github: {
    "pt-BR": "GitHub",
    en: "GitHub"
  },
  followMe: {
    "pt-BR": "Me siga nas redes",
    en: "Follow me on social media"
  },
  name: {
    "pt-BR": "Nome",
    en: "Name"
  },
  subject: {
    "pt-BR": "Assunto",
    en: "Subject"
  },
  message: {
    "pt-BR": "Mensagem",
    en: "Message"
  },
  sending: {
    "pt-BR": "Enviando...",
    en: "Sending..."
  },
  messageSent: {
    "pt-BR": "Mensagem enviada com sucesso!",
    en: "Message sent successfully!"
  },
  contactDescription: {
    "pt-BR": "Tem um projeto em mente ou gostaria de bater um papo? Fique à vontade para entrar em contato comigo usando o formulário abaixo ou através dos meus contatos.",
    en: "Have a project in mind or would like to chat? Feel free to contact me using the form below or through my contact information."
  },
  yourName: {
    "pt-BR": "Seu nome",
    en: "Your name"
  },
  yourEmail: {
    "pt-BR": "Seu email",
    en: "Your email"
  },
  messageSubject: {
    "pt-BR": "Assunto da mensagem",
    en: "Message subject"
  },
  yourMessage: {
    "pt-BR": "Sua mensagem",
    en: "Your message"
  },
  skillsAreas: {
    "pt-BR": "Áreas de Conhecimento",
    en: "Knowledge Areas"
  },
  technologiesTools: {
    "pt-BR": "Tecnologias & Ferramentas",
    en: "Technologies & Tools"
  },
  languagesFrameworks: {
    "pt-BR": "Linguagens & Frameworks",
    en: "Languages & Frameworks"
  },
  cloudDevOps: {
    "pt-BR": "Cloud & DevOps",
    en: "Cloud & DevOps"
  },
  databasesOthers: {
    "pt-BR": "Banco de Dados & Outros",
    en: "Databases & Others"
  },
  experienceTitle: {
    "pt-BR": "Experiência Profissional",
    en: "Professional Experience"
  },
  educationTitle: {
    "pt-BR": "Formação Acadêmica",
    en: "Education"
  },
  languagesTitle: {
    "pt-BR": "Idiomas",
    en: "Languages"
  },
  languageLevel: {
    "pt-BR": "Nível",
    en: "Level"
  },
  native: {
    "pt-BR": "Nativo",
    en: "Native"
  },
  fluent: {
    "pt-BR": "Fluente",
    en: "Fluent"
  },
  basic: {
    "pt-BR": "Básico",
    en: "Basic"
  },
  errorDivisionByZero: {
    "pt-BR": "Erro: Divisão por zero",
    en: "Error: Division by zero"
  },
  fullStackDev: {
    "pt-BR": "Desenvolvedor Full Stack",
    en: "Full Stack Developer"
  },
  allRightsReserved: {
    "pt-BR": "Todos os direitos reservados",
    en: "All rights reserved"
  },
  accessCertificates: {
    "pt-BR": "Acessar meus Certificados",
    en: "Access my Certificates"
  },
  contactIntro: {
    "pt-BR": "Entre em Contato",
    en: "Get in Touch"
  },
  hybridRemote: {
    "pt-BR": "Disponível para trabalho híbrido ou remoto.",
    en: "Available for hybrid or remote work."
  }
};

export const getTranslation = (key: TranslationKey, language: "pt-BR" | "en"): string => {
  return translations[key][language];
};
