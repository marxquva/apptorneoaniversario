export interface Persona {
  nombres: string;
  apellidos: string;
  imagen: string | null;
  fecha_nacimiento: string | null;
  urlfacebook: string;
}

export interface Player {
  idpersona: number;
  numero_camiseta: string;
  apodo: string;
  posicion: string;
  situacion: number;
  nombre_jugador: string;
  Persona: Persona;
}

export interface Team {
  idequipo: number;
  nombre_equipo: string;
  descripcion: string;
  logotipo: string;
  urlfacebook: string;
  procedencia: string;
  representante: string;
  nombre_categoria_deporte: string;
  nombre_grupo: string;
  total_jugadores: number;
  jugadores: Player[];
  partidos: any[]
}