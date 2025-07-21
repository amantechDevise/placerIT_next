'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ModalForm = ({
  onClose,
  role,
}: {
  onClose: () => void;
  role: { _id: string; name: string };
}) => {
  const [userType, setUserType] = useState<'jobSeeker' | 'employer'>('jobSeeker');
  const [location, setLocation] = useState<LocationType>('US');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    just_confirm: 'jobSeeker',
    company_name: '',
    job_title: '',
    type_of_hire: '',
    number_of_job: '',
    help: '',
    position: 'US',
    status: '1',
    image: ""
  });

  const justConfirmMap = {
    employer: 0,
    jobSeeker: 1,
  };

  const positionMap = {
    US: 0,
    Canada: 1,
    UK: 2,
    Others: 3,
  };
  type LocationType = keyof typeof positionMap;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = new FormData();

    payload.append("It_role_id", role._id);
    payload.append("first_name", formData.first_name);
    payload.append("last_name", formData.last_name);
    payload.append("email", formData.email);
    payload.append("phone", String(Number(formData.phone) || 0));
    payload.append("just_confirm", String(justConfirmMap[userType]));
    payload.append("company_name", formData.company_name);
    payload.append("job_title", formData.job_title);
    payload.append("type_of_hire", String(Number(formData.type_of_hire) || 0));
    payload.append("number_of_job", String(Number(formData.number_of_job) || 0));
    payload.append("help", formData.help);
    payload.append("position", String(positionMap[location]));
    payload.append("status", String(Number(formData.status) || 0));

    if (imageFile) {
      payload.append("image", imageFile);
    }

    try {
      const res = await fetch('/api/hire_roles', {
        method: 'POST',
        body: payload,
      });

      if (res.ok) {
        await Swal.fire({
          title: 'Success!',
          text: 'Form submitted successfully!',
          icon: 'success',
          confirmButtonColor: '#5D3DAF',
        });
        onClose();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to submit the form. Please try again.',
        icon: 'error',
        confirmButtonColor: '#5D3DAF',
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 md:p-8 overflow-auto">
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 md:p-8 relative font-raleway shadow-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-2xl text-white bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] rounded-full hover:opacity-90 transition-opacity"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 mb-8">
          <div className="w-full md:w-[70%]">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-start">
              Hire Top{' '}
              <span className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] bg-clip-text text-transparent font-bold">
                {role?.name}
              </span>
            </h2>
          </div>

          <div className="w-full md:w-[30%] flex justify-center md:justify-end">
            <img
              src="/images/9518008 1.png"
              alt="Top Designers"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block font-bold mb-1 text-start text-[16px]">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              placeholder="Enter First Name"
              className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block font-bold mb-1 text-start text-[16px]">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              placeholder="Enter Last Name"
              className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-bold mb-1 text-start text-[16px]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter Email Address"
              className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-bold mb-1 text-start text-[16px]">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter Phone Number"
              className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
            />
          </div>

          {/* User Type */}
          <div className="md:col-span-2">
            <label className="block font-bold mb-2 text-start text-[16px]">
              Just to confirm, are you:
            </label>
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Employer */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="employer"
                  checked={userType === 'employer'}
                  onChange={() => setUserType('employer')}
                  className="hidden"
                />
                <span className="w-5 h-5 rounded-full border-2 border-[#5D3DAF] flex items-center justify-center">
                  {userType === 'employer' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#5D3DAF] to-[#5598F7]" />
                  )}
                </span>
                An Employer
              </label>

              {/* Job Seeker */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="jobSeeker"
                  checked={userType === 'jobSeeker'}
                  onChange={() => setUserType('jobSeeker')}
                  className="hidden"
                />
                <span className="w-5 h-5 rounded-full border-2 border-[#5D3DAF] flex items-center justify-center">
                  {userType === 'jobSeeker' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#5D3DAF] to-[#5598F7]" />
                  )}
                </span>
                Looking for a job
              </label>
            </div>
          </div>

          {userType === 'employer' && (
            <>
              <div>
                <label htmlFor="company_name" className="block font-bold mb-1 text-start text-[16px]">
                  Company Name
                </label>
                <input
                  id="company_name"
                  type="text"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  placeholder="Enter company name"
                  className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
                />
              </div>

              <div>
                <label htmlFor="job_title" className="block font-bold mb-1 text-start text-[16px]">
                  Job Title
                </label>
                <input
                  id="job_title"
                  type="text"
                  value={formData.job_title}
                  onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
                  placeholder="Enter Job title"
                  className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
                />
              </div>

              <div>
                <label htmlFor="type_of_hire" className="block font-bold mb-1 text-start text-[16px]">
                  Type of Hire
                </label>
                <select
                  id="type_of_hire"
                  value={formData.type_of_hire}
                  onChange={(e) => setFormData({ ...formData, type_of_hire: e.target.value })}
                  className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
                >
                  <option value="">Select Type of Hire</option>
                  <option value="0">Full-time</option>
                  <option value="1">Part-time</option>
                  <option value="2">Contract</option>
                </select>
              </div>

              <div>
                <label htmlFor="number_of_job" className="block font-bold mb-1 text-start text-[16px]">
                  Number of Openings
                </label>
                <input
                  id="number_of_job"
                  type="number"
                  value={formData.number_of_job}
                  onChange={(e) => setFormData({ ...formData, number_of_job: e.target.value })}
                  placeholder="Enter Number of job openings"
                  className="border border-gray-300 p-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="help" className="block font-bold mb-1 text-start text-[16px]">
                  How can we help?
                </label>
                <textarea
                  id="help"
                  value={formData.help}
                  onChange={(e) => setFormData({ ...formData, help: e.target.value })}
                  placeholder="Describe your needs..."
                  className="border border-gray-300 p-2 rounded-xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="image" className="block font-bold mb-1 text-start text-[16px]">
                  Already Have a Job Description? <span className='text-red-500'> (Optional)</span>
                </label>
                <input
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  className="border border-gray-300 p-2 rounded-xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#5598F7]"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-bold mb-1 text-start text-[16px]">
                  Where is the position located?
                </label>
                <div className="flex flex-col gap-4">
                  {(Object.keys(positionMap) as LocationType[]).map((loc) => (
                    <label key={loc} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="location"
                        value={loc}
                        checked={location === loc}
                        onChange={() => setLocation(loc)}
                        className="cursor-pointer"
                      />
                      {loc}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </form>

        <div className="mt-6 text-start">
          <p className="text-[14px] text-gray-500 mb-4">
            PlaceIT will process your personal information in accordance with its{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full md:w-auto bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;