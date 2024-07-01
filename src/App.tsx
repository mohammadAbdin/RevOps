// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { UserProvider } from "./Context/UserContext";

// import Sidebar from "./Components/SideBar";
// import NavBar from "./Components/NavBar";
// import Home from "./Pages/Home/Home";
// import Projects from "./Pages/Projects/Projects";
// import LogIn from "./Pages/LogIn/LogIn";
// // import { UserProvider } from "./Context/UserContext";
// import Register from "./Pages/LogIn/Register";
// import AddProject from "./Pages/AddProject/AddProject";
// import MyProjects from "./Pages/MyProjects/MyProjects";
// import ProjectsToDo from "./Pages/Admin/ProjectsToDo/ProjectsToDo";

// const AppLayout = () => {
//   return (
//     <div className="h-full w-full flex flex-row gap-8">
//       <NavBar />
//       <Sidebar />
//     </div>
//   );
// };
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <UserProvider>
//         <AppLayout />
//       </UserProvider>
//     ),
//     children: [
//       {
//         index: true,
//         path: "/",
//         element: (
//           <UserProvider>
//             <Home />
//           </UserProvider>
//         ),
//       },
//       {
//         path: "/Projects",
//         element: (
//           <UserProvider>
//             <Projects />,
//           </UserProvider>
//         ),
//       },
//       {
//         path: "/Add-Project",
//         element: (
//           <UserProvider>
//             <AddProject />,
//           </UserProvider>
//         ),
//       },
//       {
//         path: "/My-Projects",
//         element: (
//           <UserProvider>
//             <MyProjects />,
//           </UserProvider>
//         ),
//       },
//       {
//         path: "/Projects-to-do",
//         element: (
//           <UserProvider>
//             <ProjectsToDo />
//           </UserProvider>
//         ),
//       },
//       {
//         path: "/LogIn",
//         element: <LogIn />,
//       },
//       {
//         path: "/Register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { UserProvider } from "./Context/UserContext";
import Sidebar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/LogIn/Register";
import AddProject from "./Pages/AddProject/AddProject";
import MyProjects from "./Pages/MyProjects/MyProjects";
import ProjectsToDo from "./Pages/Admin/ProjectsToDo/ProjectsToDo";
import ProtectedRoute from "./Components/ProtectedRoute";

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
        path: "/Projects",
        element: (
          // <UserProvider>
          <Projects />
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
