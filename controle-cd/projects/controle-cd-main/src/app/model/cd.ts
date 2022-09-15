export class Cd{
  public id: number;
  public album: string;
  public artista: string;
  public ano: number;
  public estilo: string;
  public numFaixas: number;

  constructor (id: number,album: string,artista: string,ano: number,estilo: string,numFaixas: number){
      this.id =id;
      this.album = album;
      this.artista = artista;
      this.ano = ano;
      this.estilo = estilo;
      this.numFaixas = numFaixas;
    }

    public static clone(cd: Cd) {
      let c: Cd = new Cd(cd.id,cd.album, cd.artista, cd.ano, cd.estilo, cd.numFaixas);
      return c;
    }
}
