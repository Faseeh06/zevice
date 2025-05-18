# Zevice - IoT Monitoring System

![Zevice Logo](https://i.postimg.cc/m2KRVxfC/image.png)

## Overview

Zevice is a modern IoT monitoring platform for real-time device management and analytics. It provides a comprehensive solution for tracking, managing, and analyzing data from IoT devices with a clean, intuitive user interface.

## Features

- **Real-time Data Monitoring**: Track device status, performance metrics, and alerts in real-time
- **Visual Analytics**: Interactive charts and customizable dashboards for data visualization
- **Secure Access**: Enterprise-grade security with encrypted data transmission
- **Device Management**: Add, remove, and configure devices through the admin console
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices

## Tech Stack

### Frontend
- **React**: UI library for building the user interface
- **React Router**: For navigation and routing
- **CSS3**: Custom styling with CSS variables for theming
- **Responsive Design**: Mobile-first approach with media queries
- **SVG Icons**: Minimalistic icon set for UI elements

### Backend
- **Node.js**: JavaScript runtime for the server
- **Express.js**: Web framework for creating the API
- **MongoDB**: NoSQL database for storing device data
- **WebSockets**: For real-time data updates
- **JWT**: For secure authentication

## Project Structure

```
iot-monitoring-system/
├── client/               # Frontend React application
│   ├── public/           # Static files
│   └── src/              
│       ├── components/   # React components
│       ├── context/      # Context API for state management
│       ├── App.js        # Main application component
│       └── index.js      # Entry point
└── server/               # Backend Node.js application
    ├── controllers/      # Request handlers
    ├── models/           # MongoDB schemas
    ├── routes/           # API routes
    └── index.js          # Server entry point
```

## UI Design Process

The UI was designed with a focus on clarity, minimal aesthetics, and ease of use:

1. **Color Scheme**: Used a clean color palette with accent colors for important elements
2. **Typography**: Modern, readable fonts with careful hierarchy
3. **Layout**: Clear information architecture with intuitive navigation
4. **Components**: Custom-designed cards, buttons, and tables
5. **Navigation**: Minimalistic header with icon-based navigation
6. **Responsive Design**: Adapts to various screen sizes

### Key UI Components

- **Header**: Clean navigation with minimal icons and active state indicators
- **Dashboard**: Real-time device statistics with visual charts
- **Device Table**: Comprehensive list of connected devices with status indicators
- **Admin Console**: Simple form interface for adding new devices


![WhatsApp Image 2025-05-19 at 00 27 27_63924229](https://github.com/user-attachments/assets/4e4a64cb-481c-452b-b46e-461941f80c59)


![WhatsApp Image 2025-05-19 at 00 27 08_0b2ebaf0](https://github.com/user-attachments/assets/bd48b030-149e-4615-893b-705f71cd2715)


![WhatsApp Image 2025-05-19 at 00 36 03_399816b3](https://github.com/user-attachments/assets/090f74a0-746f-472f-a0da-c63d84d4b63c)


## Setting Up the Project

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/iot-monitoring-system.git
cd iot-monitoring-system
```

2. Install dependencies for client and server:
```
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the server directory with necessary environment variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/zevice
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```
# Start server
cd server
npm run dev

# In a new terminal, start client
cd client
npm start
```

## Usage

1. **Landing Page**: Overview of the platform and key features
2. **Dashboard**: Access real-time monitoring of connected devices
3. **Admin Console**: Add new devices to the monitoring system

## Development Highlights

- **Theme System**: Used CSS variables for seamless light/dark theme switching
- **Component Structure**: Modular components for reusability and maintainability
- **Responsive Design**: Mobile-first approach that scales to desktop
- **API Integration**: Clean separation between frontend and backend with RESTful API
- **Real-time Updates**: WebSockets for instant data updates without refreshing

## Future Enhancements

- User authentication and role-based access control
- Advanced filtering and search capabilities
- Notification system for critical events
- Historical data analysis and reporting
- Custom dashboards for different device types

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact: faseehsafdar06@gmail.com 
