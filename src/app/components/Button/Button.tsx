import Image from "next/image";

export default function Button(props: {
  text: string;
  onClick?: Function;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={props.containerClassName}>
      <button
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
