<template>
    <v-card tile class="elevation-12">
        <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    label="Ім'я"
                    name="firstname"
                    :rules="[validation.required, validation.counterMaxBig]"
                    v-model="user.firstName"
                    prepend-icon="mdi-account-box"
                    required
                    type="text"
                />

                <v-text-field
                    label="Прізвище"
                    name="secondname"
                    :rules="[validation.required, validation.counterMaxBig]"
                    v-model="user.secondName"
                    prepend-icon="mdi-account-box-multiple"
                    required
                    type="text"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" @click="exit">Вернуться</v-btn>
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
        exit() {
            this.$emit('exit');
        },
        next() {
            if (this.$refs.form.validate()) {
                this.$emit('next');
            }
        }
    }
}
</script>