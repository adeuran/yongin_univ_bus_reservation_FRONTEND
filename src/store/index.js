import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies'


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        host:'http://localhost:3000',
        accessToken: VueCookies.get('accessToken'),
        refreshToken: VueCookies.get('refreshToken'),
    },
    mutations: {
        loginToken(state, {accessToken,refreshToken}) {
            VueCookies.set('accessToken', accessToken, '1H');
            VueCookies.set('refreshToken', refreshToken, '14D');
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
        },
        removeToken(state) {
            VueCookies.remove('accessToken');
            VueCookies.remove('refreshToken');
            state.accessToken = '';
            state.refreshToken = '';
        }
    },
    getters: {
        // 쿠키에 토큰 불러오기
        getToken(state) {
            state.accessToken = VueCookies.get('accessToken');
            state.refreshToken = VueCookies.get('refreshToken');
            return {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            };
        }
    },
    actions: {
        async login(context, { identifier, password }) {
            const option = {
                method: 'post',
                body: JSON.stringify({
                    identifier: identifier,
                    password: password,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            };
            const response = await fetch(context.state.host + '/user/login', option);
            if (response.ok) {
                const tokens = await response.json();
                return context.commit('loginToken', {
                    refreshToken: tokens.refreshToken,
                    accessToken: tokens.accessToken,
                });
            } else {
                throw new Error("HTTP error " + response.status);
            }
        },
    }
});