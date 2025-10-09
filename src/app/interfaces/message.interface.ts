export interface Usuario {
  idusuario: number;
  usuario_t: string;
}

export interface Message {
  idcomunicado: number;
  titulo: string;
  mensaje: string;
  adjunto: string;
  prioridad: number;
  idtipocomunicado: number
  fecha_creacion: string | null;
  usuario: Usuario;
}