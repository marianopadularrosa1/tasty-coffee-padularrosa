export default function Button(props) {
    return (
      <button className="btn btn-primary" type="button"  >
        {props.text}
      </button>
    );
  }
  