<template>
  <div class="row mt-3">
    <div class="col-12">
      <h1 class="text-center">Könyv részletek</h1>
    </div>

    <div v-if="hibaUzenet.length == 0" class="card mb-3 mx-auto mt-4" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="egyKonyv.imagelink" class="img-fluid rounded-start" :alt="egyKonyv.title" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ egyKonyv.title }}</h5>
            <p class="card-text">
              <strong>Author: </strong>{{ egyKonyv.author }}<br>
              <strong>Country: </strong>{{ egyKonyv.country }}<br>
              <strong>Language: </strong>{{ egyKonyv.language }}<br>
              <strong>Pages: </strong>{{ egyKonyv.pages }}<br>
              <strong>Year: </strong>{{ egyKonyv.year }}<br>
              <strong>Wikipedia: </strong>
              <a :href="egyKonyv.link" target="_blank">{{ egyKonyv.link}}</a>
            </p>
            <p class="card-text">
                <router-link :to="`/modositas/${egyKonyv.id}`" class="btn btn-outline-warning  mb-2">Módosítás</router-link>

                <button @click="torles(egyKonyv.id)" class="btn btn-outline-danger mb-2 ms-2">Törlés</button>

                <router-link to="/tablazat" class="btn btn-outline-primary float-end mb-2">Vissza</router-link>

                 <!-- <router-link :to="this.$router.options.history.state.back" class="btn btn-outline-primary float-end mb-2">Vissza</router-link> -->
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-danger" role="alert" >
      {{ hibaUzenet}}
    </div>
  </div>
</template>

<script>
import DataService from '../services/dataservice'

export default {
    name:'reszletek',
    data(){
        return{
            egyKonyv:{},
            hibaUzenet:''
        }
    },
    methods:{
      torles(id){
        DataService.deleteBook(id)
          .then(()=>{
            this.$router.push('/tablazat')
          })
      }
    },
    created(){
        DataService.getBookById(this.$route.params.id)
            .then(resp => {
                this.egyKonyv = resp;
            }).
            catch(err =>{
              //console.log('err:',err)
              this.hibaUzenet=err;
            })
    }
};
</script>

<style>
</style>