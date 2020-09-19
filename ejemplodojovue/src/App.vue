<template>
  <v-app>
    <Toolbar/>
    <v-main>
    <Search v-on:searchResult="searchResult"/>
    <imageList v-bind:items="items"/>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Search from './components/Search';
import imageList from './components/imageList';
 export default {
  name: 'App',

  components: {
    Toolbar,
    Search,
    imageList,
  },
  methods:{
    searchResult(response){
      this.items = response;
      console.log(this.items);
    }
  },

  data: () => ({
    items: [],
  }),
};
</script>
