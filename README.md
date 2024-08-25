# Suraksha - Women's Safety Reporting System

<p align="center">
  <img src="https://github.com/user-attachments/assets/f00ae076-82af-4c04-8f48-4081eaec50fd" alt="logo-suraksha">
</p>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Challenges](#challenges)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Overview

**Suraksha** is a community-based platform designed to empower women by providing a safe and anonymous way to report safety concerns. It’s not just limited to educational institutions but extends its reach to communities, allowing users to highlight areas where improvements are needed. The platform aims to create a safer environment through collective awareness and action.

## Features

- **Anonymous Reporting**: Users can report incidents without revealing their identity.
- **Real-time Location Tagging**: Reports can be tagged with precise geolocation data.
- **Community Alerts**: Users are notified about safety concerns in their vicinity.
- **Data Analytics**: Admins can view reports and generate analytics to identify hotspots and recurring issues.

## Tech Stack

- **Frontend**: React.js, Leaflet.js for mapping
- **Backend**: Appwrite
- **Database**: Appwrite
- **Deployment**: Vercel
- **Other Tools**: Git, GitHub, Visual Studio Code

## Installation

### Prerequisites

- npm or Yarn
- Appwrite

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/suraksha.git
   cd suraksha
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following:
   ```bash
   MONGODB_URI=your_mongodb_uri
   PORT=your_preferred_port
   APPWRITE_API_KEY=your_appwrite_api_key
   SOLANA_NETWORK=devnet
   ```

4. **Run the Application**
   ```bash
   npm start
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:your_port`.

## Usage

1. **Reporting an Incident**: 
   - Log in to the platform.
   - Navigate to the "Report Incident" page.
   - Fill in the details and submit.

2. **Viewing Reports**:
   - Admins can access the dashboard to view all reports and analytics.
   - Users can view community alerts in their area.

## Screenshots

### 1. Home Page
![msedge_zphNdmY5Ua](https://github.com/user-attachments/assets/fb1cb915-c877-4f6f-8f94-ea8909f340ab)

### 2. Report Incident Page
![msedge_dTkOIXYERk](https://github.com/user-attachments/assets/58c10413-f9dc-4bb8-bcf9-f71f982b2889)

### 3. Admin Dashboard
![msedge_ruZWQACfaY](https://github.com/user-attachments/assets/d367aaa6-dce3-4046-9b9e-4de834222e9c)

### 4. User Dashboard
![msedge_B0jcJyil6i](https://github.com/user-attachments/assets/d1ceb8b9-e173-4a3b-bd1b-b6a314083af1)

### 4. Project Workflow
![workflow](https://github.com/user-attachments/assets/9e322a64-3b9a-4ff6-b942-c48e46986c89)


## Challenges

- **Real-time Geolocation Handling**: Integrating accurate geolocation for real-time reporting.
- **Scalability**: Designing the system to handle a growing number of users and reports.

## Future Enhancements

- **Mobile App Development**: Extend the platform's accessibility through a mobile app.
- **AI-Powered Risk Assessment**: Implement AI models to predict and alert users about high-risk areas.
- **Integration with Local Authorities**: Collaborate with local law enforcement for quicker response to reports.
- **Blockchain Integration**: Store each report on the blockchain to ensure that no report can be deleted or tampered with, providing a tamper-proof and transparent system.
- **Offline Location Sharing**: Implement offline location-sharing features so users can send their location even without an internet connection.
- **Hardware Panic Button**: Integrate a hardware button, allowing users to seek help without needing to unlock or open their phone.
- **Multilingual Support**: Add support for multiple languages to reach a broader audience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Suraksha** is more than just a platform; it’s a movement towards a safer environment for everyone. Join us in making our communities safer, one report at a time.

