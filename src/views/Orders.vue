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
          <td>{{ order.creation_date }}</td>
          <td>{{ order.product }}</td>
          <td>{{ order.producer }}</td>
          <td>{{ order.amount }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
          orders: [
              {id: '1', creation_date: '15/02/2019 13:44', product: 'D1 FANNY PACK', producer: 'Wandrd', amount: '3', status: 'Ordered'},
              {id: '2', creation_date: '24/02/2019 9:01', product: 'CYBERPUNK', producer: 'Superfirebags', amount: '1', status: 'Ordered'},
          ],

        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>