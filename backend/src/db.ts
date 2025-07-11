import Knex from "knex";
import { Model } from "objection";

const knex = Knex({
  client: "pg",
  connection: {
    host: process.env.PGHOST || "host",
    user: process.env.PGUSER || "user",
    password: process.env.PGPASSWORD || "password",
    database: process.env.PGDATABASE || "db_name",
  },
});

Model.knex(knex);

export default knex;
