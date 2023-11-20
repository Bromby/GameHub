import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '00c0f181d3e540e285ceae45352488ef'
    }
})