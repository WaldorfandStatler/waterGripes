import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const gripes = [
      {
        "id": 1,
        "block_number": 200,
        "street": "St. Charles",
        "crossStreet": "3rd",
        "zipcode": 70130,
        "latitude": 30,
        "longitude": 90,
        "gripe": "water leaking from fire hydrant",
        "comment": "lots of water",
        "votes": 0,
        "status": "Unresolved"
      },
      {
        "id": 2,
        "block_number": 201,
        "street": "St. Charles",
        "crossStreet": "3rd",
        "zipcode": 70130,
        "latitude": 30,
        "longitude": 90,
        "gripe": "water leaking from fire hydrant",
        "comment": "lots of water",
        "votes": 0,
        "status": "Unresolved"
      },
      {
        "id": 3,
        "block_number": 202,
        "street": "St. Charles",
        "crossStreet": "3rd",
        "zipcode": 70130,
        "latitude": 30,
        "longitude": 90,
        "gripe": "water leaking from fire hydrant",
        "comment": "lots of water",
        "votes": 0,
        "status": "Unresolved"
      },
      {
        "id": 4,
        "block_number": 200,
        "street": "St. Charles",
        "crossStreet": "3rd",
        "zipcode": 70130,
        "latitude": 30,
        "longitude": 90,
        "gripe": "water leaking from fire hydrant",
        "comment": "lots of water",
        "votes": 0,
        "status": "Unresolved"
      }
    ];
    return {gripes};
  }
}