<script setup>
import { useTodoStore } from '@/store/TodoStore';
import { useRoute, useRouter } from 'vue-router';
const store = useTodoStore()
const route = useRoute()
const router = useRouter()
const handleRedirectDelete = (id) => {
    store.handleDeleteUser(route.params.id)
    router.push('/')
}
</script>
<template>
    <main style="color: #000; margin-top: 20px; width: 100%;" >
        <div class="card-item">
            <div>{{ store.handleDetailUser?.name }}</div>
            <div>{{ store.handleDetailUser?.email }}</div>
            <div>{{ store.handleDetailUser?.website }}</div>
            <div>{{ store.handleDetailUser?.phone }}</div>
        </div>
        <div style="display: flex; column-gap: 1rem;">
            <div style="margin-top: 1rem;" class="btn-main" 
                @click="handleRedirectDelete(route.params.id)"
            >Delete</div>
            <div style="margin-top: 1rem;" class="btn-main" 
                @click="router.push(`/update/${store.handleDetailUser.id}`)"
            >Update</div>
            
        </div>
    </main>
</template>

<style scoped>

</style>
