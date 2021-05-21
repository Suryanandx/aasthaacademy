import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const AppRoute = ({component: Component, layout: Layout, ...rest}) => {
 
    return (
        <Route
        {...rest}
            render= {
                props =>  {
                    return (
                         <Layout>
                             <Component {...props}/> 
                        
                        </Layout>
                    )
                }}
                    
            >
            
        </Route>
    )
}

export default AppRoute