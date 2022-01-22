
import { BrowserRouter as Router,Routes , Route   } from 'react-router-dom';

import { PagenotFound } from './Components/PagenotFound/PagenotFound';
import { Mainpage } from './Components/Pages/Mainpage';

 export const App=()=> {
  return (
   <>
   <Router>
    
   <Routes>
     <Route path='/' element={<Mainpage/>}  exact/>
     <Route  element={<PagenotFound/>}  exact/>
     </Routes>
     
   </Router>
 
   </>
  );
}


