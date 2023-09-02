

import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar

} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return( 
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />

      <RichTextEditorComponent>
        <EditorData /> 
        <Inject services={[Image, Toolbar, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>
      
  </div>
  // * the editor data can be removed
  )
};

export default Editor;
