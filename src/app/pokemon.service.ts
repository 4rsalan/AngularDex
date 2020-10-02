import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Pokemon} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<Pokemon> {
    console.log('getPokemon called');
    const url = `${this.pokemonUrl}${name.toLowerCase()}/`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => console.log(`Fetched Pokemon: ${name}`)),
      catchError(this.handleError<Pokemon>('getPokemon'))
    );

  }

  getKantoPokemon(): Observable<any> {
    const url = `${this.pokemonUrl}?limit=151&offset=0`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`Fetched Kanto Pokemon`)),
      catchError(this.handleError<any>('getKantoPokemon'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
