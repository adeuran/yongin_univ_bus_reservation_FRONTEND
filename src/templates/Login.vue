<template>
    <div>
        <top-header> </top-header>
        <login-body @login-clicked="loginClicked"></login-body>
  </div>
</template>

<script>
import LoginBody from '@/organisms/LoginBody';
import TopHeader from '@/organisms/TopHeader.vue';

import auth from "@/utils/auth"
export default {
    name: 'LoginPage',
    components: {
        LoginBody,
        TopHeader,
    },
    methods: {
        async loginClicked(identifier, password) {
          try{
            await this.$store.dispatch('login', {identifier, password, });
            this.$router.replace('/');
          } catch(error){
            console.log(error)
            this.LoginError();
          }
          
          
        },
        LoginError() {
          this.$bvModal.msgBoxOk('아이디와 비밀번호를 다시 확인해주세요.', {
            title: '실패',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'info',
            okTitle: '확인',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true
          });
      }
    },
    beforeCreate() {
      if(auth.getAccessToken()) {
        this.$router.replace('/')
      }
    }
}
</script>

<style scoped>
    
</style>