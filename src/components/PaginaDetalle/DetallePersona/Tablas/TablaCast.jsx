import { useNavigate } from "react-router-dom";
import comparar from "../../../../helpers/getComparacion";

const TablaCast = ({ cast }) => {
  const tuvoActuaciones = cast;
  const navigate = useNavigate();

  const arrayFormateado = cast.map((item) => {
    if (item.release_date) {
      const fecha = item.release_date;
      return { ...item, first_air_date: fecha };
    } else {
      return item;
    }
  });

  const arrayOrdenado = arrayFormateado
    .sort((a, b) => comparar(a.first_air_date, b.first_air_date))
    .filter((item) => item.first_air_date);

  const handleClick = (papel) => {
    navigate(`/detalle/${papel.media_type}/${papel.id}`);
  };

  return (
    <>
      {tuvoActuaciones && (
        <>
          <header>
            <h2>interpretacion</h2>
          </header>
          <table>
            <tbody>
              {arrayOrdenado.map((papel, index) => (
                <tr key={index}>
                  <td>
                    <p>{papel?.first_air_date?.split("-")[0]}</p>
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
                        {" "}
                        {papel.title || papel.name}
                      </span>{" "}
                      {papel.character && (
                        <span className="grupo">
                          {papel.episode_count && (
                            <>({papel.episode_count} episodios) </>
                          )}
                          como{" "}
                          <span className="personaje">{papel.character}</span>
                        </span>
                      )}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default TablaCast;
