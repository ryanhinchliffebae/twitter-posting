import React, {FC} from 'react';
import styles from "./PostTwitterButton.module.scss";
import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {publishTweet, updateInput} from "../../redux/inputSlice";

interface IPostTwitterButton {

}

const PostTwitterButton: FC<IPostTwitterButton> = () => {
    const currentInput = useAppSelector((state) => state.input.value );
    const dispatch = useAppDispatch();

    function handleTweetButtonClick() {
        if(currentInput){
            dispatch(publishTweet());
            dispatch(updateInput(''));
        }
    }

    return (
        <div className={styles.PostTwitterButton} data-testid="PostTwitterButton">
            <Button variant="contained"
                    style={{background:'#00acee', fontWeight: 'bold'}}
                    disabled={!currentInput}
                    onClick={handleTweetButtonClick}>
                Tweet !
            </Button>
        </div>
    );
}

export default PostTwitterButton;