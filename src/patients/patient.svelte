<script lang="ts">
    import type { Patient } from "./patient";
    export let patient: Patient
</script>

<div>
    <p>{patient.id}</p>
    <p>{patient.name}</p>
</div>

<style>
    * {
        color: black;
    }
</style>