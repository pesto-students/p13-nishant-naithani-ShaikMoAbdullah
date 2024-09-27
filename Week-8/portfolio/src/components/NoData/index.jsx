import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NoData = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return <div className="w-screen p-8">No data</div>;
};

export default NoData;
