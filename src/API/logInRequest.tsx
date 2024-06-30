export const logIn = async (
  email: string,
  password: string,
  name: string,
  setIsLogedIn: (isLogedIn: boolean) => void,
  setError: (error: string) => void,
  path: string
) => {
  try {
    const response = await fetch(`http://localhost:5000${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
      credentials: "include", // Ensure cookies are included
    });
    console.log(email, password);

    if (response.ok) {
      // console.log(email, password);
      const data = await response.json();
      setIsLogedIn(true);
      return data;
    } else {
      // console.log(email, password);
      console.log("li");
      const errorData = await response.json();
      console.log(errorData);

      setError(errorData.message || "Login failed");
    }
  } catch (error) {
    console.log("error");

    setError("An error occurred. Please try again.");
  }
};
