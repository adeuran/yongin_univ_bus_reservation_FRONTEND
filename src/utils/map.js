import loadScriptOnce from 'load-script-once';
import kakao from "@/config/kakao.json";

const DAUM_KAKAO_API_JS_KEY = kakao.jsAppkey;
const DAUM_KAKAO_MAP_LIB_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${DAUM_KAKAO_API_JS_KEY}`

class Map {
    constructor() {
        this.map = null;
        
    }
    initialize() {
        return new Promise((resolve, reject))
    }

}