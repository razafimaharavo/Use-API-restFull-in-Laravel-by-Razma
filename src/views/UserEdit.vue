<template>
    <div class="user-edit">
      <h1>Modification d'utilisateur</h1>
      <form @submit.prevent="updateUser">
        <input v-model="name" placeholder="Name" />
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Update</button>
      </form>
      <router-link :to="{ name: 'userDetail', params: { id: $route.params.id } }" class="link">Retour aux détails de l'utilisateur</router-link>
      <div v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
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
        errors: [] // Ajout de la variable pour stocker les erreurs
      };
    },
    created() {
      api.getUser(this.$route.params.id).then(response => {
        const user = response.data;
        this.name = user.Name;
        this.email = user.Email;
        this.password = user.Password;
      });
    },
    methods: {
      updateUser() {
        const userData = {
          Name: this.name,
          Email: this.email,
          Password: this.password
        };
        api.updateUser(this.$route.params.id, userData)
          .then(() => {
            this.$router.push({ name: 'userDetail', params: { id: this.$route.params.id } });
          })
          .catch(error => {
            if (error.response && error.response.status === 422) {
              // Si la validation échoue, affichez les erreurs de validation à l'utilisateur
              this.errors = Object.values(error.response.data.errors).flat();
            } else {
              // Si une autre erreur se produit, affichez un message d'erreur générique
              console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
            }
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .user-edit {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    text-align: center;
    color: white;
    border: 1px solid #ddd;
  }
  
  .user-edit input {
    width: calc(100% - 20px);
    margin: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    border-radius: 4px;
  }
  
  .user-edit button {
    padding: 10px 20px;
    background-color: rgba(33, 150, 243, 0.7);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .user-edit button:hover {
    background-color: rgba(33, 150, 243, 1);
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
  
  /* Ajout de styles pour les erreurs */
  .user-edit div {
    margin-top: 10px;
    color: #ff4d4f;
  }
  
  .user-edit div ul {
    list-style: none;
    padding-left: 0;
  }
  
  .user-edit div ul li {
    margin-bottom: 5px;
  }
  </style>
  