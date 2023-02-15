// Monta in questa pagina un componente a tua scelta. Es. /tV-shows

import React from "react";
import { useNavigate } from "react-router-dom";

const TVShows = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div className="text-center">
      <h2>Ti trovi su TVShows!</h2>
    </div>
  );
};

export default TVShows;
