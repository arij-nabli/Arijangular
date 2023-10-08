export class Invoice {
  idFacture!: number;
  montantFacture!: number;
  montantRemise!: number;
  dateFacture!: string;
  active!: boolean;
  constructor(idFacture: number, montantFacture: number, montantRemise: number, dateFacture: string, active: boolean) {
    this.idFacture = idFacture;
    this.montantFacture = montantFacture;
    this.montantRemise = montantRemise;
    this.dateFacture = dateFacture;
    this.active = active;
  }
}