# =====================================================
# CRM CONVERSÃO - SCRIPT DE SETUP AUTOMÁTICO (WINDOWS)
# =====================================================

Write-Host "🚀 Iniciando setup do CRM Conversão..." -ForegroundColor Cyan
Write-Host ""

# Criar estrutura de pastas
Write-Host "📁 Criando estrutura de pastas..." -ForegroundColor Blue

$folders = @(
    "app\(auth)\login",
    "app\(dashboard)\crm\components",
    "app\(dashboard)\crm\hooks",
    "app\api\leads",
    "app\api\messages",
    "app\api\events",
    "app\api\webhooks\google",
    "app\api\webhooks\whatsapp",
    "app\api\webhooks\instagram",
    "backend\src\modules",
    "backend\src\integrations",
    "components\ui",
    "database\seeds",
    "demo",
    "docs",
    "lib\store",
    "public\images",
    "types"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

Write-Host "✅ Estrutura de pastas criada!" -ForegroundColor Green
Write-Host ""

# Verificar se package.json existe
if (-Not (Test-Path "package.json")) {
    Write-Host "⚠️  package.json não encontrado. Executando npm init..." -ForegroundColor Yellow
    npm init -y
}

# Verificar se node_modules existe
if (-Not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Blue
    npm install
} else {
    Write-Host "✅ Dependências já instaladas" -ForegroundColor Green
}

# Criar .env.local se não existir
if (-Not (Test-Path ".env.local")) {
    if (Test-Path ".env.example") {
        Write-Host "🔧 Criando .env.local..." -ForegroundColor Blue
        Copy-Item ".env.example" ".env.local"
        Write-Host "✅ .env.local criado! Lembre-se de preencher as variáveis." -ForegroundColor Green
    } else {
        Write-Host "⚠️  .env.example não encontrado. Pulando criação de .env.local" -ForegroundColor Yellow
    }
} else {
    Write-Host "✅ .env.local já existe" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Setup concluído!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos passos:" -ForegroundColor Blue
Write-Host ""
Write-Host "1. Configure o .env.local com suas credenciais"
Write-Host "2. Copie os componentes para app\(dashboard)\crm\components\"
Write-Host "3. Configure o banco de dados: psql crm_conversao < database\schema.sql"
Write-Host "4. Rode o projeto: npm run dev"
Write-Host ""
Write-Host "Boa sorte! 🚀" -ForegroundColor Green
