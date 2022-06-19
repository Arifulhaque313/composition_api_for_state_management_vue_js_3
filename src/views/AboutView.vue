<template>
  <div class="about">
    <h1>Counter is Working here</h1>
    <h3>{{store.state.counter}}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
    setup(){
      const store = inject('store')

      return{
        store
        // store 
      }
    }
}
</script>