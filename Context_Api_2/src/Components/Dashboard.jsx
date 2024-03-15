import React from 'react'
import UserProfile from './UserProfile'

  const DashBoardStyle = {
    width: "100%",
    textAlign: "center",
    background: "antiquewhite",
  };

export default function Dashboard() {
  return (
    <div style={DashBoardStyle}>
      <UserProfile />
    </div>
  );
}
