<template>
    <v-card class="elevation-12">
        <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    :rules="[validation.required, validation.counterMax, validation.counterMin]"
                    v-model="user.pass"
                    prepend-icon="mdi-lock"
                    required
                    type="password"
                />

                <v-text-field
                    id="confirm"
                    label="Підтвердіть пароль"
                    name="confirm"
                    :rules="[validation.required, confirmPass, validation.counterMax, validation.counterMin]"
                    v-model="user.confirm"
                    prepend-icon="mdi-lock-reset"
                    required
                    type="password"
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
        confirmPass(value) {
            return this.user.pass === value || 'Пароли не совпадают';
        },
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