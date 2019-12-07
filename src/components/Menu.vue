<template>
  <div class="menu">
    <v-card color="grey lighten-4" flat>
      <v-toolbar>
        <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
        <v-toolbar-title>Store</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="menu" app>
      <v-list dense>
        <v-list-item v-for="(item, index) in items" :key="index" router :to="item.to">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      menu: false,
      items: [
        { to: "/", text: "Home" },
        { to: "/producers", text: "Producers" },
        { to: "/orders", text: "Orders" },
        { to: "/about", text: "About us" }
        ]
    }
  },
  created () {
		this.fetchProducers();
    this.fetchProducts();
    this.fetchOrders();
	},
  computed: {
    ...mapGetters(['getProducers', 'getProducts', 'getOrders']),
  },
  methods: {
		...mapActions(['fetchProducers', 'fetchProducts', 'fetchOrders']),
	}
};
</script>