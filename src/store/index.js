import { reactive,readonly} from "vue";
const state =reactive({
    counter : 0,
    colorCode:'blue'
})


const methods= {
    incress(){
        state.counter++
    },
    decress(){
        state.counter--
    },
    setColorCode(val){
        state.colorCode = val
    }
}

const getters ={
    counterSquare(){
        return state.counter * state.counter
    }
}

export default{
    state :readonly(state),
    methods,
    getters,
    
}