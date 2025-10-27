# 🚀 CRM Conversão - Início Rápido

## ✅ Arquivos Básicos Criados

Você agora tem a estrutura mínima para rodar o projeto:

```
crm-conversao/
├── app/
│   ├── (dashboard)/
│   │   └── crm/
│   │       └── page.tsx          ✅ Página do CRM
│   ├── globals.css               ✅ Estilos globais
│   ├── layout.tsx                ✅ Layout principal
│   └── page.tsx                  ✅ Página inicial (redireciona)
├── postcss.config.js             ✅ Config PostCSS
├── tailwind.config.ts            ✅ Config Tailwind
├── tsconfig.json                 ✅ Config TypeScript
├── next.config.js                ✅ Config Next.js
├── package.json                  ✅ Dependências
└── .env.example                  ✅ Template de variáveis
```

## 📦 1. Instalar Dependências

```bash
npm install
```

## 🔧 2. Configurar Variáveis de Ambiente

```bash
# Copie o template
cp .env.example .env.local

# Edite e adicione no mínimo:
NEXTAUTH_SECRET="seu-secret-aqui-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"
```

## 🚀 3. Rodar o Projeto

```bash
npm run dev
```

Acesse: **http://localhost:3000**

Você verá uma página de boas-vindas! ✅

## 📋 4. Próximos Passos

### Copiar Componentes do CRM

Você tem 3 componentes principais para copiar:

1. **Kanban.tsx** → `app/(dashboard)/crm/components/Kanban.tsx`
2. **LeadCard.tsx** → `app/(dashboard)/crm/components/LeadCard.tsx`
3. **DISCBadge.tsx** → `app/(dashboard)/crm/components/DISCBadge.tsx`

### Configurar Banco de Dados

```bash
# 1. Criar banco PostgreSQL
createdb crm_conversao

# 2. Rodar migrations
psql crm_conversao < database/schema.sql

# 3. Popular com dados de teste
psql crm_conversao < database/seeds/seed-demo-data.sql
```

### Instalar Dependências Extras (se necessário)

```bash
npm install @hello-pangea/dnd zustand date-fns lucide-react
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select
npm install recharts socket.io-client axios
```

## 📚 Documentação Completa

- [Guia de Implementação](docs/GUIA_IMPLEMENTACAO_CRM.md) - Como obter APIs e implementar
- [Resumo Executivo](docs/RESUMO_EXECUTIVO.md) - Visão geral e checklist
- [Estrutura GitHub](docs/ESTRUTURA_GITHUB.md) - Organização do repositório
- [Guia Visual](docs/GUIA_VISUAL_DEMO.md) - Recursos da interface

## 🎨 Ver Demo

Abra o arquivo `demo/index.html` no navegador para ver uma prévia visual do CRM funcionando!

## ❓ Problemas?

### Erro: "Module not found"

```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Tailwind classes not working"

```bash
# Reinicie o servidor
npm run dev
```

### Erro: "Cannot find module '@/types/crm'"

Você precisa copiar o arquivo `types-crm.ts` para `types/crm.ts`

## 🎯 Status Atual

- ✅ Estrutura básica configurada
- ✅ Next.js rodando
- ✅ Tailwind CSS funcionando
- ✅ TypeScript configurado
- ⏳ Componentes do CRM (você vai copiar)
- ⏳ Banco de dados (você vai configurar)
- ⏳ APIs externas (você vai integrar)

## 🚦 Próxima Etapa

**Copie os componentes** `Kanban.tsx`, `LeadCard.tsx` e `DISCBadge.tsx` para dentro de:

```
app/(dashboard)/crm/components/
```

Depois, siga o **Guia de Implementação** completo!

---

**Boa sorte! 🚀**
