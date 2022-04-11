<template>
  <div class="row mt-3">
    <div class="col-12">
      <h1 class="text-center">Összes könyv</h1>
    </div>
    <div class="col-12">
      <DataTable
        :value="books"
        responsiveLayout="scroll"
        :paginator="true"
        :rows="5"
      >
        <Column field="author" header="Szerző" :sortable="true"></Column>
        <Column field="title" header="Cím" :sortable="true"></Column>
        <Column header="Borító">
          <template #body="slotProps">
            <img
              :src="slotProps.data.imagelink"
              :alt="slotProps.data.title"
              class="borito"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import DataService from "../services/dataservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "tablazat",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    reszletek(id) {
      //console.log(id)
      this.$router.push(`/reszletek/${id}`);
    },
  },
  created() {
    DataService.getAllBooks().then((resp) => {
      this.books = resp;
      //console.log(this.books);
    });
  },
};
</script>

<style>
</style>