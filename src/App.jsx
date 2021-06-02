import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Hats from "./pages/Hats/Hats";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./components/SignIn/SignIn";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import SignUp from "./components/SignUp/SignUp";

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     var unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const useRef = await createUserProfileDocument(userAuth);

//         useRef.onSnapshot((snapshot) => {
//           setCurrentUser({ id: snapshot.id, ...snapshot.data() });
//           //console.log(currentUser);
//         });
//         //
//       }
//         setCurrentUser( userAuth );

//       return () => {
//         unsubscribeFromAuth();
//       };
//     });
//   }, []);

//   return (
//     <div>
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/hats" component={Hats} />
//         <Route path="/shop" component={Shop} />
//         <Route path="/login" component={SignIn} />
//         <Route path="/signup" component={SignUp} />
//       </Switch>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={Hats} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
