import React from "react";
import Loading from "../Loading/Loading";
import ResourceNotFound from "../Errors/ResourceNotFound";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ElementContainer from "../Container/ElementContainer";
import { createContext } from "react";
import StepSystem from "./StepSystem";
import { useContext } from "react";
import { useEffect } from "react";

export const PresupuestoContext = createContext();

const PresupuestarServicio = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [presupuestoValues, setPresupuestoValues] = useState(
    location.state?.presupuesto
  );

  const updateContext = () => {
    // setPresupuestoValues({
    //   ...presupuestoValues,
    //   body: "test to change context",
    // });
  };

  if (loading) {
    return (
      <Loading loadingMessage="Cargando la lista de servicios, por favor espera..."></Loading>
    );
  }
  return (
    <>
      {location.state === undefined ? (
        <ResourceNotFound errorMessage="Estas ingresando sin tener un servicio. Vuelve a buscarlos!"></ResourceNotFound>
      ) : (
        <div className="no-overflow">
          <PresupuestoContext.Provider
            value={{
              presupuestosContextGet: presupuestoValues,
              presupuestosContextUpdate: updateContext,
            }}
          >
            <ElementContainer>
              <StepSystem />
            </ElementContainer>
          </PresupuestoContext.Provider>
        </div>
      )}
    </>
  );
};

export default PresupuestarServicio;
