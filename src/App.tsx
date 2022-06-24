import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { Login } from './views/login';


export const APP1 = defineComponent({
    setup() {
        return () => <div>

            asdasdasd
            <RouterView />
            <Login />
        </div>
    }
})