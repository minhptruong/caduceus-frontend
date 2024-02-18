<!-- QUESTION: does querying from a result append to the query (like ChatGPT gaining more context for an initial prompt), or just start a brand new query? -->

<script lang="ts">
    import { Route, navigate } from "svelte-routing";
    import PatientSummary from "./PatientSummary.svelte";
    import { appService } from "./app.service";
    import { queryList } from "./store";
    import type { PatientInfo, QueryResult } from "./app.model";

    export let queryId: string | null

    let query = "";
    let queryResult: QueryResults | null = null

    async function fetchQuery(id: string) {
        if (queryId) {
            const response = await appService.fetchQueryResult({ query_id: id })
            queryResult = response.results[0]
        }
    }

    $: fetchQuery(queryId)

    async function submitQuery() {
        const response = await appService.submitQuery({ user_query: query });
        $queryList = [
            ...$queryList,
            {
                patient_ids: response.results.patients.map(
                    (patient) => patient.subject_id,
                ),
                query_id: response.results.query_id,
                query_text: query,
                user_id: "get user ID from client",
            },
        ];

        navigate("/query/" + response.results.query_id)
    }
</script>

<div class="query">
    {#if queryResult}
        <h1>{queryResult.query_text}</h1>
    {:else}
        <h1>Describe patients...</h1>
    {/if}

    <input
        type="text"
        bind:value={query}
        on:keydown={(event) => {
            if (event.key === "Enter") {
                submitQuery();
            }
        }}
    />

    <button on:click={submitQuery}>Submit</button>
    {#if queryResult}
        <p>{queryResult.patients.length} records:</p>
        {#each queryResult.patients as patient}
            <PatientSummary {patient} />
        {/each}
    {/if}
</div>

<style>
</style>
