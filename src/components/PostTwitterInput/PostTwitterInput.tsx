import React, {FC} from 'react';
import styles from "./PostTwitterInput.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {Twitter} from "@mui/icons-material";

interface IPostTwitterInput {

}

const PostTwitterInput: FC<IPostTwitterInput> = () => {
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
            />
        </div>
    );
}

export default PostTwitterInput;