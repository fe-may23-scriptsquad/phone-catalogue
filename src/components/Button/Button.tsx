import './button.scss';

type Props = {
  text: string;
  handler: () => void;
};

export const Button: React.FC<Props> = ({ text, handler }) => {
  return (
    <button className="button" type="button" onClick={handler}>
      {text}
    </button>
  );
};
