<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

        <div :style="{color:store.state.colorCode}" class="counter">
          {{store.state.counter}}
        </div>

        <div class="counter-square">
            {{store.state.counter}}
            <sup>2</sup>  = 
            {{store.getters.counterSquare()}}
        </div>

        <div class="buttons">
          <button @click="store.methods.decress">-</button>
          <button @click="store.methods.incress">+</button>
        </div>
        <div>
          <input v-model="colorCode" type="text" placeholder="Enter the color">
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { inject, computed } from "vue";
export default {
  name: 'HomeView',
  setup() {
    const store = inject('store')
    const colorCode = computed({
      get(){
        return store.state.colorCode
      },
      set(val){
        store.methods.setColorCode(val);
      }
    })

    return{
      store,
      colorCode
      
    }
  }
 
}
</script>

<style scoped>
div{
  margin-bottom: 10px;
}
  .counter{
    font-size: 70px;
  }
  button{
    margin: 10px;
    padding: 10px 50px;
    font-size: 30px;
  }
</style>
