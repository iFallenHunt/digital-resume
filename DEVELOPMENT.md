# Development Tracking

Este arquivo mantém o registro de todas as melhorias e desenvolvimentos realizados no projeto.

## 🚀 Versão Atual: 0.2.0

## 📋 Backlog

### Alta Prioridade
- [x] Implementar sistema de internacionalização (i18n)
- [x] Configurar modo claro/escuro
- [x] Criar componente de download do CV em PDF
- [ ] Implementar integração com API do GitHub
- [ ] Adicionar testes unitários

### Média Prioridade
- [x] Melhorar acessibilidade (WCAG) - Parcialmente implementado
- [x] Otimizar performance (Lighthouse) - Parcialmente implementado
- [x] Adicionar animações de transição
- [ ] Implementar PWA
- [x] Configurar SEO - Parcialmente implementado

### Baixa Prioridade
- [x] Adicionar mais temas de cores
- [ ] Implementar modo offline
- [ ] Criar página de estatísticas
- [x] Adicionar mais opções de exportação do CV

## 📝 Changelog

### [0.2.0] - 2024-03-XX
#### Adicionado
- Sistema de internacionalização (PT-BR e EN)
- Modo claro/escuro com melhor contraste
- Download do CV em diferentes idiomas
- Animações de transição e efeitos visuais
- Melhorias na acessibilidade e SEO
- Temas de cores e personalização visual
- Formulário de contato funcional com EmailJS

#### Modificado
- Ajustes no contraste do modo escuro
- Melhorias na responsividade
- Otimização de performance
- Refatoração de componentes
- Melhorias na organização do código

### [0.1.0] - 2024-03-05
#### Adicionado
- Estrutura inicial do projeto
- Configuração do TypeScript
- Configuração do Vite
- Implementação do shadcn-ui
- Configuração do Tailwind CSS
- Documentação inicial (README.md e README-PTBR.md)

## 🔄 Processo de Desenvolvimento

### Branches
- `main`: Código em produção
- `develop`: Branch de desenvolvimento
- `feature/*`: Novas funcionalidades
- `fix/*`: Correções de bugs
- `docs/*`: Atualizações de documentação

### Fluxo de Trabalho
1. Criar branch a partir do `develop`
2. Desenvolver a feature/correção
3. Criar Pull Request
4. Code Review
5. Merge para `develop`
6. Deploy para homologação
7. Merge para `main`
8. Deploy para produção

### Convenções de Código
- Seguir ESLint configurado
- Manter cobertura de testes
- Documentar componentes e funções
- Seguir padrões de commit (Conventional Commits)

## 🧪 Testes

### Tipos de Testes
- Unitários: Jest + React Testing Library (Pendente)
- E2E: Cypress (planejado)
- Integração: Jest (planejado)

### Cobertura de Testes
Meta de cobertura: 80%
- [ ] Componentes
- [ ] Hooks
- [ ] Utils
- [ ] Contexts

## 📈 Métricas de Qualidade

### Performance
- [x] Lighthouse Score > 90 - Parcialmente alcançado
- [x] First Contentful Paint < 1.5s
- [x] Time to Interactive < 3.5s

### Acessibilidade
- [x] WCAG 2.1 Level AA - Parcialmente implementado
- [x] Suporte a leitores de tela
- [x] Navegação por teclado

## 🔧 Ambiente de Desenvolvimento

### Requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git >= 2.30.0

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev         # Inicia servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview do build
npm run lint       # Executa linter
npm run test       # Executa testes
```

## 📚 Recursos e Documentação

### Links Úteis
- [Documentação do React](https://react.dev)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs)
- [Documentação do Tailwind](https://tailwindcss.com/docs)
- [Documentação do shadcn/ui](https://ui.shadcn.com)
- [Conventional Commits](https://www.conventionalcommits.org)

### Ferramentas Recomendadas
- VS Code com extensões:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - GitLens
  - Error Lens 