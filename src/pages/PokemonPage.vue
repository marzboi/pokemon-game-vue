<template>
  <h1>Who is this Pokemon?</h1>
  <PokemonPicture :pokemonId="251" :showPokemon="false" />
  <PokemonOptions />
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
};
</script>
