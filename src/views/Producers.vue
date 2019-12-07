<template>
  <div class="producers">
    <v-card v-for="producer in getProducers" :key="producer.id" class="ma-2">
      <v-container fluid class="ma-2">
        <v-row no-gutters>
          <v-col cols="12" md="3">
            <ProducerCard :producer="producer"/>
          </v-col>
          <v-col cols="12" md="7">
            <p class="my-4 mx-2">{{ producer.description }}</p>
          </v-col>
          <v-col cols="12" md="1" class="mx-auto mt-3">
            <v-btn outlined :to="`/producers/${producer.id}`">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
    };
  },
  created() {
    this.fetchProducers()
  },
  computed: {
    ...mapGetters(['getProducers']),
  },
  methods: {
    ...mapActions(['fetchProducers']),
  },
  
};
</script>