<template>
  <div class="home">
    <!---<img alt="Vue logo" src="../assets/logo.png">--->
    <v-container fluid>
      <v-row>
        <v-col v-for="product in getProducts" :key="product.id" cols="12" md="4">
          <v-card>
            <v-img
              :src="product.photo"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400"
            >
              <v-card-title v-text="product.name"></v-card-title>
              <p
                class="caption mx-5 mb-1"
              >{{ product.producer_name }}</p>
            </v-img>

            <p class="ma-3 caption font-weight-light">{{ product.description }}</p>
            <p class="ma-3 grey--text">${{ product.price }}</p>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="indigo" @click.prevent="dialog = !dialog; current = product">Order</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-dialog persistent v-model="dialog" width="800">
        <Order :product="current" @cancel="dialog = false" @submit="dialog = false"/>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Order from "@/components/Order.vue";

export default {
  components: {
    Order
  },
  data() {
    return {
      dialog: false,
      current: null
    };
  },
  created() {
    this.fetchProducers()
    this.fetchProducts()
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['fetchProducers', 'fetchProducts']),
  }
};
</script>
