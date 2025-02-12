interface ButtonProps {
  id: string;
  text: string;
  color: string;
  onPress(): void;
}

export default function AppButton() {
  return <div>AppButton</div>;
}
