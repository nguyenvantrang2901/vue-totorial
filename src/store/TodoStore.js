import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useTodoStore = defineStore('todos', ()=>{
    const router = useRoute()
    const txtSearch = ref('')
    const users = ref([
        {id : '1', name: 'Nguyen Van A', email: 'anguyenvan@gmail.com', website: 'https://test.com.vn', phone: '098766544'},
        {id : '2', name: 'Bui Thi Dinh', email: 'dinhbui@gmail.com', website: 'https://test.com.vn', phone: '098766544'},
        {id : '3', name: 'Hoang Van Nam', email: 'namhoang@gmail.com', website: 'https://test.com.vn', phone: '098766544'}
    ]);

    const handleSearch = (value) => {
        txtSearch.value = value;
    };
    
    const filteredUsers = computed(() =>{
        return users.value.filter(
            (item) => 
                item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 || 
                item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
        );
    });

    const handleDetailUser = computed(()=>{
        return users.value.find(item=>item.id == router.params.id)
    })

    const handleCreateUser = (body) => {
        return users.value.push(body)
    }
    const handleDeleteUser = (id) => {
        return users.value =  users.value.filter(item=>item.id != id)
    }
    const handleUpdateUser = (body) => {
        const index = users.value.findIndex(item=> body.id === item.id)
        if(index !== -1) {
            users.value[index].name = body.name;
            users.value[index].email = body.email;
            users.value[index].phone = body.phone;
            users.value[index].website = body.website;
        }
    }
    return { 
        users, 
        txtSearch, 
        filteredUsers, 
        handleSearch, 
        handleDetailUser,
        handleCreateUser,
        handleDeleteUser,
        handleUpdateUser
    }
})
