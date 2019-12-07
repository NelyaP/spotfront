<template>
<div class="producer">
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="12" md="3">
                        <ProducerCard :producer="getProducer" />
                    </v-col>
                    <v-col cols="12" md="9">
                        <p class="ma-2">{{getProducer.description}}</p>
                    </v-col>
                </v-row>
                
            </v-col>
            <v-col cols="12">
                <p class="headline">Products</p>
                <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Price $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in getProducer.products" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col cols="12">
                <p class="headline">Orders</p>
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
                        <tr v-for="order in getProducer.orders" :key="order.id">
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
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProducerCard from "@/components/ProducerCard.vue";

export default {
    components: {
        ProducerCard
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.fetchProducer(this.id)
    },
    computed: {
        ...mapGetters(['getProducer']),
        
    },
    methods: {
        ...mapActions(['fetchProducer']),
    },
    watch: {
        id (n, o) {
            n ? fetchProducer(this.id): null
        }
    }
}
</script>