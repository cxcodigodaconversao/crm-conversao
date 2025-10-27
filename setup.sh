#!/bin/bash

# =====================================================
# CRM CONVERSÃO - SCRIPT DE SETUP AUTOMÁTICO
# =====================================================

echo "🚀 Iniciando setup do CRM Conversão..."
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Criar estrutura de pastas
echo -e "${BLUE}📁 Criando estrutura de pastas...${NC}"

mkdir -p app/\(auth\)/login
mkdir -p app/\(dashboard\)/crm/components
mkdir -p app/\(dashboard\)/crm/hooks
mkdir -p app/api/leads
mkdir -p app/api/messages
mkdir -p app/api/events
mkdir -p app/api/webhooks/google
mkdir -p app/api/webhooks/whatsapp
mkdir -p app/api/webhooks/instagram
mkdir -p backend/src/modules
mkdir -p backend/src/integrations
mkdir -p components/ui
mkdir -p database/seeds
mkdir -p demo
mkdir -p docs
mkdir -p lib/store
mkdir -p public/images
mkdir -p types

echo -e "${GREEN}✅ Estrutura de pastas criada!${NC}"
echo ""

# Verificar se package.json existe
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}⚠️  package.json não encontrado. Executando npm init...${NC}"
    npm init -y
fi

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Instalando dependências...${NC}"
    npm install
else
    echo -e "${GREEN}✅ Dependências já instaladas${NC}"
fi

# Criar .env.local se não existir
if [ ! -f ".env.local" ]; then
    if [ -f ".env.example" ]; then
        echo -e "${BLUE}🔧 Criando .env.local...${NC}"
        cp .env.example .env.local
        echo -e "${GREEN}✅ .env.local criado! Lembre-se de preencher as variáveis.${NC}"
    else
        echo -e "${YELLOW}⚠️  .env.example não encontrado. Pulando criação de .env.local${NC}"
    fi
else
    echo -e "${GREEN}✅ .env.local já existe${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Setup concluído!${NC}"
echo ""
echo -e "${BLUE}📋 Próximos passos:${NC}"
echo ""
echo "1. Configure o .env.local com suas credenciais"
echo "2. Copie os componentes para app/(dashboard)/crm/components/"
echo "3. Configure o banco de dados: psql crm_conversao < database/schema.sql"
echo "4. Rode o projeto: npm run dev"
echo ""
echo -e "${GREEN}Boa sorte! 🚀${NC}"
