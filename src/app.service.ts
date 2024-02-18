import type { IApp } from "./app.interface";
import type { Query, ApiResponse, QueryResult, QueryResultRequest, QueryData, QueryDataRequest } from "./app.model";

class AppService implements IApp {
    private readonly BASE_URL: string = "http://caduceus-load-balancer-871202212.us-east-1.elb.amazonaws.com/"

    private async postData<TBody, TResponse>(request: { endpoint: string, body: TBody}): Promise<ApiResponse<TResponse>> {
        const { endpoint, body } = request
        const response = await fetch(this.BASE_URL + endpoint, { method: "POST", body: JSON.stringify(body), headers: {
            "Content-Type": "application/json"
        } })
        const result = await response.json() as ApiResponse<TResponse>
        
        return result
    }

    async submitQuery(query: Query): Promise<ApiResponse<QueryResult>> {
        return await this.postData<Query, QueryResult>({ endpoint: "query", body: query })
    }

    async fetchQueryResult(request: QueryResultRequest): Promise<ApiResponse<QueryResult[]>> {
        return await this.postData<QueryResultRequest, QueryResult[]>({ endpoint: "fetch-query", body: request })
    }

    async fetchQueryData(request: QueryDataRequest): Promise<ApiResponse<QueryData[]>> {
        return await this.postData<QueryDataRequest, QueryData[]>({ endpoint: "query-list", body: request })
    }
}

const appService = new AppService()

export { appService }
export default appService
