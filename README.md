# Exemplo de integração de Nodejs com Google Sheets

Este projeto é destinado a interessados em realizar a integração do Nodejs com o Google Sheets.

### Prerequisites

1 - Docker
Linux: https://docs.docker.com/install/linux/docker-ce/ubuntu/
Windows: https://www.docker.com/docker-windows

2 - Nodejs
Linux e Windows:
https://nodejs.org/en/download/package-manager/

### Instalação

Linux:
Será preciso criar o arquivo .env seguindo o exemplo do arquivo exemple.env. Esse arquivo irá definir se a aplicação está sendo executada em dev ou prod. Nos arquivos localidados em /server/config/ será será possível verificar o apontamento para o ID da planilha. 
Agora deverá executar o comando npm install dentro da pasta /server/ 
Dentro da pasta /server/routes/google/ deverá ser inserido a chave criada pelo Google. O nome deverá ser editado para **privatekey.json**
Dentro da raiz do projeto, será preciso executar o comando sudo docker-compose up para a criação dos containers.

Windows:
Será preciso criar o arquivo .env seguindo o exemplo do arquivo exemple.env. Esse arquivo irá definir se a aplicação está sendo executada em dev ou prod. Nos arquivos localidados em /server/config/ será será possível verificar o apontamento para o ID da planilha. 
Agora deverá executar o comando npm install dentro da pasta /server/ 
Dentro da pasta /server/routes/google/ deverá ser inserido a chave criada pelo Google. O nome deverá ser editado para **privatekey.json**
Dentro da raiz do projeto, será preciso executar o comando docker-compose up para a criação dos containers.

## Deployment

Linux:
Para o deploy será preciso executar o comando sudo docker-compose start. Para realizar a parada da aplicação será com o comando sudo docker-compose stop

Windows:
Para o deploy será preciso executar o comando docker-compose start. Para realizar a parada da aplicação será com o comando  docker-compose stop

## Autor

* **Rodrigo Viana**

## Licença

Livre