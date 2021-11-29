export class Medicines {
  id: number;
  name: string;
  dosage: string;
  manufacturer: string;
  category: string;
  price: number;
  sales: number;


  constructor(id: number, name: string, dosage: string, manufacturer: string,
              category: string, price: number, sales: number) {
    this.id = id;
    this.name = name;
    this.dosage = dosage;
    this.manufacturer = manufacturer;
    this.category = category;
    this.price = price;
    this.sales = sales;
  }
}
