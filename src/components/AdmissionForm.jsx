import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { School, Person, Email, Phone, LocationOn, CalendarToday, Send } from '@mui/icons-material';

function AdmissionForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        studentName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: '',
        classApplying: '',
        parentName: '',
        parentOccupation: '',
        parentPhone: '',
        parentEmail: '',
        howDidYouHear: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.studentName.trim()) errors.studentName = 'Student name is required';
        if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.phone) errors.phone = 'Phone number is required';
        if (!formData.address.trim()) errors.address = 'Address is required';
        if (!formData.classApplying) errors.classApplying = 'Please select a class';
        if (!formData.parentName.trim()) errors.parentName = 'Parent name is required';
        if (!formData.parentPhone) errors.parentPhone = 'Parent phone number is required';
        if (!formData.parentEmail) {
            errors.parentEmail = 'Parent email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.parentEmail)) {
            errors.parentEmail = 'Parent email is invalid';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitError('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        // Simulate API call to backend
        setTimeout(() => {
            // In a real application, you would send the data to your backend
            console.log('Form submitted:', formData);

            // Simulate successful submission
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Show success alert
            alert('🎉 Admission Application Submitted Successfully! 🎉\n\nThank you for applying to Datforte International Schools.\n\nWe have received your application and will review it shortly.\n\nYou will receive an email confirmation at ' + formData.email + ' with further instructions.\n\nIf you have any questions, please contact our admissions office:\n📞 Phone: +234 123 456 7890\n📧 Email: admissions@datforte.edu.ng');

            // Reset form
            setFormData({
                studentName: '',
                dateOfBirth: '',
                gender: '',
                email: '',
                phone: '',
                address: '',
                previousSchool: '',
                classApplying: '',
                parentName: '',
                parentOccupation: '',
                parentPhone: '',
                parentEmail: '',
                howDidYouHear: '',
                message: ''
            });

            // Redirect to home page after 3 seconds
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        <span className="block">Online Admission Form</span>
                        <span className="block text-blue-600 mt-2">Datforte International Schools</span>
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Apply for admission to our prestigious institution
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="px-6 py-8 sm:p-10">
                        {submitSuccess ? (
                            <div className="text-center py-12">
                                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-2xl font-medium text-gray-900">Application Submitted Successfully!</h3>
                                <div className="mt-4 text-gray-500">
                                    <p>Thank you for your interest in Datforte International Schools.</p>
                                    <p className="mt-2">We have received your application and will review it shortly.</p>
                                    <p className="mt-2">You will be redirected to the home page shortly...</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <School className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-blue-700">
                                                Please fill out all required fields. Fields marked with <span className="text-red-500">*</span> are required.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <Person className="mr-2 text-blue-600" /> Student Information
                                    </h2>
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="studentName"
                                                    id="studentName"
                                                    required
                                                    value={formData.studentName}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.studentName ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.studentName && <p className="mt-1 text-sm text-red-600">{formErrors.studentName}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                                                Date of Birth <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="date"
                                                    name="dateOfBirth"
                                                    id="dateOfBirth"
                                                    required
                                                    value={formData.dateOfBirth}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.dateOfBirth ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{formErrors.dateOfBirth}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                                Gender <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="gender"
                                                    name="gender"
                                                    required
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.gender ? 'border-red-500' : ''}`}
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                {formErrors.gender && <p className="mt-1 text-sm text-red-600">{formErrors.gender}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.email ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.phone ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                Address <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="address"
                                                    name="address"
                                                    rows={3}
                                                    required
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.address ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.address && <p className="mt-1 text-sm text-red-600">{formErrors.address}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">
                                                Previous School
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="previousSchool"
                                                    id="previousSchool"
                                                    value={formData.previousSchool}
                                                    onChange={handleChange}
                                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="classApplying" className="block text-sm font-medium text-gray-700">
                                                Class Applying For <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="classApplying"
                                                    name="classApplying"
                                                    required
                                                    value={formData.classApplying}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.classApplying ? 'border-red-500' : ''}`}
                                                >
                                                    <option value="">Select Class</option>
                                                    <option value="nursery1">Nursery 1</option>
                                                    <option value="nursery2">Nursery 2</option>
                                                    <option value="kg1">KG 1</option>
                                                    <option value="kg2">KG 2</option>
                                                    <option value="grade1">Grade 1</option>
                                                    <option value="grade2">Grade 2</option>
                                                    <option value="grade3">Grade 3</option>
                                                    <option value="grade4">Grade 4</option>
                                                    <option value="grade5">Grade 5</option>
                                                    <option value="jss1">JSS 1</option>
                                                    <option value="jss2">JSS 2</option>
                                                    <option value="jss3">JSS 3</option>
                                                    <option value="sss1">SSS 1</option>
                                                    <option value="sss2">SSS 2</option>
                                                    <option value="sss3">SSS 3</option>
                                                </select>
                                                {formErrors.classApplying && <p className="mt-1 text-sm text-red-600">{formErrors.classApplying}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-200">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <Person className="mr-2 text-blue-600" /> Parent/Guardian Information
                                    </h2>
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                                                Parent/Guardian Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="parentName"
                                                    id="parentName"
                                                    required
                                                    value={formData.parentName}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.parentName ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.parentName && <p className="mt-1 text-sm text-red-600">{formErrors.parentName}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="parentOccupation" className="block text-sm font-medium text-gray-700">
                                                Parent/Guardian Occupation
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="parentOccupation"
                                                    id="parentOccupation"
                                                    value={formData.parentOccupation}
                                                    onChange={handleChange}
                                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
                                                Parent/Guardian Phone <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="tel"
                                                    name="parentPhone"
                                                    id="parentPhone"
                                                    required
                                                    value={formData.parentPhone}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.parentPhone ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.parentPhone && <p className="mt-1 text-sm text-red-600">{formErrors.parentPhone}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">
                                                Parent/Guardian Email <span className="text-red-500">*</span>
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="parentEmail"
                                                    id="parentEmail"
                                                    required
                                                    value={formData.parentEmail}
                                                    onChange={handleChange}
                                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${formErrors.parentEmail ? 'border-red-500' : ''}`}
                                                />
                                                {formErrors.parentEmail && <p className="mt-1 text-sm text-red-600">{formErrors.parentEmail}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700">
                                                How did you hear about us?
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="howDidYouHear"
                                                    name="howDidYouHear"
                                                    value={formData.howDidYouHear}
                                                    onChange={handleChange}
                                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="friend">Friend/Family</option>
                                                    <option value="social">Social Media</option>
                                                    <option value="search">Search Engine</option>
                                                    <option value="advertisement">Advertisement</option>
                                                    <option value="school">Previous School</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                Additional Information
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                                    placeholder="Any additional information you would like to share..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {submitError && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-red-700">{submitError}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => navigate('/')}
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Submit Application
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>For any inquiries regarding the admission process, please contact:</p>
                    <p className="mt-1">Email: admissions@datforte.edu.ng | Phone: +234 123 456 7890</p>
                </div>
            </div>
        </div>
    );
}

export default AdmissionForm;