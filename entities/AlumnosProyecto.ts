import { Alumno } from "./Alumno";

export type AlumnosProyecto = {
    id: string,
    nombre: String,    
    alumnos: Alumno[],
}