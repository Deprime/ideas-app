import { useEffect, useState } from 'react';

import { useDispatch } from "react-redux";
import { LOAD_IDEAS } from './redux/reducers/idea/actions';

// Components
import IdeaList from './components/idea/IdeaList';
import IdeaForm from './components/idea/IdeaForm';

// Styles
import './App.scss';

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') ?? 1;

    dispatch({
      type: LOAD_IDEAS,
      payload: {
        page
      }
    });
    setInitialLoading(false);
  }, []);

  return (
    <div className="app">
      {
        initialLoading
          ? (
            <div>..App loading...</div>
          )
          : (
            <>
              <IdeaForm />
              <IdeaList />
            </>
          )
      }
    </div>
  )
}

export default App
