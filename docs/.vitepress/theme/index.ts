import Theme from 'vitepress/theme'
import {h} from 'vue';
import 'virtual:group-icons.css'
import "./var.css"
import Giscus from "./components/giscus.vue";

export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            'doc-after': () => h(Giscus),
        });
    }
}
