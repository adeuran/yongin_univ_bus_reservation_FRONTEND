<template>
    <div class="margin">
        <BodyHeadMessage v-bind:headMessage="headMessage" v-bind:contextMessage="contextMessage"></BodyHeadMessage>
        <LoginForm @login-clicked="loginClicked"></LoginForm>
    </div>
</template>

<script>
import BodyHeadMessage from '@/molecules/BodyHeadMessage.vue';
import LoginForm from '@/molecules/LoginForm.vue';
export default {
    name: 'LoginBody',
    components: {
        'BodyHeadMessage' : BodyHeadMessage,
        'LoginForm':LoginForm,
    },
    data() {
        return {
            headMessage: "로그인",
            contextMessage: "종합정보에 등록된 아이디와 비밀번호를 이용하여 로그인하시면 서비스를 이용하실 수 있습니다."
        }
    },
    methods: {
        loginClicked(identifier, password) {
            this.$emit('login-clicked', identifier, password);
        },
    }
}
</script>

<style scoped>
    .margin {
        margin: 40px;
    }
</style>