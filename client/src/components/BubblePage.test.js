import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors } from "../utils/getColors";

jest.mock('../utils/getColors');

const mockColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }
]

test("Fetches data and renders the bubbles", async () => {
  mockGetColors.mockResolvedValueOnce(mockColors);
    const {rerender} = render(<BubblePage/>);
    
    await waitFor(() => {
      rerender(<BubblePage/>); 
    });
    screen.debug();
    const colorName = screen.getByText(/bubbles/i);
    expect(colorName).toBeInTheDocument(); 
});
