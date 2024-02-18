<script lang="ts">
  import { Router } from "svelte-routing";
  import Home from "./Home.svelte";
  export let url = "";
</script>

<main>
  <Router {url}>
      <Home />
  </Router>
</main>
