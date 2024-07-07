
## **Project Overview:**

Developed a sophisticated authentication application to showcase proficiency in building a secure and user-friendly authentication system. The primary functionalities of the application will include:

**Front-end:** Utilize React to craft a polished and intuitive user interface.

**Back-end:** Choose either Express.js  to establish a robust server-side application.

**Database:** Implement MongoDB as the database and leverage Prisma as the ORM for seamless data management.

**User Details:** Email, Password, Name, Age, Gender, Profile Picture.

**Image Upload:** Leverage Cloudinary or any other cloud provider for efficient image uploading and retrieval.

**Authentication:** Enable users to effortlessly log in and sign up securely, emphasizing the importance of user data protection.

**OAuth (Social Login):** Integrate OAuth authentication using popular platforms like Facebook or Google to enhance user onboarding.

**Persistent User Session:** Ensure a smooth user experience by implementing persistent user sessions that survive page refreshes.

## **Functionality Details:**

### **Login Page:**

- Enable users to log in using email/password or OAuth (Facebook or Google). Implement both Email/password and OAuth(Facebook or Google) authentications.
- Implement thorough form validation, providing clear error messages.
- Ensure the persistence of user sessions post-login.

### **Signup Page:**

- Facilitate user registration through email/password or OAuth (Facebook or Google).
- Implement robust form validation, guiding users with informative error messages.

### **User Profile Page:**

- Empower users to view and edit their profiles seamlessly.
- Users should only have access to view profiles of other users.
- Include an intuitive feature for uploading and displaying profile pictures.

### Persistence and Session Management:

- Develop mechanisms to maintain user sessions across page refreshes.
- Implement a secure and efficient logout functionality.
- Keep in mind security, make sure our application is secure from XSS and CSRF attacks.
