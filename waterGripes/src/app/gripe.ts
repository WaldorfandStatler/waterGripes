export class Gripe {
  id: number;
  block_number: number;
  street: string;
  zipcode: number;
  status: string;
  gripe: string;
  votes: number;
  crossStreet?: string;
  comment?: string;
  user_id?: number;
  longitude?: number;
  latitude?: number;
}