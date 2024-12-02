export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <div>header</div>
      <div>{children}</div>
    </div>
  );
}
