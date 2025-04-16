<script setup>
import { reactive, ref } from 'vue'
const userData = reactive({
    name: '',
    email: '',
    phone: '',
    website: ''
});
const handleAddNew = async () => {
    console.log("data: ", userData)
}
</script>
<template>
    <main style="color: #000; margin-top: 20px; width: 100%; border-radius: 20px;" >
        <h1 style="font-weight: bold; align-items: center; text-align: center; ">Add new todo</h1>
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
        <div style="display: flex; justify-content: center; align-items: center; text-align: center;" @click="handleAddNew">
            <div class="btn-main" style="background-color: #40b883; width: 50%; margin-top: 1rem; border-radius: 50px;">
                Add new
            </div>
        </div>
    </main>
</template>


<style scoped>

</style>
