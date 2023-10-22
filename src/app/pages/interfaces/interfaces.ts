export interface IasignaturaID {
    id: number;
    nombre: string;
    anio: string;
    periodo: string;
}

export interface Iasignatura {
    nombre: string;
    anio: string;
    periodo: string;
}

export interface Users {
    id: number;
    nombre: string;
    apellido: string;
    usuario: string;
    contraseña: string;
    role: string;
    isactive: boolean;
}