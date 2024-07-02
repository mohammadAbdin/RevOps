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
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      setIsLogedIn(true);
      return data;
    } else {
      const errorData = await response.json();
      console.log(errorData);

      setError(errorData.message || "Login failed");
    }
  } catch (error) {
    console.log("error");

    setError("An error occurred. Please try again.");
  }
};
