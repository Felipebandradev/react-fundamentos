import estilo from "./Artigo.module.css";

function Artigo() {
  return (
    <article className={`${estilo["card"]}`}>
      <img
        className={`${estilo["img"]}`}
        src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/bltd6497d20332aded8/65653f1794e6c920c4215c35/04NX004T2CV_Leblanc2Coven.jpg"
        alt="leblnc coven"
      />
      <h3>Artigo </h3>
      <p>Conteúdo do artigo ....</p>
    </article>
  );
}

export default Artigo;
