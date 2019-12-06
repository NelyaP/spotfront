<template>
<div class="producers">
    <v-card v-for="p in producers" :key="p.id" class="ma-2">
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
export default {
    data() {
        return {
            producers: [{"id": 3, "name": "Superfirebags", "description": "Superfirebags is imaginary company. It was founded today in my imagination.", "rating": 4, "phone": "+7(919)7771199", "url": "http://www.superfirebagsimaginary.com", "logo": null}, {"id": 2, "name": "Wandrd", "description": "Nomatic is a Private company that was founded in Salt Lake City, Utah in 2014.", "rating": 5, "phone": "+1(385)1119002", "url": "http://eu.wandrd.com", "logo": "http://127.0.0.1:8000/media/store/photos/producers/WANDRD_logo.png"}, {"id": 1, "name": "Fjallraven", "description": "Fjallraven (Swedish for 'The Arctic fox') s a Swedish company specialising in outdoor equipment\u2014mostly costly clothing and backpacks. It was founded in 1960 by Ake Nordin (1936\u20132013). The company went public in 1983 with an over-the-counter listing in Stockholm.", "rating": 3, "phone": "(855) 996-3746", "url": "http://www.fjallraven.com", "logo": "http://127.0.0.1:8000/media/store/photos/producers/fjallraven_logo.png"}],
        }
    }
  
}
</script>