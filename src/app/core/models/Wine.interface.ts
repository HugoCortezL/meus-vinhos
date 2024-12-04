export enum WineType {
    Tinto = "Tinto",
    Branco = "Branco",
    Rose = "Rosé",
    Sobremesa = "Sobremesa",
    Fortificado = "Fortificado"
  }

export interface Wine {
    id: number;
    winery_id: number;
    name: string;
    image_url: string;
    type: WineType;
}