<template>
<div class="home">
    <!---<img alt="Vue logo" src="../assets/logo.png">--->
    <v-container fluid>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card >
            <v-img 
              :src="`http://127.0.0.1:8000${item.photo}`"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400"
              >
              <v-card-title v-text="item.name"></v-card-title>
              <p class="caption mx-5 mb-1">{{ getProducerName(item.producer) }}</p>
            </v-img>
            
              <p class="ma-3 caption font-weight-light">{{ item.description }}</p>
              <p class="ma-3 grey--text">${{ item.price }}</p>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="indigo" @click.prevent="dialog = !dialog">Order</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <Order />
    </v-dialog>
    </div>


</div>
</template>

<script>
import Order from '@/components/Order.vue'

export default {
    components: {
      Order
    },
    data () {
      return {
        items: [{"id": 6, "producer": 3, "name": "CYBERPUNK", "description": "Just cool bag.", "price": 267.98, "photo": "/media/store/photos/products/cyberpunk.jpg"}, {"id": 5, "producer": 2, "name": "D1 FANNY PACK", "description": "The D1 Fanny Pack is a versatile bag that can be worn on your hip or cross-body style. With dedicated organization for things like your phone, keys, and wallet, and enough space to fit a small camera, this is one badass minimal carry solution.", "price": 84.21, "photo": "/media/store/photos/products/d1_fanny_pack.png"}, {"id": 3, "producer": 2, "name": "DUO DAYPACK", "description": "Raising over $650,000 on Kickstarter, the DUO Daypack is a dawn-to-dusk daypack for photographers, travelers, commuters, and creators looking to elevate the way they carry their daily gear. With Dual Side Access, a versatile Pop Camera Cube, and endless organization, it was designed to go from work to play... to play to work... to work to work... to play to play... or whatever else you call your daily grinds, errands, and passions.", "price": 254.88, "photo": "/media/store/photos/products/duo.png"}, {"id": 2, "producer": 2, "name": "HEXAD ACCESS DUFFEL BACKPACK", "description": "The HEXAD Access Duffel Backpack is a carry-on sized backpack/duffel hybrid that features a clamshell opening and is the perfect travel bag, whether you're a photographer or not. Built for 3-5 day trips (and even more depending on how light you pack), this bag is weather resistant, durable, and extremely functional. It been featured in and recommended by Carryology, Bless This Stuff, and Digital Trends.", "price": 235.95, "photo": "/media/store/photos/products/access_flat_hanging.png"}, {"id": 7, "producer": 1, "name": "KANKEN", "description": "Classic Kanken backpack in hard-wearing Vinylon fabric with a zip that opens the entire main compartment. Removable seat cushion, small front pocket, simple shoulder straps and handles at the top.", "price": 80.0, "photo": "/media/store/photos/products/kanken.jpeg"}, {"id": 8, "producer": 1, "name": "KANKEN NO. 2 LAPTOP 15", "description": "Kanken backpack in G-1000 HeavyDuty with a padded computer compartment and leather handles and details. A practical everyday backpack with excellent longevity that has a padded seat pad and comfortable padded shoulder straps", "price": 140.0, "photo": "/media/store/photos/products/kanken_no_2_laptop_15.jpeg"}, {"id": 1, "producer": 2, "name": "THE PRVKE SERIES", "description": "The PRVKE Pack\u2019s innovative design and high-quality materials make it an award-winning camera bag. This travel camera backpack is perfect for photography, travel, and daily use. It has been featured in and recommended by Forbes, USA Today, and National Geographic.", "price": 169.79, "photo": "/media/store/photos/products/web_prvke_black.jpeg"}, {"id": 4, "producer": 2, "name": "VEER PACKABLE BAG", "description": "The VEER 18L pack is the first packable bag with an inflatable back panel and inflatable camera cube (sold separately), giving you the right balance between having enough bag and keeping it minimal \u2013 whether you\u2019re a photographer\u2026 or not.", "price": 92.9, "photo": "/media/store/photos/products/veer_w_packed.png"}],
        producers: [{"id": 3, "name": "Superfirebags", "description": "Superfirebags is imaginary company. It was founded today in my imagination.", "rating": 4, "phone": "+7(919)7771199", "url": "http://www.superfirebagsimaginary.com", "logo": null}, {"id": 2, "name": "Wandrd", "description": "Nomatic is a Private company that was founded in Salt Lake City, Utah in 2014.", "rating": 5, "phone": "+1(385)1119002", "url": "http://eu.wandrd.com", "logo": "http://127.0.0.1:8000/media/store/photos/producers/WANDRD_logo.png"}, {"id": 1, "name": "Fjallraven", "description": "Fjallraven (Swedish for 'The Arctic fox') s a Swedish company specialising in outdoor equipment\u2014mostly costly clothing and backpacks. It was founded in 1960 by Ake Nordin (1936\u20132013). The company went public in 1983 with an over-the-counter listing in Stockholm.", "rating": 3, "phone": "(855) 996-3746", "url": "http://www.fjallraven.com", "logo": "http://127.0.0.1:8000/media/store/photos/producers/fjallraven_logo.png"}],
        dialog: false
      }
    },
    created () {
      this.getProducts()
    },
    methods: {
      getProducts() {
        fetch('http://127.0.0.1:8000/api/products').then(response => {
          console.log(response)
        })
      },
      getProducerName(id) {
        if(!this.producers) return undefined
        var out = this.producers.find(el => el.id === id)
        return out.name
      },
    }

}
</script>
