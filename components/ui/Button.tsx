interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="font-extrabold text-base leading-relaxed uppercase px-6 py-4 bg-(--color-accent) rounded-sm cursor-pointer hover:bg-(--color-dark) transition-all duration-300">
      {text}
    </button>
  );
};

export default Button;
