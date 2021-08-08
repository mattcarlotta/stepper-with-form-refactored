import * as React from "react";
import { useFormData } from "../context";

export default function FormCompleted() {
  const { steps } = useFormData();
  return (
    <>
      <h2>Thank you for your purchase! 🎉</h2>
      <pre
        style={{
          background: "#ebebeb",
          padding: "5px",
          textAlign: "left",
          overflowX: "scroll",
        }}
      >
        <code>{JSON.stringify(steps, null, 2)}</code>
      </pre>
    </>
  );
}
