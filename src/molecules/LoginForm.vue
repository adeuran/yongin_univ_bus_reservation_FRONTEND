<template>
  <div>
    <input-box placeholder="아이디" type="text" prepend="person-fill" @input-from-child="idUpdate"></input-box>
    <input-box placeholder="비밀번호" type="password" prepend="key-fill" @input-from-child="passwordUpdate"></input-box>
    <Button message="로그인" @btn-clicked="btnClicked"></Button>
  </div>
</template>

<script>
import InputBox from '@/components/InputBox_Prefix_Icon';
import Button from '@/components/ButtonBlue';
export default {
  name: 'LoginForm',
  components: {
    InputBox,
    'Button': Button,
    },
    data() {
      return {
        identifier: '',
        password: '',
      }
    },
    methods: {
        idUpdate(inputText) {
          this.identifier = inputText;
        },
        passwordUpdate(inputText) {
          this.password = inputText;
        },
        btnClicked(e) {
          this.$emit("login-clicked", this.identifier, this.password)
        }
    },
    
}
</script>

<style scoped>
  
</style>
