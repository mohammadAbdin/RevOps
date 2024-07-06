// export const logIn = async (
//   email: string,
//   password: string,
//   name: string,
//   setIsLogedIn: (isLogedIn: boolean) => void,
//   setError: (error: string) => void,
//   path: string
// ) => {
//   try {
//     const response = await fetch(`http://localhost:5000${path}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password, name }),
//       credentials: "include",
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setIsLogedIn(true);
//       return data;
//     } else {
//       const errorData = await response.json();
//       console.log(errorData);

//       setError(errorData.message || "Login failed");
//     }
//   } catch (error) {
//     console.log("error");

//     setError("An error occurred. Please try again.");
//   }
// };
import axios from "axios";

export const logIn = async (
  email: string,
  password: string,
  name: string,
  setIsLogedIn: (isLogedIn: boolean) => void,
  setError: (error: string) => void,
  path: string
) => {
  try {
    const response = await axios.post(
      `http://localhost:5000${path}`,
      { email, password, name },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Include if your server requires credentials
      }
    );

    setIsLogedIn(true);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorData = error.response.data;
        console.log(errorData);

        setError(errorData.message || "Login failed");
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError("No response from the server.");
      } else {
        console.error("Error:", error.message);
        setError(error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  }
};
