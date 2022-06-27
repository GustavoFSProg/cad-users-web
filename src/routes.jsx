import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
