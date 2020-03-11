<template>
    <v-container
        class="fill-height"
        fluid
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                sm="8"
                md="4"
            >
                <v-toolbar>
                    <v-toolbar-title>
                        {{ steps[step - 1].title }}
                    </v-toolbar-title>
                </v-toolbar>

                <v-stepper class="pd-tile-stepper" v-model="step">
                    <v-stepper-items>
                        <v-stepper-content
                            v-for="(item, index) in steps"
                            :key="'step-content-' + index"
                            :step="index + 1"
                        >
                            <component
                                :is="item.component"
                                :user="user"
                                @exit="exit"
                                @back="back"
                                @next="next"
                                @register="register"
                            ></component>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import steps from '@/stats/registrationSteps.js';
import validation from '@/stats/validation.js';
import Names from '@/components/Steppers/Register/Names.vue';
import Contacts from '@/components/Steppers/Register/Contacts.vue';
import Password from '@/components/Steppers/Register/Password.vue';
import Birthday from '@/components/Steppers/Register/Birthday.vue';

export default {
    data: () => ({
        step: 1,
        steps: steps,
        valid: true,
        validation: validation,
        user: {
            firstName: '',
            secondName: '',
            pass: '',
            confirm: '',
            email: '',
            phone: '',
            birthday: new Date().toISOString().substr(0, 10)
        }
    }),
    methods: {
        register() {
            //registration api
        },

        back() {
            if(this.step > 0) {
                this.step--;
            }
        },

        next() {
            if(this.step < this.steps.length) {
                this.step++;
            }
        },

        exit() {
            this.$router.go(-1);
        },
    },
    components: {
        Names, Contacts, Birthday, Password
    }
}
</script>
