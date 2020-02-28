# dataloader-talk
A talk with slides and demo about GraphQL and integrating a library called dataloader

# Start

- `npm i`
- `npm start`

Then visit `http://localhost:4000/graphql` for the GraphQL Playground and start making queries

# Tech

This a simple Apollo Server, sitting on top of a SQLite Datebase

```
├── db.sqlite // the SQLite Database
├── package-lock.json
├── package.json
├── slides
│   ├── img
│   └── slides.md
└── src
    ├── dataloader // Dataloader builders
    ├── apollo.js // ApolloServer mount
    ├── db // Sequelize Database models
    ├── graphql // GraphQL types and resolvers
    ├── index.js
    └── main.js // bootstrap
```
