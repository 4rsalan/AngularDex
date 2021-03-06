import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  listOfPokemon: Pokemon[];
  listOfPokemonImages: string;
  selectedPokemon: Pokemon;

  ngOnInit() {
    this.getKantoPokemon();
    console.log(this.listOfPokemon);
  }

  getPokemonByName(name: string) {
    this.pokemonService.getPokemon(name)
      .subscribe(pokemon => this.selectedPokemon = pokemon);
  }

  getKantoPokemon() {
    this.pokemonService.getKantoPokemon()
      .subscribe(pokemons => {
        console.log(pokemons);
        this.listOfPokemon = pokemons.results;

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.listOfPokemon.length; i++) {
          this.listOfPokemon[i].url = this.pokemonService.getPokemonImage(this.listOfPokemon[i]);
        }
      });
  }

}
