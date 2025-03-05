
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
  | "hybridRemote";

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
    "pt-BR": "Sou apaixonado por tecnologia e por transformar ideias em soluções práticas e eficientes. Profissional com mais de 10 anos de experiência em TI, tenho formação sólida em análise de sistemas e engenharia de software. Minha especialidade é o desenvolvimento de software em Java, Python e Javascript, com uma boa dose de Git, SQL e conhecimento robusto em Cloud Computing e APIs RESTful.",
    en: "I'm passionate about technology and transforming ideas into practical and efficient solutions. Professional with over 10 years of experience in IT, I have a solid background in systems analysis and software engineering. My specialty is software development in Java, Python, and Javascript, with a good dose of Git, SQL, and robust knowledge in Cloud Computing and RESTful APIs."
  },
  skills: {
    "pt-BR": "Habilidades",
    en: "Skills"
  },
  experience: {
    "pt-BR": "Experiência",
    en: "Experience"
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
