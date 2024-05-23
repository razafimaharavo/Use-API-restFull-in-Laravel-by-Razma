<template>
    <div class="user-card">
        <h2>{{ user.Name }}</h2>
        <p>Email: {{ user.Email }}</p>
        <router-link :to="{ name: 'userDetail', params: { id: user.id } }" class="detail-link">Details</router-link>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.user-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(133, 126, 126, 0.1);
    background-color: rgba(12, 187, 245, 0.7); 
    width: 200px;
    text-align: center;
    margin-bottom: 20px;
}

.user-card:nth-child(odd) {
    background-color: rgba(165, 32, 165, 0.7);
}

.user-card h2 {
    margin: 0 0 10px;
}

.detail-link {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #0a487a;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
