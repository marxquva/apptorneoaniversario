export interface Team {
    idequipo: number;
    nombre_equipo: string;
}

export interface Torneo {
    idedicion: number;
    idtorneo: number;
    nombre_edicion: string;
    fecha_inicio: string;
    fecha_fin: string;
    estado: number;
    nombre_torneo: string
}