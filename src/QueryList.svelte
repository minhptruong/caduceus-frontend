<script lang="ts">
    import { onMount } from "svelte";
    import appService from "./app.service";
    import { queryList } from "./store";
    import { Link } from "svelte-routing"

    onMount(async () => {
        const response = await appService.fetchQueryData({});
        $queryList = response.results;
    });

</script>

<div>
    <Link to="/">New query</Link>
    <hr />
    
    <ul>
        {#each $queryList as query}
            <li>
                <Link to={`/query/${query.query_id}`}>{query.query_text} ({query.patient_ids.length})</Link>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }
</style>