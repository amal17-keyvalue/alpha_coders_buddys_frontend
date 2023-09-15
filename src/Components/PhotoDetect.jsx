import Persona from "persona";
import React, { useRef, useState } from "react";

const PhotoDetect = () => {
  const [options, setOptions] = useState({
    templateId: "itmpl_r2JjdqZahcr9948o6KMeQg6y",
  });

  const embeddedClientRef = useRef(null);

  /**
   * Creates a new instance of the Persona client. Note that if this is called
   * when the popup is closed, an entirely new inquiry will be created (as
   * opposed to if you wre to call client.open()).
   */
  const createClient = () => {
    const client = new Persona.Client({
      ...options,
      frameHeight: "800px",
      frameWidth: "500px",
      environment: "sandbox",
      onLoad: (error) => {
        if (error) {
          console.error(
            `Failed with code: ${error.code} and message ${error.message}`
          );
        }

        client.open();
      },
      onStart: (inquiryId) => {
        console.log(`Started inquiry ${inquiryId}`);
      },
      onComplete: (inquiryId) => {
        console.log(`Sending finished inquiry ${inquiryId} to backend`);
        fetch(`/server-handler?inquiry-id=${inquiryId}`);
      },
      onEvent: (name, meta) => {
        switch (name) {
          case "start":
            console.log(`Received event: start`);
            break;
          default:
            console.log(
              `Received event: ${name} with meta: ${JSON.stringify(meta)}`
            );
        }
      },
    });
    embeddedClientRef.current = client;

    window.exit = (force) =>
      client ? client.exit(force) : alert("Initialize client first");
  };

  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column'}}>
      <span style={{ color: '#374151', fontSize: '16px', fontWeight: 'bold'}}>Verify your identity</span>
      <div style={{ height: '150px', width: '100%', border: '2px dashed #d2d7db', marginTop: 20, cursor: 'pointer'}}>
        <div onClick={createClient} style={{ color: '#6b7280', fontSize: '16px', fontWeight: 'semibold', marginTop: 60, textAlign: 'center' }}>Click here to verify</div>
      </div>
    </div>
  );
};

export default PhotoDetect;
