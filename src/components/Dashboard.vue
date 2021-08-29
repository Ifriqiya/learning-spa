<template>
    <!-- Your template -->
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <div class="fixed top-0 right-0 px-6 py-4 sm:block">
            <button @click="logout">Logout</button>
        </div>
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to Learning App SPA Dashboard!
        </h2>
        <div>
            Hi {{ this.$auth.user.name }}!
        </div>
    </div>
</template>
<script>
export default { //used nuxt auth module only, no vuex state management-add later
    layout: 'AuthLayout',
    data() {
        return {
            name: null
        }
    },  
    methods: {
        async logout() {
            const user = this.$auth.user;

            await this.$auth.logout('laravelSanctum', { data: user }).then(res => {
                    this.$router.push({path: '/'});
            }) 
        }
    }
}
</script>
