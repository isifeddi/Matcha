import React from 'react';
import ls from 'local-storage';
const HomeContainer = () =>{
    
        return (
            <div>
                
                <br/><br/><h1>Home</h1><p>Welcome {ls.get('token') || []}</p>

            </div>
        )
    
}
export default HomeContainer;