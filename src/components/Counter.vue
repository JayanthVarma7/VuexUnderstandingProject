<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{count}}</p>
            <button class="btn btn-success m-1" @click="clickIncrement">Increment</button>
            <button class="btn btn-warning m-1" @click="clickDecrement">Decrement</button>
            <button class="btn btn-danger m-1" @click="clickIncrementBy(5)">Increment By</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Counter",
    data(){
      return{
        count:0
      }
    },
    methods:{
      clickIncrement(){
        this.count = this.count + 1
      },
      clickDecrement(){
        this.count = this.count - 1
      },
      clickIncrementBy(value){
        this.count = this.count + value
      }
    }
}
</script>

<style>

</style>