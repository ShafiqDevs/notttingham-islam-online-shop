import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main/>
        <NextScript>
          <script
            defer
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script defer src="lodash.js"></script>
        </NextScript>
      </body>
    </Html>
  );
}
