# App de rentrée :lotus_position_man:

## :mage_man: Getting started

### Mongo server

Either:

- install and start Mongo on host machine
- run Mongo in Docker container:

```
docker run --name <container-name> -d -p 127.0.0.1:27017:27017/tcp mongo
```

Access Mongo shell from within Docker container:

```
docker exec -it <container-name> mongosh
```

### Environment

Create `.env` file based

```
DB_URL=ip_docker
DB_NAME=my_databas_ename
```

### :artificial_satellite: API server

Install dependencies:

```
npm install
```

Start development server:

```
npm run start:watch
```

(Or start production server:)

```
npm start
```

---

### :rocket: Web Client

#### Typescript / React / Styled-Components

Install dependencies:

```
npm install
```

Start server:

```
npm start
```

# WIP
