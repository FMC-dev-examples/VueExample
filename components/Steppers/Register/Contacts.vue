<template>
    <v-card class="elevation-12">
        <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    label="Пошта"
                    name="email"
                    :rules="[validation.required, validation.email, validation.counterMaxBig]"
                    v-model="user.email"
                    prepend-icon="mdi-email"
                    required
                    type="text"
                />

                <v-text-field
                    label="Телефон"
                    name="phone"
                    :rules="[validation.phone, validation.counterMinSmall, validation.counterMax]"
                    v-model="user.phone"
                    prepend-icon="mdi-phone"
                    required
                    type="text"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" @click="back">Назад</v-btn>
            <v-spacer />
            <v-btn color="primary" @click="next">Дальше</v-btn>
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
        next() {
            if (this.$refs.form.validate()) {
                this.$emit('next');
            }
        }
    }
}
</script>