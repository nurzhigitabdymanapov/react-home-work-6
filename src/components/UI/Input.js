import "./Input.css";
export const Input = (props) => {
  return (
    <div>
      <div>
        <label className="label" htmlFor={props.id}>
          {props.children}
        </label>
      </div>
      <input className="input" id={props.id} type={props.type} value={props.value} onChange={props.onChange}/>
    </div>
  );
};
