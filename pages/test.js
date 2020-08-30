export default function TestPage({ stars }) {
  return (
    <div>
      <h1>Test Page</h1>
      {JSON.stringify(stars)}
    </div>
  );
}

TestPage.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
