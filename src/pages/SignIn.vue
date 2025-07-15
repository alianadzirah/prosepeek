<template>
    <div class="container-fluid d-flex align-items-center justify-content-center"
        style="height: 100vh; background-color: var(--sand);">
        <div class="row w-100">
            <div class="col-lg-6 col-md-12 text-center mb-4 mb-md-0">
                <img :src="require('@/assets/images/open-book.png')" alt="Open Book" class="img-fluid"
                    style="max-width: 80%;" />
            </div>

            <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                <div class="sign-form p-4">
                    <h2 class="text-center mb-4">Sign In</h2>

                    <!-- Username Input -->
                    <div class="form-group position-relative mb-3">
                        <i class="fas fa-user icon-input"></i>
                        <input type="text" class="form-control pl-5" placeholder="Username" v-model="username">
                    </div>

                    <!-- Password Input -->
                    <div class="form-group position-relative mb-4">
                        <i class="fas fa-lock icon-input"></i>
                        <input :type="showPassword ? 'text' : 'password'" class="form-control pl-5 pr-5"
                            placeholder="Password" v-model="password">
                        <i class="fas toggle-password" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
                            @click="togglePassword"></i>
                    </div>

                    <SignButton @click="goToReadList()">Sign In</SignButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignButton from '@/components/button/SignButton.vue';

export default {
    name: 'SignIn',
    components: { SignButton },
    data() {
        return {
            username: '',
            password: '',
            showPassword: false
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        goToReadList() {
            console.log("Username:", this.username);
            console.log("Password:", this.password);
        }
    }
}
</script>

<style scoped>
.sign-form {
    border-radius: 20px;
    background-color: white;
    min-height: 400px;
    max-height: 800px;
    width: 80%;
    overflow: auto;
}

.form-group {
    position: relative;
}

.icon-input {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
}

.toggle-password {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;
}

input.form-control {
    height: 45px;
}
</style>