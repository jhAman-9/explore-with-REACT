import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl rounded-lg p-4 flex justify-center">
      User : {userId}
    </div>
  );
}

export default User;
