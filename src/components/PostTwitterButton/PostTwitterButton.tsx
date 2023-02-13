import React, {FC} from 'react';
import styles from "./PostTwitterButton.module.scss";
import {Button} from "@mui/material";

interface IPostTwitterButton {

}

const PostTwitterButton: FC<IPostTwitterButton> = () => {
    return (
        <div className={styles.PostTwitterButton} data-testid="PostTwitterButton">
            <Button variant="contained" style={{background:'#00acee', fontWeight: 'bold'}}>
                Tweet !
            </Button>
        </div>
    );
}

export default PostTwitterButton;