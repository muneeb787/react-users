import UserCreate from "./pages/users.create.js"
import UserIndex from "./pages/users.index.jsx"
import UserUpdate from "./pages/users.update.js"
export const UserRoutes = [
    {
        title: "All Users",
        path: "users",
        element: <UserIndex />
    },
    {
        title: "Crete User",
        path: "users/create",
        element: <UserCreate />
    },
    {
        title: "View User",
        path: "users/:id",
        // element: 
    },
    {
        title: "Update User",
        path: "users/update/:id",
        element: <UserUpdate /> 
    },
]