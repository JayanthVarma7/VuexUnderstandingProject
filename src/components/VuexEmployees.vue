<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employees</p>
        <p class="fst-italic">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  </div>

  <!-- <pre>{{employeeState.employees}}</pre> -->
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li v-for="employee of employeeState.employees" :key="employee.id" class="list-group-item list-group-item-success">
            <input :checked="employee.isSelected" @input="updateSelected(employee.id)" type="checkbox" class="form-check-input">
            {{ employee.name }}
          </li>
        </ul>    
      </div>

      <div class="col-md-6">
        <div v-for="employee of employeeState.employees" :key="employee.id">
          <div v-if="employee.isSelected" class="card my-2">
            <div class="card-body list-group-item-success">
              <ul class="list-group">
                <li class="list-group-item">Id: <span class="fw-bold">{{employee.id}}</span></li>
                <li class="list-group-item">Name: <span class="fw-bold">{{employee.name}}</span></li>
                <li class="list-group-item">Email: <span class="fw-bold">{{employee.email}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name:"VuexEmployees",
    methods:{
        updateSelected(empId){
            console.log('this.$store', this.$store)
            this.$store.dispatch("employeeModule/changeSelected",{empId:empId})
        }
    },
    computed: mapGetters({
        employeeState:"getEmployeeState"
    })
}
</script>

<style>

</style>