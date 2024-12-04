import { WineType } from "../models/Wine.interface";

export const WINES = [
    {
        "id": 1,
        "winery_id": 1,
        "name": "Cabernet Sauvignon Puente Alto Puente Alto Vineyard",
        "image_url": "/assets/wines/don-melchor-cabernet-sauvignon.png",
        "type": WineType.Tinto
    },
    {
        "id": 2,
        "winery_id": 2,
        "name": "Cabernet Sauvignon Napa Valley Georges de Latour Private Reserve",
        "image_url": "/assets/wines/beaulieu-vineyard-georges-de-latour-private-reserve-cabernet-sauvignon.png",
        "type": WineType.Tinto
    },
    {
        "id": 3,
        "winery_id": 3,
        "name": "Toscana Tignanello",
        "image_url": "/assets/wines/antinori-tignanello.png",
        "type": WineType.Tinto
    },
    {
        "id": 4,
        "winery_id": 4,
        "name": "Cabernet Sauvignon Napa Valley",
        "image_url": "/assets/wines/faust-cabernet-sauvignon.png",
        "type": WineType.Tinto
    },
]
