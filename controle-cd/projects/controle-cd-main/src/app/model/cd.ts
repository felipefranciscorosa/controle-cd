export class Cd{
  private _album: string;
  private _artista: string;
  private _ano: number;
  private _estilo: string;
  private _numFaixas: number;

  constructor (album: string,artista: string,ano: number,estilo: string,numFaixas: number){
      this._album = album;
      this._artista = artista;
      this._ano = ano;
      this._estilo = estilo;
      this._numFaixas = numFaixas;
    }

    public static clone(cd: Cd) {
      let c: Cd = new Cd(cd.album, cd.artista, cd.ano, cd.estilo, cd.numFaixas);
      return c;
    }
  get album(){
      return this._album;
  }
  set album(album){
      this._album = album;
  }
  get artista(){
      return this._artista;
  }
  set artista(artista){
      this._artista = artista;
  }
  get ano(){
      return this._ano;
  }
  set ano(ano){
      this._ano = ano;
  }
  get estilo(){
      return this._estilo;
  }
  set estilo(estilo){
      this._estilo = estilo;
  }
  get numFaixas(){
      return this._numFaixas;
  }
  set numFaixas(numFaixas){
      this._numFaixas = numFaixas;
  }
}
