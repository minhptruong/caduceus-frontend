<script lang="ts">
    import Query from "../query/query.svelte";
    import PatientList from "../../patients/patient-list.svelte";
    import {PatientService} from "../../patients/patient-service"
    let patient_service = new PatientService();
    let patients_data_promise = patient_service.fetchPatients();
</script>

<Query/>
{#await patients_data_promise}
loading...
{:then patients_data}
<PatientList patients={patients_data} />
{/await}