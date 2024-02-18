<script lang="ts">
    import { Link } from "svelte-routing";
    import type { PatientInfo } from "./app.model";
    export let patient: PatientInfo;
</script>

<div class="patient-summary">
    <Link to={`patient/${patient.subject_id}`}>
        <h3>{patient.first_name} ({patient.gender}), {patient.birth_year}</h3>
    </Link>
</div>

<style>
    .patient-summary {
        cursor: pointer;
    }
</style>
