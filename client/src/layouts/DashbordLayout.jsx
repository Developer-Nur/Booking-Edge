
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';


const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* sidebar */}
            <Sidebar />

            {/* outlet --> dynamic content */}
            <div className="">
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;