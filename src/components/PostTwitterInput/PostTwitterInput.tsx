import React, {ChangeEvent, FC} from 'react';
import styles from "./PostTwitterInput.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {Twitter} from "@mui/icons-material";
import {useAppDispatch} from "../../redux/hooks";
import {updateInput} from "../../redux/inputSlice";

interface IPostTwitterInput {

}

const PostTwitterInput: FC<IPostTwitterInput> = () => {

    const dispatch = useAppDispatch();
    function handleChange(event: ChangeEvent) {
        const target = (event.target as HTMLInputElement);
        dispatch(updateInput(target.value))
    }

    return (
        <div className={styles.PostTwitterInput} data-testid="PostTwitterInput">
            <TextField
                id="input-for-twitter-search"
                label="Tweet"
                placeholder="It's AMAZING !!!"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Twitter style={{color: '#00acee'}}></Twitter>
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                onChange={handleChange}
            />
        </div>
    );
}

export default PostTwitterInput;