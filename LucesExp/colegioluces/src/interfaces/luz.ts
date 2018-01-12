/**
 * Created by angel on 17/11/2017.
 */
export  class Luz{
  id:number;
  descp:string;
  icon:string;
  ipluces:string;
  idLuces:[{
    id:number;
    title:string;
    icon?:string;
    estado?:boolean;
    disp:boolean;
    temp?:boolean;
  }
    ];
}
