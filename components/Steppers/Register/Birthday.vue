<template>
    <v-card class="elevation-12">
        <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-date-picker
                    class="elevation-0 pd-b-picker"
                    full-width
                    locale="ru"
                    v-model="user.birthday"
                ></v-date-picker>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" @click="back">Назад</v-btn>
            <v-spacer />
            <v-btn color="primary" @click="register">Регистрация</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import validation from '@/stats/validation.js';

export default {
    props: {
        user: Object
    },
    data: () => ({
        valid: true,
        validation: validation
    }),
    methods: {
        back() {
            this.$emit('back');
        },
        register() {
            if (this.$refs.form.validate()) {
                this.$emit('register');
            }
        }
    }
}
</script>

<style>
    .pd-b-picker .v-picker__title {
        display: none !important;
    }
</style>