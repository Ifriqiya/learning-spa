<template>
<div class="flex h-screen items-center justify-center">
<div class="fixed top-0 right-0 px-6 py-4 sm:block">
    <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
        Already registered?<NuxtLink class="bg-gray-100 text-sm p-1 rounded border" to="/login">Login</NuxtLink>. Back To<NuxtLink class="bg-gray-100 text-sm p-1 rounded border" to="/">Home Page</NuxtLink> 
    </p>
</div>
<form ref="registrationform" @submit.prevent="register()" class="w-1/4 mx-auto p-4">
    <h1 class="font-semibold mb-2 text-xl">
        Register
    </h1>
    <div class="mb-4">
        <label for="name" class="block mb-1 text-sm">Name</label>
        <input type="text" name="name" class="w-full border rounded px-3 py-2" required />
    </div>
    <div class="mb-4">
    <label for="email" class="block mb-1 text-sm">Email</label>
    <input type="email" name="email" class="w-full border rounded px-3 py-2" required />
    </div>
    <div class="mb-4">
        <label for="password" class="block mb-1 text-sm">Password</label>
        <input type="password" name="password" class="w-full border rounded px-3 py-2" required />
    </div>
    <div class="mb-4">
        <label for="password_confirmation" class="block mb-1 text-sm">Confirm Password</label>
        <input type="password" name="password_confirmation" class="w-full border rounded px-3 py-2" required />
    </div>
    <div class="mb-4">
        <label for="terms" class="block mb-1 text-sm">Terms</label>
        <input type="checkbox" name="terms" class="w-full border rounded px-3 py-2" required />
    </div>
    <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-10 w-full rounded">
        Register
    </button>
</form>
</div>
</template>
    
<script>
export default {
    auth: false,
    data() {
        return {
            error: {},
        };
    },
    mounted() {
    // Before loading login page, obtain csrf cookie from the server.
    this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods: {
        async register() {
            this.error = {};
            try {
            // Prepare form data
            const formData = new FormData(this.$refs.registrationform);

            // Pass form data to `loginWith` function
            await this.$auth.registerWith('laravelSanctum', { data: formData });

            // Redirect user after login to dashboard (laravel handles if email not verified? or handle here?)
            this.$router.push({
                path: '/dashboard',
            });
            } catch (err) {
                this.error = err;
                // do something with error
            }
        },
    },
};
</script>