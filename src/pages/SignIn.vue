<template>
    <div class="container-fluid d-flex align-items-center justify-content-center"
        style="height: 100vh; background-color: var(--sand);">
        <div class="row w-100">
            <div class="col-lg-6 col-md-12 text-center mb-4 mb-md-0">
                <img @click="goHome()" :src="require('@/assets/images/open-book.png')" alt="Open Book" class="img-fluid"
                    style="max-width: 80%; cursor: pointer;" />
            </div>

            <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                <div class="sign-form p-4">
                    <h2 class="text-center mb-4">Sign In</h2>
                    <div class="form-group position-relative mb-3">
                        <i class="fas fa-user icon-input"></i>
                        <input type="text" class="form-control pl-5" style="padding-left: 40px; font-family: 'Poppins';"
                            placeholder="Username" v-model="username">
                    </div>

                    <div class="form-group position-relative mb-4">
                        <i class="fas fa-lock icon-input"></i>
                        <input :type="showPassword ? 'text' : 'password'" class="form-control pl-5 pr-5"
                            style="padding-left: 40px; font-family: 'Poppins';" placeholder="Password"
                            v-model="password">
                        <i class="fas toggle-password" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
                            @click="togglePassword"></i>
                    </div>
                    <div class="row" style="justify-self: flex-end;">
                        <span @click="goToSignUp()" class="link" style="margin-top: -20px; margin-bottom: 20px;">Forgot
                            password</span>
                    </div>
                    
                    <SignButton type="submit" @click="signIn()">Sign In</SignButton>
                    <div class="row" style="justify-self: center; padding: 20px;">
                        <span @click="goToSignUp()" class="link">Create an account</span>
                    </div>
                    <div class="row" style="justify-self:center;">
                        <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignButton from '@/components/button/signButton.vue';

export default {
    name: 'SignIn',
    components: { SignButton },
    data() {
        return {
            username: '',
            password: '',
            showPassword: false,
            errorMessage: '',
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        signIn() {
            sessionStorage.setItem('username', this.username === '' ? 'guest' : this.username)
            sessionStorage.setItem('password', this.password)

            if (sessionStorage.getItem('username') === 'naddechan' && sessionStorage.getItem('password') === 'test123') {
                this.errorMessage = '';
                this.goHome();
            } else if (sessionStorage.getItem('username') !== 'naddechan') {
                this.errorMessage = 'Username not exist';
                setTimeout(() => {
                    this.errorMessage = '';
                }, 1000);
            } else if (sessionStorage.getItem('password') !== 'test123') {
                this.errorMessage = 'Wrong password';
                setTimeout(() => {
                    this.errorMessage = '';
                }, 1000);
            }
        },
        goToReadList() {
            this.$router.push("/readlist");
        },
        goHome() {
            this.$router.push("/prosepeek");
        },
        goToSignUp() {
            this.$router.push("/signup");
        },
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

.link {
    color: var(--orange);
    font-family: 'Poppins';
    font-size: 12px;
}

.link:hover {
    text-decoration: underline;
    cursor: pointer;
}

.error-message {
    color: red;
    font-size: 11px;
    font-family: 'Poppins';
}
</style>