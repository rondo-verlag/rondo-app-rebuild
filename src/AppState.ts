import { reactive } from "vue";
import { GetResult, Preferences } from "@capacitor/preferences";

const state = reactive({
    hasBought: false,
    setHasBought: (value: boolean) => {
        state.hasBought = value
        Preferences.set({ key: 'hasBought', value: value ? 'true' : 'false' })
    },
})

Preferences.get({ key: 'hasBought' }).then((result: GetResult) => {
    state.hasBought = result.value == 'true'
})

export default state;
