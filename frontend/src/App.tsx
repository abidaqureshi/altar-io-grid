import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Payments from './pages/payments';
import { GridProvider } from './provider/GridProvider';

function App() {
    return (
        <BrowserRouter>
            <GridProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/payments" element={<Payments />} />
                </Routes>
            </GridProvider>
        </BrowserRouter>
    );
}

export default App;
