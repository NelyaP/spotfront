import Vue from 'vue'
import Vuex from 'vuex'
import { format } from "date-fns";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:8000/api',
    producer: {},
    products: [],
    producers: [],
    orders: []
  },
  getters: {
    getProducers: state => state.producers,
    getProducts(state) {
      var data = state.products.map(e => {
        var arr_producers = state.producers
        e.producer_name = arr_producers.length > 0 ? arr_producers.find(p => p.id === e.producer).name : e.producer;
        return e
      })
      return data;
    },
    getOrders(state) {
      var data = state.orders.map(e => {
        var arr_products = state.products
        if (arr_products.length > 0) {
          e.product_name = arr_products.find(p => p.id === e.product).name
          var producer_id = arr_products.find(p => p.id === e.product).producer 
          var arr_producers = state.producers
          if (arr_producers.length > 0) {
            e.producer_name = arr_producers.find(p => p.id === producer_id).name 
          } else {
            e.producer_name = producer_id
          }
        } else {
          e.product_name = e.product
          e.producer_name = 'Undefigned'
        }
        e.crdt = format(new Date(e.creation_date), 'dd-MMM-yyyy HH:mm:ss')
        return e
      })
      return data;
    },
    //getProducer: state => state.producer,
    getProducer(state) {
      var id = state.producer.id
      var products = state.products.length > 0 ? state.products.filter(p => p.producer === id) : []
      var pids = []
      products.forEach(el => {
        pids.push(el.id)
      })
      var orders = state.orders
      var oels = []
      orders.forEach(el => {
        if (pids.includes(el.product)) {
          oels.push(el)
        }
      })
      return {
        id: id,
        name: state.producer.name,
        description: state.producer.description,
        rating: state.producer.rating,
        phone: state.producer.phone,
        url: state.producer.url,
        logo: state.producer.logo,
        products: products,
        orders: oels
      }
    },
  },
  actions: {
    fetchProducers({ commit, state }) {
      var url = state.apiUrl + '/producers'
      axios
        .get(url)
        .then(response => {
          commit('setProducers', response.data)
          return response.data;
        })
        .catch(error => console.log(error));
    },
    fetchProducts({ commit, state }) {
      var url = state.apiUrl + '/products'
      axios
        .get(url)
        .then(response => {
          commit('setProducts', response.data)
          return response.data;
        })
        .catch(error => console.log(error));
    },
    fetchOrders({ commit, state }) {
      var url = state.apiUrl + '/orders'
      axios
        .get(url)
        .then(response => {
          commit('setOrders', response.data)
          return response.data;
        })
        .catch(error => console.log(error));
    },
    fetchProducer({ commit, state }, payload) {
      console.log(payload)
      if (payload) {
        var url = state.apiUrl + '/producers/' + payload
          axios
          .get(url)
          .then(response => {
            commit('setProducer', response.data)
            console.log(response.data)
            return response.data;
          })
          .catch(error => console.log(error)); 
      }
    },
    postOrder({ commit, state }, payload) {
      if (payload) {
        var url = state.apiUrl + '/orders/'
        return axios.post(url, payload)
        .then(response => {
          commit('pushOrder', response.data);
          return response.data
        })
        .catch(err => {
            return 'err' 
        })
      }
			var path = '/article';
			var url = state.apiUrl + path;
			
    },
  },
  mutations: {
    setProducers(state, producers) { state.producers = producers; },
    setProducts(state, products) { state.products = products; },
    setOrders(state, orders) { state.orders = orders; },
    setProducer(state, producer) { state.producer = producer; },
    pushOrder(state, order) { state.orderd.push(order) ; },
  }
})
