import { WineType } from "./Wine.interface";

export interface WineView {
    id: number;
    name: string;
    image_url: string;
    type: WineType;
    winery_name: string;
    region_name: string;
    country_name: string;
    country_image_url: string
    vintages: VintageView[]
}

export interface VintageView {
    vintage: number
    varieties_name: string[]
}