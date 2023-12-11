import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseItem from "./course-item";

describe("course item module", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{ id: "asdsad", name: "asdfwe", description: "a23gg" }}
        onDelete={onDelete}
      />
    );
    await userEvent.click(screen.getByText("Удалить"));
    expect(onDelete).toHaveBeenCalled();
  });
});
