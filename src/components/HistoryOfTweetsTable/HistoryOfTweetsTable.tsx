import React, {FC} from 'react';
import styles from "./HistoryOfTweetsTable.module.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppSelector} from "../../redux/hooks";


interface IHistoryOfTweetsTable {

}

const HistoryOfTweetsTable: FC<IHistoryOfTweetsTable> = () => {
    const tweetTable = useAppSelector((state) => state.input.tweetTable );

    return (
        <TableContainer component={Paper} className={styles.HistoryOfTweetsTable}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Tweet</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tweetTable.length === 0 &&
                        <TableRow>
                            <TableCell component="th" scope="row" colSpan={2} className={styles.NoTweetsMessage}>
                               Currently No Tweets
                            </TableCell>
                        </TableRow>
                    }

                    {tweetTable.length !== 0 && tweetTable.map((row) => (
                        <TableRow
                            key={row.tweetId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.tweetId}</TableCell>
                            <TableCell>
                                {row.tweet}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default HistoryOfTweetsTable;