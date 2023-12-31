export type LocationType = {
    /** (строка): Уникальный идентификатор местоположения. */
    id: string;

    /** (строка): Название местоположения. */
    name: string;

    /** (число): Широта местоположения. */
    latitude: number;

    /** (число): Долгота местоположения. */
    longitude: number;

    /** (строка): Адрес местоположения или его описание. */
    address: string;

    /** (строка): Название города, связанного с местоположением. */
    city: string;

    /** (строка): Название страны, связанной с местоположением. */
    country: string;
};
