import { Button, Input, Modal, TitleBar } from "@react95/core";
import { Keys } from "@react95/icons";
import { type ComponentType, useState } from "react";
import { useAuth } from "../store/auth";

function Login() {
  const login = useAuth((state) => state.login);
  const [nickname, setNickname] = useState("");

  const handleLogin = () => {
    const trimmedNick = nickname.trim();
    if (trimmedNick.length < 2) {
      alert("Please enter a valid nickname with at least 2 characters.");
      return;
    }

    login(trimmedNick);
  };

  return (
    <SafeModal
      dragOptions={{ disabled: true }}
      title="Welcome to Windows"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -90%)",
      }}
      titleBarOptions={[
        <TitleBar.Help
          style={{ marginBlock: "auto" }}
          key="help"
          onClick={() => {
            alert("https://www.superbad.com");
          }}
        />,
      ]}
    >
      <Modal.Content width="450px" height="160px" boxShadow="$in">
        <div className="flex items-start justify-between gap-2">
          <Keys width={50} height={50} />
          <div className="flex-col gap-4 flex">
            <p style={{ margin: 0 }}>
              Type your nickname
            </p>
            <div className="flex-col flex gap-4">
              <div className="flex items-center gap-2">
                <p style={{ margin: 0 }}>Nickname:</p>
                <Input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="ex: user123"
                />
              </div>
            </div>
          </div>
          <div className="flex-col gap-2 flex">
            <Button style={{ width: "100%" }} onClick={handleLogin}>
              Ok
            </Button>
            <Button style={{ width: "100%" }} onClick={() => setNickname("")}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Content>
    </SafeModal>
  );
}

export default Login;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;
