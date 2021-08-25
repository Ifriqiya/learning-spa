<template>
    <!-- Your template -->
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to Learning App SPA Dashboard!
        </h2>
        <div>
            Hi {{ $auth.user.name }}!
        </div>
    </div>
</template>
<script>
export default {
    layout: 'AuthLayout'
    // page component definitions
}
</script>