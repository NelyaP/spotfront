<template>
  <div class="producers">
    <v-card v-for="p in getProducers" :key="p.id" class="ma-2">
      <v-container fluid class="ma-2">
        <v-row no-gutters>
          <v-col cols="12" md="3">
            <v-container fluid class="ma-1">
              <v-row no-gutters>
                <v-col cols="12" v-if="p.logo">
                  <v-img :src="p.logo" class="ma-2" width="150"></v-img>
                </v-col>
                <v-col cols="12" v-else>
                  <p class="headline mx-2">{{ p.name }}</p>
                </v-col>
                <v-col cols="12">
                  <v-rating small v-model="p.rating"></v-rating>
                </v-col>
                <v-col>
                  <a class="caption mx-2" :href="p.url">{{p.url}}</a>
                </v-col>
                <v-col cols="12">
                  <p class="caption grey--text ma-2">{{p.phone}}</p>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" md="7">
            <p class="my-4 mx-2">{{ p.description }}</p>
          </v-col>
          <v-col cols="12" md="1" class="mx-auto mt-3">
            <v-btn outlined>
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

export default {
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
  }
};
</script>