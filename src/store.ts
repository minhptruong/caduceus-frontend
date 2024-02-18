import { writable } from "svelte/store"
import { type QueryData, type QueryResult } from "./app.model"

const queryResult = writable<QueryResult | null>(null)
const queryList = writable<QueryData[]>([])

export { 
    queryResult,
    queryList,
}