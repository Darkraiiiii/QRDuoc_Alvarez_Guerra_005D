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
export interface RespuestaEncabezados {
    status: String;
    totalResults: number;
    articles: Article[];
}
export interface Article {
    source: Source;
    author: String;
    title: String;
    descripcion: string;
    url: string;
    urlToImage: string;
    publisheAt: string;
    content?: string;
}
export interface Source {
    id?: string;
    name: string;
}