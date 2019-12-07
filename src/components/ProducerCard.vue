<template>
<div class="producer-card">
    <v-card flat v-if="producer" class="pa-0">
        <v-container fluid class="ma-1">
            <v-row no-gutters>
                <v-col cols="12" v-if="producer.logo">
                  <v-img :src="producer.logo" class="ma-2" width="150"></v-img>
                </v-col>
                <v-col cols="12" v-else>
                  <p class="headline mx-2">{{ producer.name }}</p>
                </v-col>
                <v-col cols="12">
                    <div class="mx-auto">
                        <v-rating small v-model="producer.rating"></v-rating>
                    </div>
                </v-col>
                <v-col>
                  <a class="caption ml-3" :href="producer.url">{{producer.url}}</a>
                </v-col>
                <v-col cols="12">
                  <p class="caption grey--text ml-3">{{producer.phone}}</p>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</div>
</template>

<script>
export default {
    props: ['producer'],
    data() {
        return {

        }
    }
};
</script>