import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from './components/Header';
import LoadingTodoContainer from './components/LoadingTodoContainer';

const TodoContainer = React.lazy(() => import('./components/TodoContainer'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-100">
        <Header />
        <main className="container mx-auto py-8">
          <Routes>
            <Route
              path="/todo"
              element={
                <Suspense fallback={<LoadingTodoContainer />}>
                  <TodoContainer />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
