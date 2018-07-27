import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const gripes = [
      { id: 11, gripe: 'Mr. Nice' },
      { id: 12, gripe: 'Narco' },
      { id: 13, gripe: 'Bombasto' },
      { id: 14, gripe: 'Celeritas' },
      { id: 15, gripe: 'Magneta' },
      { id: 16, gripe: 'RubberMan' },
      { id: 17, gripe: 'Dynama' },
      { id: 18, gripe: 'Dr IQ' },
      { id: 19, gripe: 'Magma' },
      { id: 20, gripe: 'Tornado' }
    ];
    return {gripes};
  }
}