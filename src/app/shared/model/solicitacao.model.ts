
export class SolicitacaoModel{
  id: number;
  name: string;
  email: string;
  tel: string;
  cpf: string;
  dezenas: Array<any>;
  createdAt: Date;
  disabled: boolean;

  constructor(obj?: SolicitacaoModel){
    this.id = obj && obj.id ? obj.id : 0;
    this.name = obj && obj.name ? obj.name : '';
    this.email = obj && obj.email ? obj.email : '';
    this.tel = obj && obj.tel ? obj.tel : '';
    this.cpf = obj && obj.cpf ? obj.cpf : '';
    this.dezenas = obj && obj.dezenas ? obj.dezenas : [];
    this.createdAt = obj && obj.createdAt ? obj.createdAt : new Date();
    this.disabled = obj && obj.disabled ? obj.disabled : true;
  }
}
