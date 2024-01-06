import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        userRole: '', // New field to store user role (Job Seeker or Job Poster)
        resume: '', // New field to store uploaded resume (for Job Seekers)
        preferredRole: '', // Added field for preferred role (for Job Seekers)
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? e.target.files[0] : value, // Handle file upload for resume
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword, userRole, resume, preferredRole } = formData;

        // Basic validation
        if (name && email && password && password === confirmPassword && userRole) {
            const userData = {
                name,
                email,
                password,
                userRole,
            };

            if (userRole === 'Job Seeker') {
                userData.resume = resume.name; // Store resume name for Job Seekers
                userData.preferredRole = preferredRole; // Store preferred role for Job Seekers
            }

            // Store user data in Local Storage
            localStorage.setItem('user', JSON.stringify(userData));

            // Redirect to login page and show success message
            alert('Signup successful! Redirecting to login page.');
            navigate('/login');
        } else {
            // Show error alert for invalid or missing data
            alert('Please fill in all fields correctly.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-8 text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-80">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="userRole" className="block mb-2">
                        Are you a Job Seeker or Job Poster?
                    </label>
                    <select
                        id="userRole"
                        name="userRole"
                        value={formData.userRole}
                        onChange={handleChange}
                        className="w-full px-2 py-1 border rounded"
                    >
                        <option value="">Select</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Job Poster">Job Poster</option>
                    </select>
                </div>
                {formData.userRole === 'Job Seeker' && (
                    <div className="mb-4">
                        <label htmlFor="resume" className="block mb-2">
                            Upload Resume
                        </label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded"
                        />
                        <label htmlFor="preferredRole" className="block mb-2">
                            Preferred Role
                        </label>
                        <input
                            type="text"
                            id="preferredRole"
                            name="preferredRole"
                            value={formData.preferredRole}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded"
                        />
                    </div>
                    
                )}
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpPage;
