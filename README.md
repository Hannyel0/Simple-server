# **My Project**

I made this simple server with the intention of learning more about the http protocol and how to serve static files, I learned that the browser makes a request for every single file that it loads even if the .js file is liked to my html index the browser will make another request for the js file too and i have to handle that in my simple server too, I also made it hadle different js files no matter how you name it.

To use it just create a new js file in the problems folder and link it to the index.html in the script tag and the server will handle the requests, no need to touch the server file

---

## **Features**

- Serves static files (HTML, JavaScript) dynamically.
- Uses environment variables for configuration.
- Custom error handling for missing files and server issues.

---

### **Prerequisites**

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### **Installation**

1. Clone the repository:
   ```bash
   git clone
   ```

## **Getting Started**

1. run this command to start the server with nodemon:
   ```bash
   npm run dev
   ```
