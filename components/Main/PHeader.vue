<template>
    <div>
        <v-app-bar
            app
            dark
            color="primary"
            hide-on-scroll
            class="pl-2 pr-4"
            flat
            dense
            :src="background"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(35, 123, 247, .2), rgba(35, 123, 247,.4)"
                ></v-img>
            </template>

            <v-app-bar-nav-icon v-if="logged" @click="toggleMenu"></v-app-bar-nav-icon>

            <v-toolbar-title
                @click="toMain"
                :class="(this.$route.name !== 'home' ? 'pd-main-logo' : '')"
            >
                <span class="headline font-weight-light">Logo</span> <v-icon class="pb-1">mdi-logo</v-icon>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class="hidden-xs-only" large v-if="!logged" tile text to="/user/login">
                <span class="subtitle font-weight-light">Войти</span>
            </v-btn>

             <v-row
                v-if="!searchPage"
                align="center"
                class="ml-6 pd-header-search hidden-xs-only"
            >
                <v-text-field
                    @keydown.enter="openSearch"
                    single-line
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    v-model="search"
                    label="Пошук"
                ></v-text-field>
            </v-row>

            <v-btn
                class="hidden-sm-and-up"
                icon
                to="/user/login"
            >
                <v-icon class="pb-1">mdi-account-arrow-left</v-icon>
            </v-btn>

            <v-btn
                v-if="!searchPage"
                class="hidden-sm-and-up"
                icon
                to="/search/pet"
            >
                <v-icon class="pb-1">mdi-magnify</v-icon>
            </v-btn>

        </v-app-bar>
        <p-menu ref="menu"></p-menu>
    </div>
</template>

<script>
import PMenu from '@/components/Main/PMenu.vue';
import { mapState } from 'vuex';

export default {
    data: () => ({
        search: '',
        background: require('@/assets/header.jpg')
    }),
    computed: {
        searchPage() {
            return this.$route.name === 'search';
        },
        ...mapState({
            logged: state => state.user.logged
        })
    },
    methods: {
        toMain() {
            if(this.$route.name !== 'home')
            {
                this.$router.push('/');
            }
        },
        toggleMenu() {
            if(this.logged) {
                this.$refs.menu.toggleMenu();
            } else {
                this.$router.push('/user/login');
            }
        },
        openSearch() {
            if(!this.searchPage) {
                if(this.search) {
                    this.$store.commit('search/value', this.search);
                }
                this.$router.push('/search');
            }
        }
    },
    components: {
        PMenu
    }
}
</script>

<style>
    .pd-main-logo {
        cursor: pointer;
    }
    .pd-header-search {
        max-width: 300px;
    }
</style>