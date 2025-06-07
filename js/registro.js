import { v4 as uuidv4 } from "uuid";

export default class Registro {
  constructor(data, vendas, sobras) {
    this.id = uuidv4();
    this.data = data;
    this.vendas = vendas;
    this.sobras = sobras;
    this.producao = parseInt(this.vendas) + parseInt(this.sobras);
    this.aprov = ((parseFloat(this.vendas) / this.producao) * 100).toFixed(2);
  }

  toJSON() {
    return {
      id: this.id,
      data: this.data,
      vendas: this.vendas,
      sobras: this.sobras,
      producao: this.producao,
      aprov: this.aprov,
    };
  }
}
