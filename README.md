# Hospital Management System

This is a simple Hospital Management System developed as a first-year project. The goal of this project is to digitize the manual processes of a hospital, making it easier to manage patients, doctors, and OP (Out-Patient) tickets.

## Features

- **Dashboard**: A quick overview of the total registered patients and OP tickets booked for the day.
- **Patient Registration**: A form to register new patients with their details (Name, Age, Gender, Contact, Blood Group, Address).
- **Departments & Doctors**: View all available hospital departments and the doctors assigned to them, including their availability and consultation fees.
- **Book OP Ticket**: A digital ticketing system where registered patients can be assigned to a specific department and doctor for consultation.

## Technology Used

- **Frontend**: React.js (Bootstrapped with Vite)
- **Styling**: Pure CSS (Designed with a clean and basic structure)
- **Routing**: React Router for seamless navigation
- **Data Storage**: Local Storage (Browser memory) is used to simulate a database for storing patient and ticket records.

## How to Run Locally

1. Make sure you have Node.js installed on your computer.
2. Clone or download this repository.
3. Open a terminal in the project folder and install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` to view the application!

## Notes

This version uses Local Storage, so if you clear your browser cache, the registered patients and tickets will be reset.
