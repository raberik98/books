<template>
  <table class="table align-middle table-hover">
    <thead>
      <tr>
        <th>Szerző</th>
        <th>Cím</th>
        <th>Borító</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id" @click="reszletek(book.id)">
        <td>{{ book.author }}</td>
        <td>{{ book.title }}</td>
        <td>
          <img :src="book.imagelink" alt="" class="borito" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name:'tablazat-komponens',
    props: ['books'],
    emits: ['reszletek'],
    methods:{
        reszletek(id){
            this.$emit('reszletek',id);
        }
    }
};
</script>

<style>
</style>