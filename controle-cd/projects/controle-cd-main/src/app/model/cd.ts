export class Cd{
  public album: string;
  public artista: string;
  public ano: number;
  public estilo: string;
  public numFaixas: number;

  constructor (album: string,artista: string,ano: number,estilo: string,numFaixas: number){
      this.album = album;
      this.artista = artista;
      this.ano = ano;
      this.estilo = estilo;
      this.numFaixas = numFaixas;
    }

    public static clone(cd: Cd) {
      let c: Cd = new Cd(cd.album, cd.artista, cd.ano, cd.estilo, cd.numFaixas);
      return c;
    }
}
