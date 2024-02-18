<script lang="ts">
    import { Route } from "svelte-routing";
    import Query from "./query.svelte";
    import QueryList from "./QueryList.svelte";
</script>

<div class="home">
    <div class="left-nav">
        <QueryList />
    </div>
    <div class="chat">
        <Route path="/">
            <Query queryId={null} />
        </Route>
        <Route path="/query/:queryId" let:params>
            <Query queryId={params.queryId} />
        </Route>
    </div>
</div>

<style>
    .home {
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100%;
    }
    .left-nav {
        flex: 1;
        background-color: black;
    }

    .chat {
        flex: 3;
        background-color: white;
    }
</style>
