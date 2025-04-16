<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
const router = useRoute();
const user = ref(null)
onMounted(()=> {
    const fetchUser = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${router.params.id}`)
        const data = await res.json();
        user.value = data;
    }
    fetchUser()
})
</script>
<template>
    <main style="color: #000; margin-top: 20px; width: 100%;" >
        <div class="card-item">
            <div>{{ user?.name }}</div>
            <div>{{ user?.city }}</div>
            <div>{{ user?.email }}</div>
            <div>{{ user?.website }}</div>
            <div>{{ user?.phone }}</div>
        </div>
    </main>
</template>


<style scoped>

</style>
