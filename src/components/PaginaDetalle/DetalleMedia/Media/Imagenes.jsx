const Imagenes = ({ data }) => {
  const { file_path } = data;
  return (
    <div>
      <picture>
        <source
          srcSet={`https://image.tmdb.org/t/p/w200${file_path}`}
          media="(max-width: 580px)"
        />
        <img src={`https://image.tmdb.org/t/p/w500${file_path}`} alt="" />
      </picture>
    </div>
  );
};

export default Imagenes;
