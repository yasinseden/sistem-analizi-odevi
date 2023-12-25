export class Doktor {
    id: number;
    name: string;
    lastName: string;
    hospital: string;
    expertise: string;
    appointments: Appointment[];

    constructor(id: number, name: string, lastName:string, hospital: string, expertise: string, appointments: Appointment[]) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.hospital = hospital;
        this.expertise = expertise;
        this.appointments = appointments;
    }
}

export class Appointment {
    doctorId: string;
    appointmentDate: string;
    patientName: string;
    patientLastName: string;

    constructor(id: string, name: string, lastName: string, symptoms: string, date:string) {
        this.doctorId = id;
        this.appointmentDate = date;
        this.patientName = name;
        this.patientLastName = lastName;
    }
}