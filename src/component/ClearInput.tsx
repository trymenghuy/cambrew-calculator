import { RemoveCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
interface ClearInputInterface {
  show: boolean;
  onChange: VoidFunction;
}
const ClearInput = (props: ClearInputInterface) => {
  if (props.show)
    return (
      <IconButton color="error" onClick={props.onChange} edge="end">
        {<RemoveCircleOutline />}
      </IconButton>
    );
  return null;
};

export default ClearInput;
