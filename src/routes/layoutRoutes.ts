import { PostRoutes } from "../modules/posts/posts.routes";
import { UserRoutes } from "../modules/users/users.routes";

export const LayoutRoutes = [
    ...UserRoutes,
    ...PostRoutes
]