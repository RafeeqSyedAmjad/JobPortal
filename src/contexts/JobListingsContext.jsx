import { createContext, useContext, useState } from 'react';

const JobListingsContext = createContext();

export const useJobListings = () => useContext(JobListingsContext);

export const JobListingsProvider = ({ children }) => {
    const [jobListings, setJobListings] = useState([]);

    const addJobListing = (newJob) => {
        setJobListings((prevJobListings) => [...prevJobListings, newJob]);
    };

    return (
        <JobListingsContext.Provider value={{ jobListings, addJobListing }}>
            {children}
        </JobListingsContext.Provider>
    );
};
