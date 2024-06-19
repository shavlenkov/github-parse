import Index from "../pages/Index";
import Favorites from "../pages/Favorites";

export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/favorites', component: Favorites, exact: true},
]