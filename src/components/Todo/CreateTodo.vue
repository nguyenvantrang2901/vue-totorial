<script setup>
import { useTodoStore } from '@/store/TodoStore';
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const store = useTodoStore();
const router = useRouter()
const route = useRoute()

const userData = reactive({
    name: route.params.id ? store.handleDetailUser?.name : '',
    email: route.params.id ? store.handleDetailUser?.email : '',
    phone: route.params.id ? store.handleDetailUser?.phone : '',
    website: route.params.id ? store.handleDetailUser?.website : ''
});

const handleAddNew = async () => {
    // console.log("data: ", userData)
    store.handleCreateUser({id: String(Math.random()), ...userData})
    alert("Thêm mới thành công")
    router.push('/')
    // setTimeout(()=>{
    //     router.push('/')
    // }, 1000)
}

const handleUpdateUser = () => {
    store.handleUpdateUser({id: route.params.id, ...userData})
    alert("Cập nhật thành công")
    router.push('/')
}
</script>
<template>
    <main style="color: #000; margin-top: 20px; width: 100%; border-radius: 20px;" >
        <h1 style="font-weight: bold; align-items: center; text-align: center; ">{{ route.params.id ? 'Update user': 'Add new user' }}</h1>
        <div style="margin-top: 5px;">
            <input type="text" placeholder="Enter your name ..." v-model="userData.name">
        </div>
        <div style="margin-top: 5px;">
            <input type="text" placeholder="Enter your email ..." v-model="userData.email">
        </div>
        <div style="margin-top: 5px;">
            <input type="text" placeholder="Enter your phone ..." v-model="userData.phone">
        </div>
        <div style="margin-top: 5px;">
            <input type="text" placeholder="Enter your website ..." v-model="userData.website">
        </div>
        <div style="display: flex; justify-content: center; align-items: center; text-align: center;" @click="route.params.id ? handleUpdateUser(): handleAddNew()">
            <div class="btn-main" style="background-color: #40b883; width: 50%; margin-top: 1rem; border-radius: 50px;">
                {{ route.params.id ? 'Update': 'Add new' }}
            </div>
        </div>
    </main>
</template>


<style scoped>

</style>
