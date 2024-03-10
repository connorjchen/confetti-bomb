import { Editor, Frame, Element } from "@craftjs/core";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React from "react";

import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { Video } from "../components/selectors/Video";

const theme = createTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen">
        <NextSeo
          title="Confetti Bomb"
          description="Confetti Bomb is a fun and interactive way to celebrate an accomplishment. Send a confetti bomb to someone today!"
          canonical="https://confettibomb.me"
        />
        <Editor
          resolver={{
            Container,
            Text,
            Button,
            Video,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Container}
                width="1200px"
                height="100vh"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={["40", "40", "40", "40"]}
                custom={{ displayName: "App" }}
              >
                <Element
                  canvas
                  is={Container}
                  width="100%"
                  height="auto"
                  padding={["0", "20", "0", "20"]}
                  custom={{ displayName: "Heading" }}
                >
                  <Text
                    fontSize="23"
                    fontWeight="400"
                    text="Welcome to Cornell Data Science!"
                  ></Text>
                </Element>
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
