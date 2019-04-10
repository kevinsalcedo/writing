import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Sidebar, Grid } from "semantic-ui-react";
import PresentPrompt from "./PresentPrompt";
import ViewAllPrompts from "./ViewAllPrompts";
import Entry from "./Entry";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Sidebar.Pushable>
            <Navbar />
            <Sidebar.Pusher>
              <div
                style={{
                  overflow: "hidden",
                  minHeight: "95vh"
                }}
              >
                <Grid container centered verticalAlign='middle'>
                  <Switch>
                    <Route path='/' exact component={PresentPrompt} />
                    <Route path='/all' exact component={ViewAllPrompts} />
                    <Route path='/entry' exact component={Entry} />
                  </Switch>
                </Grid>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
