import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Events from "./components/Events/Events.jsx"
import EventDetails from "./components/Events/EventDetails.jsx"
import NewEvent from "./components/Events/NewEvent.jsx"
import EditEvent from "./components/Events/EditEvent.jsx"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./util/http.js"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/events" />} />
          <Route path="/events" element={<Events />}>
            <Route path="new" element={<NewEvent />} />
          </Route>
          <Route path="/events/:id" element={<EventDetails />}>
            <Route path="edit" element={<EditEvent />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
