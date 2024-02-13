<script lang="ts">
    import type { PatientQuery } from "./pateint-query";

    export let query: PatientQuery;
</script>

<div>
    {query.prompt}
</div>