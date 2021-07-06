import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies';
import TokenDTO from '@/dto/TokenDTO';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        host:'//localhost:3000',
        accessToken: null,
        refreshToken: null,
    },
    getters: {
        getTokens(state) {
            return {
                accessToken: state.accessToken?state.accessToken:null,
                refreshToken: state.refreshToken?state.refreshToken:null,
            };
        },
        getOnlyTokens(state) {
            return {
                accessToken: state.accessToken?state.accessToken.token:null,
                refreshToken: state.refreshToken?state.refreshToken.token:null,
            };
        }
    },
    mutations: {
        setAccessToken(state, accessToken) {
            VueCookies.set('accessToken', accessToken, '1H');
            state.accessToken = new TokenDTO();
            state.accessToken.token = accessToken;
        },
        loadAccessToken(state) {
            const cookieValue = VueCookies.get('accessToken');
            if (!cookieValue)
                state.accessToken = null;
            else {
                state.accessToken = new TokenDTO();
                state.accessToken.token = cookieValue;
            }
        },
        setRefreshToken(state, refreshToken) {
            VueCookies.set('refreshToken', refreshToken, '14D');
            state.refreshToken = new TokenDTO();
            state.refreshToken.token = refreshToken;
        },
        loadRefreshToken(state) {
            const cookieValue = VueCookies.get('refreshToken');
            if (!cookieValue)
                state.refreshToken = null;
            else {
                state.refreshToken = new TokenDTO();
                state.refreshToken.token = cookieValue;
            }
        },
        deleteAllToken(state) {
            VueCookies.remove('accessToken');
            VueCookies.remove('refreshToken');
            state.accessToken = null;
            state.refreshToken = null;
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
            let response = await fetch(context.state.host + '/user/login', option);
            if (response.ok) {
                const responseBody = await response.json();
                context.commit('setAccessToken', responseBody.accessToken);
                context.commit('setRefreshToken', responseBody.refreshToken);
            } else {
                throw new Error("LOGIN ERROR");
            }
            
        },
    }
});