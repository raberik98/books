<template>
    <div class="row mt-3">
        <div class="col-12">
            <h1 class="text-center">Összes könyv</h1>
        </div>
        <div class="col-12">
            <tablazat-komponens :books="books" @reszletek="reszletek" ></tablazat-komponens>
        </div>
    </div>
</template>

<script>
import DataService from '../services/dataservice'
import TablazatKomponens from '../components/TablazatKomponens.vue'

export default {
    name:'tablazat',
    components:{
        TablazatKomponens
    },
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