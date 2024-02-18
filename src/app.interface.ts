import type { ApiResponse, PatientInfo, Query, QueryData, QueryDataRequest, QueryResult, QueryResultRequest } from "./app.model";

export interface IApp {
    submitQuery(query: Query): Promise<ApiResponse<QueryResult>>
    fetchQueryResult(request: QueryResultRequest): Promise<ApiResponse<QueryResult[]>>
    fetchQueryData(request: QueryDataRequest): Promise<ApiResponse<QueryData[]>>
    fetchPatient(patientId: string): Promise<ApiResponse<PatientInfo>>
}