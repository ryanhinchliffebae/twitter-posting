import React, {FC} from 'react';
import styles from "./PostTwitterInput.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

interface IPostTwitterInput {

}

const PostTwitterInput: FC<IPostTwitterInput> = () => {
    return (
        <div className={styles.PostTwitterInput} data-testid="PostTwitterInput">
            <TextField
                id="input-for-twitter-search"
                label="Post To Twitter"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            :)
                        </InputAdornment>
                    ),
                }}
                type="search"
                variant="standard"
            />
        </div>
    );
}

export default PostTwitterInput;