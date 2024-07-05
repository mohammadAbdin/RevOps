import React, { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const SearchInput: React.FC = () => {
  const navigate = useNavigate();
  const { searchData } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);

    if (searchData) {
      const results = Object.keys(searchData).filter((key) =>
        key.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setFilteredResults([]); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="input-component relative mr-16 w-40 lg:w-64">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="Search"
        placeholder="Search for..."
        value={query}
        onChange={handleInputChange} // Handle input changes
        className="w-40 lg:w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm p-4 text-black bg-white"
      />
      <span className="absolute inset-y-0 right-0 grid w-10  lg:w-20 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
      {filteredResults.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute  w-40 lg:w-64 ml-20 lg:ml-0 bg-white shadow-md rounded-xl z-10"
        >
          {filteredResults.map((key) => (
            <div
              key={key}
              // navigate(
              //   `/Projects-to-do/ReviewProject/${searchData[`${key}`]}`
              // )
              onClick={() => {
                if (searchData) {
                  if (searchData[`${key}`] == key) {
                    console.log("it is a tag");
                    navigate(`/Projects/${searchData[`${key}`]}`);
                    window.location.reload();
                  } else {
                    navigate(
                      `/Projects-to-do/ReviewProject/${searchData[`${key}`]}`
                    );
                  }
                }
              }}
              className="p-2 hover:bg-gray-800 bg-gray-600 cursor-pointer text-white"
            >
              {key}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
