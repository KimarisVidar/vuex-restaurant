<template>
  <div id="app">
    <header>
      this is header
    </header>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/layout/footer.vue'

export default {
  components: {
    Footer,
  },
  name: 'App',
  data() {
    return {};
  },
  methods: {}
};

</script>
