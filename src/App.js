// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/firestore';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from "./components/homepage/Homepage";
import Recipe from "./components/recipepage/Recipe";
import Recipes from "./components/recipepage/Recipes";

// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollection } from 'react-firebase-hooks/firestore'


// const auth = firebase.auth();
// const firestore = firebase.firestore();

// const [user] = useAuthState(auth);

// firebase.initializeApp({
//   apiKey: "AIzaSyClx0j6niEQrCviM-ulv1wopsWuOTsIyPk",
//   authDomain: "scrambled-4bc51.firebaseapp.com",
//   projectId: "scrambled-4bc51",
//   storageBucket: "scrambled-4bc51.appspot.com",
//   messagingSenderId: "190373308173",
//   appId: "1:190373308173:web:efb20f0264c31a8462f244"
// });
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/user'>
          <Recipes />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   {user ? <Homepage /> : <Recipe />}
    // </div>
  );
}

export default App;
