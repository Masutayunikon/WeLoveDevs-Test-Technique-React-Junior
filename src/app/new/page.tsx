'use client'

import React, { useState } from 'react';

export default function CreateNewJob() {
  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    descriptionPreview: ''
  });

  const [error, setError] = useState<string|null>(null);

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await fetch('http://localhost:3000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response:', response.status);

      if (!response.ok) {
        const error = await response.json();
        console.error('Failed to create job:', error);
        setError(error.body.message as string);
        return;
      }

      const result = await response.json();
      console.log('Job created successfully:', result);

    } catch (error) {
      console.error('Error creating job:', error);
      setError('Failed to create job');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Create New Job</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="descriptionPreview" className="block mb-2">
          Description Preview
        </label>
        <input
          type="text"
          id="descriptionPreview"
          name="descriptionPreview"
          className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
          value={formData.descriptionPreview}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Create Job
        </button>
      </form>

      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : null}
    </div>
  );
}

