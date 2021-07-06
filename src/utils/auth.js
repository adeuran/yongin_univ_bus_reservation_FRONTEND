import store from "@/store"

export default {
    getAccessToken() {  // getAccessToken
        store.commit("loadAccessToken");    // check token expired
        return store.state.accessToken;
    },
    getRefreshToken() { // getRefreshToken
        store.commit("loadRefreshToken");    // check token expired
        return store.state.refreshToken;
    },
    getTokens() {   // get AccessToken and RefreshToken
        store.commit("loadAccessToken");
        store.commit("loadRefreshToken");
        return store.getters.getTokens;
    }
}