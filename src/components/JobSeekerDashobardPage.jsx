import { useJobListings } from '../contexts/JobListingsContext';
import Navbar from './Navbar';
import { useState } from 'react';

const JobSeekerDashboardPage = () => {
    const { jobListings } = useJobListings();
    const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State to manage logout popup

    const handleLogout = () => {
        // Logic to handle logout popup visibility
        setShowLogoutPopup(true);
    };

    return (
       <div>
            <Navbar setShowLogout={handleLogout} /> {/* Pass handleLogout function as a prop */}

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobListings.map((job) => (
                        <div key={job.id} className="border p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                            <p className="text-gray-600 mb-2">{job.company}</p>
                            <p className="text-gray-600 mb-2">{job.location}</p>
                            <p className="text-gray-700">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
       </div>
        
    );
};

export default JobSeekerDashboardPage;
