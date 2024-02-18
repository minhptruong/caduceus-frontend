export interface ApiResponse<T> {
    results: T
}

export interface Query {
    user_query: string
}

// TODO: Not sure what the object's properties are
export type QueryDataRequest = {}

export interface QueryData {
    patient_ids: string[]
    query_id: string
    query_text: string
    user_id: number
}

export type PatientInfo = {
    first_name: string
    gender: string
    birth_year: number
    subject_id: number
} & Record<string, any | null>

export interface QueryResultRequest {
    query_id: string
}

export interface QueryResult {
    patients: PatientInfo[]
    query_id: string
    query_text: string
}