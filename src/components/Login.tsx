import { Button, Input, Modal, TitleBar } from "@react95/core";
import { Keys } from "@react95/icons";
import { type ComponentType } from "react";
import { useAuth } from "../store/auth";

function Login() {
    const login=useAuth((state)=>state.login);
  return (
    <SafeModal
      dragOptions={{
        disabled: true,
      }}
      title="Welcome to Windows"
      style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -90%)"}}
      titleBarOptions={
        [<TitleBar.Help
          style={{marginBlock:"auto"}}
          key="help"
          onClick={() => {
            alert("User requested h3dçdçbn83209ng!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          }}
        />]
        
      }
    >
      <Modal.Content width="450px" height="160px" boxShadow="$in">
        <div className="flex items-start justify-between gap-2">
          <Keys width={50} height={50}/>
          <div className="flex-col gap-4 flex">
            <p style={{margin:0}}>Type your username and password to log in to your windows</p>
            <div className="flex-col flex gap-4">
              <div className="flex items-center gap-2">
                <p style={{margin:0}}>username:</p>
                <Input defaultValue={"user666"} disabled />
              </div>
              <div className="flex items-center gap-2">
                <p style={{margin:0}}>password:</p>
                <Input defaultValue={"admin"} type="password" disabled />
              </div>
            </div>
          </div>
          <div className="flex-col gap-2 flex">
            <Button style={{width:"100%"}} onClick={()=>login()}>Ok</Button>
            <Button style={{width:"100%"}}>Cancel</Button>
          </div>
        </div>
      </Modal.Content>
    </SafeModal>
  );
}

export default Login;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;