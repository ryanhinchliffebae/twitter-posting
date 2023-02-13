import "@testing-library/jest-dom/extend-expect";
import PostTwitterButton from "./PostTwitterButton";
import {render, screen} from "@testing-library/react";

test('it should mount', () => {
    render(<PostTwitterButton/>);

    const component = screen.getByTestId(/PostTwitterButton/i);
    expect(component).toBeInTheDocument();
});

export {};