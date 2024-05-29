import Image from "next/image";

export default function Button(props: {
  text: string;
  onClick?: any;
  className?: string;
  containerClassName?: string;
}) {
  const blankFunc = () => {};
  return (
    <div className={props.containerClassName}>
      <button
        onClick={props.onClick || blankFunc}
        className={
          props.className
            ? props.className
            : "bg-secondary-light px-5 py-2 font-sans rounded-lg font-light text-sm border shadow-md hover:shadow-xl"
        }
      >
        {props.text}
      </button>
    </div>
  );
}
