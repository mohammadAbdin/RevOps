# RevOps

RevOps is a code review platform designed to streamline the process of code evaluation and feedback. Users can submit their GitHub repositories for review by logging in, providing project details, and setting tags. Admins can review projects, leave comments, and manage the review process.

## Purpose

RevOps aims to facilitate the code review process by providing a platform where developers can receive constructive feedback on their projects. The platform enables:

- Easy submission of GitHub repositories for review.
- Seamless viewing and commenting on code directly within the website.
- Clear and actionable feedback from experienced reviewers.
- Visibility of reviewed projects to the broader community for learning and improvement.

## Scope

RevOps is focused on:

- Handling GitHub repositories for review.
- Providing a comprehensive code review experience, including file browsing and inline comments.
- Displaying reviewed projects for public viewing without editing capabilities.

### Limitations

- Review capabilities are restricted to registered admins.
- Public users can only view reviewed projects and cannot interact with the code.

## Features

### User Features

- **Submit Projects**: Users can log in and submit their GitHub repositories for review by providing project details and relevant tags.
- **Notifications**: Users are notified when their projects are reviewed and marked as complete or in review progress.

### Admin Features

- **Review Projects**: Admins can view and comment on submitted repositories, provide feedback, and rate the code.
- **Project Management**: Admins can manage the review process and update the status of projects.

### General Features

- **File Browsing**: The platform allows for browsing repositories as if on GitHub, with the ability to open folders and view files.
- **Public Viewing**: Reviewed projects are available for public viewing to promote learning and sharing.

## Technologies Used

- **Front-end**: React, TypeScript, Tailwind CSS
- **Back-end**: Express, Node.js
- **Database**: MongoDB

## Usage

1. **Submit a Project**:

   - Log in using your GitHub account.
   - Enter your project title, description of any issues, and relevant tags.
   - Submit the repository for review.

2. **Review a Project**:

   - Admins can browse the list of projects pending review.
   - Open the project, browse files, add comments, provide feedback.

3. **View Reviewed Projects**:
   - Browse the list of reviewed projects available to the public.

## Contributing

Contributions are welcome! If you'd like to contribute to RevOps, please fork the repository and create a pull request with your proposed changes.
