<template>
<div class="flex h-screen items-center justify-center">
    <div class="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
    </div>

    <div class="mb-4 font-medium text-sm text-green-600" v-if="verificationLinkSent" >
        A new verification link has been sent to the email address you provided during registration.
    </div>
    <form ref="resendemailform" @submit.prevent="resend()" class="w-1/4 mx-auto p-4">
        <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-10 w-full rounded">
            Resend Verification Email
        </button>
    </form>
</div>
</template>
<script>
export default {
    props: {
        status: String
    },
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
        async resend() {
            this.error = {};
            try {
            // Prepare form data
            const formData = new FormData(this.$refs.resendemailform);

            // Pass form data to `loginWith` function
            await this.$auth.verificationnoticeWith('laravelSanctum', { data: formData });

            // Redirect user after login
            this.$router.push({
                path: '/dashboard',
            });
            } catch (err) {
                this.error = err;
                // do something with error
            }
        },
    },
    computed: {
        verificationLinkSent() {
            return this.status === 'verification-link-sent';
        }
    }
}
</script>