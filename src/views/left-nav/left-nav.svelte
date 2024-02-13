<script lang="ts">
    import PatientQuery from "../../patients/patient-query.svelte";
    import { PatientService } from "../../patients/patient-service";

    const patientService = new PatientService();
    const queries = patientService.fetchPatientQueries();
</script>

<div>
   {#await queries}
   <p>Loading queries</p>
   {:then result}
    {#each result as query}
    <a href={`#${query.prompt}`}><PatientQuery query={query} /></a>
    {/each}
    {:catch}
    <p>Error fetching queries</p>
   {/await}
</div>