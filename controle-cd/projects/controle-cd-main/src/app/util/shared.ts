import { Cd } from './../model/cd';
import { Constants } from './constants';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.CDS_KEY) != null) {
      return;
    }

    //usuário definido na forma literal
    let cd = new Cd(1,"Dois", "Legião Urbana", 1997, "Rock", 17);
    let cds = [cd];

    localStorage.setItem(Constants.CDS_KEY, JSON.stringify(cds));
    /*localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.COSTS_KEY, String(0));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

    localStorage.removeItem(Constants.DONATION_KEY);
    localStorage.setItem(Constants.DONATION_KEY, JSON.stringify([]));*/
  }
}
