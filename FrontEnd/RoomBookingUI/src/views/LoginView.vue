<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center">Login</h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="username" class="form-label">Username:</label>
                <input type="text" v-model="username" class="form-control" id="username" required  autocomplete="username" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" v-model="password" class="form-control" id="password" required autocomplete="current-password" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('Login.vue:' + route)
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic here
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
</style>
