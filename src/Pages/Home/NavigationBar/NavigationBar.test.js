import { render, fireEvent,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import NavigationBar from "./NavigationBar"

describe("NavigationBar Component", () => {
    it("rendered button", () => {
        render(<NavigationBar/>);
        const logInButton = screen.getByTestId("login-button");
        expect(logInButton).toBeTruthy()
    })
   //this unit testing
})