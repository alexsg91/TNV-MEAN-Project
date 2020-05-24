export interface CovidData {
    id:             number;
    country:        string;
    population:     number;
    cases:          number;
    deaths:         number;
    recoveries:     number;
    recoveryRate:   number;
    fatalityRate:   number;
    Continent:      string;
    classification: string;
    date:           Date;
}
