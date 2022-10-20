<template>
    <v-app id="inspire">
        <Navbar />
        <v-main class="grey lighten-2">
            <v-container>
                <v-row>
                    <slot />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
