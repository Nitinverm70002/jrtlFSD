import React from "react";

function Dashboard({ loading }) {

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Data Loaded Successfully</p>
    </div>
  );
}

export default Dashboard;