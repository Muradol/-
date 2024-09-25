import { defineStore } from "pinia";
var useLayOutSettingStore = defineStore('SettingStore', {
    state: function () {
        return {
            fold: false,
            refsh: false,
        };
    }
});
export default useLayOutSettingStore;
