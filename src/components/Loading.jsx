import Imgloading from "../assets/loading.svg";

function Loading() {
  return (
    <p style={{ textAlign: "center" }}>
      <img src={Imgloading} alt="carregando..." />
    </p>
  );
}

export default Loading;
