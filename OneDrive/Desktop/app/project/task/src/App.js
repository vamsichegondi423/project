import './App.css';
import Loginbutton from'./components/Loginbutton';
import Logout from './components/Logout';
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react';

function App() {
const {isLoading} =useAuth0();
if (isLoading) return <div>Loading....</div>
  return (
  <>
   <Loginbutton/>
   <Logout/>
   <Profile/>
   </>
  );
}

export default App;
