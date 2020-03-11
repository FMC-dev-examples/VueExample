<template>
    <v-navigation-drawer
        v-model="show"
        absolute
    >
    <v-list-item class="mt-12" v-if="user.logged">
        <v-list-item-avatar>
            <v-img :src="user.data.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>{{user.data.name}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.link"
            @click="show = !item.closeAfter"
        >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import menu from '@/stats/menu.js';
import { mapState } from 'vuex';

export default {
    data: () => ({
        show: false,
        items: menu
    }),
    computed: {
        ...mapState({
            user: state => state.user
        })
    },
    methods: {
        toggleMenu() {
            this.show = !this.show;
        }
    }
}
</script>
