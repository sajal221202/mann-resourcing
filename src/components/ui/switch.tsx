type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Switch(props: SwitchProps) {
  return <input type="checkbox" role="switch" {...props} />;
}

