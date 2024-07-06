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
import ProjectsByTag from "./Pages/SearchResults/SearchResults";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8">
      <NavBar />
      <Sidebar />
      <ToastContainer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/CompletedProjects",
        element: <CompletedProjects />,
      },
      {
        path: "/Add-Project",
        element: <AddProject />,
      },
      {
        path: "/My-Projects",
        element: <MyProjects />,
      },
      {
        path: "/Projects/:tag",
        element: <ProjectsByTag />,
      },
      {
        path: "/Projects-to-do",
        element: (
          <ProtectedRoute adminOnly>
            <ProjectsToDo />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Projects",
        element: (
          <ProtectedRoute adminOnly>
            <AllProjects />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Projects-to-do/ReviewProject/:projectId",
        element: <ReviewProject />,
      },
      {
        path: "/Projects-to-do/ReviewProject/internal/:randomNum",
        element: <ReviewProjectInternalFolders />,
      },
      {
        path: "/file/content/:encodedUrl",
        element: <DisplayFile />,
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
