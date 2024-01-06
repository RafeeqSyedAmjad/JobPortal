import { useState } from 'react';
import { useJobListings } from '../contexts/JobListingsContext';
import Navbar from './Navbar';

const EmployerDashboardPage = () => {
    const { addJobListing } = useJobListings(); // Renamed to avoid naming conflict

    // Local state to manage job listings posted by the employer
    const [localJobListings, setLocalJobListings] = useState([]);

    // Function to handle adding new job listings locally
    const addLocalJobListing = (newJob) => {
        setLocalJobListings([...localJobListings, newJob]);
    };

    return (  
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Employer Dashboard</h1>

                {/* Form to add new job listings */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        // Get form data and add a new job listing locally
                        const formData = new FormData(e.target);
                        const newJob = {
                            id: localJobListings.length + 1,
                            title: formData.get('title'),
                            company: formData.get('company'),
                            location: formData.get('location'),
                            description: formData.get('description'),
                        };
                        addLocalJobListing(newJob);
                        addJobListing(newJob);
                        e.target.reset();
                    }}
                    className="mb-8"
                >
                    <div className="flex flex-col mb-4">
                        <label htmlFor="title" className="mb-2 font-semibold">
                            Job Title
                        </label>
                        <input type="text" id="title" name="title" required className="border rounded px-2 py-1" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="company" className="mb-2 font-semibold">
                            Job Company
                        </label>
                        <input type="text" id="company" name="company" required className="border rounded px-2 py-1" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="location" className="mb-2 font-semibold">
                            Job Location
                        </label>
                        <input type="text" id="location" name="location" required className="border rounded px-2 py-1" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="mb-2 font-semibold">
                            Job Description
                        </label>
                        <textarea id="description" name="description" rows="4" required className="border rounded px-2 py-1" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Post Job
                    </button>
                </form>


                {/* Display job listings from local state */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {localJobListings.map((job) => (
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

export default EmployerDashboardPage;
