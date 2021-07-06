import store from '@/store'; // vue가 아닌 구역에서 helper를 이용해 vuex접근
import authUtil from "@/utils/auth";

export default {
    post(path, body) {
        const type = "post";
        const options = this.getOption(type, body);
        return this.fetcher(path, options);
    },
    get(path) {
        const type = "get";
        const options = this.getOption(type);
        return this.fetcher(path, options);
    },
    delete(path, body) {
        const type = "delete";
        const options = this.getOption(type, body);
        return this.fetcher(path, options);
    },
    async fetcher(path, options) {
        const hostUrl = store.state.host;
        let response, header, body;
        try {
            // 비동기 통신
            response = await fetch(hostUrl + path, options);
            // 정상적으로 수신했다면 JSON 파싱
            if (response.ok) {
                header = response.headers;
                if (header.get("access-token")) {   // access Token이 갱신되어 왔다면
                    store.commit('setAccessToken', header.get("access-token"));
                }
                if (header.get("refresh-token")) {  // refresh Token이 갱신되어 왔다면
                    store.commit("setRefreshToken", header.get("refresh-token"));
                }
                body = await response.json();
            }
        } catch (error) {
            throw Error(error);
        }
        return body;
    },
    getOption(type, body) {
        const tokens = authUtil.getTokens();
        return {
                method: type,
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "access-token": tokens.accessToken?tokens.accessToken.token:null,
                    "refresh-token": tokens.refreshToken?tokens.refreshToken.token:null,
                }
            };
    },
}