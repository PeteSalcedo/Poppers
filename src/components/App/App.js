import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../elements/Header/Header'
import Home from '../Home/Home'
import Movie from '../Movie/Movie'

import NotFound from '../elements/NotFound/Notfound'

const App = () => {
    return(
        <BrowserRouter>
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/:movieId" component={Movie} exact />
                <Route path={NotFound} />
            </Switch>    
         </React.Fragment>
        </BrowserRouter>
      
    )
}
export default App 