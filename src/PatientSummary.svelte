<script lang="ts">
    import type { PatientInfo } from "./app.model";
    export let patient: PatientInfo;
</script>

<div class="patient-summary">
    <h3>{patient.first_name} ({patient.gender}), {patient.birth_year}</h3>
</div>


<style>
    .patient-summary {
        cursor: pointer;
    }
</style>