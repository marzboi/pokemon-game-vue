<template>
  <h1 v-if="!pokemon">Please Wait...</h1>

  <div v-else>
    <h1>Who is this Pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/GetPokemonOptions";

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
    };
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },

    checkAnswer(pokemonId) {
      this.showPokemon = true;
    },
  },

  mounted() {
    this.mixPokemonArray();
  },
};
</script>
