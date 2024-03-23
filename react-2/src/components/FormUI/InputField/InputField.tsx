import { ReactNode } from "react";

/*

.relative
    input
    icon
*/
export default function InputField(props: {
    icon:ReactNode
  label: string;
  type: string;
  id: string;
  name: string;
}) {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>

      <div className="relative">
        {/* input */}
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          className="mt-1 p-3  border-2 border-gray-500 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
          placeholder={props.label}
        />
        {/* icon */}
        <div
          className="absolute inset-y-0 right-0 pr-3  
                    flex items-center  
                    pointer-events-none"
        >
            {/* className="h-5 w-5 text-gray-400" */}
          { props.icon }
        </div>
      </div>
    </>
  );
}
