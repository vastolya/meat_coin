interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <p className="bg-(--color-dark-black) py-1 px-2 font-medium text-base leading-[148%] tracking-[1%] w-fit rounded-sm">
      {text}
    </p>
  );
};

export default Tag;
