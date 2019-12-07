<template>
  <div class="order-form">
    <v-card class="px-2">
      <v-card-title>New order</v-card-title>
      <v-form>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Name" readonly :value="product.name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Producer" readonly :value="product.producer_name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field v-model="amount" label="Amount" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="green" @click="submit()" >
          <v-icon slall left>mdi-check</v-icon>Order
        </v-btn>
        <v-btn outlined color="red" @click="cancel()">
          <v-icon slall left>mdi-cancel</v-icon>Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['product'],
  data() {
    return {
      amount: 0
    };
  },
  computed: {
    //...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['postOrder']),
    cancel() {
			this.$emit('cancel');
		},
    submit() {
      var payload = {
         id: null,
         product: this.product.id,
         creation_date: new Date(),
         amount: this.amount,
         status: 'Ordered'
      }
      this.postOrder(payload);
      this.$emit('submit');


    }
  }
};
</script>