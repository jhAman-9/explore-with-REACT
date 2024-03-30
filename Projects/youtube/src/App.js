import React from 'react'
import { AppContext } from './context/contextApi'

function App() {
    return (
      <AppContext>
        <div className="text-3xl bg-green-600">App</div>
      </AppContext>
    );
}

export default App
