import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}
