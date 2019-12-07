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
        <tr v-for="order in orders" :key="order.id">
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
import { format } from "date-fns";

export default {
  data() {
    return {
      orders: []
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      axios
      .get("http://localhost:8000/api/orders")
      .then(response => {
        var data = response.data.map(e => {
            e.crdt = format(new Date(e.creation_date), 'dd-MMM-yyyy HH:mm:ss');
            return e
        })
        this.orders = data;
      })
      .catch(error => console.log(error));
    }
  }
};
</script>