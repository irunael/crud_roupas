📌 Visão Geral
Clothes Shop é um sistema CRUD completo para gerenciamento de peças de roupa, desenvolvido com React e Bootstrap. Permite cadastrar, visualizar, editar e excluir itens de um catálogo fashion, com persistência local dos dados.


✨ Funcionalidades Principais

Catálogo Visual: Cards organizados com imagens das roupas

CRUD Completo:

✅ Cadastro de novas peças

📝 Edição de informações

🗑️ Exclusão com confirmação

Upload de Imagens: Adicione fotos dos produtos

Design Responsivo: Adapta para celulares, tablets e desktops

Persistência: Dados salvos automaticamente no navegador


🛠 Tecnologias Utilizadas

Frontend:

React.js (v18+)

React Bootstrap (v5+)

LocalStorage API

Estilização:

Bootstrap 5

CSS customizado

Ferramentas:

npm (gerenciador de pacotes)

Git (controle de versão)


🚀 Como Executar o Projeto
Pré-requisitos

Node.js (v16+)

npm (v8+)

Passo a Passo
bash
# 1. Clone o repositório
git clone https://github.com/irunael/crud_roupas.git

# 2. Acesse a pasta do projeto
cd clothes-shop

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start

# 5. Acesse no navegador
http://localhost:3000


🧩 Estrutura do Projeto
src/
├── components/       # Componentes React
│   ├── CardRoupa.jsx # Card individual de cada roupa
│   ├── FormularioRoupa.jsx # Modal de cadastro/edição
│   ├── Header.jsx    # Cabeçalho da aplicação
│   └── ModalConfirmacao.jsx # Modal de confirmação
├── services/
│   └── armazenamento.js # Lógica do LocalStorage
├── App.js           # Componente principal
└── App.css          # Estilos globais


🎨 Customização
Você pode facilmente personalizar:

Cores: Modifique as variáveis CSS em App.css

Categorias: Edite o array tiposRoupa em FormularioRoupa.jsx

Layout: Ajuste o grid em App.js (linha 54)


📝 Licença
Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

Desenvolvido por Pedro e Ricardo

Atualizado em 28/04/2025