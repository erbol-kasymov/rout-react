import { Contacts } from "./components/Contacts";
import { Home } from "./components/Home";
import { About } from "./components/About";

export const data = [
    {
        route: "/",
        exact:true,
        name: "Главная",
        component: () => <Home/>
    },
    {
        route: "/about",
        exact:true,
        name: "О нас",
        component: () => <About/>
    },
    {
        route: "/contacts",
        exact:true,
        name: "Контакты",
        component: () => <Contacts/>
    }
]