import React from "react";
import { Button } from "@react95/core";

type ShutdownProps = {
  close: () => void;
};

const Shutdown: React.FC<ShutdownProps> = ({ close }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        color: '#fff',
        transform: "translate(-50%, -50%)",
        backgroundColor: "#000",
        border: "2px solid #fff",
        padding: "20px",
        zIndex: 1000,
        fontFamily: "MS Sans Serif, sans-serif",
        width: "300px",
        boxShadow: "4px 4px 0 #fff",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "16px" }}>Shut Down</h2>
      <p style={{ fontSize: "14px" }}>Are you sure you want to shut down?</p>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
        <Button onClick={close}>Close</Button>
        <Button onClick={close}>Shut Down</Button>
      </div>
    </div>
  );
};

export default Shutdown;
