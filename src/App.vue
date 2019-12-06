<template>
  <div id="app">
    <v-app>
      <v-card color="grey lighten-4" flat>
        <v-toolbar>
          <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
          <v-toolbar-title>Store</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
      <v-navigation-drawer v-model="menu" app>
        <v-list dense>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.to">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content class="ma-3">
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    menu: false,
    items: [
      { to: "/", text: "Home" },
      { to: "/producers", text: "Producers" },
      { to: "/orders", text: "Orders" },
      { to: "/about", text: "About us" }
    ]
  })
};
</script>

<style>
#app {
  font-family: "Roboto";
}
</style>
