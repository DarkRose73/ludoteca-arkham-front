export class Juego {

    id:number;
    nombre:String;
    precio:number;
    edicion:String;
    idUsuario:number;
}
export class Expansion{
    id:number;
    idJuego:number;
    nombre:String;
    precio:number;
}

export class Usuario{
    id:number;
    correo:String;
    contrasenia:String;
    nombreUsuario:String;
}
