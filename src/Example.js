//@ts-nocheck
import React from 'react'
import { Editor, useOutput, Renderer, AttachmentToolbar, Toolbar, Container } from '@dooub/editor';

// const markdown = `
// # {orange}(T){red}(e){green}(s){red}(t)

// # Heading 1

// ## Heading 2

// ### Heading 3

// #### heading 4

// Paragraph

// {{Vote|option=1|vote_id=test}}

// > **{orange}(This )is{orange}( ){red}(quote)**

// 1.  **Item 1**

// 2.  ~~Item 2~~

// 3.  Item 3

//     *   *Sub Item 1*

//     *   *Sub Item 2*

//     *   knkkjnjk


// {{Video|width=200&height=200&autoplay=true|id=av618cfef4931a4f858bda293f}}

// {{Image|width=200&height=200|id=ai618cb9ea99b653b84b0b0838,ai618cb9ea99b653b84b0b0839}}
// `;

const markdown = `
# Heading 1

{{Image|width=200&height=200|id=ai618cb9ea99b653b84b0b0838}}

Text
`;

function Example() {
  const { output } = useOutput();

  return (
    <Container>
      <Editor
        data={markdown}
        renderWebToolbar={() => {
          if (!window.isNativeApp) {
            return (
              <div>
                <AttachmentToolbar />
                <Toolbar />
              </div>
            )
          }
        }}
      />
      {!window.isNativeApp && (
        <div>
          <div>
            <h3>Markdown Output</h3>
            <textarea
              style={{
                width: '100%',
                fontFamily: 'Monospace',
                fontSize: 12,
                height: 'auto',
              }}
              rows={12}
              value={output}
              disabled
            />
          </div>
          <h3>Markdown Renderer</h3>
          <Renderer markdown={output} />
        </div>
      )}
    </Container>
  )
}

export default Example;
