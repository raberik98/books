import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:3000';

export default{
    getAllBooks(){
        return Axios.get('/books')
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    getBookById(id){
        return Axios.get(`/books/${id}`)
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch((err) => {
                //console.log(err);
                return Promise.reject(err)
            })
    },
    saveBook(ujKonyvUrlap){
        return Axios.post('/books',ujKonyvUrlap)
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    updateBook(konyvUrlap){
        return Axios.put(`/books/${konyvUrlap.id}`,konyvUrlap)
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    deleteBook(id){
        return Axios.delete(`/books/${id}`)
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })
    },



}