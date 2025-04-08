# WealthCartel Forex Signals Website

A modern, responsive website for WealthCartel, a premium forex signals provider. This project uses Java for the backend and modern HTML/CSS/JS for the frontend with impressive animations.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using GSAP
- Interactive elements with JavaScript
- Easy-to-update content structure
- Java-based web server for hosting the static content

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Animations**: GSAP (GreenSock Animation Platform), Animate.css
- **Icons**: Font Awesome
- **Backend**: Java HTTP Server
- **Build Tool**: Maven

## Prerequisites

- Java JDK 11 or higher
- Maven 3.6 or higher

## Running Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/wealthcartel.git
   cd wealthcartel
   ```

2. Build the project with Maven:
   ```
   mvn clean package
   ```

3. Run the server:
   ```
   java -jar target/wealthcartel-website-1.0-SNAPSHOT.jar
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Project Structure

```
wealthcartel/
├── css/                # CSS styles
├── js/                 # JavaScript files
├── images/             # Image assets
├── src/                # Java source code
│   └── main/
│       └── java/
│           └── com/
│               └── wealthcartel/
│                   └── WebServer.java
├── index.html          # Main HTML file
├── pom.xml             # Maven configuration
└── README.md           # Project documentation
```

## Customizing Content

- Edit `index.html` to update the main content
- Modify styles in `css/styles.css`
- Update animations in `js/animation.js`
- Add images to the `images/` directory

## Deploying to Render

1. Make sure you have a [Render](https://render.com) account.

2. Create a new Web Service on Render.

3. Connect your GitHub repository.

4. Configure the build settings:
   - Build Command: `mvn clean package`
   - Start Command: `java -jar target/wealthcartel-website-1.0-SNAPSHOT.jar`

5. Set environment variables if needed.

6. Deploy the service.

## Connecting to GitHub

1. Create a new repository on GitHub:
   ```
   https://github.com/yourusername/wealthcartel
   ```

2. Initialize git in your local project:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Connect to your GitHub repository:
   ```
   git remote add origin https://github.com/yourusername/wealthcartel.git
   git branch -M main
   git push -u origin main
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact [your contact information].

---

Created with ❤️ for WealthCartel 