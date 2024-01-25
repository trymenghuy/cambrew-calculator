import AppTextField from "@/component/AnyInput";
import { DataType, XFormMapped } from "@/model/input";
import { useTelegram } from "@/telegram/TelegramProvider";
import { getInputValue, removeEmptyValues } from "@/util/validateUtil";
import { xPrint } from "@/util/xPrint";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, webApp } = useTelegram();
  console.log(user);
  const [filter, setFilter] = useState<Record<string, any>>({});
  const [error, setError] = useState<Record<string, any>>({});
  const _setFilter = (data: Record<string, any>) => {
    const combine = {
      ...filter,
      ...data,
    };

    setFilter(removeEmptyValues(combine));
  };
  const map: XFormMapped<any> = {
    id: {
      type: "number",
    },
    todo: {
      type: "number",
      validate: {
        required: true,
        minLength: 3,
      },
    },
    completed: {
      type: "number",
    },
  };
  xPrint(Object.entries(map).length);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="flex items-center">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="aspect-square w-12 mr-4"
          />
          <div>
            <strong>Andrew Alfred</strong>
            <span className="block">Technical advisor</span>
          </div>
        </div>
        <div className="flex h-32 place-content-center">
          <div className="flex-none  h-14">01</div>
          <div className="flex-1  bg-blue-100 flex h-10 justify-center items-stretch">
            02
          </div>
          <div className="flex-1  bg-red-50">03</div>
        </div>
        <div className="flex">
          <div className=" bg-blue-100 text-center justify-center">02</div>
          <div className="grow bg-red-200 text-center justify-center">
            This div will expand to fill the available space.
          </div>
        </div>
        <div className="text-5xl font-extrabold ...">
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>
        <button className="transition w-36 h-10 hover:w-40 hover:h-12 duration-500 text-xs hover:text-lg bg-indigo-500 hover:bg-indigo-300 rounded-full ">
          Button A
        </button>
        <div className="mt-4 sm:mx-auto sm:w-full ">
          <div className="grid space-x-0 space-y-0 md:grid-cols-2 md:space-x-4 md:space-y-4 lg:grid-cols-3 my-4 ">
            {Object.entries(map).map(([key, value]) => {
              const label = value?.title ?? key.toUpperCase();
              const type = value?.type ?? ("text" as DataType);
              const initValue = getInputValue(filter[key], type, value?.isList);
              return (
                <AppTextField
                  key={key}
                  input={value}
                  value={initValue}
                  setFilter={_setFilter}
                  errorText={error[key]}
                  label={label}
                  name={key}
                ></AppTextField>
              );
            })}
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                alert(JSON.stringify(filter));
              }}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
