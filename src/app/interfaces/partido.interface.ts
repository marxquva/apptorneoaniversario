export interface Partido {
  idpartido: number;
  duracion: number;
  fecha_partido: string | null;
  hora_partido: string | null;
  resumen_resultado: string;
  fase: Fase,
  cancha: Cancha,
  situacion: Situacion;
  programaciones: Programacion[],
  localEquipo?: any;
  localGoles?: number | string;
  visitanteEquipo?: any;
  visitanteGoles?: number | string;
}

export interface Programacion {
  idprogramacion: number;
  idpartido: number;
  idequipo: number;
  goles: number;
  eslocal: number;
  resultado: number;
  equipo: Equipo;
}

export interface Equipo {
  idequipo: number;
  nombre_equipo: string;
  logotipo: string;
}

export interface Situacion {
  idsituacionpartido: number;
  nombre_situacion: string;
}

export interface Cancha {
  idcancha: number;
  nombre_cancha: string;
}

export interface Fase {
  idfase: number;
  nombre_fase: string;
}


