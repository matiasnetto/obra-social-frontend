import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AsideMenu from './components/Navegation/AsideMenu';
import { Box } from '@mui/system';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import AppointmentsPage from './pages/AppointmentsPage';
import CartillaPage from './pages/CartillaPage';
import ClinicsPage from './pages/ClinicsPage';
import MyAccountPage from './pages/MyAccountPage';
import CredentialPage from './pages/CredentialPage';
import LoginPage from './pages/LoginPage';
import { AuthContextProvider } from './Context/AuthContext';
import PrivateRoute from './components/Utils/PrivateRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import TestPage from './pages/TestPage';
import NewAppointmentPage from './pages/NewAppointmentPage';
import { colors } from './common/styles/theme';
import { AsidebarContextProvider } from './Context/AsideBarContext';
import DayPage from './pages/DayPage';
import LogoutPage from './pages/LogoutPage';
import RegisterPage from './pages/RegisterPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <AsidebarContextProvider>
            <Box minHeight="100vh" sx={{ display: 'flex', background: colors.lightGrey }}>
              <AsideMenu />
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/day" element={<DayPage />} />
                  <Route path="/appointments" element={<AppointmentsPage />} />
                  <Route path="/cartilla" element={<CartillaPage />} />
                  <Route path="/clinics" element={<ClinicsPage />} />
                  <Route path="/user" element={<MyAccountPage />} />
                  <Route path="/credential" element={<CredentialPage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                  <Route path="/add-appointment" element={<NewAppointmentPage />} />
                </Route>
              </Routes>
            </Box>
          </AsidebarContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
