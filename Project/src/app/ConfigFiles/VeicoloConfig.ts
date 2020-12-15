export class VeicoloConfig {
    id: number;
    casaCostruttrice: string;
    modello: string;
    annoImmatricolazione: string;
    targa: string;

    constructor(id: number, casaCostruttrice: string, modello: string, annoImmatricolazione: string, targa: string) {
        this.id = id;
        this.casaCostruttrice = casaCostruttrice;
        this.modello = modello;
        this.annoImmatricolazione = annoImmatricolazione;
        this.targa = targa;
    }


}
