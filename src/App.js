import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Eman Zulfiqar Ghani",
    location: "Islamabad, Pakistan",
    email: "emanzulfiqarghani@gmail.com",
    availability: "Open for work",
    brand:
    "Highly skilled React.js Developer with 2.5 years of experience at AppInSnap, specializing in building responsive, user-friendly web applications. Proficient in React.js, JavaScript, Redux Toolkit, and RESTful API integration. Skilled in creating sleek UIs with Bootstrap, Tailwind CSS, Material UI, and more. I am passionate about performance optimization and continuous learning."
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
