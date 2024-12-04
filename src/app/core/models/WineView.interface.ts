import { WineType } from "./Wine.interface";

export interface WineView {
    id: number;
    name: string;
    image_url: string;
    type: WineType;
    winery: {
        id: number,
        name: string
    };
    region: {
        id: number,
        name: string
    };
    country: {
        id: number,
        name: string,
        image_url: string
    };
    vintages: VintageView[]
}

export interface VintageView {
    vintage: number
    varieties: {
        id: number;
        name: string;
    }[]
}