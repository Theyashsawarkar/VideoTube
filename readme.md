
# VideoTube 📺

## Introduction

Welcome to the `VideoTube` backend project! 🌐
This project seamlessly integrates the functionalities of YouTube
with the tweeting capabilities of Twitter.
Explore more about this exciting project in the detailed documentation below.

### Important links
<!--toc:start-->

- [Features](#features)
  - [User Management:](#user-management)
  - [Video Management:](#video-management)
  - [Tweet Management:](#tweet-management)
  - [Subscription Management:](#subscription-management)
  - [Playlist Management:](#playlist-management)
  - [Like Management:](#like-management)
  - [Comment Management:](#comment-management)
  - [Dashboard:](#dashboard)
  - [Health Check:](#health-check)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Contributing](#contributing)
- [License](#license)

<!--toc:end-->

## Models

![Models png](./Models.png)

## Features

### User Management

- Registration, login, logout, password reset
- Profile management (avatar, cover image, details)
- Watch history tracking

### Video Management

- Video upload and publishing
- Video search, sorting, and pagination
- Video editing and deletion
- Visibility control (publish/unpublish)

### Tweet Management

- Tweet creation and publishing
- Viewing user tweets
- Updating and deleting tweets

### Subscription Management

- Subscribing to channels
- Viewing subscriber and subscribed channel lists

### Playlist Management

- Creating, updating, and deleting playlists
- Adding and removing videos from playlists
- Viewing user playlists

### Like Management

- Liking and unliking videos, comments, and tweets
- Viewing liked videos

### Comment Management

- Adding, updating, and deleting comments on videos

### Dashboard

- Viewing channel statistics (views, subscribers, videos, likes)
- Accessing uploaded videos

### Health Check

- Endpoint to verify the backend's health

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Cloudinary (must have an account)

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Theyashsawarkar/VideoTube.git
   ```

2. **Install dependencies:**

   ```bash
   cd VideoTube
   npm install
   ```

3. **Set up environment variables:**
   Create a .env in the root of the project and fill in the
   required values using .env.sample file.

4. **Start the server:**

   ```bash
   npm run dev
   ```

## Contributing

If you wish to contribute to this project,
feel free to join in and make it even better!

## License

This project is licensed under
[ChaiAurCode](https://www.youtube.com/@chaiaurcode). 📺
