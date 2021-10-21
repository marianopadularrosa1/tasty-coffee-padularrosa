export default function Button(props) {
    return (
      <button class="btn btn-primary" type="button" disabled={props.deshabilitarBoton} onClick={() => props.cuandohagoClick()}>
        {props.text}
      </button>
    );
  }
  