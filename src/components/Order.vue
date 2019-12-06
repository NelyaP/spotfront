<template>
<div class="order-form">
    <v-card class="px-2">
        <v-card-title>New order</v-card-title>
        <v-form>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        label="Name"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        label="Producer"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field
                        label="Amount"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="green">
                <v-icon slall left>mdi-check</v-icon>
                Order
                </v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            //
        }
    }
  
}
</script>