<template>
  <v-app>
      <p-header></p-header>
      <p-content>
        <register-example></register-example>
      </p-content>
      <p-footer></p-footer>
  </v-app>
</template>

<script>
import RegisterExample from '@/views/Register.vue';
import PHeader from '@/components/Main/PHeader.vue';
import PFooter from '@/components/Main/PFooter.vue';
import PContent from '@/components/Main/PContent.vue';

export default {
  name: 'App',
  components: {
    PHeader, PFooter, PContent
  }
};
</script>

<style>
.pd-tile-stepper {
  border-radius: 0 !important;
}
a {
  text-decoration: none !important;
}
</style>