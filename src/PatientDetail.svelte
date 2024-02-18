<script lang="ts">
    import { onMount } from "svelte";
    import type { PatientInfo } from "./app.model";
    import { appService } from "./app.service";
    import JsonRenderer from "./JsonRenderer.svelte";

    export let patientId: string;

    let patient: PatientInfo | null = null;
    let info: Record<string, any> = {};

    onMount(async () => {
        const response = await appService.fetchPatient(patientId);
        patient = response.results;
        const { first_name, gender, birth_year, subject_id, ...other } = patient;
        info = other;
    });
</script>

{#if patient}
    <div>
        <h1>{patient.first_name} ({patient.gender}), {patient.birth_year}</h1>
        <JsonRenderer json={info} />
    </div>
{/if}
