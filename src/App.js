import "./App.css"

import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import AuthContainer from "./Components/AuthContainer";

function App() {
  return (
    <div className="App">
      <AuthContainer />
      <Layout />
      <ErrorPage />
    </div>
  );
}

export default App;
