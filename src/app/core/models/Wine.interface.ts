export interface Wine {
    id: number;
    winery_id: number;
    name: string;
    image_name: string;
    type: 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Dessert' | 'Fortified';
}