<template>
    <div class="row mt-3">
        <div class="col-12">
            <h1 class="text-center">Összes könyv</h1>
        </div>
        <div class="col-12">
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
                            <img :src="book.imagelink" alt="" class="borito">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DataService from '../services/dataservice'

export default {
    name:'tablazat',
    data(){
        return {
            books:[]
        }
    },
    methods:{
        reszletek(id){
            //console.log(id)
            this.$router.push(`/reszletek/${id}`)
        }
    },
    created(){
        DataService.getAllBooks()
            .then(resp => {
                this.books = resp;
                //console.log(this.books);
            })
    }
}
</script>

<style>

</style>