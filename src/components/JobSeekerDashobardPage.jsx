// import { useJobListings } from '../contexts/JobListingsContext';
import Navbar from './Navbar';

const JobSeekerDashboardPage = () => {
    // const { jobListings } = useJobListings();
    
    const jobListings = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Tech Company Inc.',
            location: 'Remote',
            description: 'We are looking for a skilled Software Engineer with expertise in JavaScript, React, and Node.js. The ideal candidate should have experience in building scalable web applications and a strong understanding of software development principles.',
        },
        {
            id: 2,
            title: 'Marketing Manager',
            company: 'Marketing Co.',
            location: 'New York',
            description: 'We are seeking an experienced Marketing Manager to develop and execute marketing strategies. The ideal candidate should have a proven track record in creating successful marketing campaigns, strong leadership skills, and the ability to analyze market trends.',
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Data Analytics Firm',
            location: 'San Francisco',
            description: 'Join our team as a Data Scientist to analyze complex data sets, build predictive models, and generate valuable insights. The candidate should have expertise in machine learning algorithms, statistical analysis, and data visualization tools.',
        },
        {
            id: 4,
            title: 'UX/UI Designer',
            company: 'Creative Studio',
            location: 'Remote',
            description: 'We are looking for a talented UX/UI Designer to create intuitive user interfaces and engaging user experiences. The ideal candidate should have a strong portfolio showcasing innovative design solutions, proficiency in design tools, and an understanding of user-centered design principles.',
        },
        // Add more job listings as needed
    ];




    return (
       <div>
            <Navbar /> {/* Pass handleLogout function as a prop */}

            <div className="container px-4 py-8 mx-auto">
                <h1 className="mb-4 text-3xl font-bold">Available Jobs</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {jobListings.map((job) => (
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

export default JobSeekerDashboardPage;
