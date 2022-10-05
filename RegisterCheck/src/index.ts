import express from "express"
import { RunResult } from "sqlite3"
import database from "./database"

const port = 8080
const app = express()
const session: any = {}

app.use(express.json())

//STATIC
app.use("/")