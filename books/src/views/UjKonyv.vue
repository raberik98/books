<template>
  <div class="row mt-3">
    <div class="col-12">
      <h1 class="text-center">Új könyv</h1>
    </div>
    <form method="post" @submit.prevent="mentes">
      <div class="col-md-6 mb-3">
        <label for="author" class="form-label">Szerző:</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="ujKonyvUrlap.author"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="title" class="form-label">Cím:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="ujKonyvUrlap.title"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="language" class="form-label">Nyelv:</label>
        <input
          type="text"
          class="form-control"
          id="language"
          v-model="ujKonyvUrlap.language"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="country" class="form-label">Ország:</label>
        <input
          type="text"
          class="form-control"
          id="country"
          v-model="ujKonyvUrlap.country"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="year" class="form-label">Kiadás éve:</label>
        <input
          type="text"
          class="form-control"
          id="year"
          v-model="ujKonyvUrlap.year"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="pages" class="form-label">Oldalszám:</label>
        <input
          type="text"
          class="form-control"
          id="pages"
          v-model="ujKonyvUrlap.pages"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="link" class="form-label">Wikipedia:</label>
        <input
          type="text"
          class="form-control"
          id="link"
          v-model="ujKonyvUrlap.link"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="imagelink" class="form-label">Kép url:</label>
        <input
          type="text"
          class="form-control"
          id="imagelink"
          v-model="ujKonyvUrlap.imagelink"
        />
      </div>
      <input type="submit" value="Mentés" class="btn btn-primary mb-5">
    </form>
  </div>
</template>

<script>
import DataService from '../services/dataservice'

export default {
    name:'uj-konyv',
    data(){
        return{
            ujKonyvUrlap:{}
        }
    },
    methods:{
        mentes(){
            DataService.saveBook(this.ujKonyvUrlap)
                .then(()=>{
                    this.$router.push('/tablazat');
                })
                .catch(()=>{})
        }
    }


};
</script>

<style>
</style>