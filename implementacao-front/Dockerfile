# Usar uma imagem base oficial do Node.js
FROM node:14

# Instalar Python e pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração do npm e requirements.txt
COPY package.json ./
COPY package-lock.json ./
COPY requirements.txt ./

# Limpar cache do npm e instalar dependências do npm
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# Instalar dependências Python
RUN pip3 install -r requirements.txt

# Instalar Pylint
RUN pip3 install pylint

# Copiar o restante do código da aplicação para o diretório de trabalho no contêiner
COPY . .

# Verificar a instalação do npm
RUN npm --version
RUN node --version

# Listar scripts definidos no package.json
RUN cat package.json

# Listar o conteúdo do diretório de trabalho
RUN ls -la /app

# Build da aplicação com logs detalhados
RUN npm run build

# Expor a porta em que a aplicação estará rodando
EXPOSE 5173

# Comando para rodar o Pylint
RUN pylint Camada_Dados/extrair.py 
RUN pylint Camada_Dados/regex.py 
RUN pylint Camada_Dados/web_scraper.py 

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
