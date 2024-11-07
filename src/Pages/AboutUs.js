import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="w-full py-4 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>
      <main className="flex-grow p-8 max-w-4xl mx-auto">
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-2 text-pink">Our Mission</h2>
          <p className="text-lg">
            Our goal is to revolutionize the process of booking and managing sports facilities. The Sports Facility
            Booking Management System (SFBMS) is designed to ensure fair and efficient access for students,
            faculty, and administrators. We aim to create a user-friendly platform that streamlines the reservation
            process and enhances the user experience through innovative features.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-2 text-pink">Who We Are</h2>
          <p className="text-lg">
            We are a dedicated team of developers passionate about bringing seamless solutions to educational
            institutions and sports complexes. With expertise in front-end and back-end development, we prioritize
            creating systems that are reliable, accessible, and secure.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-2 text-pink">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Fair Access:</strong> Ensuring equal opportunity for students and faculty to book sports facilities.</li>
            <li><strong>Efficiency:</strong> Streamlined booking process that saves time and eliminates the hassle of manual scheduling.</li>
            <li><strong>Comprehensive Management:</strong> Administrators can oversee bookings, manage schedules, and generate reports with ease.</li>
            <li><strong>Secure & Reliable:</strong> Data protection is a top priority, ensuring user information and bookings remain safe.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-2 text-pink">Our Vision</h2>
          <p className="text-lg">
            We envision a future where technology bridges the gap between administration and users, making sports
            facility management intuitive and effective. By simplifying this process, we empower institutions to
            focus on enhancing the experience of their students and faculty.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;