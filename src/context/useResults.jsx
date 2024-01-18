/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const urls = [
  "/categories.csv",
  "/customers.csv",
  "/employee_territories.csv",
  "/employees.csv",
  "/order_details.csv",
  "/orders.csv",
  "/products.csv",
  "/regions.csv",
  "/shippers.csv",
  "/suppliers.csv",
  "/territories.csv",
];

const ResultsContext = createContext({});

export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState(null);

  const getRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
  };

  const fetchResults = async () => {
    try {
      const response = await fetch(getRandomElement());
      const csvText = await response.text();
      const rows = csvText.split("\n").map((row) => row.split(","));
      const headers = rows[0];
      const data = rows.slice(1).map((row) => {
        const rowData = {};
        headers.forEach((header, index) => {
          rowData[header] = row[index];
        });
        return rowData;
      });
      setResults(data);
      const resultsFetchedEvent = new CustomEvent("resultsFetched");
      document.dispatchEvent(resultsFetchedEvent);
    } catch (error) {
      console.error("Error loading CSV file:", error);
    }
  };

  const contextValue = {
    results,
    fetchResults,
  };

  return (
    <ResultsContext.Provider value={contextValue}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResults = () => useContext(ResultsContext);
