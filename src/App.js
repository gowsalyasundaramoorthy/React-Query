import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient} from 'react-query'
import './App.css'
import {ReactQueryDevtools} from 'react-query/devtools'
import { HomePage } from './Component/HomePage'
import { RQSuperHeroesPage } from './Component/RQSuperHeroesPage'
import { SuperHeroesPage } from './Component/SuperHeroesPage'
import { RQSuperHero } from './Component/RQSuperHero'
import { ParallelQueriesPage } from './Component/ParallelQueriesPage'
import { DynamicParallelPage } from './Component/DynamicParallelPage'
import { DependantQueriesPage } from './Component/DependantQueriesPage'
import { PaginatedQueriesPage } from './Component/PaginatedQueriesPage'
import { InfiniteQueriesPage } from './Component/InfiniteQueriesPage'



const queryClient = new QueryClient()
function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav><ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/super-heroes'>Super Heroes</Link></li>
              <li><Link to='/rq-super-heroes'>RQ Super Heroes</Link></li> 
          </ul></nav>
           <Routes>
              <Route path='/super-heroes' element={<SuperHeroesPage />}></Route> 
              <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}></Route>
              <Route path='/' element={<HomePage />}> </Route>
              <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />}></Route>
              <Route path='/rq-parallel' element={<ParallelQueriesPage />}></Route>
              <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage heroIds={[1, 3]} />}></Route>
            <Route path='/rq-dependant' element={<DependantQueriesPage email='Gowsalya@gmail.com' />}> </Route>
            <Route path='/rq-paginated' element={<PaginatedQueriesPage />}> </Route>
            <Route path='/rq-infinite' element={<InfiniteQueriesPage />}> </Route>
            
          </Routes> 
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    
      </QueryClientProvider>
    
  )
}

export default App