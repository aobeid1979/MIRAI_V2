import { BrowserRouter as Router, Route } from 'react-router-dom';

function HomePage() {
  return <h1>Welcome to the Home Page</h1>;
}

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      {/* Add more routes as needed */}
    </Router>
  );
}
