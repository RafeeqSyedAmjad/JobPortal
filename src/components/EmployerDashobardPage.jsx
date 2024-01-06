import { useEffect, useState } from 'react';
import { useJobListings } from '../contexts/JobListingsContext';
import Navbar from './Navbar';

const EmployerDashboardPage = () => {
    const { addJobListing } = useJobListings();

    // Retrieve stored job listings from localStorage on initial load
    const storedJobListings = JSON.parse(localStorage.getItem('jobListings')) || [];
    const [localJobListings, setLocalJobListings] = useState(storedJobListings);

    // Function to update job listings in localStorage
    const updateLocalStorage = (updatedListings) => {
        localStorage.setItem('jobListings', JSON.stringify(updatedListings));
        setLocalJobListings(updatedListings);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newJob = {
            id: localJobListings.length + 1,
            title: formData.get('title'),
            company: formData.get('company'),
            location: formData.get('location'),
            description: formData.get('description'),
        };
        const updatedListings = [...localJobListings, newJob];
        updateLocalStorage(updatedListings);
        addJobListing(newJob);
        e.target.reset();
    };

    useEffect(() => {
        // Update local state with data from localStorage on mount
        const storedListings = JSON.parse(localStorage.getItem('jobListings')) || [];
        setLocalJobListings(storedListings);
    }, []);

    return (  
        <div>
            <Navbar/>
            <div className="container px-4 py-8 mx-auto">
                <h1 className="mb-4 text-3xl font-bold">Employer Dashboard</h1>

                {/* Form to add new job listings */}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col mb-4">
                        <label htmlFor="title" className="mb-2 font-semibold">
                            Job Title
                        </label>
                        <input type="text" id="title" name="title" required className="px-2 py-1 border rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="company" className="mb-2 font-semibold">
                            Job Company
                        </label>
                        <input type="text" id="company" name="company" required className="px-2 py-1 border rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="location" className="mb-2 font-semibold">
                            Job Location
                        </label>
                        <input type="text" id="location" name="location" required className="px-2 py-1 border rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="mb-2 font-semibold">
                            Job Description
                        </label>
                        <textarea id="description" name="description" rows="4" required className="px-2 py-1 border rounded" />
                    </div>
                    <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded">
                        Post Job
                    </button>
                </form>


                {/* Display job listings from local state */}
                <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
                    {localJobListings.map((job) => (
                        <div key={job.id} className="p-4 border rounded-md shadow-md">
                            <h2 className="mb-2 text-xl font-semibold">{job.title}</h2>
                            <p className="mb-2 text-gray-600">{job.company}</p>
                            <p className="mb-2 text-gray-600">{job.location}</p>
                            <p className="text-gray-700">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
        
    );
};

export default EmployerDashboardPage;
