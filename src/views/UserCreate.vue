<template>
    <div class="user-create">
      <h1>Creation d'utilisateur</h1>
      <form @submit.prevent="createUser">
        <input v-model="name" placeholder="Name" />
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Create</button>
      </form>
      <div v-if="errors.length" class="errors">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <router-link to="/" class="link">Retour</router-link>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        errors: []
      };
    },
    methods: {
      createUser() {
        const userData = {
          Name: this.name,
          Email: this.email,
          Password: this.password
        };
        api.createUser(userData)
          .then(() => {
            this.$router.push('/users');
          })
          .catch(error => {
            if (error.response && error.response.status === 422) {
              this.errors = Object.values(error.response.data.errors).flat();
            } else {
              console.error('Erreur lors de la création de l\'utilisateur :', error);
            }
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .user-create {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    text-align: center;
    color: white;
    border: 1px solid #ddd;
  }
  
  .user-create input {
    width: calc(100% - 20px);
    margin: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    border-radius: 4px;
  }
  
  .user-create button {
    padding: 10px 20px;
    background-color: rgba(33, 150, 243, 0.7);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .user-create button:hover {
    background-color: rgba(33, 150, 243, 1);
  }
  
  .errors {
    margin-top: 20px;
    color: red;
  }
  
  .link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgba(33, 150, 243, 0.7);
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .link:hover {
    background-color: rgba(33, 150, 243, 1);
  }
  </style>
  