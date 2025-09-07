#!/bin/bash

echo "🔧 Verificando se Husky está instalado..."

if [ ! -d ".husky" ]; then
  echo "📦 Instalando Husky..."
  npx husky install
else
  echo "✅ Husky já está instalado."
fi

echo "📁 Criando pasta de scripts..."
mkdir -p .husky/scripts

echo "🧼 Criando script de lint..."
cat <<'EOF' > .husky/scripts/lint.sh
#!/bin/bash
echo "🔍 Rodando ESLint e Prettier..."
npm run lint:fix
npm run format
EOF

chmod +x .husky/scripts/lint.sh

echo "📎 Criando hook de pre-commit..."
npx husky add .husky/pre-commit "sh .husky/scripts/lint.sh"

echo "✅ Tudo pronto! Husky e pre-commit configurados com lint."
