type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement>;

export default function Progress(props: ProgressProps) {
  return <progress {...props} />;
}

