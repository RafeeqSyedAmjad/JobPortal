import  { createContext, useContext, useState } from 'react';

const JobListingsContext = createContext();

export function useJobListings() {
    return useContext(JobListingsContext);
}

export function JobListingsProvider({ children }) {
    const [jobListings, setJobListings] = useState([]);

    const addJobListing = (newJob) => {
        setJobListings((prevListings) => [...prevListings, newJob]);
    };

    return (
        <JobListingsContext.Provider value={{ jobListings, addJobListing }}>
            {children}
        </JobListingsContext.Provider>
    );
}
