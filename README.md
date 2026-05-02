# EduMap
EduMap is an interactive website designed to support incoming university students, particularly high school graduates in making informed decisions about their degree and university life.

## Three MVP features

- Course Questionnaire --> Helps students identify suitable courses and connect with peers who share similar academic interests.     
- Job Prospects Tool --> Provides insights into career pathways linked to different degrees, offering clarity on future opportunities.   
- Buddy Program --> Connects students with experienced mentors to ease the transition into university life through ongoing peer-led support.

By combining these features into a cohesive digital experience, EduMap empowers students to confidently navigate their academic and social journey, reducing feelings of uncertainty and isolation while improving first-year retention and engagement.

## Tech Stack

- Frontend: React, Vite, React-Leaflet
- Styling: TailWindCSS
- Routing: React Router
- Deployment: Azure (CI/CD)

## Project Structure

```
EduMap/
├── .github/
│   └── workflows/          # CI/CD deployment workflows
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── booking.js
│   │   └── events.js
│   ├── assets/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Background.jsx
│   │   ├── BuddySystem.jsx
│   │   ├── ContactUs.jsx
│   │   ├── CourseQuestionnaire.jsx
│   │   ├── EventsAndNetworkingMap.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ProfileBackground.jsx
│   │   ├── ProfileSetup.jsx
│   │   ├── Register.jsx
│   │   └── TermsOfService.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Navbar.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Pitch

https://www.youtube.com/watch?v=X8FN5wrJ-vI

## License
This project is licensed under the MIT License.
