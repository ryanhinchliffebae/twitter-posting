import React, {FC} from 'react';
import styles from "./PostTwitterButton.module.scss";
import {Button} from "@mui/material";
import {useAppSelector} from "../../redux/hooks";

interface IPostTwitterButton {

}

const PostTwitterButton: FC<IPostTwitterButton> = () => {
    const currentInput = useAppSelector((state) => state.input.value )

    return (
        <div className={styles.PostTwitterButton} data-testid="PostTwitterButton">
            <Button variant="contained"
                    style={{background:'#00acee', fontWeight: 'bold'}}
                    disabled={!currentInput}>
                Tweet !
            </Button>
        </div>
    );
}

export default PostTwitterButton;