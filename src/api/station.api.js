import ApiHelper from "@/api/api-helper";

export default {
    getAll() {
        const path = "/station/getall";
        return ApiHelper.get(path);
    }
}