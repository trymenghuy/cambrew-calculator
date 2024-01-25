import { XInputProps } from "@/model/input";
import { getInputValue } from "@/util/validateUtil";

const AppTextField = (props: XInputProps) => {
  return (
    <div className=" grid-cols-1 ">
      <label
        htmlFor={props.name}
        className="mt-4 block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="">
        <input
          id={props.name}
          name={props.name}
          type={props.input.type}
          value={props.value}
          autoComplete="email"
          onChange={(e) => {
            props.setFilter({
              [props.name]: getInputValue(
                e.target.value,
                props.input.type,
                props.input.isList
              ),
            });
          }}
          required
          className="after:content-['_↗'] block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
export default AppTextField;
