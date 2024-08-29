import "./App.css"

import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import AuthContainer from "./Components/AuthContainer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <AuthContainer />
      <Layout />
      <Home/>
      <ErrorPage />
    </div>
  );
}

export default App;
