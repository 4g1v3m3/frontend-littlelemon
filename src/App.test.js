import { render, screen } from "@testing-library/react";
import Reservation from "./content/Reservation";

test('TEST', () => {
    render(<Reservation />);
    const headingElement = screen.getByText("Book now!");
    expect(headingElement).toBeInTheDocument();
})