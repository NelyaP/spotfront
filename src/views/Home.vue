<template>
  <div class="home">
    <!---<img alt="Vue logo" src="../assets/logo.png">--->
    <v-container fluid>
      <v-row>
        <v-col v-for="product in products" :key="product.id" cols="12" md="4">
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
              >{{ product.producer ? getProducerName(product.producer) : null }}</p>
            </v-img>

            <p class="ma-3 caption font-weight-light">{{ product.description }}</p>
            <p class="ma-3 grey--text">${{ product.price }}</p>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="indigo" @click.prevent="dialog = !dialog">Order</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-dialog v-model="dialog" width="800">
        <Order />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Order from "@/components/Order.vue";

export default {
  components: {
    Order
  },
  data() {
    return {
      products: [],
      producers: [],
      dialog: false
    };
  },
  created() {
    this.getProducers();
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
      .get("http://localhost:8000/api/products")
      .then(response => {
        this.products = response.data;
      })
      .catch(error => console.log(error));
    },
    getProducers() {
      axios
      .get("http://localhost:8000/api/producers")
      .then(response => {
        this.producers = response.data;
      })
      .catch(error => console.log(error));
    },
    getProducerName(id) {
      if (!this.producers) return undefined;
      var out = this.producers.find(el => el.id === id);
      return out.name;
    }
  }
};
</script>
