import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Hello Dashboard</h1>
      {/* Le composant enfant sera affiché ici selon la route */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
