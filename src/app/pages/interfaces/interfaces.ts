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
    password: string;
    asignatura1: string;
    asignatura2: string;
    role: string;
    isactive: boolean;
}

export interface User{
    nombre:string;
    apellido:string;
    usuario:string;
    password:string;
    asignatura1: string;
    asignatura2: string;
    role:string;
    isactive:boolean;
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

export interface qrcode{
    nombre: string;
    apellido: string;
    asignatura: string;
    fecha: string;
}

export interface qrcodes{
    id:number;
    nombre: string;
    apellido: string;
    asignatura: string;
    fecha: string;
}

//aqui noticias
export interface RespuestaToHeadLines{
    status: string;
    totalResults: number;
    articles:Article[];
}

export interface Article{
    source:Source;
    author:String;
    title:String;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content?:string;
}

export interface Source{
    id?:string;
    name:string;
}