<script lang="ts">
    import type {Patient} from "./patient.ts";
    import PatientView from "./patient.svelte";
    export let patients: Patient[]
</script>

<div>
    {#each patients as patient}
    <PatientView {patient} />
    {/each}
</div>