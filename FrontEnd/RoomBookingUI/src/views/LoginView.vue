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
                <input type="text" v-model="username" class="form-control" id="username" required
                  autocomplete="username" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" v-model="password" class="form-control" id="password" required
                  autocomplete="current-password" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('Login.vue:', route.path); // Lấy đường dẫn hiện tại

const username = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Username:', username.value);
  console.log('Password:', password.value);
};
</script>

<style scoped></style>
