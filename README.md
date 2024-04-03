## 📝 Description

Welcome to the Cabook! 🎉 This project is designed to revolutionize the way users book cabs. Simply input your source and destination, and let the magic happen! 🌟 Our system calculates the shortest time and estimates the cost for your cab ride, ensuring a hassle-free booking experience. 🚕💨

## 📋 Requirements

### 🛠 Basic Functionality

1. *Cab Booking Management*: Handle cab bookings like a pro! 📅
2. *Time Calculation*: Let's find the fastest route for you! 🗺
3. *User Booking*: Book a cab with ease by providing your email, source, and destination. 📧📍
4. *Shortest Time Calculation*: We'll find the quickest way for you! ⏱
5. *Cab Pricing*: Choose from 5 different cabs with unique pricing. No overlaps allowed! 💵🚕
6. *Estimated Cost*: Know the estimated cost upfront! 💰

### 🤔 Assumptions

-There are only 5 cabs with different pricing
- There are predefined locations with predefined routes
- Frontend developed as a Single Page Application (SPA). 🌐

  ### Functions
  -Book Cab and Find the shortest time required to reach the destination
    ![image](https://github.com/Rajlaxmisingh/scaler/assets/96018289/93376ead-0751-4f41-a22e-185da78d8328)
  - The above route is preprogrammed in the system with edges telling us the minimum time to reach from node to node . We have used dijkstra algorithm to find the shortest time and the price according to the    
    cabType selected
  - Confirmation mail will be send to your email,confirming your source and destination and the price with the shortest estimated time
    
    ![WhatsApp Image 2024-04-04 at 03 12 38_ce4458f2](https://github.com/Rajlaxmisingh/scaler/assets/96018289/031a23eb-4a2a-416f-a279-274052f5e98a)
    
  -No rides overlap eachother as we have total of 5 cars , each of its kind , we cannot afford overlaps between two rides of the same cabs

    ![image](https://github.com/Rajlaxmisingh/scaler/assets/96018289/9c429fd1-08d9-40c6-abef-0e841290e290)
  
  - Log of all the bookings is stored in the database
    
    ![image](https://github.com/Rajlaxmisingh/scaler/assets/96018289/d9788081-442b-4c6a-8475-ba24150a6430)


## 💻 Technologies Used

- *Frontend*: React
- *Backend*: NodeJs, ExpressJs
- *Database*: MongoDB
- *Email Service*: NodeJs

## 🚀 Getting Started

### 🛠 Installation

1. Start the backend server:
   ```bash
   git clone https://github.com/yourusername/cab-system.git
   cd backend
   nodemon app.js
2. Visit our deployed website:
   https://scaler-gamma.vercel.app/
   
