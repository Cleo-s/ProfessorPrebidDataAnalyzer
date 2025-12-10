# 1. Базовий образ з Node
FROM node:20-alpine

# 2. Робоча директорія всередині контейнера
WORKDIR /app

# 3. Копіюємо package.json + package-lock.json (якщо є)
COPY package*.json ./

# 4. Встановлюємо залежності
RUN npm install

# 5. Копіюємо решту коду
COPY . .

# 6. Збираємо TypeScript у JS
RUN npm run build

# 7. Вказуємо порт, який слухає додаток
EXPOSE 4000

# 8. Команда запуску контейнера
CMD ["node", "dist/server.js"]