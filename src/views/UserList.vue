<template>
    <div class="user-list-container">
        <h1>Liste d'utilisateur</h1>
        <div v-if="loading" class="loading-message"> <br> <h4>Loading ...</h4><br></div>
        <div v-else class="user-list">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
        <router-link to="/" class="back-link">Retour</router-link>
    </div>
</template>

<script>
import api from '../services/api';
import UserCard from '@/components/UserCard.vue';

export default {
    components: {
        UserCard
    },
    data() {
        return {
            users: [],
            loading: true
        };
    },
    created() {
        api.getUsers().then(response => {
            this.users = response.data;
            this.loading = false; // Mettre loading à false une fois les données chargées
        });
    }
};
</script>

<style scoped>
.user-list-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    text-align: center;
}

.loading-message {
    margin-top: 20px;
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.back-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2196f3;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
