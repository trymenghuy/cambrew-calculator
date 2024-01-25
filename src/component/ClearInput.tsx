interface ClearInputInterface {
  show: boolean;
  onChange: VoidFunction;
}

const ClearInput = (props: ClearInputInterface) => {
  if (props.show) {
    return (
      <button
        type="button"
        className="text-red-500 p-2 focus:outline-none hover:text-red-600"
        onClick={props.onChange}
      >
        Clear
      </button>
    );
  }

  return null;
};

export default ClearInput;
