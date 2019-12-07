<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Date</th>
          <th class="text-left">Product</th>
          <th class="text-left">Producer</th>
          <th class="text-left">Amount</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in getOrders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.crdt }}</td>
          <td>{{ order.product_name }}</td>
          <td>{{ order.producer_name }}</td>
          <td>{{ order.amount }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      // data
    }
  },
  created() {
    this.fetchProducers();
    this.fetchProducts();
    this.fetchOrders();
  },
  computed: {
    ...mapGetters(['getOrders']),
  },
  methods: {
    ...mapActions(['fetchProducers', 'fetchProducts', 'fetchOrders']),
  }
};
</script>