# Usa una imagen oficial de Node.js como base
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de tu proyecto al contenedor
COPY . .

# Expone el puerto 4000 para que pueda ser accesible
EXPOSE 4000

# Comando para ejecutar tu aplicación
CMD ["npm", "start"]
