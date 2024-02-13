import type { PatientQuery } from "./pateint-query";
import type { Patient } from "./patient";

export class PatientService {

    public async fetchPatients(): Promise<Patient[]> {
        return Promise.resolve(fakePatients)
    }

    public async fetchPatientQueries(): Promise<PatientQuery[]> {
        return Promise.resolve(fakePatientQueries);
    }
}

const fakePatients: Patient[] = [
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
    { id: "1", name: "John Doe" },
]

const fakePatientQueries: PatientQuery[] = [
    { prompt: "Who is the patient", patientCount: 100 },
    { prompt: "Who is the patient", patientCount: 100 },
    { prompt: "Who is the patient", patientCount: 100 },
    { prompt: "Who is the patient", patientCount: 100 },
    { prompt: "Who is the patient", patientCount: 100 },
    { prompt: "Who is the patient", patientCount: 100 },
    { prompt: "Who is the patient", patientCount: 100 },
]