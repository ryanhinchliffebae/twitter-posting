import "@testing-library/jest-dom/extend-expect";
import PostTwitterInput from "./PostTwitterInput";
import {render, screen} from "@testing-library/react";

test('it should mount', () => {
    render(<PostTwitterInput/>);

    const component = screen.getByTestId(/PostTwitterInput/i);
    expect(component).toBeInTheDocument();
});

export {};