
export class CardModel{
  id: number;
  type: string;
  qntGames: number;
  qntDezenas: number;
  concurso: number | string;
  qntCota: number;
  qntTotalCota: number;
  vlCota: string;
  vlPremio: string;
  dtPremio: Date;

  constructor(obj?: CardModel){
    this.id = obj && obj.id ? obj.id : 0;
    this.type = obj && obj.type ? obj.type : enumCardName.MEGA_SENA;
    this.qntGames = obj && obj.qntGames ? obj.qntGames : 0;
    this.qntDezenas = obj && obj.qntDezenas ? obj.qntDezenas : 0;
    this.concurso = obj && obj.concurso ? obj.concurso : 0;
    this.qntCota = obj && obj.qntCota ? obj.qntCota : 0;
    this.qntTotalCota = obj && obj.qntTotalCota ? obj.qntTotalCota : 0;
    this.vlCota = obj && obj.vlCota ? obj.vlCota : '';
    this.vlPremio = obj && obj.vlPremio ? obj.vlPremio : '';
    this.dtPremio = obj && obj.dtPremio ? obj.dtPremio : new Date();
  }
}

export enum enumCardName{
  MEGA_SENA = 'MEGA-SENA',
  MEGA_DA_VIRADA = 'MEGA DA VIRADA',
  MAIS_MILIONARIA = '+MILIONÁRIA',
  LOTO_FACIL = 'LOTOFÁCIL',
  QUINA = 'QUINA',
  LOTO_MANIA = 'LOTOMANIA',
  TIME_MANIA = 'TIMEMANIA',
  DUPLA_SENA = 'DUPLA SENA',
  FEDERAL = 'FEDERAL',
  LOTECA = 'LOTECA',
  DIA_DE_SORTE = 'DIA DE SORTE',
  SUPER_SETE = 'SUPER SETE'
}
