export default function ButtonAgregarCarrito(props) {
    return (
      <button type="button" className="btn btn-primary" disabled={props.deshabilitarBoton} onClick={() => props.onAdd()}>
        {props.text}
      </button>
    );
  }
  