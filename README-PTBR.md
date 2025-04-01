# Currículo Interativo

<div align="center">

![Versão](https://img.shields.io/badge/versão-0.2.0-blue.svg?cacheSeconds=2592000)
[![Licença: MIT](https://img.shields.io/badge/Licença-MIT-yellow.svg)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## 🌟 Sobre o Projeto

Este é um projeto de currículo interativo desenvolvido com tecnologias modernas para proporcionar uma experiência única de visualização de informações profissionais. Construído com foco em performance, acessibilidade e experiência do usuário, oferece uma maneira moderna e elegante de apresentar sua jornada profissional.

### ✨ Demonstração
Acesse a demonstração em: [Digital Resume](https://digital-resume.vercel.app)

## 🚀 Tecnologias Utilizadas

- **TypeScript** ^5.2.2 - Para código com tipagem segura
- **React** ^18.2.0 - Para construção da interface do usuário
- **Vite** ^5.1.4 - Para desenvolvimento e build rápidos
- **shadcn-ui** - Para componentes modernos e acessíveis
- **Tailwind CSS** ^3.4.1 - Para estilização moderna e responsiva
- **i18next** ^23.10.0 - Para internacionalização
- **framer-motion** ^11.0.8 - Para animações suaves
- **react-icons** ^5.0.1 - Para ícones bonitos
- **emailjs** ^4.1.0 - Para funcionalidade do formulário de contato

## 🎯 Funcionalidades

- 🌓 Modo claro/escuro com detecção de preferência do sistema
- 🌎 Suporte para múltiplos idiomas (Português e Inglês)
- 📱 Design totalmente responsivo para todos os dispositivos
- 🎨 Interface moderna e elegante com animações suaves
- 📄 Download do currículo em formato PDF
- 🔗 Integração com GitHub (em breve)
- 💼 Seções navegáveis com rolagem suave
- 📬 Formulário de contato com integração de email
- ♿ Recursos de acessibilidade (WCAG 2.1 Nível AA)
- 🚀 Performance otimizada (pontuação Lighthouse > 90)
- 🎭 Belas animações e transições

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git >= 2.30.0

### Instalação e Configuração

```bash
# Clone o repositório
git clone https://github.com/iFallenHunt/digital-resume.git

# Entre no diretório do projeto
cd digital-resume

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build de produção
npm run lint     # Executa ESLint
npm run format   # Formata código com Prettier
```

## 📁 Estrutura do Projeto

```
digital-resume/
├── src/
│   ├── components/     # Componentes UI reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── context/       # Contextos React (tema, idioma)
│   ├── hooks/         # Hooks React personalizados
│   ├── utils/         # Funções utilitárias
│   ├── lib/           # Configurações e constantes
│   ├── types/         # Definições de tipos TypeScript
│   ├── i18n/          # Arquivos de internacionalização
│   └── styles/        # Estilos globais e config Tailwind
├── public/           # Arquivos estáticos
└── dist/            # Output do build de produção
```

## 📝 Padrões de Commit

Seguimos o padrão Conventional Commits:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `refactor`: Refatoração de código
- `docs`: Atualização de documentação
- `style`: Alterações de estilo
- `test`: Adição ou modificação de testes
- `chore`: Alterações de configuração

Exemplo:
```
feat(i18n): adiciona componente de troca de idioma
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/RecursoIncrivel`)
3. Faça commit das suas alterações (`git commit -m 'feat: Adiciona algum RecursoIncrivel'`)
4. Faça push para a branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

### Guia de Estilo de Código

- Use TypeScript para todo código novo
- Siga as configurações do ESLint e Prettier
- Escreva mensagens de commit significativas seguindo Conventional Commits
- Adicione comentários JSDoc para funções e componentes
- Mantenha cobertura de testes para novas funcionalidades

## 🚀 Deploy

O projeto está configurado para fácil implantação em várias plataformas:

- **Vercel**: Recomendado para melhor performance e configuração fácil
- **Netlify**: Ótima alternativa com recursos similares
- **GitHub Pages**: Bom para projetos pessoais

### Variáveis de Ambiente

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

## 📈 Performance

- Pontuação Lighthouse > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Tamanho do bundle otimizado
- Carregamento lazy para imagens e componentes

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Lucas Santos
- LinkedIn: [santos-lucas96dev](https://www.linkedin.com/in/santos-lucas96dev/)
- GitHub: [iFallenHunt](https://github.com/iFallenHunt)

## 📚 Documentação

- [Documentação de Desenvolvimento](DEVELOPMENT.md)
- [English Documentation](README.md)

## 🙏 Agradecimentos

- [Documentação React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [EmailJS](https://www.emailjs.com) 