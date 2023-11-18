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
interface WeatherApiResponse {
    name: string;
    weather: { description: string }[];
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
    };

  }
  