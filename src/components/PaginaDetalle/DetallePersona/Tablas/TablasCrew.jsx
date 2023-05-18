import React from "react";
import comparar from "../../../../helpers/getComparacion";
import { departamentos } from "../../../../Utils/Traducciones";
import { useNavigate } from "react-router-dom";

const TablasCrew = ({ crew }) => {
  const navigate = useNavigate();
  const tuvoParticipacion = crew;

  let arrayFiltrados;

  if (tuvoParticipacion) {
    const arrayDepartamentos = Object.entries(departamentos);

    //separo el array crew en departamentos y le agrego la propiedad fecha y departamento
    const arraysSeparados = arrayDepartamentos.map((objeto) => {
      const nuevoArray = crew.reduce((filtrados, item) => {
        if (item.department === objeto[0]) {
          const fecha = item.release_date || item.first_air_date;
          filtrados.push({ ...item, department: objeto[1], fecha: fecha });
        }
        return filtrados;
      }, []);

      return nuevoArray;
    });

    //quito los arrays vacios
    arrayFiltrados = arraysSeparados.filter((array) => array.length >= 1);
  }

  //ordeno el array por año descendente
  const arrayOrdenado = arrayFiltrados.map((item) => {
    if (item.length > 1) {
      return item.sort((a, b) => comparar(a.fecha, b.fecha));
    } else {
      return item;
    }
  });

  const handleClick = (papel) => {
    navigate(`/detalle/${papel.media_type}/${papel.id}`);
  };

  return (
    <>
      {tuvoParticipacion && (
        <>
          {arrayOrdenado.map((array, index) => (
            <React.Fragment key={index}>
              <header>
                <h2>{array[0].department}</h2>
              </header>
              <table>
                <tbody>
                  {array.map((papel, index) => (
                    <tr key={index}>
                      <td>
                        {papel.fecha ? (
                          <p>{papel?.fecha?.split("-")[0]}</p>
                        ) : (
                          <p> -- </p>
                        )}
                      </td>
                      <td>
                        <span className="separador">-</span>
                      </td>
                      <td className="descripcion">
                        <p>
                          <span
                            className="titulo"
                            onClick={() => {
                              handleClick(papel);
                            }}
                          >
                            {papel.title || papel.name}{" "}
                          </span>
                          <span className="grupo">
                            como <span className="personaje">{papel.job}</span>
                          </span>
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default TablasCrew;
