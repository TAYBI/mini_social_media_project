import React from "react";
import ReactMarkdown from "react-markdown";
// import example from "../../files/example.md";

const example = `
## head


Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corrupti esse officia ipsa odit ipsam error a at consequatur quas sit, eos velit quod exercitationem nisi ullam, vitae, fugit vero.cia ipsa odit ipsam error a at consequatur quas sit, eos velit quod exercitationem nisi ullam, vitae, fugit vero.cia ipsa odit ipsam error a at consequatur quas sit, eos velit quod exercitationem nisi ullam, vitae, fugit vero.cia ipsa odit ipsam error a at consequatur quas sit, eos velit quod exercitationem nisi ullam, vitae, fugit vero.

~~shdgjsdghsdfj~~


* jfjsdkjhsd
* jfjsdkjhsd
* jfjsdkjhsd
* jfjsdkjhsd


> jsdfkjhsfkjhsdfkjh


| table Head  | table Head  | table Head |
| --- | --- | --- |
| Data | Data | Data |
| Data | Data | Data |
| Data | Data | Data |

`;

const PostDetails = () => {
  return <ReactMarkdown source={example}></ReactMarkdown>;
};

export default PostDetails;
