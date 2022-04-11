<template>
  <div class="row mt-3">
    <div class="col-12">
      <h1 class="text-center">Könyv módosítás</h1>
    </div>
    <form method="post" @submit.prevent="modositas">
      <div class="col-md-6 mb-3">
        <label for="author" class="form-label">Szerző:</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="konyvUrlap.author"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="title" class="form-label">Cím:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="konyvUrlap.title"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="language" class="form-label">Nyelv:</label>
        <input
          type="text"
          class="form-control"
          id="language"
          v-model="konyvUrlap.language"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="country" class="form-label">Ország:</label>
        <input
          type="text"
          class="form-control"
          id="country"
          v-model="konyvUrlap.country"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="year" class="form-label">Kiadás éve:</label>
        <input
          type="text"
          class="form-control"
          id="year"
          v-model="konyvUrlap.year"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="pages" class="form-label">Oldalszám:</label>
        <input
          type="text"
          class="form-control"
          id="pages"
          v-model="konyvUrlap.pages"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="link" class="form-label">Wikipedia:</label>
        <input
          type="text"
          class="form-control"
          id="link"
          v-model="konyvUrlap.link"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="imagelink" class="form-label">Kép url:</label>
        <input
          type="text"
          class="form-control"
          id="imagelink"
          v-model="konyvUrlap.imagelink"
        />
      </div>
      <input type="submit" value="Módosítás" class="btn btn-primary mb-5">
    </form>
  </div>
</template>

<script>
import DataService from '../services/dataservice'

export default {
  name:'modositas-konyv',
  data(){
    return{
      konyvUrlap:{}
    }
  },
  methods:{
    modositas(){
      DataService.updateBook(this.konyvUrlap)
        .then(()=>{
          this.$router.push('/tablazat')
        })
    }
  },
  created(){
    DataService.getBookById(this.$route.params.id)
      .then((resp) => {
          this.konyvUrlap = resp;
      })
  }
}
</script>

<style>

</style>