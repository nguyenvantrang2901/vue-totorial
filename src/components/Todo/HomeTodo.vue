<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/store/TodoStore';

// Sử dụng Pinia với State
const store = useTodoStore();

// const users = ref([])
// onMounted(()=> {
//     //Cách 1:
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then(response => response.json())
//     //   .then(json => users.value = json)

//     //Cách 2:
//     // (async()=>{
//     //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     //     const data = await res.json();
//     //     users.value = data;
//     // })()
    
//     // cách bên trên là khai báo nhanh : Coi như khai báo Nâng cao  
//     //Cách 3:
//     const fetchUser = async () =>{
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json();
//         users.value = data;
//     }
//     fetchUser();
// })

//Tìm kiếm
// const txtSearch = ref('')
// const filteredUsers = computed(() =>{
//     return users.value.filter(item=> item.name.toUpperCase().indexOf(txtSearch.valuetoUpperCase()) !== -1
//         || item.email.toUpperCase().indexOf(txtSearch.valuetoUpperCase()) !== -1)
// })

//Click vào 1 item thì sẽ chuyển sang trang Detail
const router = useRouter();
</script>
<template>
    <!-- <input type="text" placeholder="Search ..." v-model="txtSearch"> -->
    <div class="group-card">
        <!-- <div class="card-item" v-for="user in filteredUsers" :key="user.id">
            <div @click="router.push({path:`/todo/${user?.id}`})">
                <h2>{{ user?.name }}</h2>
                <i>{{ user?.email }}</i>
            </div>
        </div> -->
        <input type="text" placeholder="Search ..." 
            @input="event => store.handleSearch(event.target.value)">
        <div class="card-item" v-for="user in store.filteredUsers" :key="user.id">
            <div @click="router.push({path:`/detail/${user?.id}`})">
                <h2>{{ user?.name }}</h2>
                <i>{{ user?.email }}</i>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
