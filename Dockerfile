# Etapa 1: build
FROM node:20-alpine AS build
WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: servidor
FROM nginx:alpine

# Copia arquivos buildados para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Configuração nginx customizada (opcional)
# Crie um arquivo nginx.conf na raiz do projeto se precisar de ajustes
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta que Easypanel vai usar
EXPOSE 3001

# Iniciar o nginx em foreground
CMD ["nginx", "-g", "daemon off;"]
