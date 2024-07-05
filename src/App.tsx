import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/LogIn/Register";
import AddProject from "./Pages/AddProject/AddProject";
import MyProjects from "./Pages/MyProjects/MyProjects";
import ProjectsToDo from "./Pages/Admin/ProjectsToDo/ProjectsToDo";
import ProtectedRoute from "./Components/ProtectedRoute";
import ReviewProject from "./Pages/Admin/ReviewProject";
import ReviewProjectInternalFolders from "./Pages/Admin/ReviewProjectInternalFolders";
import DisplayFile from "./Pages/Admin/displayFile/DisplayFile";
import CompletedProjects from "./Pages/Projects/CompletedProjects";
import AllProjects from "./Pages/Admin/AllProjects/AllProjects";

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8">
      <NavBar />
      <Sidebar />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <UserProvider>
      <AppLayout />
      // </UserProvider>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: (
          // <UserProvider>
          <Home />
          // </UserProvider>
        ),
      },
      {
        path: "/CompletedProjects",
        element: (
          // <UserProvider>
          <CompletedProjects />
          // </UserProvider>
        ),
      },
      {
        path: "/Add-Project",
        element: (
          // <UserProvider>
          <AddProject />
          // </UserProvider>
        ),
      },
      {
        path: "/My-Projects",
        element: (
          // <UserProvider>
          <MyProjects />
          // </UserProvider>
        ),
      },
      {
        path: "/Projects-to-do",
        element: (
          // <UserProvider>
          <ProtectedRoute adminOnly>
            <ProjectsToDo />
          </ProtectedRoute>
          // {/* </UserProvider> */}
        ),
      },
      {
        path: "/Projects",
        element: (
          // <UserProvider>
          <ProtectedRoute adminOnly>
            <AllProjects />
          </ProtectedRoute>
          // {/* </UserProvider> */}
        ),
      },
      {
        path: "/Projects-to-do/ReviewProject/:projectId",
        element: (
          // <UserProvider>
          // <ProtectedRoute adminOnly>
          <ReviewProject />
          // </ProtectedRoute>
          // {/* </UserProvider> */}
        ),
      },
      {
        path: "/Projects-to-do/ReviewProject/internal/:randomNum",
        element: (
          // <UserProvider>
          // <ProtectedRoute adminOnly>
          <ReviewProjectInternalFolders />
          // </ProtectedRoute>
          // {/* </UserProvider> */}
        ),
      },
      {
        path: "/file/content/:encodedUrl",
        element: (
          // <UserProvider>
          // <ProtectedRoute adminOnly>
          <DisplayFile />
          // </ProtectedRoute>
          // {/* </UserProvider> */}
        ),
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
