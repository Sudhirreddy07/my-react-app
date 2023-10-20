import { withAuthenticator } from 'aws-amplify-react';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Your Amplify App</h1>
    </div>
  );
};

export default withAuthenticator(App, true);
