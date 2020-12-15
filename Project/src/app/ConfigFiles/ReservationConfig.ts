export class ReservationConfig{

    
  id: number;
  inizioPrenotazione: string;
  finePrenotazione: string;

  constructor(id: number, inizioPrenotazione: string, finePrenotazione: string) {

    this.id = id;
    this.inizioPrenotazione = inizioPrenotazione;
    this.finePrenotazione = finePrenotazione;
  }

}