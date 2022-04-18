export default{
    namespaced: true,
    state: {
        counter:{
            count:0
        }
    },
    mutations: {
        INCR_COUNTER: function(state){
            state.counter.count+=1
        },
        DECR_COUNTER(state){
            state.counter.count-=1
        },
        INCRBY_COUNTER(state,payload){
            state.counter.count+=payload.value
        }
    },
    actions: {
        incrementCounter: function({commit}){
            return commit("INCR_COUNTER")
        },
        decrementCounter({commit}){
            return commit("DECR_COUNTER")
        },
        incrementByCounter({commit},payload){
            console.log('here');
            return commit("INCRBY_COUNTER",payload)
        }
    },
}