import React, { useState} from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
            <CartSummary />
            {isAuthenticated?<SignIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
