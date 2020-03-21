import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "./Container/Container";
import SelectorDeCategorias from "./Login/SelectorDeCategorias";
import FormRegistro from "./Login/RegistroUsuarios";
import EncontrarServicios from "./Find/EncontrarServicios";
import Tour from "./Tour/Tour";
import PerfilUsuario from "./Usuarios/PerfilUsuario";
import { createBrowserHistory } from "history";
import Servicio from "./Servicios/Servicio";
import { LoginHandler, LogOutHandler, NoMatch } from "./Utils/SessionHandlers";
import CrearServicio from "./Servicios/CrearServicio";
import { getSessionCookie, SessionContext } from "./Utils/SessionManage";

function App() {
  const history = createBrowserHistory();
  const [session, setSession] = useState(getSessionCookie());

  useEffect(() => {
    const newCookie = getSessionCookie();
    if (newCookie.uniqueId !== session.uniqueId) {
      setSession(newCookie);
    }
  }, [session]);

  return (
    <div>
      <SessionContext.Provider value={session}>
        <Router history={history}>
          <Header>
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i>
                </Link>
              </li>
              {session.username === undefined ? (
                <>
                  <li>
                    <Link to="/registro">
                      <i className="fas fa-user-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ingresar">
                      <i className="fas fa-sign-in-alt"></i>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/perfil/" + session.username}>
                      <i className="fas fa-user fa-1x"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/salir"}>
                      <i className="fas fa-sign-out-alt fa-1x"></i>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </Header>

          <Switch>
            <Route exact path="/">
              <Container>
                <Home />
              </Container>
            </Route>

            <Route path="/help">
              <Container>
                <About />
              </Container>
            </Route>

            <Route path="/ingresar" component={LoginHandler} />
            <Route path="/salir" component={LogOutHandler} />

            <Route
              path="/perfil/:userId"
              render={props => (
                <Container>
                  <PerfilUsuario {...props} />
                </Container>
              )}
            />
            <Route
              path="/buscar"
              render={props => (
                <Container>
                  <EncontrarServicios {...props}></EncontrarServicios>
                </Container>
              )}
            />

            <Route
              path="/servicio/crear"
              render={props => (
                <Container>
                  <CrearServicio {...props}></CrearServicio>
                </Container>
              )}
            />

            <Route
              path="/servicio/:id"
              render={props => (
                <Container>
                  <Servicio {...props}></Servicio>
                </Container>
              )}
            />

            <Route path="/registro">
              <Container>
                <SelectorDeCategorias />
              </Container>
            </Route>

            <Route path="/registrar-usuario">
              <Container>
                <FormRegistro type="usuario"></FormRegistro>
              </Container>
            </Route>

            <Route path="/registrar-empleador">
              <Container>
                <FormRegistro type="empleador"></FormRegistro>
              </Container>
            </Route>

            <Route path="/tour">
              <Container>
                <Tour />
              </Container>
            </Route>

            <Route>
              <Container>
                <NoMatch></NoMatch>
              </Container>
            </Route>
          </Switch>
        </Router>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
