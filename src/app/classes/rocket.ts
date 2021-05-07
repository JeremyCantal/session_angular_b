export class Rocket {
    constructor(private _num: number, private _nom: string, private _annee: string) { }

    get num() {
        return this._num;
    }
    set num(_num: number) {
        this._num = _num;
    }
    get nom() {
        return this._nom;
    }
    set nom(_nom: string) {
        this._nom = _nom;
    }
    get annee() {
        return this._annee;
    }
    set annee(_annee: string) {
        this._annee = _annee;
    }
}
