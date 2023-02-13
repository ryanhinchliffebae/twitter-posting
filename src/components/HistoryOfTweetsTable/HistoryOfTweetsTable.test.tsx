import "@testing-library/jest-dom/extend-expect";
import HistoryOfTweetsTable from "./HistoryOfTweetsTable";
import {render, screen} from "@testing-library/react";

test('it should mount', () => {
    render(<HistoryOfTweetsTable/>);

    const component = screen.getByTestId(/HistoryOfTweetsTable/i);
    expect(component).toBeInTheDocument();
});

export {};