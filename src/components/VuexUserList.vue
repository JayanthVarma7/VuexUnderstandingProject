<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">User List</p>
        <p class="fst-italic">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  </div>

  <div class="container" v-if="userListState.loading">
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>

  <div class="container" v-if="!userListState.loading && userListState.errorMessage">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ userListState.errorMessage }}</p>
      </div>
    </div>
  </div>

  <div class="container" v-if="!userListState.loading && userListState.users.length>0">
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <th>SNO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr v-for="user in userListState.users" :key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.website}}</td>
              <td>{{user.company.name}}</td>
              <td>{{user.address.city}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import Spinner from './Spinner.vue';
import { mapGetters } from 'vuex';

export default {
  components: { Spinner },
    name:"VuexUserList",
    created(){
        this.$store.dispatch("userListModule/getUsers",)
    },
    computed: mapGetters({
        userListState:"getUserListState"
    })
}
</script>

<style>

</style>