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
                    <form @submit.prevent="goHome">
                        <h2 class="text-center mb-4">Sign Up</h2>
                        <div class="form-group position-relative mb-3">
                            <i class="fas fa-user icon-input"></i>
                            <input type="text" class="form-control pl-5"
                                style="padding-left: 40px; font-family: 'Poppins';" placeholder="Username"
                                v-model="username">
                        </div>

                        <div class="form-group position-relative mb-3">
                            <i class="fas fa-lock icon-input"></i>
                            <input :type="showPassword ? 'text' : 'password'" class="form-control pl-5 pr-5"
                                style="padding-left: 40px; font-family: 'Poppins';" placeholder="Password"
                                v-model="password">
                            <i class="fas toggle-password" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
                                @click="togglePassword"></i>
                        </div>

                        <div class="form-group position-relative mb-4">
                            <i class="fas fa-lock icon-input"></i>
                            <input :type="showConfirmPassword ? 'text' : 'password'" class="form-control pl-5 pr-5"
                                style="padding-left: 40px; font-family: 'Poppins';" placeholder="Confirm Password"
                                v-model="confirmPassword">
                            <i class="fas toggle-password" :class="showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
                                @click="toggleConfirmPassword"></i>
                        </div>
                        <SignButton
                            :disabled="username === '' || password === '' || confirmPassword === '' || (password !== confirmPassword)"
                            type="submit">Sign Up</SignButton>
                    </form>
                    <div class="row" style="justify-self: center; padding-top: 10px;">
                        <span @click="goToSignIn()" class="link">Already have an account</span>
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
    name: 'SignUp',
    components: { SignButton },
    data() {
        return {
            username: '',
            password: '',
            showPassword: false,
            confirmPassword: '',
            showConfirmPassword: false
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        goHome() {
            this.$router.push("/prosepeek");
        },
        goToSignIn() {
            this.$router.push("/signin");
        },
    },
    watch: {
        password() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = "Passwords do not match.";
                return;
            } else {
                this.errorMessage = "";
            }
        },
        confirmPassword() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = "Passwords do not match.";
                return;
            } else {
                this.errorMessage = "";
            }
        },
        formWatcher: {
            handler(newVal) {
                const [username, password, confirmPassword] = newVal;

                if (!username || !password || !confirmPassword) {
                    this.errorMessage = 'Fill in all details correctly.';
                }
            },
            immediate: true
        }
    },
    computed: {
        formWatcher() {
            return [this.username, this.password, this.confirmPassword];
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