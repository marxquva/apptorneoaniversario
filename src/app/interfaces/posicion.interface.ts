import { Equipo } from "./partido.interface";
import { Persona } from "./team.interface";

export interface Posicion {
  idequipo: number;
  equipo: string;
  logotipo: string;
  partidos_jugados: number;
  partidos_ganados: number;
  partidos_empatados: number;
  partidos_perdidos: number;
  goles: number;
  goles_en_contra: number;
  diferencia_goles: number;
  puntos: number;
}

export interface Goleador {
  idpersona: number;
  persona: Persona;
  equipo: Equipo
}