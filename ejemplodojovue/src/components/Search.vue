<template>
    <v-container>
            <v-col cols="12" sm="6">
              <v-text-field
                label="¿Que quieres Buscar?"
                single-line
                outlined
                v-model="word"
                
              ></v-text-field>
        </v-col>
         <div class="text-center col-md-4">
                <v-btn rounded color="dark" dark @click="searchItem">Buscar</v-btn>
            </div>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'Search',
    data:() =>({
        search: [],
        word:'',
    }),
    methods:{
        searchItem(){
            axios
                .get("https://pixabay.com/api/?key=18325849-94cafec8b0f30985ae8cfbdde&q="+this.word+"&image_type=photo")
                .then((response) => {
                    this.search = response.data;
                    console.log(this.search);
                    this.$emit("searchResult",response.data);
                });
        },
    },
};
</script>