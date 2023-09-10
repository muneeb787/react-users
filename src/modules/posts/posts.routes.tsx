import PostIndex from "./pages/post.index";

export const PostRoutes = [
    {
        title: "All Posts",
        path: "posts",
        element: <PostIndex /> 
    },
    {
        title: "Crete User",
        path: "posts/create",
        // element: <UserCreate />
    },
    {
        title: "View User",
        path: "post/:id",
        // element: 
    },
    {
        title: "Update User",
        path: "post/update/:id",
        // element: <UserUpdate /> 
    },
]