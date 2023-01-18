import ReactDOM from "react-dom/client";
import Container from "./Container";
import Editor from "./Editor";
import Provider from "./Provider";

ReactDOM.createRoot(
  document.getElementById("layerhub_editor_widget") as HTMLElement
).render(
  <Provider>
    <Container>
      <Editor />
    </Container>
  </Provider>
);
