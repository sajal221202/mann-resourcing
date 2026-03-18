type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" {...props} />;
}

