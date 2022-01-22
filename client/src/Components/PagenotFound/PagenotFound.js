import React from 'react'
import { NavLink } from 'react-router-dom';
export const PagenotFound = () => {
    return (
        <>
          <div className="PgNotFound">
              <h1 className="PgNotFound-h1">Page Not Found</h1>
             <NavLink to="/" className="Nav-anchr"> <button className="PgNotFound-btn">Go Back</button></NavLink>
              </div>  
        </>
    )
}
